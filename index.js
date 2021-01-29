window.onload=function(){
    var aDiv=document.getElementById('div1');
    var oUl=aDiv.getElementsByTagName('ul')[0];
    var oLi=oUl.getElementsByTagName('li');
    var  speed;
    var timer=null;
    oUl.innerHTML=oUl.innerHTML+oUl.innerHTML;
    oUl.style.width=oLi[0].offsetWidth*oLi.length+'px';

    function move(){
        if(oUl.offsetLeft<-oUl.offsetWidth/2){
            oUl.style.left='0';
        }
        if(oUl.offsetLeft>0){
            oUl.style.left=-oUl.offsetWidth/2+'px';
        }
        oUl.style.left=oUl.offsetLeft+speed+'px';
    }
    timer=setInterval(move,30);
    oUl.onmouseover=function(){
        clearInterval(timer);
    }
    oUl.onmouseout=function(){
        timer=setInterval(move,30);
    }
    document.getElementsByTagName('span')[0].onclick=function(){
         speed=-3;
    }
    document.getElementsByTagName('span')[1].onclick=function(){
         speed=3;
    }
}