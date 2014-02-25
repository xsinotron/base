<?php
require_once 'app/vendor/autoload.php';
require_once 'app/autoload.php';
$_SESSION['core']  = new Main();
$_SESSION['debug'] = FALSE;
$params = (count($_REQUEST) == 0) ? 'home' : $_REQUEST['goto'];
echo $_SESSION['core']->getPage($params);
//echo $_SESSION['core']->makePage($params);
?>