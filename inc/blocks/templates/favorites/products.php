<?php

$user_id = get_current_user_id();
$favorites = null;

if ($user_id) {
    $favorites = get_user_meta($user_id, 'user_favorites', true);
} else {
    if (!session_id()) {
        session_start();
    }
    $favorites = $_SESSION['user_favorites'] ?? array();
}

if(!empty($favorites)) {
    echo '<div ' . wp_kses_data(get_block_wrapper_attributes()) . '>';
    foreach ($favorites as $product_id) {
        render_product_card($product_id);
    }
    echo '</div>';
} else {
    echo '<p>
            Klicken Sie
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="18" viewBox="0 0 22 18" fill="none">
                <path d="M3.1875 9.60156L10.3308 16.7559C10.696 17.1218 11.2889 17.1218 11.6542 16.7559L18.7974 9.60156" stroke="#1A1A1A" stroke-width="0.935071"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M19.0994 2.77236C17.3854 1.05568 14.5696 1.1836 13.0178 3.04865L11.9591 4.32102C11.4582 4.923 10.5351 4.923 10.0342 4.32102L8.97554 3.04865C7.42374 1.1836 4.60794 1.05568 2.89392 2.77235C1.2841 4.38468 1.2841 6.99877 2.89392 8.61109L3.53663 9.25479L2.84676 9.94573L2.20406 9.30203C0.213231 7.30811 0.213231 4.07533 2.20406 2.08142C4.32374 -0.0415559 7.80596 0.116646 9.72503 2.42311L10.7837 3.69547C10.8945 3.82867 11.0988 3.82867 11.2096 3.69547L12.2683 2.4231C14.1873 0.116644 17.6696 -0.0415555 19.7892 2.08142C21.7801 4.07533 21.7801 7.30811 19.7892 9.30203L19.1465 9.94573L18.4567 9.25479L19.0994 8.61109C20.7092 6.99877 20.7092 4.38468 19.0994 2.77236Z" fill="#1A1A1A"/>
            </svg>
            , um das Produkt zu Ihren Favoriten hinzuzufügen.
        </p>';
}