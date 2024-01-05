<?php

if (preg_match('/<div class="wp-block-glimp-slider__wrapper">\s*<\/div>/s', $content) !== 1) {
    echo $content;
}
