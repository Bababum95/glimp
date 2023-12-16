<?php

echo '<ul ' . get_block_wrapper_attributes() . '>';
if ( have_posts() ) :
    while ( have_posts() ) : the_post();
        echo render_page_card(get_the_ID());
    endwhile;
endif;
echo '</ul>';

