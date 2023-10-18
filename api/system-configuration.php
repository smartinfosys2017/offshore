<?php
$systemList = array();
$querySystemList = $con->prepare("SELECT * FROM `settings`");
$querySystemList->execute(); 
if ($querySystemList->rowCount() > 0){
	//$user = $querySystemList->fetch();
	$rowSystemList = $querySystemList->fetch();
	
	$systemList = array();
	
	$systemList['id'] = $rowSystemList['id'];
	$systemList['site_name'] = $rowSystemList['site_name'];
	$systemList['company'] = $rowSystemList['company'];
	$systemList['site_dir'] = $rowSystemList['site_dir'];
	$systemList['site_email'] = $rowSystemList['site_email'];
	$systemList['theme'] = $rowSystemList['theme'];
	$systemList['perpage'] = $rowSystemList['perpage'];
	$systemList['backup'] = $rowSystemList['backup'];
	$systemList['thumb_w'] = $rowSystemList['thumb_w'];
	$systemList['thumb_h'] = $rowSystemList['thumb_h'];
	$systemList['img_w'] = $rowSystemList['img_w'];
	$systemList['img_h'] = $rowSystemList['img_h'];
	$systemList['avatar_w'] = $rowSystemList['avatar_w'];
	$systemList['avatar_h'] = $rowSystemList['avatar_h'];
	$systemList['short_date'] = $rowSystemList['short_date'];
	$systemList['long_date'] = $rowSystemList['long_date'];
	$systemList['time_format'] = $rowSystemList['time_format'];
	$systemList['calendar_date'] = $rowSystemList['calendar_date'];
	$systemList['dtz'] = $rowSystemList['dtz'];
	$systemList['locale'] = $rowSystemList['locale'];
	$systemList['weekstart'] = $rowSystemList['weekstart'];
	$systemList['lang'] = $rowSystemList['lang'];
	$systemList['lang_list'] = json_decode($rowSystemList['lang_list'], true);
	$systemList['one_login'] = $rowSystemList['one_login'];
	$systemList['ploader'] = $rowSystemList['ploader'];
	$systemList['eucookie'] = $rowSystemList['eucookie'];
	$systemList['offline'] = $rowSystemList['offline'];
	$systemList['offline_msg'] = $rowSystemList['offline_msg'];
	$systemList['offline_d'] = $rowSystemList['offline_d'];
	$systemList['offline_t'] = $rowSystemList['offline_t'];
	$systemList['offline_info'] = $rowSystemList['offline_info'];
	$systemList['logo'] = UPLOADURL.'/'.$rowSystemList['logo'];
	$systemList['plogo'] = UPLOADURL.'/'.$rowSystemList['plogo'];
	$systemList['showlang'] = $rowSystemList['showlang'];
	$systemList['showlogin'] = $rowSystemList['showlogin'];
	$systemList['showsearch'] = $rowSystemList['showsearch'];
	$systemList['showcrumbs'] = $rowSystemList['showcrumbs'];
	$systemList['currency'] = $rowSystemList['currency'];
	$systemList['enable_tax'] = $rowSystemList['enable_tax'];
	$systemList['file_size'] = $rowSystemList['file_size'];
	$systemList['file_ext'] = $rowSystemList['file_ext'];
	$systemList['reg_verify'] = $rowSystemList['reg_verify'];
	$systemList['auto_verify'] = $rowSystemList['auto_verify'];
	$systemList['notify_admin'] = $rowSystemList['notify_admin'];
	$systemList['flood'] = $rowSystemList['flood'];
	$systemList['attempt'] = $rowSystemList['attempt'];
	$systemList['logging'] = $rowSystemList['logging'];
	$systemList['analytics'] = $rowSystemList['analytics'];
	$systemList['mailer'] = $rowSystemList['mailer'];
	$systemList['sendmail'] = $rowSystemList['sendmail'];
	$systemList['smtp_host'] = $rowSystemList['smtp_host'];
	$systemList['smtp_user'] = $rowSystemList['smtp_user'];
	$systemList['smtp_pass'] = $rowSystemList['smtp_pass'];
	$systemList['smtp_port'] = $rowSystemList['smtp_port'];
	$systemList['is_ssl'] = $rowSystemList['is_ssl'];
	$systemList['inv_info'] = $rowSystemList['inv_info'];
	$systemList['inv_note'] = $rowSystemList['inv_note'];
	$systemList['system_slugs'] = json_decode($rowSystemList['system_slugs'], true);
	$systemList['url_slugs'] = json_decode($rowSystemList['url_slugs'], true);
	$systemList['social_media'] = json_decode($rowSystemList['social_media'], true);
	$systemList['ytapi'] = $rowSystemList['ytapi'];
	$systemList['mapapi'] = $rowSystemList['mapapi'];
	$systemList['wojon'] = $rowSystemList['wojon'];
	$systemList['wojov'] = $rowSystemList['wojov'];
	
	$data['returnCode'] = 1;
	$data['message'] = 'System Configuration detail..';
	$data['data'] = $systemList;
} else{
	$data['returnCode'] = 0;
	$data['message'] = 'System Configuration detail not found..';
	$data['data'] = (object)NULL;
}
?>