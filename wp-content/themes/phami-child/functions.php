<?php

add_action('wp_enqueue_scripts', 'phami_child_css', 1001);
 
// Load CSS
function phami_child_css() {
    wp_deregister_style( 'styles-child' );
    wp_register_style( 'styles-child', get_stylesheet_directory_uri() . '/style.css' );
    wp_enqueue_style( 'styles-child' );
}
/* footer translate not working */
add_filter( 'elementor/theme/get_location_templates/template_id', 'templated_id' );
function templated_id($theme_template_id){
    if (!is_admin()) {
        $theme_template_id = apply_filters( 'wpml_object_id', $theme_template_id, 'elementor_library', true );
    }
    return $theme_template_id;
}
/* inserting scripts */
add_action("wp_enqueue_scripts", "dcms_insertar_js");

function dcms_insertar_js(){
    
    wp_register_script('miscript', '/js/scrollSpeed.js', array('jquery'), '1', true );
    wp_enqueue_script('miscript');
    
}
/*====== brands */
add_action( 'woocommerce_single_product_summary' , 'woocommerce_brand_summary', 15 );

/**
 * woocommerce_brand_summary
 *
 * @access      public
 * @since       1.0 
 * @return      void
*/
function woocommerce_brand_summary() {
	
	global $post;
	
	$brands = wp_get_post_terms( $post->ID, 'product_brand', array("fields" => "all") );

	foreach( $brands as $brand ) {
		//echo __( 'Brand', '') . ': ' . term_description( $brand->term_id, 'product_brand' );
		echo '<div class="brand_name" style="margin-bottom:30px;"><h5><a href="'.get_term_link($brand->term_id).'"> '.$brand->name.'</a></h5></div>';
	}
	
}

/*
 * Custom filter to remove default image sizes from WordPress.
 */
 
// disable generated image sizes
function shapeSpace_disable_image_sizes($sizes) {
    unset($sizes['thumbnail']); // disable thumbnail size 
    unset($sizes['medium']); // disable medium size 
    unset($sizes['large']); // disable large size 
    unset($sizes['medium_large']); // disable medium-large size 
    unset($sizes['300x300']); // disable 2x medium-large size 
    unset($sizes['2048x2048']); // disable 2x large size return $sizes;
}
add_action('intermediate_image_sizes_advanced', 'shapeSpace_disable_image_sizes');
/*unset( $sizes['1536x1536'] );
unset( $sizes['2048x2048'] );

remove_image_size( '1536x1536' );
remove_image_size( '2048x2048' );*/