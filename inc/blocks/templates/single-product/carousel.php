<?php

$carousel_title         = get_field('carousel_title');
$carousel_youtube_short = get_field('carousel_youtube_short');
$carousel               = get_field('carousel');

if (!empty($carousel)) : ?>
    <div class="wp-block-glimp-carousel">
        <p class="wp-block-glimp-carousel__title">
            <?php echo $carousel_title; ?>
        </p>
        <div class="wp-block-glimp-carousel__slider">
            <div class="wp-block-glimp-carousel__slider-wrapper">
                <?php
                echo $carousel_youtube_short;
                echo apply_filters('the_content', $carousel);
                ?>
            </div>
        </div>
    </div>
<?php endif; ?>