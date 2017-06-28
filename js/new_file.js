<script>
		window.onload=function(){
			var oBox=document.getElementById('box');
			var aLi=oBox.getElementsByTagName('ol')[0].getElementsByTagName('li');
			var oUl=oBox.getElementsByTagName('ul')[0];
			var aLiImg=oUl.getElementsByTagName('li');
			var oPrev=document.getElementById('prev');
			var oNext=document.getElementById('next');
			var now=0;

			oUl.style.width=aLiImg.length*aLiImg[0].offsetWidth+'px';

			for(var i=0; i<aLi.length; i++){
				aLi[i].index=i;
				aLi[i].onmouseover=function(){
					now=this.index;
					
					tab();
				}
			}

			function tab(){
				for(var i=0; i<aLi.length; i++){
					aLi[i].className='';
					aLiImg[i].style.display='none';
					aLiImg[i].style.opacity=0;
				}
				aLi[now].className='active';
				aLiImg[now].style.display='block';
				startMove(aLiImg[now], {opacity: 100})
			}

			function prev(){
				now--;
				if(now==-1){
					now=aLi.length-1;
				}

				tab();
			}

			function next(){
				now++;
				if(now==aLi.length){
					now=0;
				}

				tab();
			}

			oPrev.onclick=function(){
				prev();
			}

			oNext.onclick=function(){
				next();
			}

			var timer=setInterval(oNext.onclick, 3000);


			oBox.onmouseover=function(){
				oPrev.style.display='block';
				oPrev.style.background='rgba(0,0,0, .3)';
				oNext.style.display='block';
				oNext.style.background='rgba(0,0,0, .3)';

				clearInterval(timer);
			}
			oBox.onmouseout=function(){
				oPrev.style.display='none';
				oNext.style.display='none';

				timer=setInterval(oNext.onclick, 3000);
			}
		}
	</script>