<?php

class NewsletterSignUp {

	private $newsletter_sign_up_options;

	public function __construct() {
		add_action( 'admin_menu', array( $this, 'newsletter_sign_up_add_plugin_page' ) );
		add_action( 'admin_init', array( $this, 'newsletter_sign_up_page_init' ) );
	}

	public function newsletter_sign_up_add_plugin_page() {
		add_options_page(
			'Newsletter sign-up',
			'Newsletter sign-up',
			'manage_options',
			'newsletter-sign-up',
			array( $this, 'newsletter_sign_up_create_admin_page' )
		);
	}

	public function newsletter_sign_up_create_admin_page() {
		$this->newsletter_sign_up_options = get_option( 'newsletter_sign_up_option_name' ); ?>

		<div class="wrap">
			<h2>Newsletter sign-up</h2>
			<p>use this shortcode to display the form on any page or post
			<pre>[newsletter_signup_form]</pre>
			</p>
			<?php settings_errors(); ?>

			<form method="post" action="options.php">
				<?php
				settings_fields( 'newsletter_sign_up_option_group' );
				do_settings_sections( 'newsletter-sign-up-admin' );
				submit_button();
				?>
			</form>
			<form method="get" action="">
				<p> Download list as a CSV file</p>
				<input type="hidden" name="_newsletters_emails_list_download" value="csv" />
				<input type="submit" value="Download CSV" />
			</form>
		</div>
		<?php
	}

	public function newsletter_sign_up_page_init() {
		register_setting(
			'newsletter_sign_up_option_group', // option_group
			'newsletter_sign_up_option_name', // option_name
			array( $this, 'newsletter_sign_up_sanitize' ) // sanitize_callback
		);

		add_settings_section(
			'newsletter_sign_up_setting_section', // id
			'Settings', // title
			array( $this, 'newsletter_sign_up_section_info' ), // callback
			'newsletter-sign-up-admin' // page
		);

		add_settings_field(
			'heading_0', // id
			'Heading', // title
			array( $this, 'heading_0_callback' ), // callback
			'newsletter-sign-up-admin', // page
			'newsletter_sign_up_setting_section' // section
		);

		add_settings_field(
			'placeholder_1', // id
			'Placeholder', // title
			array( $this, 'placeholder_1_callback' ), // callback
			'newsletter-sign-up-admin', // page
			'newsletter_sign_up_setting_section' // section
		);

		add_settings_field(
			'button_text_2', // id
			'Button Text', // title
			array( $this, 'button_text_2_callback' ), // callback
			'newsletter-sign-up-admin', // page
			'newsletter_sign_up_setting_section' // section
		);

		add_settings_field(
			'checkbox_text_4', // id
			'Checkbox Text', // title
			array( $this, 'checkbox_text_4_callback' ), // callback
			'newsletter-sign-up-admin', // page
			'newsletter_sign_up_setting_section' // section
		);

		add_settings_field(
			'success_message_5', // id
			'Success Message', // title
			array( $this, 'success_message_5_callback' ), // callback
			'newsletter-sign-up-admin', // page
			'newsletter_sign_up_setting_section' // section
		);

		add_settings_field(
			'invalid_email_message_6', // id
			'Invalid Email Message', // title
			array( $this, 'invalid_email_message_6_callback' ), // callback
			'newsletter-sign-up-admin', // page
			'newsletter_sign_up_setting_section' // section
		);
	}

	public function newsletter_sign_up_sanitize( $input ) {
		$sanitary_values = array();
		if ( isset( $input['heading_0'] ) ) {
			$sanitary_values['heading_0'] = sanitize_text_field( $input['heading_0'] );
		}

		if ( isset( $input['placeholder_1'] ) ) {
			$sanitary_values['placeholder_1'] = sanitize_text_field( $input['placeholder_1'] );
		}

		if ( isset( $input['button_text_2'] ) ) {
			$sanitary_values['button_text_2'] = sanitize_text_field( $input['button_text_2'] );
		}

		if ( isset( $input['checkbox_box_3'] ) ) {
			$sanitary_values['checkbox_box_3'] = $input['checkbox_box_3'];
		}

		if ( isset( $input['checkbox_text_4'] ) ) {
			$sanitary_values['checkbox_text_4'] = $input['checkbox_text_4'];
		}

		if ( isset( $input['success_message_5'] ) ) {
			$sanitary_values['success_message_5'] = esc_textarea( $input['success_message_5'] );
		}
		if ( isset( $input['invalid_email_message_6'] ) ) {
			$sanitary_values['invalid_email_message_6'] = esc_textarea( $input['invalid_email_message_6'] );
		}

		return $sanitary_values;
	}

	public function newsletter_sign_up_section_info() {
	}

	public function heading_0_callback() {
		printf(
			'<input class="regular-text" type="text" name="newsletter_sign_up_option_name[heading_0]" id="heading_0" value="%s">',
			isset( $this->newsletter_sign_up_options['heading_0'] ) ? esc_attr( $this->newsletter_sign_up_options['heading_0'] ) : ''
		);
	}

	public function placeholder_1_callback() {
		printf(
			'<input class="regular-text" type="text" name="newsletter_sign_up_option_name[placeholder_1]" id="placeholder_1" value="%s">',
			isset( $this->newsletter_sign_up_options['placeholder_1'] ) ? esc_attr( $this->newsletter_sign_up_options['placeholder_1'] ) : ''
		);
	}

	public function button_text_2_callback() {
		printf(
			'<input class="regular-text" type="text" name="newsletter_sign_up_option_name[button_text_2]" id="button_text_2" value="%s">',
			isset( $this->newsletter_sign_up_options['button_text_2'] ) ? esc_attr( $this->newsletter_sign_up_options['button_text_2'] ) : ''
		);
	}

	public function checkbox_box_3_callback() {
		printf(
			'<input type="checkbox" name="newsletter_sign_up_option_name[checkbox_box_3]" id="checkbox_box_3" value="checkbox_box_3" %s>',
			( isset( $this->newsletter_sign_up_options['checkbox_box_3'] ) && $this->newsletter_sign_up_options['checkbox_box_3'] === 'checkbox_box_3' ) ? 'checked' : ''
		);
	}

	public function checkbox_text_4_callback() {
		printf(
			'<textarea class="large-text" rows="5" name="newsletter_sign_up_option_name[checkbox_text_4]" id="checkbox_text_4">%s</textarea>',
			isset( $this->newsletter_sign_up_options['checkbox_text_4'] ) ? esc_attr( $this->newsletter_sign_up_options['checkbox_text_4'] ) : ''
		);
	}

	public function success_message_5_callback() {
		printf(
			'<textarea class="large-text" rows="5" name="newsletter_sign_up_option_name[success_message_5]" id="success_message_5">%s</textarea>',
			isset( $this->newsletter_sign_up_options['success_message_5'] ) ? esc_attr( $this->newsletter_sign_up_options['success_message_5'] ) : ''
		);
	}
	public function invalid_email_message_6_callback() {
		printf(
			'<textarea class="large-text" rows="5" name="newsletter_sign_up_option_name[invalid_email_message_6]" id="invalid_email_message_6">%s</textarea>',
			isset( $this->newsletter_sign_up_options['invalid_email_message_6'] ) ? esc_attr( $this->newsletter_sign_up_options['invalid_email_message_6'] ) : ''
		);
	}
}
if ( is_admin() ) {
	$newsletter_sign_up = new NewsletterSignUp();
}


function newsletter_signup_shortcode_function() {
	$newsletter_sign_up_options = get_option( 'newsletter_sign_up_option_name' ); // Array of All Options
	$heading_0 = $newsletter_sign_up_options['heading_0']; // Heading
	$placeholder_1 = $newsletter_sign_up_options['placeholder_1']; // Placeholder
	$button_text_2 = $newsletter_sign_up_options['button_text_2']; // Button Text
	$checkbox_text_4 = $newsletter_sign_up_options['checkbox_text_4']; // Checkbox Text
	$success_message_5 = $newsletter_sign_up_options['success_message_5']; // Success Message
	$invalid_email_message_6 = $newsletter_sign_up_options['invalid_email_message_6']; // Invalid Email Message
	ob_start(); // start output buffering
	?>
	<form action="#owt_newslettersignup_form" method="post" id="owt_newslettersignup_form">
		<p for="owt_newslettersignup_email" class="glimp-footer__heading"><?php echo $heading_0; ?></p>
			<div class="glimp-footer__subscribe">
				<input
					class="glimp-footer__subscribe-input"
					type="owt_newslettersignup_email"
					name="owt_newslettersignup_email"
					id="owt_newslettersignup_email"
					placeholder="<?php echo $placeholder_1; ?>"
				>
				<button class="glimp-footer__subscribe-button"><?php echo $button_text_2; ?></button>
			</div>
			<?php echo $checkbox_text_4; ?>
			<?php
		// Check if the form has been submited
	
		// TODO: handle error msgs
	
		if ( isset( $_POST['owt_newslettersignup_email'] ) ) {
			$owt_newslettersignup_email = $_POST['owt_newslettersignup_email'];

			if ( filter_var( $owt_newslettersignup_email, FILTER_VALIDATE_EMAIL ) ) {
				// Email is valid, add to CSV file
				// add the email to a CSV file in the uploads directory
				$upload_dir = wp_upload_dir();
				$filename = $upload_dir['basedir'] . '/newsletter.csv';

				// Read the existing CSV file and check for the email
				$email_exists = false;
				if ( file_exists( $filename ) ) {
					$file = fopen( $filename, 'r' );
					while ( ( $data = fgetcsv( $file ) ) !== false ) {
						if ( $data[0] == $owt_newslettersignup_email ) {
							$email_exists = true;
							break;
						}
					}
					fclose( $file );
				}

				// If the email doesn't exist in the CSV, add it
				if ( ! $email_exists ) {
					$fp = fopen( $filename, 'a' );
					fputcsv( $fp, array( $owt_newslettersignup_email ) );
					fclose( $fp );
				}
				// Print success message
				echo '<p class="glimp-footer__">' . $success_message_5 . '</p>';
			} else {
				// Email isn't valid, set error message
				echo '<p>' . $invalid_email_message_6 . '</p>';
			}
		}
		?>
	</form>
	<?php
	return ob_get_clean(); // return the contents of the output buffer
}
add_shortcode( 'newsletter_signup_form', 'newsletter_signup_shortcode_function' );


// Download as CSV file
function owt_downaloadCSV() {
	// Check if the user has the right capabilities (optional, but recommended)
	if ( ! current_user_can( 'manage_options' ) ) {
		return;
	}
	// handle CSV download request
	if ( isset( $_GET['_newsletters_emails_list_download'] ) && $_GET['_newsletters_emails_list_download'] == 'csv' ) {
		$upload_dir = wp_upload_dir();
		$filename = $upload_dir['basedir'] . '/newsletter.csv';
		// set headers for file download
		header( 'Content-Type: text/csv' );
		header( 'Content-Disposition: attachment; filename="newsletter.csv"' );
		header( 'Pragma: no-cache' );
		readfile( $filename );
		exit;
	}
}

add_action( 'admin_init', 'owt_downaloadCSV' );