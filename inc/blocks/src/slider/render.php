<?php

if (
    strpos($content, '<div class="wp-block-glimp-slider__wrapper"> </div>') === false &&
    strpos($content, '<div class="wp-block-glimp-slider__wrapper"></div>') === false &&
    strpos($content, '<div class="wp-block-glimp-slider__wrapper">
    </div>') === false
) {
    echo $content;
}
