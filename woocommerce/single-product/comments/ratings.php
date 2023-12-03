<?php

$ratings = $args['ratings'];
$average_rating = round($args['average_rating'], 2);
$all_count = array_sum($ratings);

krsort($ratings);

function render_star($star, $count, $all_count) {
    $percentage = $count / $all_count * 100;

    return 
        '<div class="wp-block-glimp-comments__ratings-item">' .
            '<span class="wp-block-glimp-comments__ratings-item-raing">' . $star . '</span>' .
            '<span class="wp-block-glimp-comments__ratings-item-star">★</span>' .
            '<span ' .
                "style='background-size: $percentage% 100%'" .
                'class="wp-block-glimp-comments__ratings-item-percentage">' .
            '</span>' .
            '<span class="wp-block-glimp-comments__ratings-item-count">(' . $count . ')</span>' .
        '</div>';
}

?>

<div class='wp-block-glimp-comments__ratings'>
    <div class='wp-block-glimp-comments__ratings-average'>
        <span class='wp-block-glimp-comments__ratings-average-rating'>
            <?php echo $average_rating ?>
        </span>
        <span  class='wp-block-glimp-comments__ratings-average-stars'>
        <?php 
            if (!empty($average_rating)) {
                $average_rating = round($average_rating, 0);
                for ($i = 0; $i < $average_rating; $i++) {
                    echo '★ ';
                }
            ?>
            <span class='wp-block-glimp-comments__ratings-average-stars_non-active'>
                <?php
                for ($i = 0; $i < 5 - $average_rating; $i++) {
                    echo '★ ';
                    }
                }
                ?>
            </span>
        </span>
        <span class='wp-block-glimp-comments__ratings-average-count'>
            (<?php echo $all_count ?>)
        </span>
    </div>
    <div class='wp-block-glimp-comments__ratings-container'>
        <?php
        if($all_count == 0) {
            $all_count = 1;
        }
        foreach ($ratings as $star => $count) {
            echo render_star($star, $count, $all_count);
        }
        ?>
    </div>
    <button class='wp-block-glimp-comments__ratings-button'>
        Produkt bewerten
    </button>
</div>