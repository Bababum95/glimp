<?php

require_once get_template_directory() . '/inc/api/responses/class-json-response.php';

class Login_Handler {
    public function handle($request) {
        $username = sanitize_text_field($request->get_param('username'));
        $password = sanitize_text_field($request->get_param('password'));
        $remember = $request->get_param('remember') === 'on';

        $user = wp_signon([
            'user_login'    => $username,
            'user_password' => $password,
            'remember'      => $remember,
        ], false);
        
        if (is_wp_error($user)) {
            return JSON_Response::error($user->get_error_message(), 403);
        }

        return JSON_Response::success('Login Successful');
    }
}
