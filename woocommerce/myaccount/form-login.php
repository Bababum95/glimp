<?php

/**
 * Login Form
 *
 * This template can be overridden by copying it to yourtheme/woocommerce/myaccount/form-login.php.
 *
 * HOWEVER, on occasion WooCommerce will need to update template files and you
 * (the theme developer) will need to copy the new files to your theme to
 * maintain compatibility. We try to do this as little as possible, but it does
 * happen. When this occurs the version of the template file will be bumped and
 * the readme will list any important changes.
 *
 * @see     https://docs.woocommerce.com/document/template-structure/
 * @package WooCommerce\Templates
 * @version 7.0.1
 */

if (!defined('ABSPATH')) {
	exit; // Exit if accessed directly.
}

do_action('woocommerce_before_customer_login_form'); ?>

<div class="glimp-login" id="customer_login">
	<img
		src="<?php echo get_template_directory_uri() . '/assets/images/account.jpg'; ?>"
		class="glimp-login__image"
		alt="glimp-login"
	>
	<div class="glimp-login__content">
		<div class="glimp-login__heading">
			<h2><?php esc_html_e('Login', 'woocommerce'); ?></h2>
			<h2><?php esc_html_e('Register', 'woocommerce'); ?></h2>
		</div>
		<div class="glimp-login__form-wrapper">
			<form class="glimp-login__form" method="post">
				<?php do_action('woocommerce_login_form_start'); ?>
				<div class="glimp-login-input-container">
					<input
						type="text"
						class="glimp-login-input"
						name="username"
						id="username"
						autocomplete="username"
						placeholder=""
						value="<?php echo (!empty($_POST['username'])) ? esc_attr(wp_unslash($_POST['username'])) : ''; ?>"
					/>
					<label for="username" class="glimp-login-label">
						<?php esc_html_e('Username or email address', 'woocommerce'); ?>
						<span class="required">*</span>
					</label>
				</div>
				<div class="glimp-login-input-container">
					<input
						class="glimp-login-input"
						type="password"
						name="password"
						id="password"
						placeholder=""
						autocomplete="current-password"
					/>
					<label for="password" class="glimp-login-label">
						<?php esc_html_e('Password', 'woocommerce'); ?>
						<span class="required">*</span>
					</label>
				</div>
				<?php do_action('woocommerce_login_form'); ?>
				<label class="glimp-login__checkbox">
					<input
						class="glimp-login__checkbox-input"
						name="rememberme"
						type="checkbox"
						id="rememberme"
						value="forever"
					/>
					<span class="glimp-login__checkbox-checkmark"></span>
					<p class="glimp-login__checkbox-label">
						<?php esc_html_e('Remember me', 'woocommerce'); ?>
					</p>
            	</label>
				<?php wp_nonce_field('woocommerce-login', 'woocommerce-login-nonce'); ?>
				<div class="glimp-login__bottom">
					<button
						type="submit"
						class="glimp-login__submit"
						name="login" value="<?php esc_attr_e('Log in', 'woocommerce'); ?>"
					>
						<?php esc_html_e('Log in', 'woocommerce'); ?>
					</button>
					<a href="<?php echo esc_url(wp_lostpassword_url()); ?>">
						<?php esc_html_e('Lost your password?', 'woocommerce'); ?>
					</a>
				</div>
				<?php do_action('woocommerce_login_form_end'); ?>
			</form>
			<form
				method="post"
				class="glimp-login__form"
				<?php do_action('woocommerce_register_form_tag'); ?>
			>
				<?php do_action('woocommerce_register_form_start'); ?>
				<?php if ('no' === get_option('woocommerce_registration_generate_username')) : ?>
					<div class="glimp-login-input-container">
						<input
							class="glimp-login-input"
							type="text"
							name="username"
							id="reg_username"
							placeholder=""
							autocomplete="username"
							value="<?php echo (!empty($_POST['username'])) ? esc_attr(wp_unslash($_POST['username'])) : ''; ?>"
						/>
						<label for="reg_username" class="glimp-login-label">
							<?php esc_html_e('Username', 'woocommerce'); ?>
							<span class="required">*</span>
						</label>
					</div>
				<?php endif; ?>
				<div class="glimp-login-input-container">
					<input
						class="glimp-login-input"
						type="email"
						name="email"
						id="reg_email"
						placeholder=""
						autocomplete="email"
						value="<?php echo (!empty($_POST['email'])) ? esc_attr(wp_unslash($_POST['email'])) : ''; ?>"
					/>
					<label for="reg_username" class="glimp-login-label">
						<?php esc_html_e('Email address', 'woocommerce'); ?>
						<span class="required">*</span>
					</label>
				</div>
				<?php if ('no' === get_option('woocommerce_registration_generate_password')) : ?>
					<div class="glimp-login-input-container">
						<input
							class="glimp-login-input"
							type="password"
							name="password"
							id="reg_password"
							placeholder=""
							autocomplete="new-password"
						/>
						<label for="reg_username" class="glimp-login-label">
							<?php esc_html_e('Password', 'woocommerce'); ?>
							<span class="required">*</span>
						</label>
					</div>
				<?php else : ?>
					<p>
						<?php esc_html_e('A link to set a new password will be sent to your email address.', 'woocommerce'); ?>
					</p>
				<?php endif; ?>
				<?php do_action('woocommerce_register_form'); ?>
				<?php wp_nonce_field('woocommerce-register', 'woocommerce-register-nonce'); ?>
				<button
					type="submit"
					class="glimp-login__submit"
					name="register"
					value="<?php esc_attr_e('Register', 'woocommerce'); ?>"
				>
					<?php esc_html_e('Register', 'woocommerce'); ?>
				</button>
				<?php do_action('woocommerce_register_form_end'); ?>
			</form>
		</div>
	</div>
</div>

<?php do_action('woocommerce_after_customer_login_form'); ?>