<?php

class API_Init {

    public function __construct() {
        $this->load_files();
        $this->register_hooks();
    }

    private function load_files() {
        $files = [
            '/endpoints/class-login-endpoint.php',
            '/endpoints/class-register-endpoint.php',
            '/endpoints/class-lost-password-endpoint.php',
            '/endpoints/class-products-endpoint.php',
            '/endpoints/class-add-review-endpoint.php',
            '/endpoints/class-get-reviews-endpoint.php',
        ];

        foreach ($files as $file) {
            require_once __DIR__ . $file;
        }
    }

    private function register_hooks() {
        add_action('rest_api_init', [$this, 'register_endpoints']);
    }

    public function register_endpoints() {
        new Login_Endpoint();
        new Register_Endpoint();
        new Lost_Password_Endpoint();
        new Products_Endpoint();
        new Add_Review_Endpoint();
        new Get_Reviews_Endpoint();
    }
}

new API_Init();
