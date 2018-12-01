function Message(){

}

Message.prototype = {
    bindMessage: function () {
        var str = '';
            str += '<tr><th><input type="text" value="11233" name="dingdanhao"></th><th><input type="text"></th><th><input type="text"></th><th><input type="text"></th><th><input type="submit" value="修改">&nbsp;&nbsp;&nbsp;&nbsp;<input type="submit" value="删除"></th></tr>';
            $("tr input:first").html();
            $("tr:last").after(str);
    }
};

var message = new Message();
$("#add").click(function () {
    message.bindMessage();
});

$("#change").click(function () {

    /*$("#num").val(num);*/
});