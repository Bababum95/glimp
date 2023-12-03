<?php

require_once get_template_directory() . '/inc/api/responses/class-json-response.php';

class Add_Review_Handler {
    public function handle($request) {
        $post_body = $request->get_body();
        $data = json_decode($post_body, true);
        $comment_id = wp_insert_comment($data);

        if ($comment_id) {
            return JSON_Response::send('Review added successfully');
        } else {
            return JSON_Response::error('Something went wrong');
        }
    }
}
