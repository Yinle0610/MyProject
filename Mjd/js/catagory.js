window.onload = function () {
    scrollList();
};

var scrollList = function () {
    var leftList = document.getElementsByClassName("list_left")[0];
    var height = leftList.offsetHeight;
    var leftUl = leftList.getElementsByTagName("ul")[0];
    var leftListLis = leftUl.getElementsByTagName('li');
    console.log(leftListLis[0]);
    /* 要得到的ul高*/
    /* ul外层div的高 */
    var parentH = height;
    console.log(parentH);
    /* ul的高 */
    var childH = leftUl.offsetHeight;
    console.log(childH);

    /* 添加过渡 */
    addTransition = function() {
        leftUl.style.transition = 'all .3s ease 0s';
        leftUl.style.webkitTransition = 'all .3s ease 0s';
    };
    /* 移除过渡 */
    removeTransition = function() {
        leftUl.style.transition = 'none';
        leftUl.style.webkitTransition = 'none';
    };
    /* 位置移动 */
    addTransform = function (t) {
        leftUl.style.transform = 'translateY(' + t + 'px)';
        leftUl.style.webkitTransform = 'translateY(' + t + 'px)';
    };

    /* 晃动的范围 */
    var UpDownY = 150;
    var moveY = 0;
    var startY = 0;
    var endY = 0;
    var currY = 0;

    /* 时间 */
    var starTime = 0; endTime = 0;
    leftUl.addEventListener('touchstart', function (e) {
        /* 记录开始位置 */
        console.timeEnd('tap');
        starTime = new Date().getTime();
        startY = e.touches[0].clientY;
    });

    leftUl.addEventListener('touchmove', function (e) {
        e.preventDefault();
        endY = e.touches[0].clientY;
        moveY = startY - endY;
        if( currY - moveY < UpDownY && currY - moveY > (-(childH - parentH) - UpDownY)) {
            removeTransition();
            addTransform(currY - moveY);
        }
    },false);

    leftUl.addEventListener('touchend', function (e) {
       /* 上面吸附的条件 */
        console.timeEnd('tap');
        endTime = new Date().getTime();
        console.log(endTime - starTime);
        if((currY - moveY) >= 0){
            addTransition();
            addTransform(0);
            currY = 0;
        }
       /* childH - parentH 等于可滑动的距离（ul大于div的高度）*/
       /* 下面满足吸附的条件 */
        else if((currY - moveY) <= (-(childH - parentH) )){
            addTransition();
            addTransform( -(childH - parentH + 110));

            currY = -(childH - parentH + 110);
           console.log(currY);
        }else{
            currY = currY - moveY;
        }


        if(endTime - starTime < 150 && moveY == 0){
            for( var i = 0; i < leftListLis; i++){
                leftListLis[i].className = '';
            }
            var li = e.target.parentNode;
            li.className = "hot_rec";
            console.log(li);
        }
    },false);
};