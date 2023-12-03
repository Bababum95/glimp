<?php

class JSON_Response {

    public static function send($data, $status = 200) {
        return new WP_REST_Response($data, $status);
    }

    public static function error($message, $status = 400) {
        return new WP_REST_Response(['error' => $message], $status);
    }

    public static function success($message, $data = null, $status = 200) {
        $response = ['message' => $message];
        if (!is_null($data)) {
            $response['data'] = $data;
        }
        return new WP_REST_Response($response, $status);
    }
}
