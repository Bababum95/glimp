<?php

$is_grid = $attributes['view'] == 'grid';

$render_product_card_function = function($product_id) {
	render_product_card($product_id);
};
if(!$is_grid) {
    $render_product_card_function = function($product_id) use ($attributes) {
        render_product_big_card($product_id, $attributes['attributes']);
    };
}

$wrapper_class = $is_grid ? 'wp-block-glimp-all-products' : 'wp-block-glimp-all-products_list';
$wrapper = '<div class="' . $wrapper_class . '"';

$queried_object = get_queried_object();
if ($queried_object instanceof WP_Term) {
    $taxonomy = $queried_object->taxonomy; 
    $term_id = $queried_object->term_id; 

	if (!empty($taxonomy) && !empty($term_id)) {
		$wrapper .= ' data-taxonomy="' . esc_attr($taxonomy) . '" data-term="' . esc_attr($term_id) . '"';
	}
}
$wrapper .= '>';

if (woocommerce_product_loop()) {

	/**
	 * Hook: woocommerce_before_shop_loop.
	 *
	 * @hooked woocommerce_output_all_notices - 10
	 * @hooked woocommerce_result_count - 20
	 * @hooked woocommerce_catalog_ordering - 30
	 */
	// do_action('woocommerce_before_shop_loop');

	// woocommerce_product_loop_start();

	if (wc_get_loop_prop('total')) {
		$cards_count = 0;
		$product_count = 0;

		echo $wrapper;

		while (have_posts()) {
			if ($cards_count >= 90) {
				break;
			}
			the_post();
			/**
			 * Hook: woocommerce_shop_loop.
			 */
			do_action('woocommerce_shop_loop');

			$product_id = get_the_ID();

			if ( !empty($product_id) ) {
				$product_count++;
				$product = wc_get_product($product_id);
			
				if ($product && $product->is_type('variable')) {
					$variations_ids = $product->get_children();

					foreach ($variations_ids as $variation_id) {
						$render_product_card_function($variation_id);
						$cards_count++;
					}
				} else {
					$render_product_card_function($product_id);
					$cards_count++;
				}
			}
		}
	}

	echo '<div class="wp-block-glimp-all-products__count" data-count="' . $product_count . '"></div></div>';
	
	// woocommerce_product_loop_end();

	/**
	 * Hook: woocommerce_after_shop_loop.
	 *
	 * @hooked woocommerce_pagination - 10
	 */
	do_action('woocommerce_after_shop_loop');
} else {
	/**
	 * Hook: woocommerce_no_products_found.
	 *
	 * @hooked wc_no_products_found - 10
	 */
	do_action('woocommerce_no_products_found');
}

