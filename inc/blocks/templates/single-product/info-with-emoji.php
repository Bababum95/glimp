<?php

if (!empty(get_field('heading_1'))) :
    $index = 1;
?>

<div class="wp-block-glimp-info-with-emoji">
    <?php while ($index <= 4) { ?>
        <div class="wp-block-glimp-info-with-emoji__item">
            <?php
            $image   = get_field('emoji_' . $index);
            $heading = get_field('heading_' . $index);
            $text    = get_field('text_' . $index);
            ?>
            <span class="wp-block-glimp-info-with-emoji__image">
                <?php echo $image; ?>
            </span>
            <p class="wp-block-glimp-info-with-emoji__text">
                <?php echo $heading; ?>
                <strong>
                    <?php echo $text; ?>
                </strong>
            </p>
        </div>
    <?php ++$index; } ?>
</div>

<?php endif;