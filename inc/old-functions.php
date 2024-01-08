<?php

/* 1. Removing capital P dangit */
remove_filter( 'the_title', 'capital_P_dangit', 11 );
remove_filter( 'the_content', 'capital_P_dangit', 11 );
remove_filter( 'comment_text', 'capital_P_dangit', 31 );

/* 3. Order total more 20 euro */

add_action( 'woocommerce_check_cart_items', 'required_min_cart_subtotal_amount' );
function required_min_cart_subtotal_amount() {
	// Only run in the Cart or Checkout pages
	if ( is_cart() || is_checkout() ) {

		// HERE Set minimum cart total amount
		$min_total = 20;

		// Total (before taxes and shipping charges)
		$total = WC()->cart->subtotal;

		// Add an error notice is cart total is less than the minimum required
		if ( $total <= $min_total ) {
			// Display an error message
			wc_add_notice( '<strong>' . sprintf( __( 'Der Mindestbestellwert beträgt %s. Bitte fülle deinen Warenkorb um fortzufahren.' ), wc_price( $min_total ) ) . '<strong>', 'error' );
		}
	}
}


/* 5. Edit order on all statuses */

add_filter( 'wc_order_is_editable', '__return_true' );

/* 6. Send email germanized */

add_filter( 'woocommerce_gzd_instant_order_confirmation', 'my_child_disable_instant_order_confirmation', 1, 10 );

function my_child_disable_instant_order_confirmation( $disable ) {
	return false;
}

function redirect_uppercase_to_lowercase() {
	$url = $_SERVER['REQUEST_URI'];
	if ( $url !== strtolower( $url ) ) {
		if ( preg_match( '/^\/(kategorie|produkt|blog|tag)\//i', $url ) ) {
			$url = strtolower( $url );
			header( 'HTTP/1.1 301 Moved Permanently' );
			header( "Location: $url" );
			exit();
		}
	}
}
add_action( 'init', 'redirect_uppercase_to_lowercase' );

// function checks if the URL ends with a slash and contains "/produkt/", and if so, removes the trailing slash
function remove_trailing_slash_on_product_pages( $url ) {
	if ( substr( $url, -1 ) === '/' && strpos( $url, '/produkt/' ) !== false ) {
		$url = substr( $url, 0, -1 );
		return $url;
	}
	return $url;
}
add_filter( 'user_trailingslashit', 'remove_trailing_slash_on_product_pages' );


function disable_feed() {
	$home_url = home_url();
	wp_safe_redirect( $home_url, 301 ); // Changed from default 302 to 301
	exit;
}

add_action( 'do_feed', 'disable_feed', 1 );
add_action( 'do_feed_rdf', 'disable_feed', 1 );
add_action( 'do_feed_rss', 'disable_feed', 1 );
add_action( 'do_feed_rss2', 'disable_feed', 1 );
add_action( 'do_feed_atom', 'disable_feed', 1 );
add_action( 'do_feed_rss2_comments', 'disable_feed', 1 );
add_action( 'do_feed_atom_comments', 'disable_feed', 1 );


add_filter( 'woocommerce_post_class', 'remove_post_class', 21, 3 );
function remove_post_class( $classes ) {
	if ( 'product' == get_post_type() ) {
		$classes = array_diff( $classes, array( 'outofstock' ) );
	}
	return $classes;
}
// remove out of stock notice
function custom_hide_out_of_stock_notice_on_single_product() {
	if ( is_product() ) {
		global $post;
		$product = wc_get_product( $post->ID );
		if ( ! $product->is_in_stock() ) {
			remove_action( 'woocommerce_before_single_product', 'woocommerce_output_all_notices', 10 );
			add_action(
				'woocommerce_before_single_product',
				function () {
					$notices = WC()->session->get( 'wc_notices', array() );
					if ( isset( $notices['error'] ) ) {
						foreach ( $notices['error'] as $index => $notice ) {
							if ( is_array( $notice ) ) {
								$notice_text = $notice['notice'];
							} else {
								$notice_text = $notice;
							}
							if ( strpos( $notice_text, 'gekauft werden' ) !== false ) {
								unset( $notices['error'][ $index ] );
							}
						}
						WC()->session->set( 'wc_notices', $notices );
					}
					// woocommerce_output_all_notices();
				},
				10
			);
		}
	}
}
// add_action( 'woocommerce_before_main_content', 'custom_hide_out_of_stock_notice_on_single_product' );
// add_action( 'template_redirect', 'custom_hide_out_of_stock_notice_on_single_product' );


// added Apr 13. 23
function glimp_login_logo() {  ?>
	<style type="text/css">
		#login h1 a,
		.login h1 a {
			background-image: url(https://glimp.de/wp-content/uploads/2023/03/glimp-new_logo.svg);
			height: 98px;
			width: 252px;
			background-size: 252px 98px;
			background-repeat: no-repeat;
			padding-bottom: 30px;
		}
	</style>
	<?php
}
add_action( 'login_enqueue_scripts', 'glimp_login_logo' );
function glimp_login_logo_url() {
	return home_url();
}
add_filter( 'login_headerurl', 'glimp_login_logo_url' );

function glimp_login_logo_url_title() {
	return 'Glimp.de';
}
add_filter( 'login_headertext', 'glimp_login_logo_url_title' );


/*********
 * create a news letter sign up form
 * Added May 8, 2023
 * This is mine :DDD
 */

// require_once 'inc/extra/newsletters-signup.php';

// Remove shop manaer role capabilities
add_action( 'init', 'customize_shop_manager_role' );

function customize_shop_manager_role() {
	add_role(
		'shop_master',
		'Shop Master',
		get_role( 'administrator' )->capabilities
	);
	// Get the role object.
	$role       = get_role( 'shop_master' );
	$admin_role = get_role( 'administrator' );

	// A list of capabilities to remove from the shop_manager role.
	$caps_to_remove = array(
		'read',
		// 'edit_posts',
		// 'delete_posts',
		'read_private_posts',
		'edit_published_posts',
		// 'publish_posts',
		'delete_published_posts',
		// 'edit_pages',
		'read_private_pages',
		// 'edit_published_pages',
		// 'publish_pages',
		'delete_published_pages',
		'edit_theme_options',
		// 'manage_options',
		'view_woocommerce_reports', // Remove access to WooCommerce reports/statistics.
		// Add any additional capabilities you want to remove.
	);

	foreach ( $caps_to_remove as $cap ) {
		// Remove the capability.
		$role->remove_cap( $cap );
	}

	// A list of capabilities to add to the shop_manager role.
	$caps_to_add = array(
		'read',
		'create_posts',
		'manage_woocommerce',
		'edit_shop_order',
		'read_shop_order',
		'delete_shop_order',
		'edit_shop_orders',
		'edit_others_shop_orders',
		'publish_shop_orders',
		'read_private_shop_orders',
		'delete_shop_orders',
		'delete_private_shop_orders',
		'delete_published_shop_orders',
		'delete_others_shop_orders',
		'edit_private_shop_orders',
		'edit_published_shop_orders',

		// Capabilities for 'shop_coupon' CPT.
		'edit_shop_coupon',
		'read_shop_coupon',
		'delete_shop_coupon',
		'edit_shop_coupons',
		'edit_others_shop_coupons',
		'publish_shop_coupons',
		'read_private_shop_coupons',
		'delete_shop_coupons',
		'delete_private_shop_coupons',
		'delete_published_shop_coupons',
		'delete_others_shop_coupons',
		'edit_private_shop_coupons',
		'edit_published_shop_coupons',

		// Capabilities for 'rating-form-feedback' CPT.
		'edit_rating-form-feedback',
		'read_rating-form-feedback',
		'delete_rating-form-feedback',
		'edit_rating-form-feedbacks',
		'edit_others_rating-form-feedbacks',
		'publish_rating-form-feedbacks',
		'read_private_rating-form-feedbacks',
		'delete_rating-form-feedbacks',
		'delete_private_rating-form-feedbacks',
		'delete_published_rating-form-feedbacks',
		'delete_others_rating-form-feedbacks',
		'edit_private_rating-form-feedbacks',
		'edit_published_rating-form-feedbacks',
		// Add any additional capabilities you want to grant.
	);

	foreach ( $caps_to_add as $cap ) {
		// Add the capability.
		$role->add_cap( $cap );
		$admin_role->add_cap( $cap );
	}
}

// Remove Comment auto link
remove_filter( 'comment_text', 'make_clickable', 9 );


remove_action( 'wp_head', '_wp_render_title_tag', 1 );
function get_meta_description() {
	return get_the_excerpt(); // Use post's excerpt as a description for single post pages.
}
/**
 * Fix to solve 'out of stock' issue with unlogged user
 */

function custom_inline_style() {
	if ( is_product() ) {
		echo '
            <style>
                .woocommerce-notices-wrapper {
                    display: none;
                }
				.woocommerce-error {
					display: none;
				}
            </style>';
	}
}
add_action( 'wp_head', 'custom_inline_style' );

function custom_inline_script() {
	if ( is_product() ) {

		echo '<script type="text/javascript">
				var errorElements = document . querySelectorAll(\'.woocommerce-error\');
                errorElements.forEach(function(element) {
                    var textContent = element.textContent || element.innerText;
                    if (textContent.includes(\'nicht\')) {
                        // Remove the element
                        element.remove();
                    } else {
						element.style.display = \'block\';
					}
                });

                var noticesWrapper = document.querySelector(\'.woocommerce-notices-wrapper\');
                if (noticesWrapper) {
                    noticesWrapper.style.display = \'block\';
                }
            </script>
        ';
	}
}
add_action( 'wp_footer', 'custom_inline_script' );

/**
 * Add Product Reivew Popup
 */
// Create settings menu
add_action( 'admin_menu', 'create_product_review_popup_page' );

function create_product_review_popup_page() {
	// Create new admin menu page
	add_options_page( 'Product Review Popup', 'Product Review Popup', 'administrator', basename( __FILE__ ), 'product_review_popup_page', plugins_url( '/images/icon.png', __FILE__ ) );

	// Call register settings function
	add_action( 'admin_init', 'register_product_review_popup_settings' );
}

function register_product_review_popup_settings() {
	// Register our settings
	register_setting( 'product-review-popup-settings-group', 'glimp_popup_heading' );
	register_setting( 'product-review-popup-settings-group', 'glimp_popup_text' );
}


// Added June 26, 2023
function custom_email_blacklist( $errors, $sanitized_user_login, $user_email ) {
	if ( strpos( $user_email, 'imailfree.cc' ) !== false ) {
		$errors->add( 'invalid_email', __( '<strong>Error</strong>: This email domain is not allowed for registration.' ) );
	}
	return $errors;
}
add_filter( 'registration_errors', 'custom_email_blacklist', 10, 3 );

// Added Aug 1, 2023
add_filter('woocommerce_product_review_list_args', 'reverse_reviews_order_on_product_page');

function reverse_reviews_order_on_product_page($args) {
    $args['order'] = 'ASC';  // Oldest to newest
    return $args;
}


add_filter( 'post_class', 'filter_product_post_class', 10, 3 );
function filter_product_post_class( $classes, $class, $product_id ){
if( in_the_loop() )
$classes[] = 'mainproduct';
return $classes;
}

/**
 * Move shipping method substep to the payment step.
 */
function fluidcheckout_move_billing_address_shipping_step() {
 // Bail if steps class not available
 if ( ! class_exists( 'FluidCheckout_Steps' ) ) { return; }
 
 // Bail if user is not logged in
 if ( ! is_user_logged_in() ) { return; }
 
 // Get shipping method hook priority
 $hook_priority = FluidCheckout_Steps::instance()->get_shipping_methods_hook_priority();

 // Move shipping method hooks
 remove_action( 'fc_output_step_shipping', array( FluidCheckout_Steps::instance(), 'output_substep_shipping_method' ), $hook_priority );
 add_action( 'fc_output_step_payment', array( FluidCheckout_Steps::instance(), 'output_substep_shipping_method' ), 5 );
}
add_action( 'init', 'fluidcheckout_move_billing_address_shipping_step', 300 );
