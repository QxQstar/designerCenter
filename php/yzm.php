<?php
	session_start();
	$image = imagecreatetruecolor(100,30);
	$bgcolor = imagecolorallocate($image,255,255,255);
	imagefill($image,0,0,$bgcolor);
	$captch_code = '';
	for($i = 0;$i<4;$i++){
		$fontsize = 8;
		$fontcolor = imagecolorallocate($image,rand(0,25),rand(0,25),rand(0,25));
		$data = '3456789qwertyuipasdfghjkxcvbnm';
		$fontcontent = substr($data,rand(0,strlen($data)),1);
		$captch_code.=$fontcontent; 
		$x = rand(5,10)+($i*100/4);
	 	$y = rand(5,10);
	 	imagestring($image, $fontsize, $x, $y, $fontcontent, $fontcolor);
	}
	$_SESSION['authcode'] = $captch_code;
	for($i = 0; $i<200;$i++){
		$pointercolor = imagecolorallocate($image, rand(50,200), rand(50,200), rand(50,200));
		imagesetpixel($image,rand(1,99),rand(1,29),$pointercolor);
	}
	for($i = 0; $i<3;$i++){
		$linecolor = imagecolorallocate($image,rand(100,220),rand(100,200),rand(100,200));
		imageline($image,rand(1,99),rand(1,29),rand(1,99),rand(1,29),$linecolor);
	}
	header('content-type:image/png');
	imagepng($image);



