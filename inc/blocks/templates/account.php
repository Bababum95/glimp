<?php

if ( is_user_logged_in() ) {
    $account_page_url = wc_get_page_permalink( 'myaccount' );
    echo '<a ' . wp_kses_data(get_block_wrapper_attributes()) . 'href="' . esc_url( $account_page_url ) . '" title="Mein Konto">
            <svg xmlns="http://www.w3.org/2000/svg" width="23" height="22" viewBox="0 0 23 22" fill="none">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M0.5 21.2158C0.5 17.455 3.54873 14.4062 7.30952 14.4062H15.6905C20.4048 14.4062 22.5 17.455 22.5 21.2158C22.5 21.5051 22.2655 21.7396 21.9762 21.7396C21.6869 21.7396 21.4524 21.5051 21.4524 21.2158C21.4524 18.0336 19.8262 15.4539 15.6905 15.4539H7.30952C4.12731 15.4539 1.54762 18.0336 1.54762 21.2158C1.54762 21.5051 1.3131 21.7396 1.02381 21.7396C0.734517 21.7396 0.5 21.5051 0.5 21.2158Z" fill="#1A1A1A" stroke="#1A1A1A" stroke-width="0.5" stroke-linecap="round"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M7.30952 14.4062C3.54873 14.4062 0.5 17.455 0.5 21.2158C0.5 21.5051 0.734517 21.7396 1.02381 21.7396C1.3131 21.7396 1.54762 21.5051 1.54762 21.2158C1.54762 18.0336 4.12731 15.4539 7.30952 15.4539H15.6905C19.8262 15.4539 21.4524 18.0336 21.4524 21.2158C21.4524 21.5051 21.6869 21.7396 21.9762 21.7396C22.2655 21.7396 22.5 21.5051 22.5 21.2158C22.5 17.455 20.4048 14.4062 15.6905 14.4062H7.30952Z" fill="#1A1A1A" stroke="#1A1A1A" stroke-width="0.5" stroke-linecap="round"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M11.4963 10.7894C14.1262 10.7894 16.2582 8.65746 16.2582 6.02753C16.2582 3.3976 14.1262 1.26562 11.4963 1.26562C8.86635 1.26562 6.73438 3.3976 6.73438 6.02753C6.73438 8.65746 8.86635 10.7894 11.4963 10.7894ZM11.4963 11.7894C14.6785 11.7894 17.2582 9.20974 17.2582 6.02753C17.2582 2.84532 14.6785 0.265625 11.4963 0.265625C8.31407 0.265625 5.73438 2.84532 5.73438 6.02753C5.73438 9.20974 8.31407 11.7894 11.4963 11.7894Z" fill="#1A1A1A" stroke="#1A1A1A" stroke-width="0.5"/>
            </svg>
            Mein Konto
        </a>';
} else {
    $login_url = wc_get_page_permalink( 'myaccount' );
    echo '<div ' . wp_kses_data(get_block_wrapper_attributes()) . 'title="Anmelden" data-action="login">
            <svg xmlns="http://www.w3.org/2000/svg" width="23" height="22" viewBox="0 0 23 22" fill="none">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M0.5 21.2158C0.5 17.455 3.54873 14.4062 7.30952 14.4062H15.6905C20.4048 14.4062 22.5 17.455 22.5 21.2158C22.5 21.5051 22.2655 21.7396 21.9762 21.7396C21.6869 21.7396 21.4524 21.5051 21.4524 21.2158C21.4524 18.0336 19.8262 15.4539 15.6905 15.4539H7.30952C4.12731 15.4539 1.54762 18.0336 1.54762 21.2158C1.54762 21.5051 1.3131 21.7396 1.02381 21.7396C0.734517 21.7396 0.5 21.5051 0.5 21.2158Z" fill="#1A1A1A" stroke="#1A1A1A" stroke-width="0.5" stroke-linecap="round"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M7.30952 14.4062C3.54873 14.4062 0.5 17.455 0.5 21.2158C0.5 21.5051 0.734517 21.7396 1.02381 21.7396C1.3131 21.7396 1.54762 21.5051 1.54762 21.2158C1.54762 18.0336 4.12731 15.4539 7.30952 15.4539H15.6905C19.8262 15.4539 21.4524 18.0336 21.4524 21.2158C21.4524 21.5051 21.6869 21.7396 21.9762 21.7396C22.2655 21.7396 22.5 21.5051 22.5 21.2158C22.5 17.455 20.4048 14.4062 15.6905 14.4062H7.30952Z" fill="#1A1A1A" stroke="#1A1A1A" stroke-width="0.5" stroke-linecap="round"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M11.4963 10.7894C14.1262 10.7894 16.2582 8.65746 16.2582 6.02753C16.2582 3.3976 14.1262 1.26562 11.4963 1.26562C8.86635 1.26562 6.73438 3.3976 6.73438 6.02753C6.73438 8.65746 8.86635 10.7894 11.4963 10.7894ZM11.4963 11.7894C14.6785 11.7894 17.2582 9.20974 17.2582 6.02753C17.2582 2.84532 14.6785 0.265625 11.4963 0.265625C8.31407 0.265625 5.73438 2.84532 5.73438 6.02753C5.73438 9.20974 8.31407 11.7894 11.4963 11.7894Z" fill="#1A1A1A" stroke="#1A1A1A" stroke-width="0.5"/>
            </svg>
            Anmelden
        </div>';
    echo '<div class="wp-block-glimp-account__popup simple">
            <div class="wp-block-glimp-account__popup-container">
                <p class="wp-block-glimp-account__popup-title">Einloggen, um diesen Artikel zu bewerten</p>
                <button class="wp-block-glimp-account__popup-close open"></button>'
                . do_shortcode('[woocommerce_my_account]')
            . '</div>
         </div>';
}
