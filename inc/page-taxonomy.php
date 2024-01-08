<?php

function custom_page_taxonomy() {
    $labels = array(
        'name'              => _x( 'Page Tags', 'taxonomy general name' ),
        'singular_name'     => _x( 'Page Tag', 'taxonomy singular name' ),
        'search_items'      => __( 'Search Page Tags' ),
        'all_items'         => __( 'All Page Tags' ),
        'parent_item'       => __( 'Parent Page Tag' ),
        'parent_item_colon' => __( 'Parent Page Tag:' ),
        'edit_item'         => __( 'Edit Page Tag' ), 
        'update_item'       => __( 'Update Page Tag' ),
        'add_new_item'      => __( 'Add New Page Tag' ),
        'new_item_name'     => __( 'New Page Tag Name' ),
        'menu_name'         => __( 'Page Tags' ),
    );

    $args = array(
        'hierarchical'      => true,
        'labels'            => $labels,
        'show_ui'           => true,
        'show_admin_column' => true,
        'query_var'         => true,
        'rewrite'           => false,
    );

    register_taxonomy( 'page_tag', array( 'page' ), $args );
}
add_action( 'init', 'custom_page_taxonomy', 0 );

function add_page_tag_metabox() {
    add_meta_box(
        'page_tag_metabox',
        'Page Tags',
        'render_page_tag_metabox',
        'page',
        'normal',
        'default'
    );
}
add_action( 'add_meta_boxes', 'add_page_tag_metabox' );

function render_page_tag_metabox( $post ) {
    $terms = get_terms( array(
        'taxonomy' => 'page_tag',
        'hide_empty' => false,
    ) );

    if ( $terms && ! is_wp_error( $terms ) ) {
        echo '<select name="page_tag">';
        echo '<option value="">Select Tag</option>';
        foreach ( $terms as $term ) {
            $selected = has_term( $term->term_id, 'page_tag', $post ) ? 'selected' : '';
            echo '<option value="' . esc_attr( $term->term_id ) . '" ' . $selected . '>' . esc_html( $term->name ) . '</option>';
        }
        echo '</select>';
    }
}

function save_page_tag( $post_id ) {
    if ( isset( $_POST['page_tag'] ) ) {
        wp_set_post_terms( $post_id, intval( $_POST['page_tag'] ), 'page_tag', false );
    }
}
add_action( 'save_post_page', 'save_page_tag' );
