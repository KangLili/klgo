var regUname=/^\w{6,8}$/g;
var regUpwd=/^\w{6,18}$/g;
var regPhone=/^1{1}([3,8]{1})(\w{9}$)/g;
//用户名验证
$("input.uname").focus(function(){//获得焦点
	$(".un").removeClass("hidden");
	$(".item .un").html("请输入6~8位字母或数字");
	$(".item .icon").css("background","none");
})
$("input.uname").blur(function(){//失去焦点
	 var v=$("input.uname").val();
	 var c=regUname.test(v);
	 if(v===""){
		$(".ficon").css("background","url(../shp/imgs/regist.png) no-repeat -50px -50px");
		$(".un").html("用户名不能为空");
	 }else if(!c){
		$(".un").html("用户名格式不正确");
		$(".ficon").css("background","url(../shp/imgs/regist.png) no-repeat 0px -95px");
	 }else{
	    $(".un").html("用户名正确");
		$(".ficon").css("background","url(../shp/imgs/regist.png) no-repeat 0px -40px");
	 }
});
//密码验证
$("input.upwd").focus(function(){//获得焦点
	$(".pw").removeClass("hidden");
	$(".item .pw").html("请输入6~18位字母或数字");
	$(".item .sicon").css("background","none");
})
$("input.upwd").blur(function(){//失去焦点
	 var v=$("input.upwd").val();
	 var p=regUpwd.test(v);
	 if(p===""){
		$(".sicon").css("background","url(../shp/imgs/regist.png) no-repeat -50px -50px");
		$(".pw").html("用户名不能为空");
	 }else if(!p){
		$(".pw").html("用户名格式不正确");
		$(".sicon").css("background","url(../shp/imgs/regist.png) no-repeat 0px -95px");
	 }else{
	    $(".pw").html("用户名正确");
		$(".sicon").css("background","url(../shp/imgs/regist.png) no-repeat 0px -40px");
	 }
});
//手机号验证
$("input.uphone").focus(function(){
	$(".pho").removeClass("hidden");
	$(".item .pho").html("请输入手机号");
	$(".item .oicon").css("background","none");
})
$("input.uphone").blur(function(){
	 var v=$("input.uphone").val();
	 var p=regPhone.test(v);
	 if(p===""){
		$(".oicon").css("background","url(../shp/imgs/regist.png) no-repeat -50px -50px");
		$(".pho").html("用户名不能为空");
	 }else if(!p){
		$(".pho").html("用户名格式不正确");
		$(".oicon").css("background","url(../shp/imgs/regist.png) no-repeat 0px -95px");
	 }else{
	    $(".pho").html("用户名正确");
		$(".oicon").css("background","url(../shp/imgs/regist.png) no-repeat 0px -40px");
	 }
});
//$("#btn-register").onclick=function(){
//	if(input.uname==true&&input.upwd==true&&input.phone==true){
//	//	alert("注册成功");
//		console.log("sdfdf");
//		//location.herf='login.html';
//	}
//}
$("#btn-register").click(function(){
	var n = $('#uname').val();
	var p = $('#upwd').val();
	$.ajax({
		type: 'POST',
		url: 'data/register.php',
		data:{"uname":n,"upwd":p},
		success: function(obj){
			if(obj===1){
				alert('新用户注册成功！3s自动跳转到登录页');
				location.href = 'login.html';
			}else {
				alert('新用户注册失败！错误消息：'+obj.msg);
			}
		},
		error: function(){
			alert('异步请求失败！')
		}
	});
})
