<?php

$page_id = $attributes['id'];
$page = get_post($page_id);
if (empty($page)) {
    return;
}
$title = get_the_title($page_id);
$permalink = get_permalink($page_id);
$featured_image = get_the_post_thumbnail_url($page_id, 'full');
$comment_count = get_comments_number($page_id);
$last_modified = $page->post_modified;
$parsedDate = new DateTime($last_modified);
$formattedDate = $parsedDate->format('d.m.Y');
$direction = $attributes['direction'];
$imageWidth = $direction === 'column' ? '100%' : '50%';

?>

<li
    <?php echo wp_kses_data(get_block_wrapper_attributes()); ?>
    style="--flex-direction: <?php echo $direction; ?>; --image-width: <?php echo $imageWidth; ?>"
>
    <a
        class="wp-block-glimp-page-card__link"
        href="<?php echo $permalink; ?>"
        title="<?php echo $title; ?>"
    >
        <img
            class="wp-block-glimp-page-card__image"
            src="<?php echo $featured_image; ?>"
            alt="<?php echo $title; ?>"
        />
        <div class='wp-block-glimp-page-card__info'>
            <h3 class="wp-block-glimp-page-card__title">
                <?php echo $title; ?>
            </h3>
            <div class="wp-block-glimp-page-card__bottom">
                <div class="wp-block-glimp-page-card__buttons">
                    <?php echo render_page_like_button($page_id); ?>
                    <button class='wp-block-glimp-page-card__comments'>
                        <?php echo $comment_count; ?>
                    </button>
                </div>
                <span class="wp-block-glimp-page-card__date">
                    <?php echo $formattedDate; ?>
                </span>
            </div>
        </div>
    </a>
</li>