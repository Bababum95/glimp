<?php

function get_product_name( $product ) {
    $title = $product->get_name();

    if (!$product->is_type('variation')) {
        return $title;
    }

    $variation_attributes = $product->get_attributes();

    if (count($variation_attributes) < 2) {
        return $title;
    }

    $attributes_names = array();
    foreach ($variation_attributes as $attribute_slug => $term_slugs) {
        if (is_array($term_slugs)) {
            $terms = array();

            foreach ($term_slugs as $term_slug) {
                $term = get_term_by('slug', $term_slug, $attribute_slug);

                if ($term && !is_wp_error($term)) {
                    $terms[] = $term->name;
                }
            }

            if (!empty($terms)) {
                $attributes_names[] = implode(', ', $terms);
            }
        } else {
            $term = get_term_by('slug', $term_slugs, $attribute_slug);

            if ($term && !is_wp_error($term)) {
                $attributes_names[] = $term->name;
            }
        }
    }

    $additional_title = implode(' ', $attributes_names);
    $title .= ' ' . $additional_title;

    return $title;
}