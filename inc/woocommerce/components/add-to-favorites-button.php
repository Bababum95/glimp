<?php
function render_add_to_favorites_button( $id ) {
    $user_id = get_current_user_id();
    $is_favorite = false;
    
    if ($user_id) {
        $favorites = get_user_meta($user_id, 'user_favorites', true);
        $is_favorite = is_array($favorites) && in_array($id, $favorites);
    } else {
        if (!session_id()) {
            session_start();
        }
        $favorites = $_SESSION['user_favorites'] ?? array();
        $is_favorite = in_array($id, $favorites);
    }
    
    return '<button
                class="add-to-favorites' . ($is_favorite ? ' active' : '') . '"
                data-id="' . $id . '"
                aria-label="add to favorites"
            >
                <svg width="32px" height="32px" viewBox="0 0 20.00 20.00" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#000000">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M10 6.49228C11.4641 3.87207 16.5 4.78701 16.5 8.57245C16.5 11.1012 14.3333 13.4103 10 15.5C5.66667 13.4103 3.5 11.1012 3.5 8.57245C3.5 4.78701 8.5359 3.87207 10 6.49228Z" fill="none"/>
                </svg>
            </button>';
}