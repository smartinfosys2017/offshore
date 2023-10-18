<?php
$menuList = array();
$queryMenuList = $con->prepare("SELECT * FROM `menus` WHERE `parent_id` = 0 ORDER BY `position` ASC");
$queryMenuList->execute(); 
if ($queryMenuList->rowCount() > 0){
	//$user = $queryMenuList->fetch();
	$fetchMenuList = $queryMenuList->fetchAll();
	$menuList['menu'] = array();
	foreach($fetchMenuList as $rowMenuList){
		$menuData = array();
		
		$menuData['id'] = $rowMenuList['id'];
		$menuData['pageId'] = $rowMenuList['page_id'];
		$menuData['label'] = $rowMenuList['name_en'];
		$menuData['path'] = '/'.$rowMenuList['page_slug_en'];
		
		$querySubMenuList = $con->prepare("SELECT * FROM `menus` WHERE `parent_id` = ".$rowMenuList['id']);
		$querySubMenuList->execute(); 
		if ($querySubMenuList->rowCount() > 0){
			//$user = $querySubMenuList->fetch();
			$fetchSubMenuList = $querySubMenuList->fetchAll();
			foreach($fetchSubMenuList as $rowSubMenuList){
				$subMenuData = array();
				$subMenuData['id'] = $rowSubMenuList['id'];
				$subMenuData['pageId'] = $rowSubMenuList['page_id'];
				$subMenuData['label'] = $rowSubMenuList['name_en'];
				$subMenuData['path'] = '/'.$rowSubMenuList['page_slug_en'];
				
				$menuData['submenu'][] = $subMenuData;
			}
		}
		
		$menuList['menu'][] = $menuData;
	}
	$data['returnCode'] = 1;
	$data['message'] = 'Menu list..';
	$data['data'] = $menuList;
} else{
	$data['returnCode'] = 0;
	$data['message'] = 'Menu list not found..';
	$data['data'] = (object)NULL;
}
?>