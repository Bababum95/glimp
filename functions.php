<?php

if (!function_exists('glimp_theme_support')) :
    /**
     * Sets up theme defaults and registers support for various WordPress features.
     * @since Glimp b2b
     * @return void
     */
    function glimp_theme_support() {
        add_theme_support('wp-block-styles');
        add_editor_style('style.css');
        load_theme_textdomain('glimp', get_template_directory() . '/languages');
    }

endif;
add_action('after_setup_theme', 'glimp_theme_support');

require_once get_template_directory() . '/inc/enqueue-scripts.php';
require_once get_template_directory() . '/inc/svg-support.php';
require_once get_template_directory() . '/inc/blocks/register.php';
require_once get_template_directory() . '/inc/woocommerce/index.php';
require_once get_template_directory() . '/inc/ajax/index.php';
require_once get_template_directory() . '/inc/transfer-favorites-on-login.php';
require_once get_template_directory() . '/inc/api/class-api-init.php';
require_once get_template_directory() . '/inc/newsletters-signup.php';
require_once get_template_directory() . '/inc/comment-form.php';
require_once get_template_directory() . '/inc/disable-rel-links.php';
require_once get_template_directory() . '/inc/page-taxonomy.php';

//old scripts needed changes in the future
require_once get_template_directory() . '/inc/old-functions.php';
