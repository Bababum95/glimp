<?php
if (has_post_thumbnail()) {
    $thumbnail_id = get_post_thumbnail_id(get_the_ID());
    $caption = get_the_post_thumbnail_caption(get_the_ID());

    if ($caption) {
        echo '<p ' . get_block_wrapper_attributes() . '>' . esc_html($caption) . '</p>';
    }
}

