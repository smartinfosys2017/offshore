<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
//header('Access-Control-Allow-Origin: http://localhost:3000');
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Authorization');
header('Access-Control-Allow-Credentials: true');

include 'config.php';

$body = json_decode(file_get_contents("php://input"), true);

$data = array();
if(isset($body['model'])){
	
	//$dataList = json_decode($_POST['data'], true);
	
	$model = !empty($body['model']) ? $body['model'] : '';
	
	if(!empty($model)){
		//Get System Configuration
		$systemConfiguration = "systemConfiguration";
		
		//Get Menu
		$menuList = "menuList";
		
		//Get Page
		$pageDetail = "pageDetail";
		
		switch($model) {
			//Get System Configuration
			case $systemConfiguration;
				include "system-configuration.php";
			break;
			
			//Get Menu
			case $menuList;
				include "menu-list.php";
			break;
			
			//Get Page
			case $pageDetail;
				include "page-detail.php";
			break;
				
		}
	} else {
		$data['returnCode'] = 0;
		$data['message'] = 'Model reqired filed missing..';
		$data['data'] = (object)NULL;
	}
} else{
	$data['returnCode'] = 0;
	$data['message'] = 'Data reqired filed missing..';
	$data['data'] = (object)NULL;
}

print_r(json_encode($data));
?>