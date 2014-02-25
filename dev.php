<?php
require 'app/Controller.php';
$_SESSION['core']  = new Controller();
$_SESSION['debug'] = TRUE;
$params = (count($_REQUEST) == 0) ? 'home' : $_REQUEST['goto'];
$content = $_SESSION['core']->getPage($params);
//
echo $content;
?>