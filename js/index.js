//图片轮播
var imgs=[
	{"i":0,"img":"imgs/banner1.png"},
    {"i":1,"img":"imgs/banner2.png"},
    {"i":2,"img":"imgs/banner3.png"},
    {"i":3,"img":"imgs/banner4.png"},
];
var slider={
  LIWIDTH:800,
  $ulImgs:null,
  $ulIdxs:null,
  DURATION:500,
  WAIT:3000,
  moved:0,
  init(){
    var me=this;
    me.$ulImgs=$("#imgs");
    me.$ulIdxs=$("#indexs");
    me.initView();
    me.autoMove();
    $("#slider").hover(function(){
      me.$ulImgs.stop(true);
    },function(){
		me.$ulImgs.stop(true);
		me.autoMove();
    });
   me.$ulImgs.on("mouseover","li>img",function(e){
      var $tar=$(e.target);
      var i=$tar.index("#imgs img");
	  me.moved=i;
      (me.moved==imgs.length)&&(me.moved=0);
      me.$ulImgs.css("left",-me.moved*me.LIWIDTH);
      me.changeHover();
    });
    me.$ulIdxs.on("mouseover","li",function(e){
      var $tar=$(e.target);
      if(!$tar.is(".hover")){
        var endi=$tar.index("#indexs>li");
        //var starti=$(".hover").index("#indexs>li");
        me.moved=endi;
        me.changeHover();
        me.$ulImgs.stop(true).animate({
          left:-me.moved*me.LIWIDTH
        },me.DURATION);
      }
    });
  },
  autoMove(){
    var me=this;
    me.moved++;
    me.$ulImgs.animate({"null":1},me.WAIT,
      function(){
        me.$ulImgs.animate({
          left:-me.moved*me.LIWIDTH
        },me.DURATION,function(){
          if(me.moved==imgs.length){
            me.$ulImgs.css("left",0);
            me.moved=0;
          }
          me.changeHover();
          me.autoMove();
        });
    });
  },
  changeHover(){
    this.$ulIdxs.children()
        .eq(this.moved).addClass("hover")
        .siblings().removeClass("hover");
  },
  initView(){
    for(var i=0,htmlImgs="",htmlIdxs="";
        i<imgs.length;
        i++){
      htmlImgs+=
        `<li><img src='${imgs[i].img}'></li>`
      htmlIdxs+=
        `<li>${i+1}</li>`
    }
    this.$ulImgs.html(htmlImgs)
        .css("width",(imgs.length+1)*this.LIWIDTH);
    this.$ulImgs.append(
      this.$ulImgs.children(":first").clone());
    this.$ulIdxs.html(htmlIdxs);
    this.$ulIdxs.children(":first")
                .addClass("hover");
  }
}
slider.init();

//变更登录名
//if(sessionStorage['LoginUname']){
//  window.onload= function(){
//      $('#welcome').html('欢迎回来：'+sessionStorage['LoginUname']);
//    }
//}
window.onload= function() {
  if (sessionStorage['LoginUname']) {
    $('#welcome').html('欢迎回来：' + sessionStorage['LoginUname']);
  }
}

//弹出框
$(".item").hover(function(){
  $(this).children('.sub-cate').toggle()
});

//品牌商标的图片翻转
$(function(){
  var $animate = $('#animate');
  var $opposite = $('#opposite');
  $(".well-item").hover(function(){
    $(this).find(".correct").children().removeClass();
    $(this).find(".opposite").children().removeClass();
    $(this).find(".correct").children().addClass("test");
    $(this).find(".opposite").children().addClass('test2');
  },function(){
    $(this).find(".correct").children().removeClass();
    $(this).find(".opposite").children().removeClass();
    $(this).find(".correct").children().addClass("test2");
    $(this).find(".opposite").children().addClass('test');
  });
});

//鼠标悬停图片放大
$(function(){
  var img=$('.lc_rt>dl>dt>img');
  var w = img.width();
  var h = img.height();
  var w2 = w + 20;
  var h2 = h + 20;
  console.log(w);
  console.log(w2);
  $('.lc_rt dl dt img').hover(function(){
    $(this).stop().animate({height:h2,width:w2,left:"-20px",top:"-20px"},500);
  },function(){
    $(this).stop().animate({height:h,width:w,left:"0px",top:"0px"},500);
  });
});
$(function(){
  var img=$('.cate-item-hd img');
  var w = img.width();
  var h = img.height();
  var w2 = w + 20;
  var h2 = h + 20;
  console.log(w);
  console.log(w2);
  $('.cate-item-hd img').hover(function(){
    $(this).stop().animate({height:h2,width:w2,left:"-20px",top:"-20px"},500);
  },function(){
    $(this).stop().animate({height:h,width:w,left:"0px",top:"0px"},500);
  });
});