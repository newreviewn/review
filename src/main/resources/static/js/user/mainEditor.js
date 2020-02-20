$(function () {
    /*模态框隐藏*/
    $("#main_advice").hide();
    $("#main_information").hide();
    $("#main_watch_other").hide();

    /*点击按钮弹出模态框*/
    $("#infor").click(function () {
        $("#main_information").show();
    });
    $("#editor").click(function () {
        $("#main_advice").show();
    });
    $("#watch").click(function () {
        $("#main_watch_other").show();
    });

    /*点击按钮移出模态框*/
    //稿件信息
    closeModel("close","error","#main_information");
    //意见评审
    closeModel("close_ad","error_ad","#main_advice");
    //意见查看
    closeModel("close_wt","error_wt","#main_watch_other");


    /*点击按钮移出模态框*/
    function closeModel(close,error,id) {
        let closemodel=document.getElementById(close);
        let errormodel=document.getElementById(error);
        closemodel.onclick=errormodel.onclick=function () {
            $(id).hide();
        };
    }

});