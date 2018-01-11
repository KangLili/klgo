/**
 * Created by bjwsl-001 on 2017/3/4.
 */
if(!sessionStorage['LoginUid']){
  location.href = "login.html";
}

/**功能点1：页面加载完后，异步请求页头和页尾**/
$(function(){
$('#site_header').load('data/header.php',function(){
  $('#welcome').html('欢迎回来：'+sessionStorage['LoginUname']);
});
$('#site_footer') .load('data/footer.php');
})

/**功能点2：页面加载完后，异步请求当前登录用户购物车中的商品**/
$.ajax({
  url: 'data/shoppingcar-list.php',
  data: {uid: sessionStorage['LoginUid']},
  success: function(data){
    var html = '';
    var html1='';
    $.each(data, function(i, p){
      html +=`
      <tr>
          <td>
            <input type="checkbox"/>
            <input type="hidden" value="${p.did}" />
            <div><img src="${p.pic}"></div>
          </td>
          <td><a href="">${p.pname}</a></td>
          ￥<td>${p.price}</td>
          <td>
            <button class="subBtn" name="${p.did}">-</button><input type="text" value="${p.count}"/><button class="addBtn" name="${p.did}">+</button>
          </td>
          <td>￥<span>${p.price*p.count}</span></td>
          <td><a href="${p.did}">删除</a></td>
      </tr>
      `;
      html1 +=`${p.price*p.count} `;
      $('#cart tbody').html(html);
      var arr= html1.split(" ");
      for (var i=0,n=0;i<arr.length-1;i++ ) {
         var p = parseInt(arr[i]);
         n += p;
      };
      $("#total").html(n);

});
    $('#cart tbody').html(html);
},
  error: function(){
    alert('购物车数据加载失败！请检查响应消息！');
  }
});
/**功能点3：为“删除”按钮绑定事件监听，实现购买详情的删除**/
$('#cart tbody').on('click', 'a:contains("删除")', function(e){
  e.preventDefault();
  var did = $(this).attr('href');
  var that = this;  //使用临时变量指向当前被点击的A
  $.ajax({
    type: 'POST',
    url: 'data/delete.php',
    data: {'did': did},
    success: function(data){
      if(data.code<0){
        alert('响应成功但删除失败！原因：'+data.msg);
      }else {
        alert('购买记录删除成功！');
        //必须手工从table中删除当前tr！
        //console.log(this); //$.ajax中的this指向请求对象
        $(that).parent().parent().remove();

        var price =$(that).parent().prev().find('span').html();
        var n1 = parseInt($("#total").html());
        n =n1 - parseInt(price);
        $("#total").html(n);
        $.get("data/delete.php?did="+did);
      }
    },
    error: function(){
      alert('购买记录删除失败！请检查响应消息！');
    }
  })
})

//功能4：+
$('#cart tbody').on('click', '.addBtn', function(e){
  var input = $(this).siblings("input");
  var v = parseInt(input.val())+1;
  input.val(v);
  var did = this.name;
 //5:发送ajax更新数据库
  var price =$(this).parent().prev('td').html();
  console.log(price);
  var new_price=price*v;
  $(this).parent().next().find('span').html(new_price);
  var n1 = parseInt($("#total").html());
  n1 += parseInt(price);
  $("#total").html(n1);

  $.get("data/update_count_add.php?did="+did);
});

//功能5：-
$('#cart tbody').on('click', '.subBtn', function(e){
  //1:获取当前元素兄弟元素input
  var input = $(this).siblings("input");
  //2:获取input中数值+1
  var v = parseInt(input.val())-1;
  //3:保存回input
  if(v>=1){
    input.val(v);

  //4:发送ajax请求更新数据库
  //获取购物车中明细表的id
  var did = this.name;
  //5:发送ajax更新数据库
  var price = $(this).parent().prev('td').html();
  var new_price = price*v;
  $(this).parent().next().find('span').html(new_price);
    var n1 = parseInt($("#total").html());
    n1 -= parseInt(price);
    $("#total").html(n1);
    $.get("data/update_count_sub.php?did="+did);
  }
});