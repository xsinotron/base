<?php
require 'autoload.php';
require 'vendor/Mustache/Autoloader.php';
session_name('APP');
session_start();
class Controller {
	private $data;
	public function getPage($page) {
		Mustache_Autoloader::register();
		$m = new Mustache_Engine;
        $_SESSION['debug'] = (isset($_SESSION['debug'])) ? $_SESSION['debug'] : FALSE;
		return $m->render(
            file_get_contents("app/views/home.html"),
            array(
                'pageName' => 'APPLICATION',
                'debug'    => $_SESSION['debug']
            )
        );
	}
	public function __construct(){
		
	}
}
?>