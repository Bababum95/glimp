<?php

require_once get_template_directory() . '/inc/api/responses/class-json-response.php';

class Get_Reviews_Handler {
    public function handle($request) {
        $post_body = $request->get_body();
        $data = json_decode($post_body, true);
        $product_id = $data['product_id'];
        $args = array(
            'post_id' => $product_id,
            'number'  => 0,
            'status'  => 'all',
        );
    
        $comments_query = new WP_Comment_Query;
        $reviews = $comments_query->query($args);

        $response_data = array_map(function ($review) {
            $originalDate = $review->comment_date;
            $date = new DateTime($originalDate);
            $formattedDate = $date->format('d.m.Y');
            return array(
                'author'  => $review->comment_author,
                'content' => $review->comment_content,
                'date'    => $formattedDate,
                'rating'  => get_comment_meta($review->comment_ID, 'rating', true),
                'device'  => get_comment_meta($review->comment_ID, 'device', true),
                'status'  => $review->comment_approved
            );
        }, $reviews);

        if ($response_data) {
            return JSON_Response::send($response_data);
        } else {
            return JSON_Response::error('Something went wrong');
        }
    }
}
