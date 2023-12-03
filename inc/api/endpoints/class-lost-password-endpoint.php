<?php
class Lost_Password_Endpoint extends API_Endpoint {
    public function __construct() {
        parent::__construct('Lost_Password', 'lost-password', 'POST');
    }
}
