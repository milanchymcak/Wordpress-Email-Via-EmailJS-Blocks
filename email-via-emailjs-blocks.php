<?php
/**
 * Plugin Name:       Email via Emailjs Blocks
 * Description:       Emailjs Contact Form - Send emails from WordPress without mail server through emailjs.com API
 * Requires at least: 5.6
 * Requires PHP:      7.3
 * Version:           1.0
 * Author:            Milan Chymčák
 * Author URI:        https://chymcakmilan.com
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       email-via-emailjs-blocks
 * Domain Path:       /locales
 *
 * @package           email-via-emailjs-blocks
 */

/**
 * Loop Through All WP Blocks & Register Them
 */
add_action(
	'init', 
	function () {
		foreach (glob( __DIR__  . '/build/blocks/*/' ) as $block_type) {
			register_block_type($block_type);
		}
	}
);