$(function () {
    //隐藏处理稿件模态框
    $("#dailypage").hide();
    //隐藏处理信息模态框
    $("#information").hide();



    var dailypage=new Vue({
        el:'#daily',
        data:{
            /*稿件点击后暂时值*/
            artTempName:"",
            artname:["稿件名称"]

        },
        mounted:function () {
            this.query();
            /*点击按钮关闭模态框*/
            $("#close_daily").click(function () {
                $("#dailypage").hide();
            });
            $("#error_daily").click(function () {
                $("#dailypage").hide();
            });
            $("#close_infor").click(function () {
                $("#information").hide();
            });
            $("#error_infor").click(function () {
                $("#information").hide();
            });
        },
        methods:{
            //查询数据
            query:function () {
                var self=this;
            },

            //点击后将文章名称传给模态框
            tempclick:function (name) {
                var self=this;
                console.log(name);
                self.artTempName=name;
                $("#dailypage").show();
            },

            //稿件信息处理框
            artinforclick:function () {
                var self=this;
                $("#information").show();
            }
        }
    })
});