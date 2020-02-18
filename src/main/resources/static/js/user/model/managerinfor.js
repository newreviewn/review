$(function () {
    /*编辑脚本隐藏*/
    $("#exitdiv").hide();
    var managerinfor=new Vue({
        el:'#managerinfor',
        data:{

        },
        mounted:function () {
            this.query();
        },
        methods:{
            query:function () {
                var self=this;
            },

            /*改变个人信息浏览状态为编辑状态*/
            exchageexit:function () {
                $("#showdiv").hide();
                $("#exitdiv").show();
            },

            /*编辑个人信息提交*/
            exitsubmit:function () {
                var self=this;

            }
        }
    });
});