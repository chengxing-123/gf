$(function(){

	if(location.search.indexOf("pid=")!=-1){

	 var pid=location.search.split("=")[1];
	 $.ajax({
			 url:"http://127.0.0.1:3000/shop/shop",
			 type:"get",
			 data:{pid},
			 success:function(result){
				 console.log(result);
				 var html="";
			   for(var item of result){
				   html+=`<li>
		   <a href="shopping_cart.html?pid=${item.pid}">
			 <div class="list_bottom_img">
				<img src="${item.pic}" alt="">
			 </div>
			 <h5>${item.title}</h5>
			 <p>￥<span>${item.price.toFixed(2)}</span></p>
		   </a>
		   <div class="list_cart">
			 <a href="shopping_cart.html?pid=${item.pid}">加入购物车</a>
		   </div>
		 </li>`

			   }
			   $(".footer_list_bottom").html(html);


			 }
	 })
	
	}else if(location.search.indexOf("lid=")!=-1){
	   var lid=location.search.split("=")[1];
	   $(".footer_list_bottom").html(`<p class="data_none">暂无相关数据</p>`);
   
	}
	var total=0;

   loadCart();
	   
   function loadCart(){



	   var list=[];
	   $.ajax({
			   url:"http://127.0.0.1:3000/shop/items",
			   type:"get",
			   success:function(result){
				   result.reverse();
				   $.ajax({
					   url:"http://127.0.0.1:3000/shop/itemsLid",
					   type:"get",
					   success:function(res){
						   res.reverse();
						   if(location.search.indexOf("pid=")!=-1){
							   list=(result.concat(res));
						   }else{
							   list=(res.concat(result));
						   }
							  var html="";
							   var total=0;
							   for(var item of list){
								   var {iid,md,specs,title,price,count}=item;
								   
								// if($(".ipt>.checkbox>span").hasClass("span_img")){
								// 	total+=price*count
								// }   
								   html+=`<div class="cart-list-item">
								            <div class="cart-shop-name">
										   <ul>
											   <li class="ipt">
												   <label class="checkbox">
												   <input type="checkbox" name="chk" vlaue="1">
												   <span></span>
											   </label>
											   </li>
											   <li class="img">
												   <a href="">
													   <img src="${md} " alt="">
												   </a>
											   </li>
											   <li class="txt">
												   <h5>${title}</h5>
												   <p>商品类型: ${specs}</p>
											   </li>
											   <div class="clear"></div>
										   </ul>
								   </div>
								   <div class="cart-shop-price">
									   <p>￥<span>${price*count.toFixed(2)}</span></p>
								   </div>
								   <div class="cart-shop-num">
									   <a href="" data-iid=${iid}>-</a>
									   <input type="text" value=${count}>
									   <a href="" data-iid=${iid}>+</a>
								   </div>	
								   <div class="cart-shop-active">
									   <a href=""data-iid=${iid}>删除</a>
									   
								   </div>
								   
							   </div>	
							   `
						   
						   }
							$(".cart_list").html(html);
							//$(".total>label>span").html(total.toFixed(2));



							$(".cart_list").on("click",".ipt>.checkbox>span",function(e){
								e.preventDefault();
								$(this).toggleClass("span_img");
								if($(this).hasClass("span_img")){
									if($(".span_img").length==list.length){
										$(".clearfix1>.ipt>.checkbox>span").addClass("span_img");
									}
										
									}else{

									if($(".clearfix1>.ipt>.checkbox>span").hasClass("span_img")){
										
										$(".clearfix1>.ipt>.checkbox>span").removeClass("span_img");
									}
								}
							  
								if($(this).hasClass("span_img")){
								var context=parseInt($(this).parent().parent().parent().parent().next().children().children().html());
								total+=context;
								console.log(total);	
								$(".total>label>span").html(total.toFixed(2));
								}else if(total>0){
									var context=parseInt($(this).parent().parent().parent().parent().next().children().children().html());
									total-=context;	
									$(".total>label>span").html(total.toFixed(2));
									
								}
						
							
						
								
							})













                           $(".clearfix1>.ipt>.checkbox>span").click(function(e){

                               total=0;
								e.preventDefault();
								$(this).toggleClass("span_img");
								if($(this).hasClass("span_img")){
									$(".ipt>.checkbox>span").addClass("span_img");

								}else{
									$(".ipt>.checkbox>span").removeClass("span_img");
								}

								for(var item of list){
									var {price,count}=item;
									if($(".ipt>.checkbox>span").hasClass("span_img")){
									total+=price*count
								     }else{
										 total=0;
									 } 
								}
								$(".total>label>span").html(total.toFixed(2));


								

								
							

						})

							
								
						 }
	               })   

			   }
        })
   
			      
   }
 
	$(".cart_list").on("click",".cart-shop-num>a",function(e){
		e.preventDefault();
		$btn=$(this)
		var iid=$btn.attr("data-iid");
		var count=$btn.siblings("input").val();
		if($btn.html()=="+"){
			count++
		}else{
			count--
		}
		$.ajax({
			url:"http://127.0.0.1:3000/shop/update",
			data:{iid,count},
			type:"get",
			success:function(){
				loadCart()
			}
			
		})
		
		
	})

	$(".cart_list").on("click",".cart-shop-active>a:first-child",function(e){
		e.preventDefault();
		var iid=$(this).attr("data-iid");
		$.ajax({
			url:"http://127.0.0.1:3000/shop/delete",
			type:"get",
			data:{iid},
			success:function(){
				loadCart();
			}
			
		})
	})
 

	// $(".cart_list").on("click",".ipt>.checkbox>span",function(e){
	// 	e.preventDefault();
	// 	$(this).toggleClass("span_img");
	// 	if($(this).hasClass("span_img")){
				
	// 		}else{
	// 		if($(".clearfix1>.ipt>.checkbox>span").hasClass("span_img")){
				
	// 			$(".clearfix1>.ipt>.checkbox>span").removeClass("span_img");
	// 		}
	// 	}
      
	// 	if($(this).hasClass("span_img")){
	// 	var context=parseInt($(this).parent().parent().parent().parent().next().children().children().html());
	// 	total+=context;
	// 	console.log(total);	
	// 	$(".total>label>span").html(total.toFixed(2));
	// 	}else if(total>0){
	// 		var context=parseInt($(this).parent().parent().parent().parent().next().children().children().html());
	// 		total-=context;	
	// 		$(".total>label>span").html(total.toFixed(2));
			
	// 	}

	

		
	// })

	


})