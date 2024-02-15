<?php

const DIST = THEME_PATH . '/dist/';
const DIST_SCRIPTS = DIST . '/scripts/';
const DIST_STYLES = DIST . '/styles/';

add_action('wp_enqueue_scripts', function() {
  $distUrl = get_template_directory_uri() . '/dist/';

  foreach (scandir(DIST_SCRIPTS) as $file) {
    if ($file !== '.' and $file !== '..') {
      $fileParts = explode('__', basename($file, '.js'));
      wp_enqueue_script($fileParts[0], $distUrl . "scripts/$file", [], $fileParts[1]);
    }
  }

  foreach (scandir(DIST_STYLES) as $file) {
    if ($file !== '.' and $file !== '..') {
      $fileParts = explode('__', basename($file, '.css'));
      wp_enqueue_style($fileParts[0], $distUrl . "/styles/$file", [], $fileParts[1]);
    }
  }
});

add_action('admin_enqueue_scripts', function() {
  $blockEditorVars = [
    'scripts' => []
  ];

  $distUrl = get_template_directory_uri() . '/dist/';
  foreach (scandir(DIST_SCRIPTS) as $file) {
    if ($file !== '.' and $file !== '..') {
      $fileParts = explode('__', basename($file, '.js'));
      $blockEditorVars['scripts'][] = $distUrl . "scripts/$file";
    }
  }

  wp_localize_script('wp-block-editor', 'EDITOR_VARS', $blockEditorVars);
});
