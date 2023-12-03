<?php

$args = array(
    'post_type' => 'product',
    'posts_per_page' => $attributes['count'],
    'orderby' => $attributes['sort'],
    'order' => 'ASC',
    'tax_query' => array(
        'relation' => 'AND',
    )
);

if (!empty($attributes['category'])) {
    $args['tax_query'][] = array(
        'taxonomy' => 'product_cat',
        'field'    => 'term_id',
        'terms'    => array($attributes['category'])
    );
}

if (!empty($attributes['tag'])) {
    $args['tax_query'][] = array(
        'taxonomy' => 'product_tag',
        'field'    => 'term_id',
        'terms'    => array($attributes['tag'])
    );
}

$products = new WP_Query($args);

$product_ids = array();

if ($products->have_posts()) {
    while ($products->have_posts()) {
        $products->the_post();
        $product_id = get_the_ID();
        $product = wc_get_product($product_id);
        if ($product->is_type('variable')) {
            $children_ids = $product->get_children();
            $product_ids = array_merge($product_ids, $children_ids);
        } else {
            $product_ids[] = $product_id;
        }
    }
}
if ( !empty($product_ids) ) {
    $product_ids = array_unique($product_ids);
    
    if($attributes['sort'] == 'rand') {
        shuffle($product_ids);
    }

    if( $attributes['count'] > 0 ) {
        $product_ids = array_slice($product_ids, 0, $attributes['count']);
    }

    foreach ($product_ids as $product_id) {
        render_product_card($product_id);
    }
}

wp_reset_postdata();
