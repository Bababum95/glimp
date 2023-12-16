<?php

$post_id = get_the_ID();

$buttons = render_page_like_button($post_id, 'wp-block-glimp-social-actions-panel__likes');
$buttons .= '<a href="#reviews" class="wp-block-glimp-social-actions-panel__comments">'
                . get_comments_number($post_id)
            . '</a>';

$block_content = str_replace('<div class="root"></div>', $buttons, $content);
echo $block_content;