var ReaderData;
$(function () {
    ReaderData = new Vue({
        el: "#reader",
        data: {
            /*审稿人信息*/
            queryForm: [],
            /*工作中编辑ID*/
            editorID: "",
            /*当前操作稿件ID*/
            appID:""
        },
        mounted: function () {
            var self = this;
            self.query();
            self.getappID();
        },
        methods: {
            /*查询审稿人信息*/
            query: function () {
                var self = this;

            },
            /*获取当前审核的稿件ID*/
            getappID:function () {
                var self=this;
                $.ajax({
                    type: "POST",
                    contentType: 'application/json; charset=utf-8',
                    url:"/getArtID",
                    success:function (resp) {
                        if(resp!==null){
                            self.appID=resp;
                        }else {
                            Swal.fire({
                                title: "失败!",
                                text:"稿件信息丢失，请重试",
                                icon: "error",
                                showCancelButton: true,
                                confirmButtonText: '关闭',
                                cancelButtonText: '查看原因',
                            });
                        }
                    }

                })
            },
            /*选择审稿人信息提交*/
            readerSel:function () {
                var self=this;
                /*根据编辑ID以及稿件ID提交*/
            }
        }
    });
});