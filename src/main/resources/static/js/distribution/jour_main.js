$(function () {
    $("#select_main").hide();
    /*单个稿件发送*/
    $("#sel_main").click(function () {
        $("#select_main").show();
    });
    /*同一发送按钮*/
    $("#comsend").click(function () {
        $("#select_main").show();
    });

    /*选择主编*/
    closeModel("close_jour_main","error_sel","#select_main");
    /*点击按钮移出模态框*/
    function closeModel(close,error,id) {
        let closemodel=document.getElementById(close);
        let errormodel=document.getElementById(error);
        closemodel.onclick=function () {
            $(id).hide();
        };
        errormodel.onclick=function () {
            $(id).hide();
        };
    }
});