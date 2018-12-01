
$(function(){
    $(".language").on("mouseenter",function(){
        $(".language-bd").show();
    }).mouseleave(function () {
        $(".language-bd").hide();
    });

// 快递单号查询块
   $("#search-text").on("click",function () {
       $("#search-num").removeClass('search-num').addClass('side');
       $("#search-text").css({
           "height":"80px",
           "background":"white",
           "border":"none"
       });
       $(".my-text").css({
           "height":"80px"
       });
       $(".check-text").css("display","block");
   });
   $("#search-num").on('mouseleave',function(){
       $("#search-text").css({
           "height":"30px",
           "border":"none",
           "background":" url('../kuaidi/img/placeholder.gif') -138px -12px  no-repeat"
   });
       $("#search-num").removeClass('side').addClass('search-num');
       $(".my-text").css({
           "height":"30px",
           "border":"none"
       });
       $(".check-text").css("display","none");
   });
// 新闻模块
   $("#news li").mouseover(function () {
       $(this).addClass('news-hover').siblings().removeClass('news-hover');
   });








});