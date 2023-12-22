<?php

$args = [
    'post_id' => get_the_ID(),
    'status' => 'approve',
    'comment_type' => 'review'
];
$reviews = get_comments($args);
$content = '<div ' . wp_kses_post(get_block_wrapper_attributes()) . '>';

ob_start();
get_template_part('/woocommerce/single-product/comments/comment-popup');
$content .= ob_get_clean();

if ($reviews) {
    $ratings = array_fill(1, 5, 0);
    foreach ($reviews as $review) {
        $rating = get_comment_meta($review->comment_ID, 'rating', true);
        if (array_key_exists($rating, $ratings)) {
            $ratings[$rating]++;
        }
    }

    $total_ratings = array_sum($ratings);
    $average_rating = $total_ratings ? array_sum(array_map(
        function($value, $key) { return $value * $key; },
        $ratings,
        array_keys($ratings)
    )) / $total_ratings : 0;

    ob_start();
    get_template_part(
        '/woocommerce/single-product/comments/ratings',
        null,
        array('average_rating' => $average_rating, 'ratings' => $ratings)
    );
    $content .= ob_get_clean();

    $content .= '<div class="wp-block-glimp-comments__content">';
    foreach($reviews as $index => $review) {
        if ($index >= 5) break;
        ob_start();
        get_template_part(
            '/woocommerce/single-product/comments/comment',
            null,
            array('review' => $review, 'index' => $index)
        );
        $content .= ob_get_clean();
    }
    if (count($reviews) > 5) {
        $content .= '<button class="wp-block-glimp-comments__content-button">Produkt bewerten</button>';
    }
    $content .= '</div>';
} else {
    ob_start();
    get_template_part('/woocommerce/single-product/comments/no-comments');
    $content .= ob_get_clean();
}

$content .= '</div>';
echo $content;

?>
