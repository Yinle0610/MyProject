/*自己的js*/

$(function () {

/*小火箭*/
  $(window).scroll(function(){
  	if( $(this).scrollTop() > 100){
  		$(".rocketPar").fadeIn();
  	}else{
  		$(".rocketPar").fadeOut();
  	}
  });
  $(".rocketPar").click(function(){
  	$("html,body").animate({scrollTop:"0px"},300)
  })


  /*下提示框*/
  $('[data-toggle="tooltip"]').tooltip();
  
})