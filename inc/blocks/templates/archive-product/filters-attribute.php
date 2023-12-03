<?php

$attribute_id = $attributes['id'];
$attribute = wc_get_attribute($attribute_id);
$type = $attributes['type'];

if (empty($attribute)) {
    return;
}

$attribute_taxonomy_name = $attribute->slug;
$queried_object = get_queried_object();
$terms = array();

if ($queried_object instanceof WP_Term) {
    $taxonomy = $queried_object->taxonomy;
    $term_id = $queried_object->term_id;

    $args = array(
        'post_type' => 'product',
        'post_status' => 'publish',
        'posts_per_page' => -1,
        'fields' => 'ids',
        'tax_query' => array(
            array(
                'taxonomy' => $taxonomy,
                'field' => 'term_id',
                'terms' => $term_id,
            ),
        ),
        'no_found_rows' => true,
    );

    $query = new WP_Query($args);
    $product_ids = $query->posts;

    $terms = get_terms(array(
        'taxonomy' => $attribute_taxonomy_name,
        'hide_empty' => false,
        'object_ids' => $product_ids,
    ));
} else {
    $terms = get_terms($attribute_taxonomy_name);
}

if($type == 'dropdown') {
    echo '<select data-slug="' . $attribute_taxonomy_name . '" class="wp-block-glimp-filters-attribute__dropdown">';
    echo '<option value="0">' . $attributes['placeholder'] . '</option>';
    foreach ($terms as $term) {
        echo '<option value="' . $term->term_id . '">' . $term->name . '</option>';
    }
    echo '</select>';
}

if($type == 'buttons') {
    echo '<div class="wp-block-glimp-filters-attribute__buttons" data-slug="' . $attribute_taxonomy_name . '">';
    foreach ($terms as $term) {
        echo '<button class="wp-block-glimp-filters-attribute__button" data-id="' . $term->term_id . '">' . $term->name . '</button>';
    }
    echo '</div>';
}
