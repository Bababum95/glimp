<?php

class API_Endpoint {

    protected $handler_class;
    protected $route;
    protected $method;

    public function __construct($handler_class, $route, $method = 'POST') {
        $this->handler_class = $handler_class;
        $this->route = $route;
        $this->method = $method;
        $this->register_route();
        $this->load_files();
    }

    private function load_files() {
        $filename = 'class-' . strtolower($this->route) . '-handler.php';
        require_once get_template_directory() . "/inc/api/handlers/{$filename}";
    }
    

    private function register_route() {
        register_rest_route('glimp-api/v1', "/{$this->route}/", array(
            'methods'  => $this->method,
            'callback' => [$this, 'handle_request'],
        ));
    }

    public function handle_request(WP_REST_Request $request) {
        $handler_class_name = $this->handler_class . '_Handler';
        $handler = new $handler_class_name();

        return $handler->handle($request);
    }
}
