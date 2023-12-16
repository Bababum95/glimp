<?php

$post_content = get_post_field('post_content', get_the_ID());
$blocks = parse_blocks($post_content);
$sidebar = null;

foreach ($blocks as $block) {
    if ($block['blockName'] === 'glimp/post-sidebar') {
        $sidebar = render_block($block);
    }
}

if (!$sidebar) {
    echo $content;
    return;
}


$wrapper = '<div class="wp-block-glimp-post-wrapper">';
$wrapper_has_sidebar = '<div class="wp-block-glimp-post-wrapper has-sidebar">';

$sidebar = str_replace(
    '<aside class="wp-block-glimp-post-sidebar" hidden>',
    '<aside class="wp-block-glimp-post-sidebar show">',
    $sidebar
);

$content_has_sidebar = str_replace($wrapper, $wrapper_has_sidebar . $sidebar, $content);

echo $content_has_sidebar;
