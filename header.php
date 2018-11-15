<?php
/**
 * The template for displaying the header
 *
 * Displays all of the head element and everything up until the "site-content" div.
 *
 * @package WordPress
 * @subpackage Twenty_Fifteen
 * @since Twenty Fifteen 1.0
 */
?><!DOCTYPE html>
<html <?php language_attributes(); ?> class="no-js">
<head>
	<meta charset="<?php bloginfo( 'charset' ); ?>">
	<meta name="viewport" content="width=device-width">
	<link rel="profile" href="http://gmpg.org/xfn/11">
	<link rel="pingback" href="<?php bloginfo( 'pingback_url' ); ?>">
	<!--[if lt IE 9]>
	<script src="<?php echo esc_url( get_template_directory_uri() ); ?>/js/html5.js"></script>
	<![endif]-->
    <?php include_once 'assets/load.inc' ?>
	<?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
<header>
    <?php  ?>
    <div class="container">
        <div class="row">
            <div class="col col-logo">Logo</div>
            <div class="col col-nav">Nav</div>
            <div class="col col-search">Search</div>
        </div>
    </div>
</header>
<div id="demo">DEMO</div>

