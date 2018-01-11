/**
 * Created by bjwsl-001 on 2017/3/4.
 */
/**1：为“添加到购物车”绑定事件**/
$(document.body).on('click', '.addcar', function(e){
  e.preventDefault();
  //if(sessionStorage['LoginUid']){
  //  $(".modal").hide();
  //}
  //else{
  //  $(".madal").show();
  //}
  var pid = $(this).attr('href');
  $.ajax({
    type: 'POST',
    url: 'data/car-add.php',
    data: {'uid': sessionStorage['LoginUid'], 'pid': pid},
    success: function(data){
      if(data.code<0){
        //alert('添加失败！错误原因：'+data.msg);
        $('.modal').show();
        $('.modal').on('click','#continue',function(e){
          e.preventDefault();
          location.href="productlist.html";
      })
      }else {
        alert('添加成功！该商品已购买：'+data.count);
        $(".modal").hide();
      }
    },
    error: function(){
      alert('添加购物车商品出错！请检查响应消息！');
    }
  });
});

/**2：为“我的购物车”绑定事件监听**/
$(document.body).on('click', '#settle_up', function(){
      document.cookie = 'loginUname='+sessionStorage['LoginUname'];
      document.cookie = 'loginUid='+sessionStorage['LoginUid'];
     location.href ='shoppingcar.html';
});
