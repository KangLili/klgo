/**
 * Created by bjwsl-001 on 2017/3/9.
 */
$(function(){
  $('#site_header').load('data/header.php',function(){
    $('#welcome').html('欢迎回来：'+sessionStorage['LoginUname']);
  });
  $('#site_footer').load('data/footer.php');
});
//放大镜
var preview= {
  LIWIDTH: 64,
  $ul: null,
  moved: 0,
  $mask: null,
  MSIZE: 226,
  SMAIZE:452,
  MAX: 0,
  $lg: null,
  init(){
    this.MAX=this.SMAIZE-this.MSIZE;
    this.$ul=$("#icon_list");
    $("#preview>h1>a").click(function(e){
      if(!$(e.target).is("[class$='_disabled']")){
        if($(e.target).is(".forward")){
          this.$ul.css("left",parseFloat(this.$ul.css("left"))-this.LIWIDTH);
          this.moved++;
        }else{
          this.$ul.css("left",parseFloat(this.$ul.css("left"))+this.LIWIDTH);
          this.moved--;
        }
        this.checkA();
      }
    }.bind(this));
    this.$ul.on("mouseover","li>img",function(){
      var src=$(this).attr("src");
      var i=src.lastIndexOf(".");
      src=src.slice(0,i)+"-m"+src.slice(i);
      $("#mImg").attr("src",src);
    });
    this.$mask=$("#mask");
    this.$lg=$("#largeDiv");
    $("#superMask")
      .hover(function(){
        this.$mask.toggle();
        this.$lg.toggle();
        var src=$("#mImg").attr("src");
        var i=src.lastIndexOf(".");
        src=src.slice(0,i-1)+"l"+src.slice(i);
        this.$lg.css("background","url("+src+")")
      }.bind(this))
      .mousemove(function(e){
        var x=e.offsetX,y=e.offsetY;
        var top=y-this.MSIZE/2;
        left=x-this.MSIZE/2;
        if(top<0) top=0;
        else if(top>this.MAX) top=this.MAX;
        if(left<0) left=0;
        else if(left>this.MAX)  left=this.MAX;
        this.$mask.css({top,left});
        this.$lg.css("backgroundPosition",`${-2.2*left}px ${-2.2*top}px`)
      }.bind(this));
  },
  checkA(){
    if(this.moved==0){
      $("[class^='backward']").attr("class","backward_disabled")
    }else if(this.$ul.children().size()-this.moved==5){
      $("[class^='forward']").attr("class","forward_disabled")
    }else{
      $("[class^='backward']").attr("class","backward");
      $("[class^='forward']").attr("class","forward");
    }
  }
}
preview.init();




//标签切换
$("#rt_produte>.fav_suit>.main_cab")
			.on("click","li:not(.current)",function(){
				$(this).addClass("current")
					   .siblings().removeClass("current");
				var $divs=$("#product_detail>[id^='product']");
				$divs.removeClass("show")
				if(!$(this).is(":contains('购物指南')")){
					var i=$(this).index("#rt_produte>.fav_suit>.main_cab>li:not(:contains('购物指南'))");
					$divs.eq(i).addClass("show")
				}
			})