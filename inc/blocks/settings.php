<?php

function glimp_extend_block_editor_settings($editor_settings, $editor_context) {
    $editor_settings['glimpSettings'] = array(
        'apiSecret' => WC_GLIMP_API_SECRET,
        'apiKey' => WC_GLIMP_API_KEY
    );

    return $editor_settings;
}

add_filter('block_editor_settings_all', 'glimp_extend_block_editor_settings', 10, 2);
