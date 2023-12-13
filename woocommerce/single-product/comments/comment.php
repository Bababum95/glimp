<?php

$review = $args['review'];

if(empty($review)) {
    return;
}

$rating = get_comment_meta($review->comment_ID, 'rating', true);
$device = get_comment_meta($review->comment_ID, 'device', true);
$originalDate = $review->comment_date;
$date = new DateTime($originalDate);
$formattedDate = $date->format('d.m.Y');

?>

<div class="wp-block-glimp-comments__comment">
    <div class="wp-block-glimp-comments__comment-header">
        <div class="wp-block-glimp-comments__comment-rating">
            <span class="wp-block-glimp-comments__comment-rating-stars">★ ★ ★ ★ ★</span>
            <span class="wp-block-glimp-comments__comment-rating-stars_active">
                <?php 
                if (!empty($rating)) {
                    for ($i = 0; $i < $rating; $i++) {
                        echo '★ ';
                    }
                }
                ?>
            </span>
        </div>
        <?php
        if($review->comment_approved) {
            echo '<span class="wp-block-glimp-comments__comment-approved">Verifizierte</span>';
        }
        ?>
    </div>
    <p class="wp-block-glimp-comments__comment-author">
        <?php echo $review->comment_author; ?>
    </p>
    <p class="wp-block-glimp-comments__comment-content">
        <?php echo $review->comment_content; ?>
    </p>
    <div class="wp-block-glimp-comments__comment-info">
        <p class="wp-block-glimp-comments__comment-date">
            <?php echo $formattedDate; ?>
        </p>
        <?php if (!empty($device)) : ?>
            <p class="wp-block-glimp-comments__comment-device">
                Über: <?php echo $device; ?>
            </p>
        <?php endif; ?>
    </div>
</div>