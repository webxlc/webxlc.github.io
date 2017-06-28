function getStyle(obj, attr){
	if(obj.currentStyle){
		return obj.currentStyle[attr];
	}else{
		return getComputedStyle(obj, null)[attr];
	}
}

var timer=null;
function startMove(obj, json, fn){
	clearInterval(obj.timer);
	obj.timer=setInterval(function(){

		var flag=true; //表示都到了目标
		for(var attr in json){

			var speed=0;
			var cur=0;

			if(attr=='opacity'){
				cur=Math.round(parseFloat(getStyle(obj, attr))*100);
			}else{
				cur=parseInt(getStyle(obj, attr));
			}
			
			
			speed=(json[attr]-cur)/6;
			speed=speed>0?Math.ceil(speed):Math.floor(speed);

			if(cur!=json[attr]){
				flag=false;
			}

			if(attr=='opacity'){

				obj.style.filter='filter:alpha(opacity:'+(cur+speed)+')';

				obj.style.opacity=(cur+speed)/100;

			}else{
				obj.style[attr]=cur+speed+'px';
			}	

		}

		if(flag){
			clearInterval(timer);

			if(fn)fn();
		}
	}, 30)
	
	
}