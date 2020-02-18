$(function () {

    /*模态框隐藏*/
    $("#information").hide();
    $("#watch_other").hide();

    /*点击按钮弹出模态框*/
    $("#infor").click(function () {
        $("#information").show();
    });

    $("#watch").click(function () {
        $("#watch_other").show();
    });

    /*点击按钮移出模态框*/
    //稿件信息
    closeModel("close","error","#information");
    //意见查看
    closeModel("close_wt","error_wt","#watch_other");



    /*点击按钮移出模态框*/
    function closeModel(close,error,id) {
        let closemodel=document.getElementById(close);
        let errormodel=document.getElementById(error);
        closemodel.onclick=errormodel.onclick=function () {
            $(id).hide();
        };
    }


});