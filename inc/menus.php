<?php

add_action('after_setup_theme', function () {
  register_nav_menus([
		'main_menu' => __('Main', TEXTDOMAIN),
	]);

	register_nav_menus([
		'footer_menu' => __('Footer', TEXTDOMAIN),
	]);
});
