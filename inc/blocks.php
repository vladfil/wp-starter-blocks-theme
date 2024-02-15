<?php
add_action( 'init', function() {
  // Register blocks in the format $dir => $render_callback.
  $blocks = [
    'example-dynamic' => '', 
    'example-static'  => '',
    'tabs'  => '',
  ];

  foreach ( $blocks as $dir => $render_callback ) {
    $args = [];
    if ( ! empty( $render_callback ) ) {
      $args['render_callback'] = $render_callback;
    }

    register_block_type( THEME_PATH . '/blocks/build/' . $dir . '/block.json', $args );
  }
});
