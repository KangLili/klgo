$('#btn-login').click(function(){
	var n=$('[name="uname"]').val();
	var p=$('[name="upwd"]').val();
	$.ajax({
		type:'POST',
		url:'data/login.php',
		data:{uname:n,upwd:p},
		success:function(data){
			if(data.code<0){ 
			 $('p.alert').html(data.msg);
			 }else {
				location.href='index.html';
				$('#welcome').html('欢迎回来：'+data.uname);
				sessionStorage['LoginUname'] = data.uname;
				sessionStorage['LoginUid'] = data.uid;

      }
		},
		error:function(){
			alert('响应有问题，请检查Network！')
		}
	})
})
