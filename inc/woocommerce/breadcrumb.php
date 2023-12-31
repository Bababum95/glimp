<?php

function change_breadcrumb_home($defaults) {
    $defaults['home'] = 'glimp.de';
    return $defaults;
}

add_filter('woocommerce_breadcrumb_defaults', 'change_breadcrumb_home');

function custom_wc_breadcrumb( $crumbs ) {
    if (is_product()) {
        global $post;
        $terms = get_the_terms($post->ID, 'product_cat');

        if ($terms && !is_wp_error($terms)) {
            $term = reset($terms);
            $short_name = get_field('short_name', $term);
            if ($short_name) {
                foreach ($crumbs as &$crumb) {
                    if ($crumb[1] === get_term_link($term)) {
                        $crumb[0] = $short_name;
                    }
                }
            }

            $parents = get_ancestors($term->term_id, 'product_cat');
            $parents = array_reverse($parents);

            foreach ($parents as $parent_id) {
                $parent_term = get_term_by('id', $parent_id, 'product_cat');
                $short_name = get_field('short_name', $parent_term);

                if ($short_name) {
                    foreach ($crumbs as &$crumb) {
                        if ($crumb[1] === get_term_link($parent_term)) {
                            $crumb[0] = $short_name;
                        }
                    }
                }
            }
        }
    }

    if (is_woocommerce() && (is_product_category() || is_product_tag() || is_shop())) {
        global $wp_query;
        $current_term = $wp_query->get_queried_object();

        $short_name = get_field('short_name', $current_term);

        if ($short_name) {
            $crumbs[count($crumbs) - 1][0] = $short_name;
        }

        $parents = get_ancestors($current_term->term_id, 'product_cat');
        $parents = array_reverse($parents);

        foreach ($parents as $parent_id) {
            $parent_term = get_term_by('id', $parent_id, 'product_cat');
            $short_name = get_field('short_name', $parent_term);

            if ($short_name) {
                foreach ($crumbs as &$crumb) {
                    if ($crumb[1] === get_term_link($parent_term)) {
                        $crumb[0] = $short_name;
                    }
                }
            }
        }
    }

    return $crumbs;
}
add_filter( 'woocommerce_get_breadcrumb', 'custom_wc_breadcrumb' );
