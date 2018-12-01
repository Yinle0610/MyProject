/**
 * Created by Administrator on 2018/10/14.
 */
$(function () {
    $(".icheckbox_flat-grey").click(function(){
        $(this).toggleClass("checked");
    });
    $("#regBtn").click(function (e) {
        $(".hole").toggle();
    });

})