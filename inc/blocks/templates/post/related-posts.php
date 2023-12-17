<?php

$post_id = get_the_ID();
$ignore_pages = array($post_id, 258930);
$current_post = get_post($post_id);
$current_post_content = $current_post->post_content;

$related_args = array(
    'post__not_in' => $ignore_pages,
    'posts_per_page' => 8,
    's' => $current_post_content, 
    'orderby' => 'relevance',
    'post_type' => array('post', 'page'),
);

$related_query = new WP_Query($related_args);

if ($related_query->have_posts()) {
    while ($related_query->have_posts()) {
        $related_query->the_post();
        echo render_page_card(get_the_ID(), 'column');
    }
    wp_reset_postdata();
}