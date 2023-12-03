<?php

$args = [
    'post_id' => get_the_ID(),
    'status' => 'all',
    'comment_type' => 'review'
];
$reviews = get_comments($args);

$ratings = [1 => 0, 2 => 0, 3 => 0, 4 => 0, 5 => 0];
foreach ($reviews as $review) {
    $rating = get_comment_meta($review->comment_ID, 'rating', true);
    if (isset($ratings[$rating])) {
        $ratings[$rating]++;
    }
}

$total_ratings = array_sum($ratings);
$average_rating = 0;
if(!empty($total_ratings) ) {
    $average_rating = array_sum(
        array_map(
            function($value, $key) {
                return $value * $key;
            },
            $ratings,
            array_keys($ratings)
        )
    ) / $total_ratings;
}

$half_index = ceil(count($reviews) / 2);
$first_half_reviews = array_slice($reviews, 0, $half_index);
$second_half_reviews = array_slice($reviews, $half_index);

?>


<div <?php echo wp_kses_data(get_block_wrapper_attributes()); ?>>
    <?php
    get_template_part(
        '/woocommerce/single-product/comments/ratings',
        null,
        array(
            'average_rating' => $average_rating,
            'ratings' => $ratings
        )
    );
    ?>
    <div class="wp-block-glimp-comments__content">
        <?php
        foreach($reviews as $index => $review) {
            if ($index >= 5) {
                break;
            }
            get_template_part(
                '/woocommerce/single-product/comments/comment',
                null,
                array(
                    'review' => $review,
                    'index' => $index
                )
            );
        }
        if (count($reviews) > 5) : ?>
            <button class="wp-block-glimp-comments__content-button">
                Produkt bewerten
            </button>
        <?php endif; ?>
    </div>
    <?php get_template_part('/woocommerce/single-product/comments/comment-popup'); ?>
</div>