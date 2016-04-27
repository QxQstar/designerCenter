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
//修改上传文件的样式
function uploadFile(){
	var upload = document.getElementById('upload');
	var file = document.getElementById('file');
	upload.onclick = function(){
		file.click();
	};
	file.onchange = function(){
		var path = this.value;
		var uploadurl = document.getElementById('uploadurl');
		uploadurl.innerText = path;
	};
}
addLoadEvent(uploadFile);
addLoadEvent(changeLinkBackground);