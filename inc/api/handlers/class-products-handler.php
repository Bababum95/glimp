<?php

require_once get_template_directory() . '/inc/api/responses/class-json-response.php';

class Products_Handler {
    public function handle($request) {
        $post_body = $request->get_body();
        $data = json_decode($post_body, true);

        $args = array(
            'post_type' => 'product',
            'orderby' => $data['sort'],
            'order' => 'ASC',
            'tax_query' => array(
                'relation' => 'AND',
            )
        );

        if ($data['in_stock']) {
            $args['meta_query'] = array(
                array(
                    'key' => '_stock_status',
                    'value' => 'instock',
                    'compare' => '='
                )
            );
        }

        $response = $this->get_products($args, $data);

        if($data['offset'] == 0) {
            $response['filters'] = $this->get_filters($args, $data['attributes']);
        }

        if (empty($response)) {
            return JSON_Response::error('No products found');
        } else {
            return JSON_Response::send($response);
        }
    }


    private function get_filters($args, $data) {
        $args['posts_per_page'] = -1;
        $args['fields'] = 'ids';
        $args['no_found_rows'] = true;

        if (!empty($data)) {
            foreach ($data as $attribute) {
                if(!empty($attribute['value']) && !$attribute['exclude']) {
                    $args['tax_query'][] = array(
                        'taxonomy' => $attribute['taxonomy'],
                        'field'    => 'term_id',
                        'terms'    => $attribute['value'],
                    );
                }
            }
        }

        $query = new WP_Query($args);
        $product_ids = $query->posts;

        $taxonomy_array = array();

        foreach ($data as $attribute) {
            $taxonomy_array[] = $attribute['taxonomy'];
        }

        $exclude_taxanomies = array();
        if (!empty($data)) {
            foreach ($data as $attribute) {
                if(!empty($attribute['value']) && $attribute['exclude']) {
                    $exclude_taxanomies[] = $attribute['taxonomy'];
                    $args['tax_query'][] = array(
                        'taxonomy' => $attribute['taxonomy'],
                        'field'    => 'term_id',
                        'terms'    => $attribute['value'],
                    );
                }
            }
        }

        $query_exclude = new WP_Query($args);
        $product_exclude_ids = $query_exclude->posts;

        $terms = get_terms(array(
            'taxonomy' => $taxonomy_array,
            'hide_empty' => false,
            'object_ids' => $product_exclude_ids,
        ));
        
        $sorted_terms = array();
        foreach ($terms as $term) {
            $taxonomy = $term->taxonomy;
            if (!isset($sorted_terms[$taxonomy])) {
                $sorted_terms[$taxonomy] = array();
            }
            $sorted_terms[$taxonomy][] = $term;
        }


        $terms = get_terms(array(
            'taxonomy' => $taxonomy_array,
            'hide_empty' => false,
            'object_ids' => $product_ids,
        ));

        foreach ($terms as $term) {
            $taxonomy = $term->taxonomy;
            if (in_array($taxonomy, $exclude_taxanomies)) {
                if (!isset($sorted_terms[$taxonomy])) {
                    $sorted_terms[$taxonomy] = array();
                }
                if(!in_array($term, $sorted_terms[$taxonomy])) {
                    $sorted_terms[$taxonomy][] = $term;
                }
            }
        }

        return $sorted_terms;
    }

    private function get_products($args, $data) {
        $args['posts_per_page'] = '20';
        $args['offset'] = $data['offset'];
        $table = isset($data['table']) ? $data['table'] : null;
        $cards_count = 0;
		$product_count = 0;

        if (!empty($data['attributes'])) {
            foreach ($data['attributes'] as $attribute) {
                if(!empty($attribute['value'])) {
                    $args['tax_query'][] = array(
                        'taxonomy' => $attribute['taxonomy'],
                        'field'    => 'term_id',
                        'terms'    => $attribute['value'],
                    );
                }
            }
        }

        $products = new WP_Query($args);
        $products_data = [];

        if ($products->have_posts()) {
            while ($products->have_posts()) {
                if ($cards_count >= 90) {
                    break;
                }
                $products->the_post();
                $product_id = get_the_ID();
                $product = wc_get_product($product_id);
                $product_count++;

                if ($product) {
                    if ($product->is_type('variable') && $data['variation']) {
                        foreach ($product->get_children() as $child_id) {
                            $child_product = wc_get_product($child_id);
                            if($data['in_stock'] && !$child_product->is_in_stock()) {
                                continue;
                            }
                            $products_data[] = $this->get_product_data($child_product, $table);
                            $cards_count++;
                        }
                    } else {
                        $products_data[] = $this->get_product_data($product, $table);
                        $cards_count++;
                    }
                }
            }

            wp_reset_postdata();

            $output = array(
                'products' => $products_data,
                'product_count' => $product_count,
            );

            return $output;
        } else {
            return [];
        }
    }

    private function get_product_data($product, $table) {
        $id = $product->get_id();
        $parent_id = $product->get_parent_id();
        $is_variation = $product->is_type('variation');
        $product_permalink = $is_variation ? get_permalink($parent_id) : get_permalink($id);
        $nikotinfrei = $is_variation
            ? has_term('einweg-e-zigarette-ohne-nikotin', 'product_tag', $parent_id )
            : has_term('einweg-e-zigarette-ohne-nikotin', 'product_tag', $id );
        $price = $product->get_price();
        $regular_price = $product->get_regular_price();

        if(!empty($regular_price)) {
            $regular_price = number_format($regular_price, 2);
        }
        if(!empty($price)) {
            $price = number_format($price, 2);
        }

        $output = [
            'id' => $id,
            'parent_id' => $parent_id,
            'is_variation' => $is_variation,
            'is_variable' => $product->is_type('variable') || $product->is_type('bundle'),
            'link' => $product_permalink,
            'name' => $product->get_name(),
            'price' => $price,
            'regular_price' => $regular_price,
            'is_in_stock' => $product->is_in_stock(),
            'rating' => $product->get_average_rating(),
            'is_on_sale' => $product->is_on_sale(),
            'nikotinfrei' => $nikotinfrei,
            'rating' => $product->get_average_rating(),
            'image' =>  wp_get_attachment_image_src($product->get_image_id(), 'woocommerce_thumbnail'),
        ];

        if (!empty($table)) {
            $product_attributes = $product->get_attributes();
            foreach ($table as $attribute_taxonomy) {
                $attribute_label = wc_attribute_label($attribute_taxonomy);
                if (isset($product_attributes[$attribute_taxonomy])) {
                    $attribute_details = $product_attributes[$attribute_taxonomy];
                    $value = array();
                    if ($attribute_details->is_taxonomy()) {
                        $terms = wp_get_post_terms($id, $attribute_taxonomy);
                        foreach ($terms as $term) {
                            $value[] = $term->name;
                        }
                    } else {
                        $value = $attribute_details->get_options();
                    }
                    $output['table'][$attribute_label] = $value;
                }
            }
        }

        return $output;
    }
}
