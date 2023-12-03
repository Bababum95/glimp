<?php

require_once get_template_directory() . '/inc/api/endpoints/class-api-endpoint.php';

class Add_Review_Endpoint extends API_Endpoint {
    public function __construct() {
        parent::__construct('Add_Review', 'add-review', 'POST');
    }
}
