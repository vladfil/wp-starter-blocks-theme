<?php
const THEME_PATH = __DIR__;

$incs = [
  'enqueue',
];
foreach ($incs as $inc) {
  require_once(__DIR__ . "/inc/$inc.php");
}