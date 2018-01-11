var ads=[
	{"ad":"【公告】上品折扣关于积分即将清零的通知"},
	{"ad":"【公告】元旦期间客户服务照常"},
	{"ad":"【公告】关于上品会员积分有效期 时间更改的通知"},
	{"ad":"【公告】网络订单发货更换为宅急送快递公司服务公告"},
	{"ad":"【公告】春节假期客户服务"},
	{"ad":"【公告】春节假期客户服务"},
	//{"ad":"【公告】上品折扣关于积分即将清零的通知"},
	//{"ad":"【公告】元旦期间客户服务照常"}
];
var news={
    LIHEIGHT:32,
    $ulAD:null,
    DURETION:2000,
    WAIT:2000,
    moved:0,
    init(){
	  var me=this;
	  me.$ulAD=$("#ad");
	  me.initView();
	  me.autoMove();
	  $("#news").hover(function(){
		 me.$ulAD.stop(true);
		 },function(){
	 		me.autoMove();	
	  }); 
    },
	autoMove(){
		var me=this;
		me.moved++;
		me.$ulAD.animate({"null":1},me.WAIT,
			function(){
				me.$ulAD.animate({
					marginTop:-me.moved*me.LIHEIGHT
				},me.DURATION,function(){
					if(me.moved*me.LIHEIGHT>=parseInt(me.$ulAD.css("height"))){
						me.$ulAD.css("margin-top",0);
						me.moved=0;
					}
					//$("#ad").append($("#ad li").eq(0));
					//$("#ad").append($("#ad li").eq(0));
					me.autoMove();
					});
		});
	},
	initView(){
		for(var i=0,htmlAD="";i<ads.length;i++){
			htmlAD+=`<li><a>${ads[i].ad}</a></li>`;
		}
		$("#ad").html(htmlAD);
		//this.$ulAD.append(this.$ulAD.children(":first").clone());
	}
}
news.init();