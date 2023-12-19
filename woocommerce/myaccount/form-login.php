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

$error_form_template = 	'<div class="glimp-login__error">
							<p class="glimp-login__error-message"></p>
						</div>';

do_action('woocommerce_before_customer_login_form'); ?>

<div class="glimp-login">
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
			<form class="glimp-login__form" method="post" data-type="login">
				<?php do_action('woocommerce_login_form_start'); ?>
				<div class="glimp-login-input-container">
					<input
						type="text"
						class="glimp-login-input"
						name="username"
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
						value="forever"
					/>
					<span class="glimp-login__checkbox-checkmark"></span>
					<p class="glimp-login__checkbox-label">
						<?php esc_html_e('Remember me', 'woocommerce'); ?>
					</p>
            	</label>
				<?php echo $error_form_template; ?>
				<div class="glimp-login__bottom">
					<button
						type="submit"
						class="glimp-login__submit"
						name="login" value="<?php esc_attr_e('Log in', 'woocommerce'); ?>"
					>
						<?php esc_html_e('Log in', 'woocommerce'); ?>
					</button>
					<span class="glimp-login__forgot">
						<?php esc_html_e('Lost your password?', 'woocommerce'); ?>
					</span>
				</div>
				<?php do_action('woocommerce_login_form_end'); ?>
			</form>

			<form
				method="post"
				class="glimp-login__form"
				data-type="register"
			>
				<?php do_action('woocommerce_register_form_start'); ?>
				<div class="glimp-login-input-container">
					<input
						class="glimp-login-input"
						type="text"
						name="first_name"
						placeholder=""
						autocomplete="first_name"
					/>
					<label for="first_name" class="glimp-login-label">
						Vorname
						<span class="required">*</span>
					</label>
				</div>
				<div class="glimp-login-input-container">
					<input
						class="glimp-login-input"
						type="text"
						name="last_name"
						placeholder=""
						autocomplete="last_name"
					/>
					<label for="last_name" class="glimp-login-label">
						Nachname
						<span class="required">*</span>
					</label>
				</div>
				<?php if ('no' === get_option('woocommerce_registration_generate_username')) : ?>
					<div class="glimp-login-input-container">
						<input
							class="glimp-login-input"
							type="text"
							name="username"
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
				<label class="glimp-login__checkbox">
					<input
						class="glimp-login__checkbox-input"
						type="checkbox"
						require
					/>
					<span class="glimp-login__checkbox-checkmark"></span>
					<p class="glimp-login__checkbox-label">
						Ja, ich möchte ein neues Konto einrichten und habe die Datenschutzerklärung gelesen und verstanden.
					</p>
            	</label>
				<?php echo $error_form_template; ?>
				<div class="glimp-login__bottom">
					<button
						type="submit"
						class="glimp-login__submit"
						name="register"
						value="<?php esc_attr_e('Register', 'woocommerce'); ?>"
					>
						<?php esc_html_e('Register', 'woocommerce'); ?>
					</button>
				</div>
				<?php do_action('woocommerce_register_form_end'); ?>
			</form>
		</div>
		<div class="glimp-login__lost-password">
			<button class="glimp-login__back">Zurück</button>
			<p  class="glimp-login__title">
				Hast du dein Passwort vergessen?
			</p>
			<p  class="glimp-login__description">
				Bitte gib deinen Benutzernamen oder E-Mail-Adresse ein. Du erhältst einen Link
				per E-Mail, womit du dir ein neues Passwort erstellen kannst.
			</p>
			<form class="glimp-login__form" method="post" data-type="lost-password">
				<div class="glimp-login__notice">
					<p class="glimp-login__notice-message">
						Prüfen Sie Ihre E-Mail auf den Bestätigungslink und besuchen Sie dann die
						<a href="<?php echo wc_get_page_permalink('myaccount'); ?>">Anmeldeseite.</a>
					</p>
				</div>
				<div class="glimp-login-input-container">
					<input
						type="text"
						class="glimp-login-input"
						name="username"
						autocomplete="username"
						placeholder=""
						value="<?php echo (!empty($_POST['username'])) ? esc_attr(wp_unslash($_POST['username'])) : ''; ?>"
					/>
					<label for="username" class="glimp-login-label">
						<?php esc_html_e('Username or email address', 'woocommerce'); ?>
					</label>
				</div>
				<?php echo $error_form_template; ?>
				<div class="glimp-login__bottom">
					<button
						type="submit"
						class="glimp-login__submit"
						name="Passwort zurückseten"
					>
						Passwort zurückseten
					</button>
				</div>
			</form>
		</div>
	</div>
</div>

<?php do_action('woocommerce_after_customer_login_form'); ?>