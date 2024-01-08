<?php

$script_handles = array();

function glimp_enqueue_dynamic_script($css_name, $js_name, $base_path='/dist/assets/') {
    global $script_handles;
    $directory_path = get_template_directory() . $base_path;

    if(!empty($css_name)) {
        $css_file = glob($directory_path . $css_name . '*.css')[0];
        if ($css_file) {
            $dynamic_filename = basename($css_file);
            wp_enqueue_style(
                $dynamic_filename,
                get_template_directory_uri() . $base_path . $dynamic_filename,
                array(),
                (WP_DEBUG ? time() : wp_get_theme()->get('Version'))
            );
        }
    }

    if(!empty($js_name)) {
        $js_file = glob($directory_path . $js_name . '*.js')[0];
        if ($js_file) {
            $dynamic_filename = basename($js_file);
            array_push($script_handles, $dynamic_filename);
            wp_enqueue_script(
                $dynamic_filename,
                get_template_directory_uri() . $base_path . $dynamic_filename,
                array(),
                (WP_DEBUG ? time() : wp_get_theme()->get('Version')),
                true
            );
        }
    }

}

/* Enqueue scripts */
if (!function_exists('glimp_enqueue_scripts')) :
    function glimp_enqueue_scripts() {
        // locale dependent
        // $about_page_ids = array(3314, 3747);
        // $marken_page_id = 3756;
        // hopeful-perlman
        $about_page_ids = array(227562, 246618);
        $marken_page_id = 104619;


        wp_enqueue_style('glimp-style', get_stylesheet_uri(), array(), (WP_DEBUG ? time() : wp_get_theme()->get('Version')));
        glimp_enqueue_dynamic_script('styles-', 'main-');

        if ( function_exists('is_product') && is_product() ) {
            glimp_enqueue_dynamic_script('singleProductStyles-', 'singleProduct-');
        }

        if (is_woocommerce() && (is_product_category() || is_product_tag() || is_shop())) {
            glimp_enqueue_dynamic_script('archiveProductStyles-', 'archiveProduct-');
        }

        if (is_account_page()) {
            glimp_enqueue_dynamic_script('accountPageStyles-', 'accountPage-');
        }

        if (!is_user_logged_in()) {
            glimp_enqueue_dynamic_script('loginFormStyles-', 'loginForm-');
        }

        if ( is_front_page() ) {
            glimp_enqueue_dynamic_script('frontPageStyles-', 'frontPage-');
        }

        foreach ($about_page_ids as $page_id) {
            if (is_page($page_id)) {
                glimp_enqueue_dynamic_script('aboutStyles-', 'about-');
            }
        }

        if($marken_page_id) {
            glimp_enqueue_dynamic_script('markenStyles-', 'marken-');
        }

        if (is_page_template('blog')) {
            glimp_enqueue_dynamic_script('blogPageStyle-', 'blogPage-');
        }
        
        if (is_404()) {
            glimp_enqueue_dynamic_script('notFoundStyles-', 'notFound-');
        }

        if (is_home()) {
            glimp_enqueue_dynamic_script('homeStyles-', 'home-');
        }

        if (is_cart()) {
            glimp_enqueue_dynamic_script('cartStyles-', 'cart-');
        }
    }

endif;
add_action('wp_enqueue_scripts', 'glimp_enqueue_scripts');


function add_module_type_attribute($tag, $handle, $src) {
    global $script_handles;

    foreach ($script_handles as $script_handle) {
        if (strpos($handle, $script_handle) !== false) {
            return '<script type="module" src="' . esc_url($src) . '"></script>';
        }
    }

    return $tag;
}
add_filter('script_loader_tag', 'add_module_type_attribute', 10, 3);
