<?php

if( have_rows('positive_notes') || have_rows('negative_notes') ):
    echo '<div ' . wp_kses_data(get_block_wrapper_attributes()) . '>';
    echo '<div class="wp-block-glimp-pros-and-cons__contents">';
    if( have_rows('positive_notes') ):
        echo '<div class="wp-block-glimp-pros-and-cons__list">';
        echo '<h2 class="wp-block-glimp-pros-and-cons__title">Vorteile der ' . get_the_title() . '</h2>';
        echo '<ol>';
        while( have_rows('positive_notes') ) : the_row();
            echo '<li>';
            echo get_sub_field('text');
            echo '</li>';
        endwhile;
        echo '</ol></div>';
    endif;
    if( have_rows('negative_notes') ):
        echo '<div class="wp-block-glimp-pros-and-cons__list">';
        echo '<h2 class="wp-block-glimp-pros-and-cons__title">Nachteile der ' . get_the_title() . '</h2>';
        echo '<ol>';
        while( have_rows('negative_notes') ) : the_row();
            echo '<li>';
            echo get_sub_field('text');
            echo '</li>';
        endwhile;
        echo '</ol></div>';
    endif;
    echo '</div></div>';
    return null;
endif;

$term_id = get_queried_object_id();
$check_list = get_field('check_list', 'product_cat_' . get_queried_object_id());
$cross_list = get_field('cross_list', 'product_cat_' . get_queried_object_id());
$pros_and_cons_title = get_field('pros-and-cons-title', 'product_cat_' . $term_id);
$pros_and_cons_text = get_field('pros-and-cons-text', 'product_cat_' . $term_id);

if (
    empty($check_list) &&
    empty($cross_list) &&
    empty($pros_and_cons_title) &&
    empty($pros_and_cons_text)
) {
    return null;
}

echo '<div ' . wp_kses_data(get_block_wrapper_attributes()) . '>';
    if (!empty($pros_and_cons_title)) {
        echo '<h2 class="wp-block-glimp-pros-and-cons__title">' . esc_html($pros_and_cons_title) . '</h2>';
    }
    
    if (!empty($pros_and_cons_text)) {
        echo '<p class="wp-block-glimp-pros-and-cons__text">' . esc_html($pros_and_cons_text) . '</p>';
    }

    if (!empty($check_list) && !empty($cross_list)) : ?>
        <div class="wp-block-glimp-pros-and-cons__contents">
            <div class="wp-block-glimp-pros-and-cons__list">
                <?php echo apply_filters('the_content', get_field('check_list')); ?>
            </div>
            <div class="wp-block-glimp-pros-and-cons__list">
                <?php echo apply_filters('the_content', get_field('cross_list')); ?>
            </div>
        </div>
    <?php endif;
echo '</div>';
