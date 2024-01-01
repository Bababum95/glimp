<?php

function comment_form_update($fields) {
    if (isset($fields['url'])) {
        unset($fields['url']);
    }

    if (isset($fields['email']) && isset($fields['author'])) {
        $author_email_fields = $fields['author'] . $fields['email'];
    
        $fields['author'] = '<div class="comment-form-wrapper">' . $author_email_fields . '</div>';
    
        unset($fields['email']);
    }

    return $fields;
}
add_filter('comment_form_default_fields', 'comment_form_update');