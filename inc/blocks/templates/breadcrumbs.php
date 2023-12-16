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
        $breadcrumbs .= '<li class="wp-block-glimp-breadcrumbs__item">
                            <a href="' . esc_url(get_permalink($parent_id)) . '">'
                                . esc_html(get_the_title($parent_id))
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
