	</div><!-- #main -->



		<?php get_template_part('footer','custom') ?>
	</div><!-- #page -->
	<div class="search-overlay">	
		<span class="close-search"><i class="icon_close"></i></span>	
		<div class="container wrapper-search">
			<?php phami_search_form_product(); ?>		
		</div>	
	</div>
	<div class="bwp-quick-view">
	</div>	
	<?php 
		$back_active = phami_get_config('back_active');
		if($back_active && $back_active == 1):
	?>
	<div class="back-top">
		<i class="arrow_carrot-up"></i>
	</div>
	<?php endif;?>
	<?php if((isset($phami_settings['show-newletter']) && $phami_settings['show-newletter']) && is_active_sidebar('newletter-popup-form') && function_exists('phami_popup_newsletter')) : ?>		
		<?php phami_popup_newsletter(); ?>
	<?php endif;  ?>
	<?php wp_footer(); ?>
</body>
</html>