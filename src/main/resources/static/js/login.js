var Login;
$(function () {
    Login=new Vue({
        el:"#loginform",
        data:{
            /*登录信息*/
            LoginInfor:{
                username:"",
                password:"",
            },
            /*注册信息*/
            registerinfor:{
                /*注册信息各字段与前端双向绑定*/

            },
            email:""
        },
        mounted:function(){

        },
        methods:{
            /*验证用户登录信息是否正确*/
            userLoginJudge:function () {
                var self=this;
                
            },
            /*验证管理员登录信息是否正确*/
            manaLoginJudge:function () {
                var self=this;
                 
            },
            /*注册信息提交*/
            registerInfor:function () {
                
            },
            /*找回密码信息*/
            backInfor:function () {
                var self=this;
                /*根据邮箱数据双向绑定传至后端*/
            }
        }
    });
});