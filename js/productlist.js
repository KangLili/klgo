$(function(){
  $('#site_header').load('data/header.php');
  $('#site_footer').load('data/footer.php');
})
function loadProduct(pno){
  $.ajax({
    url: 'data/2_productlist.php?pageNum='+pno,
    success: function(pager){
      var html = '';
      $.each(pager.data, function(i, p){
        html += `
         <li>
            <a href="#"><img src="${p.pic}"/></a>
            <span>${p.pname}</span><br>
            <b>￥${p.price}</b><s>￥${p.pold}</s><br>
             <a href="${p.pid}" class="addcar"><i></i>加入购物车</a>
            </li>
        `;
      });
      $('#plist ul').html(html);
      var html = '';
      if(pager.pageNum-2>0){
        html += `<li><a href="${pager.pageNum-2}">${pager.pageNum-2}</a></li> `;
      }
      if(pager.pageNum-1>0){
        html += `<li><a href="${pager.pageNum-1}">${pager.pageNum-1}</a></li> `;
      }
      html += `<li class="active"><a href="#">${pager.pageNum}</a></li> `;
      if(pager.pageNum+1<=pager.pageCount){
        html += `<li><a href="${pager.pageNum+1}">${pager.pageNum+1}</a></li> `;
      }
      if(pager.pageNum+2<=pager.pageCount){
        html += `<li><a href="${pager.pageNum+2}">${pager.pageNum+2}</a></li> `;
      }
      $('ol.pager').html(html);
    },
    error: function(){
      alert('异步请求商品列表出错！请检查响应消息');
    }
  });
}

/**功能点3：页面加载完后，异步请求产品列表**/
$(function(){
  loadProduct(1);
});

/**功能点4：为分页条中超链接绑定监听，实现异步分页请求**/
$('ol.pager').on('click', 'li a', function(e){
  e.preventDefault();
  var pno = $(this).attr('href');
  loadProduct(pno);
});

/**功能点5：为每个商品下面的li绑定监听——事件代理**/
$('#plist').on('click','ul>li>a:first-child',function(e){
  e.preventDefault();
  location.href='detail.html';
});


