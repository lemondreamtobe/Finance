/**
 * Created by feng on 2017/7/31.
 */
$(function(){
	
	//DOM初始化
	
	//EVENT初始化
	$('#login').on('click', function() {

	    //
    });
	$('#register').on('click', function() {
	    var register = new Login();
	    register.register();
    });

});
function Login() {
    this.user = $('#user').val();
    this.key  = $('#key').val();
};
Login.prototype = {
    constructor : Login,
    login : function () {
        
    },
    register : function () {
        $.gmModelDialog({
            title: "注册",
            dragEnabled: true,
            iframeUrl: '/Finance/register/register.html',
            width: 408,
            height: 400
        });
    }
};
function closeDia() {
    $.gmModelDialog("destory");
};