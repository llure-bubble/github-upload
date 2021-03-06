	<?php 
		$phami_settings = phami_global_settings();
		$show_minicart = (isset($phami_settings['show-minicart']) && $phami_settings['show-minicart']) ? ($phami_settings['show-minicart']) : false;
		$enable_sticky_header = ( isset($phami_settings['enable-sticky-header']) && $phami_settings['enable-sticky-header'] ) ? ($phami_settings['enable-sticky-header']) : false;
		$show_searchform = (isset($phami_settings['show-searchform']) && $phami_settings['show-searchform']) ? ($phami_settings['show-searchform']) : false;
		$show_wishlist = (isset($phami_settings['show-wishlist']) && $phami_settings['show-wishlist']) ? ($phami_settings['show-wishlist']) : false;
	?>
	<h1 class="bwp-title hide"><a href="<?php echo esc_url( home_url( '/' ) ); ?>" rel="home"><?php bloginfo( 'name' ); ?></a></h1>
	<header id='bwp-header' class="bwp-header header-v3">
		<?php if(isset($phami_settings['show-header-top']) && $phami_settings['show-header-top']){ ?>
		<div id="bwp-topbar" class="topbar-v1">
			<div class="topbar-inner">
				<div class="row">
					<div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 topbar-left">
						<?php if( isset($phami_settings['phone']) && $phami_settings['phone'] ) : ?>
						<div class="number-phone hidden-sm hidden-xs ">
							<label><i class="icon-telephone"></i></label><?php echo esc_html($phami_settings['phone']); ?>
						</div>
						<?php endif; ?>
						<?php if( isset($phami_settings['email']) && $phami_settings['email'] ) : ?>
						<div class="email">
							<label><i class="icon-mail"></i></label> <a href="<?php echo esc_attr($phami_settings['link-email']); ?>"><?php echo esc_html($phami_settings['email']); ?></a>
						</div>
						<?php endif; ?>
						<?php if( isset($phami_settings['timeopen']) && $phami_settings['timeopen'] ) : ?>
						<div class="time-open hidden-xs hidden-sm hidden-md">
							<label><i class="icon-time"></i></label><?php echo esc_html($phami_settings['timeopen']); ?>
						</div>
						<?php endif; ?>
					</div>
					<div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12 topbar-right">
						<?php if( isset($phami_settings['shipping']) && $phami_settings['shipping'] ) : ?>
						<div class="shipping hidden-xs hidden-sm hidden-md">
							<?php echo esc_html($phami_settings['shipping']); ?>
						</div>
						<?php endif; ?>
					</div>
				</div>
			</div>
		</div>
		<?php } ?>
		<div class='header-wrapper' data-sticky_header="<?php echo esc_attr($phami_settings['enable-sticky-header']); ?>">
			<div class="header-top">
				<div class="row">
					<?php if(($show_minicart || $show_searchform || $show_wishlist || is_active_sidebar('top-link')) && class_exists( 'WooCommerce' ) && class_exists( 'YITH_WCWL' ) ){ ?>
						<div class="col-xl-2 col-lg-3 col-md-12 col-sm-12 header-left">
							<?php phami_header_logo(); ?>
						</div>
						<div class="col-xl-8 col-lg-6 col-md-6 col-sm-2 col-6 header-center">
							<div class='header-content'>
								<div class="header-wpbingo-menu-left row">
									<div class="col-lg-12 col-md-12 col-sm-12 col-12 header-menu">
										<div class="wpbingo-menu-mobile">
											<?php phami_top_menu(); ?>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div class="col-xl-2 col-lg-3 col-md-6 col-sm-10 col-6 header-right">
							<div class="header-page-link">
								<?php if($show_wishlist && class_exists( 'YITH_WCWL' )){ ?>
									<div class="wishlist-box hidden-xs hidden-sm ">
										<a href="<?php echo get_permalink( get_option('yith_wcwl_wishlist_page_id') ); ?>"><i class="icon-heart"></i></a>
									</div>
								<?php } ?>
								<!-- Begin Search -->
								<?php if($show_searchform && class_exists( 'WooCommerce' )){ ?>
								<div class="search-box hidden-md hidden-lg hidden-xl">
									<div class="search-toggle"><i class="icon-search"></i></div>
								</div>
								<?php } ?>
								<!-- End Search -->
								<?php if(is_active_sidebar('top-link')){ ?>
									<div class="block-top-link">
										<?php dynamic_sidebar( 'top-link' ); ?>
									</div>
								<?php } ?>
								<?php if($show_minicart && class_exists( 'WooCommerce' )){ ?>
								<div class="phami-topcart">
									<?php get_template_part( 'woocommerce/minicart-ajax' ); ?>
								</div>
								<?php } ?>
							</div>
						</div>
						<div class="header-center-bottom col-xl-12 col-lg-12 col-md-12 col-sm-12 hidden-xs hidden-sm">
							<div class="header-search-form">
								<!-- Begin Search -->
								<?php if($show_searchform && class_exists( 'WooCommerce' )){ ?>
									<?php get_template_part( 'search-form' ); ?>
								<?php } ?>
								<!-- End Search -->	
							</div>
						</div>
					<?php }else{ ?>
						<div class="col-lg-2 col-md-6 col-sm-6 col-8 header-test header-left">
							<?php phami_header_logo(); ?>
						</div>
						<div class="col-lg-10 col-md-6 col-sm-6 col-4 header-test header-menu">
							<div class="wpbingo-menu-mobile">
								<?php phami_top_menu(); ?>
							</div>
						</div>
					<?php } ?>
				</div>
			</div>
		</div><!-- End header-wrapper -->	
	</header><!-- End #bwp-header -->