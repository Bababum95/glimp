<?php

function render_page_card($id, $direction = 'row') {
    $page = get_post($id);

    if (empty($page)) {
        return;
    }

    $title = get_the_title($id);
    $last_modified = $page->post_modified;
    $parsedDate = new DateTime($last_modified);
    $formattedDate = $parsedDate->format('d.m.Y');
    $imageWidth = $direction === 'column' ? '100%' : '50%';
    $image_url = get_the_post_thumbnail_url($id, 'full');
    $placeholder = get_template_directory_uri() . '/assets/images/post-placeholder.jpg';
    if (empty($image_url)) {
        $image_url = $placeholder;
    }

    return sprintf(
        '<article class="wp-block-glimp-page-card" style="--flex-direction: %s; --image-width: %s;">
            <a class="wp-block-glimp-page-card__link" href="%s" title="%s">
                <img class="wp-block-glimp-page-card__image" src="%s" alt="%s" onerror="this.onerror=null;this.src=\'%s\';" />
                <div class="wp-block-glimp-page-card__info">
                    <h3 class="wp-block-glimp-page-card__title">%s</h3>
                    <div class="wp-block-glimp-page-card__bottom">
                        <div class="wp-block-glimp-page-card__buttons">%s<button class="wp-block-glimp-page-card__comments" data-href="%s#reviews">%s</button></div>
                        <span class="wp-block-glimp-page-card__date">%s</span>
                    </div>
                </div>
            </a>
        </article>',
        esc_attr($direction),
        esc_attr($imageWidth),
        esc_url(get_permalink($id)),
        esc_attr($title),
        esc_url($image_url),
        esc_attr($title),
        esc_url($placeholder),
        esc_html($title),
        render_page_like_button($id),
        esc_url(get_permalink($id)),
        esc_html(get_comments_number($id)),
        esc_html($formattedDate)
    );
}
