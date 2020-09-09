<?php
/**
 * The template for displaying product content in the single-product.php template
 *
 * This template can be overridden by copying it to yourtheme/woocommerce/content-single-product.php.
 *
 * HOWEVER, on occasion WooCommerce will need to update template files and you
 * (the theme developer) will need to copy the new files to your theme to
 * maintain compatibility. We try to do this as little as possible, but it does
 * happen. When this occurs the version of the template file will be bumped and
 * the readme will list any important changes.
 *
 * @see     https://docs.woocommerce.com/document/template-structure/
 * @package WooCommerce/Templates
 * @version 3.6.0
 */
	if ( ! defined( 'ABSPATH' ) ) {
		exit; // Exit if accessed directly
	}
	do_action( 'woocommerce_before_single_product' );
	if ( post_password_required() ) {
	 	echo get_the_password_form();
	 	return;
	}
	$phami_settings = phami_global_settings();	 
?>
<div id="product-<?php the_ID(); ?>" <?php post_class(); ?>>
	<div class="bwp-single-product <?php echo esc_attr(phami_image_single_product()->product_layout_thumb); ?>"
		data-product_layout_thumb 	= 	"<?php echo esc_attr(phami_image_single_product()->product_layout_thumb); ?>" 
		data-zoom_scroll 			=	"<?php echo esc_attr((isset($phami_settings['zoom-scroll']) && $phami_settings['zoom-scroll']) ? 'true' : 'false'); ?>" 
		data-zoom_contain_lens 		=	"<?php echo esc_attr((isset($phami_settings['zoom-contain-lens']) && $phami_settings['zoom-contain-lens']) ? 'true' : 'false'); ?>" 
		data-zoomtype 				=	"<?php echo esc_attr(( isset($phami_settings['zoom-type']) && $phami_settings['zoom-type']) ? ($phami_settings['zoom-type']) : 'inner'); ?>" 
		data-lenssize 				= 	"<?php echo esc_attr(isset($phami_settings['zoom-lens-size']) ? ($phami_settings['zoom-lens-size']) : '200'); ?>" 
		data-lensshape 				= 	"<?php echo esc_attr(isset($phami_settings['zoom-lens-shape']) ? ($phami_settings['zoom-lens-shape']) : 'zoom-lens-shape'); ?>" 
		data-lensborder 			= 	"<?php echo esc_attr(isset($phami_settings['zoom-lens-border']) ? ($phami_settings['zoom-lens-border']) : '10'); ?>"
		data-bordersize 			= 	"<?php echo esc_attr(isset($phami_settings['zoom-border']) ? ($phami_settings['zoom-border']) : '2'); ?>"
		data-bordercolour 			= 	"<?php echo esc_attr(isset($phami_settings['zoom-border-color']) ? ($phami_settings['zoom-border-color']) : '#252525'); ?>"
		data-popup 					= 	"<?php echo esc_attr(isset($phami_settings['product-image-popup'] ) && ($phami_settings['product-image-popup']) ? 'true' : 'false'); ?>">	
		<div class="row">
			<div class="bwp-single-image col-lg-6 col-md-12 col-12">
				<?php
					/**
					 * woocommerce_before_single_product_summary hooked
					 *
					 * @hooked woocommerce_show_product_sale_flash - 10
					 * @hooked woocommerce_show_product_images - 20
					 */
					do_action( 'woocommerce_before_single_product_summary' );
				?>
			</div>
			<div class="bwp-single-info col-lg-6 col-md-12 col-12 ">
				<div class="summary entry-summary">
				<?php
					/**
					 * woocommerce_single_product_summary hook
					 *
					 * @hooked woocommerce_template_single_title - 5
					 * @hooked woocommerce_template_single_rating - 10
					 * @hooked woocommerce_template_single_price - 10
					 * @hooked woocommerce_template_single_excerpt - 20
					 * @hooked woocommerce_template_single_add_to_cart - 30
					 * @hooked woocommerce_template_single_meta - 40
					 * @hooked woocommerce_template_single_sharing - 50
					 */
					do_action( 'woocommerce_single_product_summary' );
				?>
				</div><!-- .summary -->
			</div>
		</div>
	</div>
	
	<section class="elementor-element elementor-element-6480f99 elementor-section elementor-section-height-default elementor-section-height-default elementor-section elementor-top-section" data-id="6480f99" data-element_type="section" data-settings="{&quot;background_background&quot;:&quot;classic&quot;}">
		<div class="elementor-container elementor-column-gap-default">
			<div class="elementor-row">
				<div class="elementor-element elementor-element-d75f07d elementor-column elementor-col-100 elementor-top-column" data-id="d75f07d" data-element_type="column">
					<div class="elementor-column-wrap  elementor-element-populated">
						<div class="elementor-widget-wrap">
							<section class="elementor-element elementor-element-4621b64 elementor-section elementor-section-height-default elementor-section-height-default elementor-section elementor-inner-section" data-id="4621b64" data-element_type="section">
								<div class="elementor-container elementor-column-gap-default">
									<div class="elementor-row">
										<div class="elementor-element elementor-element-abdb797 elementor-column elementor-col-50 elementor-inner-column" data-id="abdb797" data-element_type="column">
											<div class="elementor-column-wrap  elementor-element-populated">
												<div class="elementor-widget-wrap">
													<div class="elementor-element elementor-element-010eb80 elementor-widget elementor-widget-text-editor" data-id="010eb80" data-element_type="widget" data-widget_type="text-editor.default">
														<div class="elementor-widget-container">
															<div class="elementor-text-editor elementor-clearfix">
																<h3><?php _e( 'Download our catalog', 'phami-child' ); ?></h3>
																<p><?php _e( 'Here you can find all the information available in our catalog', 'phami-child' ); ?></p>
															</div>
														</div>
													</div>
													<div class="elementor-element elementor-element-1520cc9 elementor-widget elementor-widget-button" data-id="1520cc9" data-element_type="widget" data-widget_type="button.default">
														<div class="elementor-widget-container">
															<div class="elementor-button-wrapper">
																<a href="#" class="elementor-button-link elementor-button elementor-size-sm" role="button">
																	<span class="elementor-button-content-wrapper">
																		<span class="elementor-button-icon elementor-align-icon-left">
																			<i aria-hidden="true" class="fas fa-cloud-download-alt"></i>			
																		</span>
																		<span class="elementor-button-text"><?php _e( 'Download', 'phami-child' ); ?></span>
																	</span>
																</a>
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</section>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
	<div class="clearfix"></div>
		<?php
			/**
			 * woocommerce_after_single_product_summary hook
			 *
			 * @hooked woocommerce_output_product_data_tabs - 10
			 * @hooked woocommerce_upsell_display - 15
			 * @hooked woocommerce_output_related_products - 20
			 */
			do_action( 'woocommerce_after_single_product_summary' );
		?>
	<meta itemprop="url" content="<?php esc_url(the_permalink()); ?>" />
</div><!-- #product-<?php the_ID(); ?> -->
<?php do_action( 'woocommerce_after_single_product' ); ?>