<?php

require_once get_template_directory() . '/inc/api/endpoints/class-api-endpoint.php';

class Products_Endpoint extends API_Endpoint {
    public function __construct() {
        parent::__construct('Products', 'products', 'POST');
    }
}
