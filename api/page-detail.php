<?php
$pageDetail = array();

if(!empty($body['pageId'])){
	
	$pageId = !empty($body['pageId']) ? $body['pageId'] : 0;

	$queryPageDetail = $con->prepare("SELECT * FROM `pages` WHERE `id` = $pageId");
	$queryPageDetail->execute(); 
	if ($queryPageDetail->rowCount() > 0){
		//$user = $queryPageDetail->fetch();
		$rowPageDetail = $queryPageDetail->fetch();
		
		$pageDetail['title_en'] = $rowPageDetail['title_en'];
		$pageDetail['slug_en'] = $rowPageDetail['slug_en'];
		$pageDetail['caption_en'] = $rowPageDetail['caption_en'];
		$pageDetail['is_admin'] = $rowPageDetail['is_admin'];
		$pageDetail['page_type'] = $rowPageDetail['page_type'];
		$pageDetail['membership_id'] = $rowPageDetail['membership_id'];
		$pageDetail['is_comments'] = $rowPageDetail['is_comments'];
		$pageDetail['custom_bg_en'] = $rowPageDetail['custom_bg_en'];
		$pageDetail['banner_en'] = $rowPageDetail['banner_en'];
		$pageDetail['show_header'] = $rowPageDetail['show_header'];
		$pageDetail['theme'] = $rowPageDetail['theme'];
		$pageDetail['access'] = $rowPageDetail['access'];
		$pageDetail['body_en'] = utf8_decode($rowPageDetail['body_en']);
		$pageDetail['jscode'] = $rowPageDetail['jscode'];
		$pageDetail['keywords_en'] = $rowPageDetail['keywords_en'];
		$pageDetail['description_en'] = $rowPageDetail['description_en'];
		$pageDetail['created'] = $rowPageDetail['created'];
		$pageDetail['created_by'] = $rowPageDetail['created_by'];
		$pageDetail['created_by_name'] = $rowPageDetail['created_by_name'];
		$pageDetail['is_system'] = $rowPageDetail['is_system'];
		$pageDetail['active'] = $rowPageDetail['active'];
		
		$data['returnCode'] = 1;
		$data['message'] = $rowPageDetail['title_en']. ' Page detail..';
		$data['data'] = $pageDetail;
	} else{
		$data['returnCode'] = 0;
		$data['message'] = 'Page detail not found..';
		$data['data'] = (object)NULL;
	}
} else{
	$data['returnCode'] = 0;
	$data['message'] = 'Page Id not found..';
	$data['data'] = (object)NULL;
}
?>