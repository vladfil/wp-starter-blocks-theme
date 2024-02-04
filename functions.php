<?php
const THEME_PATH = __DIR__;
const TEXTDOMAIN = 'wp-starter-blocks-theme';

$incs = [
  'enqueue',
  'blocks',
  'menus',
];
foreach ($incs as $inc) {
  require_once(__DIR__ . "/inc/$inc.php");
}