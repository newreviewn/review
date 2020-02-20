var Editor;
$(function () {
    Editor=new Vue({
        el:"#editorTable",
        data:{
            /*客户端查询条件*/
            queryform:{},
            /*稿件信息*/
            clkinformation:[],
            /*作者选择审稿人信息*/
            auth_sel_reader:[],
            /*稿件详细信息*/
            artdetail:{},
            /*编辑意见*/
            editorAdvice:{},
            /*当前操作稿件ID*/
            appID:"",
            /*当前操作的编辑用户名*/
            editorID:""
        },
        /*html页面加载结束后执行*/
        mounted:function(){
            var self=this;
            self.queryart();//稿件信息
            self.queryreader();//审稿人信息
        },
        methods:{
            /*查询稿件方法*/
            queryart:function () {
                var self=this;
                $.ajax({
                    type: "POST",
                    contentType: 'application/json; charset=utf-8',
                    url: '/user/editor',
                    success:function (result) {
                        if(result!==null){
                            self.clkinformation=result;
                        }else{
                            Swal.fire({
                                title: "失败!",
                                text:"数据请求失败",
                                icon: "error",
                                showCancelButton: true,
                                confirmButtonText: '关闭',
                                cancelButtonText: '查看原因',
                            });
                        }

                    }
                });
            },

            /*查询作者选择审稿人信息*/
            queryreader:function(){
                var self=this;
                $.ajax({
                    type: "POST",
                    contentType: 'application/json; charset=utf-8',
                    url:"/user/selreader",
                    success:function (resp) {
                        if(resp!==null){
                            self.auth_sel_reader=resp;
                        }else{
                            Swal.fire({
                                title: "失败!",
                                text:"数据请求失败",
                                icon: "error",
                                showCancelButton: true,
                                confirmButtonText: '关闭',
                                cancelButtonText: '查看原因',
                            });
                        }

                    }
                });
            },
            /*稿件详细信息*/
            detailInfor:function (data) {
                $("#information").show();
                var self=this;
                var arry= self.clkinformation;
                console.log(arry);
                for(let i=0;i<arry.length;i++){
                    if(data === arry[i].artId){
                        self.artdetail=arry[i];
                        console.log(self.artdetail);
                    }
                }
            },
            /*审稿意见存储*/
            artAdvice:function (data) {
                var self=this;
                $("#main_advice").show();
                self.appID=data;
            },

            /*审稿意见提交*/
            adviceSubmit:function () {
                var self=this;
                alert(self.editorAdvice+","+self.appID);
                /*更新数据库中的编辑信息信息*/
            },

            /*审稿人选择id存储*/
            artReader:function (data) {
                var self=this;
                $("#select_reader").show();//显示审稿人选择模块
                self.appID=data;
            },

            /*审稿人选择*/
            readerSel:function () {
                /*根据id将审稿人选择信息传输至对应稿件*/

            },
            /*将当前操作的稿件ID+用户姓名传输至后端*/
            setAppID:function () {

            }
        }
    });

    /*模态框隐藏*/
    $("#main_advice").hide();
    $("#information").hide();
    $("#watch_other").hide();

    /*点击按钮移出模态框*/
    //稿件信息
    closeModel("close","error","#information");
    //意见评审
    closeModel("close_ad","error_ad","#main_advice");
    //选择审稿人
    closeModel("close_sel","error_sel","#select_reader");

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