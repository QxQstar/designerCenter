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
addLoadEvent(changeLinkBackground);