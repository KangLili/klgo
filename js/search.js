/**
 * Created by bjwsl-001 on 2017/3/3.
 */
searchKW.onkeyup= function() {
  var kw = this.value;
  if (!kw) {
    suggest.style.display = 'none';
    return;
  }
  $.ajax({
    url: 'data/search.php',
    data:{kw:kw},
    success: function (data) {
      $("#suggest").html(data);
      suggest.style.display = 'block';
    },
    error: function () {
      alert('响应有问题，请检查Network！')
    }
  })
}
$("#suggest").on('click','li',function(){
  console.log("111");
  location.href='productlist.html';
})
