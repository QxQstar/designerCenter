function addLoadEvent(func){
	var oldLoad = window.onload;
	if(typeof oldLoad != 'function'){
		window.onload = func;
	}else{
		window.onload = function(){
			oldLoad();
			func();
		};
	}
}
//当点击头部导航是被点击的导航的字体和背景与没有被点击的导航不同
function changeLinkBackground(){
	var ul = document.getElementsByTagName('ul')[0];
	var a = ul.getElementsByTagName('a');
	var len = a.length;
	for(var i = 0;i<len;i++){
		a[i].onclick = function(){
			for(var j = 0;j<len;j++){
				a[j].parentNode.className = '';
				a[j].style.color = '#ffffff';
			}
			this.parentNode.className = 'addBackground';
			this.style.color = '#000000';
		};
	}
}
function switchItem(){
	var doc = document;
	var modify =doc.getElementById('modify');
	var publish = doc.getElementById('publish');
	var withdraw = doc.getElementById('withdraw');
	var check = doc.getElementById('check');
	var row1 = doc.getElementById('row1');
	var row2 = doc.getElementById('row2');
	var row3 = doc.getElementById('row3');
	var row4 = doc.getElementById('row4');
	modify.onclick = function(){
		row1.className = 'row1';
		row2.className = 'row2 hide';
		row3.className = 'row3 hide';
		row4.className = 'row3 hide';
		modify.className = 'now';
		publish.className = '';
		withdraw.className = '';
		check.className = '';
	};
	publish.onclick = function(){
		row2.className = 'row1';
		row1.className = 'row2 hide';
		row3.className = 'row3 hide';
		row4.className = 'row4 hide';
		publish.className = 'now';
		modify.className = '';
		withdraw.className = '';
		check.className = '';
	};
	withdraw.onclick = function(){
		row3.className = 'row1';
		row2.className = 'row2 hide';
		row1.className = 'row3 hide';
		row4.className = 'row4 hide';
		withdraw.className = 'now';
		publish.className = '';
		modify.className = '';
		check.className = '';
	};
	check.onclick = function(){
		row4.className = 'row1';
		row2.className = 'row2 hide';
		row1.className = 'row3 hide';
		row3.className = 'row4 hide';
		withdraw.className = '';
		publish.className = '';
		modify.className = '';
		check.className = 'now';
	};
}
addLoadEvent(switchItem);
addLoadEvent(changeLinkBackground);