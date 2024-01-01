<?php

$parent_ids = get_post_ancestors(get_the_ID());
$parent_ids = array_reverse($parent_ids);

$breadcrumbs = '<nav ' . get_block_wrapper_attributes() . ' aria-label="Breadcrumbs">
                    <ol class="wp-block-glimp-breadcrumbs__list">';
$breadcrumbs .= '<li class="wp-block-glimp-breadcrumbs__item">
                    <a href="' . esc_url(home_url('/')) . '">glimp.de</a>
                </li>';

if($attributes['has']) {
    $breadcrumbs .= $content;
}

if ($parent_ids) {
    foreach ($parent_ids as $parent_id) {
        $post_slug = get_post_field('post_name', $parent_id);
        $post_slug_with_spaces = str_replace('-', ' ', $post_slug);
        $post_slug = str_replace(' e zigaretten', ' E-Zigaretten', $post_slug_with_spaces);

        $breadcrumbs .= '<li class="wp-block-glimp-breadcrumbs__item wp-block-glimp-breadcrumbs__item_parent">
                            <a href="' . esc_url(get_permalink($parent_id)) . '">'
                                . esc_html($post_slug)
                            . '</a>
                        </li>';
    }
}

if (is_home()) {
    $breadcrumbs .= '<li class="wp-block-glimp-breadcrumbs__item">
                        <span class="current">Blog</span>
                    </li>';
} else {
    $breadcrumbs .= '<li class="wp-block-glimp-breadcrumbs__item">
                        <span class="current">' . esc_html(get_the_title()) . '</span>
                    </li>';
}


$breadcrumbs .= '</ol></nav>';


echo $breadcrumbs;
