window.onload = function(){
    searchBar();
    secondKill();
    bannerImg();
    newsMove();
}

/* 搜索栏 */
var searchBar = function(){
    var banner = document.getElementsByClassName("jd_banner")[0];
    var search = document.getElementsByClassName("jd_header_box")[0];
    var h = banner.offsetHeight;
    window.onscroll = function(){
        var Top =document.body.scrollTop;
        console.log(Top);
        Top > h?search.style.background = "rgba(201,21,35,0.85)":search.style.background = "rgba(201,21,35,"+Top/h+")";
    }
}


/*秒杀倒计时*/
var secondKill = function(){
	var miaosha = document.getElementsByClassName("miaosha");
	var spans = document.getElementsByClassName("num");
	//console.log(spans.length);
	var times = 4*60*60;
	setInterval(function () {
		times --;
		var h = Math.floor(times/(60*60));
		var m = Math.floor(times/60%60);
		var s = times%60;
		spans[0].innerHTML = h>10?Math.floor(h/10):0;
		spans[1].innerHTML = h%10;
		spans[2].innerHTML = m>10?Math.floor(m/10):0;
		spans[3].innerHTML = m%10;
		spans[4].innerHTML = s>10?Math.floor(s/10):0;
		spans[5].innerHTML = s%10;
	},1000)
}

/* 轮播图 */
var bannerImg = function(){
    /* banner */
    var banner = document.getElementsByClassName("jd_banner")[0];
    /* 图片盒子 */
    var imgBox = banner.getElementsByTagName("ul")[0];
    /* 盒子宽度 */
    var width = banner.offsetWidth;
    /* 小圆点 */
    var pointBox = banner.getElementsByTagName("ul")[1];
    /* 点组数 */
    var pointList = pointBox.getElementsByTagName("li");

    var index = 1;
    var timer;

    /* 图片轮播 */

    /* 添加过渡 */
    var addTransition = function () {
        imgBox.style.transition = "all .3s ease 0s";
        imgBox.style.webkitTransition = "all .3s ease 0s";
    }
    /* 移除过渡 */
    var removeTransition = function () {
        imgBox.style.transition = "none";
        imgBox.style.webkitTransition = "none";
    }
    /* 改变位置 */
    var setTransform = function (t) {
        imgBox.style.transform = 'translateX(' + t + 'px)';
        imgBox.style.webkitTransform = 'translateX(' + t + 'px)';
    }

    timer = setInterval(function () {
        index++;
        addTransition();
        setTransform(-index * width);
    }, 1500);

    imgBox.addEventListener('transitionEnd', function () {
        if (index >= 9) {
            index = 1;
        } else if (index <= 0) {
            index = 8;
        }
        removeTransition();
        setTransform(-index * width);
    }, false);
    imgBox.addEventListener('webkitTransitionEnd', function () {
        if (index >= 9) {
            index = 1;
        } else if (index <= 0) {
            index = 8;
        }
        removeTransition();
        setTransform(-index * width);
    }, false);

    var moveX = 0;
    /* 触摸开始事件 */
    imgBox.addEventListener('touchstart', function (e) {
        /* 记录开始的位置 */
        startX = e.touches[0].clientX;
    });
    
    /* 触摸滑动事件 */
    imgBox.addEventListener('touchmove', function (e) {
        /* 清除定时器 */
        clearInterval(timer)
        /* 清除默认的滚动事件 */
        e.preventDefault();
        /* 记录结束位置 */
        endX = e.touches[0].clientX;
        /* 记录移动的距离 */
        moveX = startX - endX;
        removeTransition();
        setTransform( - index * width - moveX);
    });

    /* 触摸事件结束 */
    imgBox.addEventListener('touchend', function (e) {
        console.log('end');
        /* 如果移动的距离大于三分之一，并且是移动过的 */
        if(Math.abs(moveX) > width/3 && endX != 0){
            /* 向左 */
            if(moveX > 0){
                index ++;
            }else {
                /* 向右 */
                index --;
            }
            /* 改变位置 */
            setTransform(- index * width);
        }
        /* 回到原来位置 */
        addTransition();
        setTransform(- index * width);
        
        /* 初始化 */
        startX = 0;
        endX = 0;
        console.log(timer);
        
        clearInterval(timer);
        timer = setInterval(function () {
            index ++ ;
            addTransition();
            setTransform(- index * width);
        },1500);
        
    });
    
    imgBox.addEventListener('click', function () {
        console.log('click');
    })

}



/* 京东快报 */
var newsMove = function () {
    var hotNews = document.getElementsByClassName('news-item')[0];
    var newsList = hotNews.getElementsByTagName('li');
    var liHeight = newsList[0].offsetHeight;
    console.log(liHeight);
    console.log(newsList.length);
    var num = 1;
    var timer;
    var setMove = function (t) {
        hotNews.style.transform = 'translateY(' + t + 'px)';
        hotNews.style.webkitTransform = 'translateY(' + t + 'px)';
    }
    /* 添加过渡 */
    var addTransition = function () {
        hotNews.style.transition = "all .3s ease 0s";
        hotNews.style.webkitTransition = "all .3s ease 0s";
    }
    /* 移除过渡 */
    var removeTransition = function () {
        hotNews.style.transition = "none";
        hotNews.style.webkitTransition = "none";
    }
    /* 改变位置 */
    var setTransform = function (t) {
        hotNews.style.transform = 'translateY(' + t + 'px)';
        hotNews.style.webkitTransform = 'translateY(' + t + 'px)';
    }

    timer = setInterval(function () {
        num ++;
        addTransition();
        setTransform(-num * liHeight);
    }, 1500);

    hotNews.addEventListener('transitionEnd', function () {
        if (num >= 5) {
            num = 1;
        } else if (num <= 0) {
            num = 4;
        }
        removeTransition();
        setTransform(-num * liHeight);
    }, false);
    hotNews.addEventListener('webkitTransitionEnd', function () {
        if (num >= 5) {
            num = 1;
        } else if (num <= 0) {
            num = 4;
        }
        removeTransition();
        setTransform(-num * liHeight);
    }, false);
}