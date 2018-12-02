$(function(){
  if(location.search.indexOf("pid=")!=-1){
     var pid=location.search.split("=")[1];
     $.ajax({
          url:"http://127.0.0.1:3000/details/details",
          type:"get",
          data:{pid},
          success:function(result){
            console.log(result);
            var {product,pics,specs,fname}=result;
            var {title,subtitle,price,oldPrice,dcount,sell,traffic,eval}=product;
            console.log(title);
            $(".parmas_title").html(title);
            $(".shoplist_right>.shop-title").html(title);
            $(".shoplist_right>.shop-title>span").html(subtitle);
            $(".price0>.labe2").html(`￥${oldPrice.toFixed(2)}`);
            $(".price0>.labe3").html(dcount.toFixed(1)+ "折");
            $(".price1>.label2").html(`￥${price.toFixed(2)}`);
            $(".shoplist_right>.clearfix>li:nth-child(2)>span").html(sell);
            $(".shoplist_right>.clearfix>li:nth-child(1)>span").html(traffic);
            $(".shoplist_right>.clearfix>li:nth-child(3)>span").html(eval);
            $(".shop_but>li").click(function(e){
              e.preventDefault();
              $.ajax({
                url:"http://127.0.0.1:3000/user/islogin",
                type:"get",
                dataType:"json",
                success:function(result){
                  if(result.ok==0){
                     alert("请先登录");


                  }
                  else{
                    var count=$(".shop-num>ul>li:nth-child(2)").html()
                    var specs=decodeURI($(".icon_none").prev().html());
                    console.log(specs);
                    // if(specs!=undefined){ 
                      
                    //   $.ajax({
                    //   	url:"http://127.0.0.1:3000/shop/cart",
                    //   	type:"get",
                    //     data:{pid,count,specs},
                    //     success:function(){
                    //       location.href=`/shop_cart.html?pid=${pid}`;
                    //     }
                   
                    // })
                    // }else{
                    //   alert("请选择商品类型");
                      
                    // }
                    $.ajax({
                      	url:"http://127.0.0.1:3000/shop/cart",
                      	type:"get",
                        data:{pid,count,specs},
                        success:function(){
                          location.href=`/shop_cart.html?pid=${pid}`;
                        }
                   
                    })
                   
                  }

                }
              })
              
             
            })

            var html="";
            for(var item of specs ){
              html+=`<li>
            
            <span>${item.specs}</span>
             <i class="icon "></i>
          </li>`;

            }
        var ul=$(".shop-specs>ul");
        ul.html(html);

        $(".shop-specs>ul").on("click","li",function(){
          var li=$(this);


           li.children('i').addClass('icon_none');
           li.siblings('li').children("i").removeClass('icon_none');

        })

        var html="";
        html=`<a href="/index.html">好花首页</a>
        <span>&gt;</span>
        <a href="/products.html?kwords=${fname[0].fname}" title="${fname[0].fname}">${fname[0].fname}</a>
        <span>&gt;</span>
        ${title}`
        $(".shop_wrap_sub").html(html);

          var html="";
          for(var item of pics){
            html+=`<li> <img src="${item.pics}"  alt=""></li> `
          }
          $(".shoplist_left>.shop-preview-item").html(html);

          var mImg=$(".shop_video_pic>img");
          mImg.prop("src",pics[0].pics);
          $(".lg_pic").css("backgroundImage",`url(${pics[0].pics})`);
          
          $(".shoplist_left>.shop-preview-item").on("mouseover","img",function(){
            
            var img=$(this);
            var md=img.attr("src");
            var lg=img.attr("src");
            mImg.prop("src",md);
            $(".lg_pic").css("backgroundImage",`url(${lg})`);

            

          })
          var lImg=$(".lg_pic1");
          var mask=$(".mask");
          var smask=$(".supermask");
          smask.hover(
            function(){
              mask.show();
              lImg.show();
            

          },
          function(){
            mask.hide();
            lImg.hide();
            
          }
        )
        var mwidth=200;
        maxWidth=468-mwidth;
        smask.mousemove(function(e){
        
          var left=e.offsetX-mwidth/2;
          var top=e.offsetY-mwidth/2;
          if(left<0){
            left=0
          }else if(left>maxWidth){
            left=maxWidth;
          }
          if(top<0){
            top=0
          }else if(top>maxWidth){
            top=maxWidth;
          }
          mask.css({left,top});
          $(".lg_pic").css("background-position",`-${left}px -${top}px`);
          
        })

            }
        
     })

     

      
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
       $.ajax({
        url:"http://127.0.0.1:3000/details/list",
        type:"get",
        data:{lid},
        success:function(result){
          console.log(result);
        
          var {product,pics,specs,fname}=result;
          var {title,subtitle,price,oldPrice,dcount,sell,traffic,eval}=product;
          console.log(title);
          $(".parmas_title").html(title);
          $(".shoplist_right>.shop-title").html(title);
          $(".shoplist_right>.shop-title>span").html(subtitle);
          $(".price0>.labe2").html(oldPrice.toFixed(2));
          $(".price0>.labe3").html(dcount.toFixed(1)+ "折");
          $(".price1>.label2").html(`￥${price.toFixed(2)}`);
          $(".shoplist_right>.clearfix>li:nth-child(2)>span").html(sell);
          $(".shoplist_right>.clearfix>li:nth-child(1)>span").html(traffic);
          $(".shoplist_right>.clearfix>li:nth-child(3)>span").html(eval);

           $(".shop_but>li").click(function(e){
              e.preventDefault();
              $.ajax({
                url:"http://127.0.0.1:3000/user/islogin",
                type:"get",
                dataType:"json",
                success:function(result){
                  if(result.ok==0){
                    alert("请先登录");
                  }
                  else{
                    var count=$(".shop-num>ul>li:nth-child(2)").html()
                    var specs=decodeURI($(".icon_none").prev().html());
                    $.ajax({
                        url:"http://127.0.0.1:3000/shop/cart",
                        type:"get",
                        data:{lid,count,specs},
                        success:function(){
                          location.href=`/shop_cart.html?lid=${lid}`;
                        }
                   
                      })
                   
                  }

                }
              })
              
             
            })


          var html="";
          for(var item of specs ){
            html+=`<li>
          
          <span>${item.specs}</span>
           <i class="icon "></i>
        </li>`;

          }
      var ul=$(".shop-specs>ul");
      ul.html(html);

       $(".shop-specs>ul").on("click","li",function(){
          var li=$(this);


           li.children('i').addClass('icon_none');
           li.siblings('li').children("i").removeClass('icon_none');

        })

      var html="";
      html=`<a href="/index.html">好花首页</a>
      <span>&gt;</span>
      <a href="/products.html?kwords=${fname[0].fname}" title="${fname[0].fname}">${fname[0].fname}</a>
      <span>&gt;</span>
      ${title}`
      $(".shop_wrap_sub").html(html);

        var html="";
        for(var item of pics){
          html+=`<li> <img src="${item.pics}"  alt=""></li> `
        }
        $(".shoplist_left>.shop-preview-item").html(html);

        var mImg=$(".shop_video_pic>img");
        mImg.prop("src",pics[0].pics);
        $(".lg_pic").css("backgroundImage",`url(${pics[0].pics})`);
        
        $(".shoplist_left>.shop-preview-item").on("mouseover","img",function(){
          
          var img=$(this);
          var md=img.attr("src");
          var lg=img.attr("src");
          mImg.prop("src",md);
          $(".lg_pic").css("backgroundImage",`url(${lg})`);

          

        })
        var lImg=$(".lg_pic1");
        var mask=$(".mask");
        var smask=$(".supermask");
        smask.hover(
          function(){
            mask.show();
            lImg.show();

        },
        function(){
          mask.hide();
          lImg.hide();
        }
      )
      var mwidth=200;
      maxWidth=468-mwidth;
      smask.mousemove(function(e){
      
        var left=e.offsetX-mwidth/2;
        var top=e.offsetY-mwidth/2;
        if(left<0){
          left=0
        }else if(left>maxWidth){
          left=maxWidth;
        }
        if(top<0){
          top=0
        }else if(top>maxWidth){
          top=maxWidth;
        }
        mask.css({left,top});
        $(".lg_pic").css("background-position",`-${left}px -${top}px`);
        
      })

          }
          
      
    })

     
    $(".footer_list_bottom").html(`<p class="data_none">暂无相关数据</p>`);
  }






  $(".shop-num>ul").on("click","a",function(e){
      e.preventDefault();
      $a=$(this);
      var  $input=$(".shop-num>ul>li:nth-child(2)");
       var n=$input.html();
      if($a.parent().is(":first-child")){
       
       if(n>1){
         n--
       }else{
         n=1;
       }

      }else if($a.parent().is(":last-child")){
        n++;

      }
      $input.html(n);


  })


 
  $(".promise_menu>ul").on("mouseover","li",function(e){
    
    e.preventDefault();
   var n=$(this).index();
   
   $(".promise_img>ul>li>img").prop("src",`img/shopping_cart/fwbz${n+1}.png`);
  


   

    
  })

  $.ajax({
    url:"http://127.0.0.1:3000/details/product",
    type:"get",
    success:function(result){
      var html="";
      console.log(result);
      for(var item of result){
        var {pid,title,price,sell,md}=item;
        html+=` <li>
        <a href="shopping_cart.html?pid=${pid}" title="商品">
          <div class="details_pic">
            <img src=${md} alt="">
          </div>
          <div class="details_text">
            <h5>${title}</h5>
            <p>￥${price.toFixed(2)} <span id="details_text1">已售 ${sell} 件</span></p>
          </div>
        </a>
      </li>`
        
      }
      $(".nav_details").html(html);

    }
  })

})