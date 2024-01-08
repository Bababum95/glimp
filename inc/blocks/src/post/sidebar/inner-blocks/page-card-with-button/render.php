<?php
$page_id = $attributes['id'];
$page = get_post($page_id);

if (empty($page)) {
    return '';
}

$title = get_the_title($page_id);
$image_url = '';
$placeholder = get_template_directory_uri() . '/assets/images/post-placeholder.jpg';

if ($attributes['view'] === 'thumbnail') {
    $image_url = get_the_post_thumbnail_url($page_id, 'full') ?: $placeholder;
} else {
    $logo_html = get_custom_logo();
    preg_match('/src="([^"]+)"/', $logo_html, $matches);
    $image_url = isset($matches[1]) ? esc_url($matches[1]) : '';
}


$image = '<img
            class="wp-block-glimp-page-card-with-button__image' . ($attributes['view'] === 'logo' ? ' logo' : '') . '"
            src="' . esc_url($image_url) . '"
            alt="' . esc_attr($title) . '"
         />';


echo sprintf(
    '<article class="wp-block-glimp-page-card-with-button">
        <a class="wp-block-glimp-page-card-with-button__link" href="%s" title="%s">
            %s
            <h3 class="wp-block-glimp-page-card-with-button__title">%s</h3>
            <button class="wp-block-glimp-page-card-with-button__button">%s</button>
        </a>
    </article>',
    esc_url(get_permalink($page_id)),
    esc_attr($title),
    $image,
    esc_html($title),
    esc_html($attributes['buttonText'])
);
