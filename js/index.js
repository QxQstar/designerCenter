$(document).ready(function(){
	var width = document.getElementById('img').offsetWidth;
	width+= 'px';
	//alert(width);
	var time = 300,opts = [{'width':0},{'width':width}];


	$('#vertical').find('a').hover(function(){
		$(this).find('img').stop().animate(opts[0],time,function(){
			$(this).hide().next().show();
			$(this).next().animate(opts[1],time);
		});
	},function(){
		$(this).find('.info').animate(opts[0],time,function(){
			$(this).hide().prev().show();
			$(this).prev().animate(opts[1],time);
		});
	});
});