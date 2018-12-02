$(function(){
    if(location.search.indexOf("kwords")!=-1){
        var kwords=decodeURI(location.search.split("=")[1]);
       var pno=0;
       function loadPage(no=0){
            pno=no;
            $.ajax({
                url:"http://127.0.0.1:3000/products/products",
                type:"get",
                data:{kwords,pno},
                success:function(result){
                if(result.products.length!=0){
                var html="";
                for(var p of result.products){
                var {pid,title,price,md,dcount,sell}=p;
                html+=` <li>
                <a href="shopping_cart.html?pid=${pid}">
                    <div class="han_img"> <img src=${md} alt=""></div>
                    <h5>${title}</h5>
                    <div class="hantext_list">
                    <span class="text_price">￥${price}</span>
                    <div class="hanlow_price">${dcount}折</div>
                    <span class="han_sold">已售${sell}件</span>
                    </div>
                </a>
            </li>`
                } 
                var ul=$("#xian_list");
                ul.html(html);
            }else{
                $("#xian_list") .html(`<p class="data_none">暂无相关数据</p>`)

            }
                $(".nav_list>p").html(`热销商品`)
                
                var html="";
                for(var item of result.obj){
                    var {pid,title,price,md,sell}=item;
                    html+=` <li>
                    <a href="shopping_cart.html?pid=${pid}" title="商品">
                      <div class="details_pic">
                        <img src=${md}>
                      </div>
                      <div class="details_text">
                        <h5>${title}</h5>
                        <p>￥${price} <span id="details_text1">已售 ${sell} 件</span></p>
                      </div>
                    </a>
                  </li>`
                }
                $(".nav_details").html(html);

                $(".changepage>p>span:first-child").html(pno+1);
                $(".changepage>p>span:last-child").html(result.pageCount);
                if(pno==0){
                $(".btn>.btn1:first-child")
                .prop("disabled","disabled")
                .addClass("disabled");
                }else{
                    $(".btn>.btn1:first-child")
                    .removeClass("disabled")
                    .prop("disabled","");

                }
                if(pno==result.pageCount-1){
                    $(".btn>.btn1:last-child")
                    .prop("disabled","disabled")
                    .addClass("disabled");
                }else{
                    $(".btn>.btn1:last-child")
                    .removeClass("disabled")
                    .prop("disabled","");

                }
                    
                }
            })
       }
       loadPage();
       
        $(".btn").on("click",".btn1",function(){
            console.log(1);
            $btn1=$(this);
            if(!$btn1.is("disabled")){
                if($btn1.is(":first-child")){
                    var  no=pno-1;
                }else if($btn1.is(":last-child")){
                    var  no=pno+1;
                }
                loadPage(no);   
            }
           
        
           

        })

        $(".price_order>a>p:last-child").click(function(e){
            e.preventDefault();
            if(location.search.indexOf("kwords")!=-1){
                var pno=0;
                function loadPage(no=0){
                    pno=no;
                    $.ajax({
                        url:"http://127.0.0.1:3000/products/productsAsc",
                        type:"get",
                        data:{kwords,pno},
                        success:function(result){
                        console.log(result);
                        var html="";
                        for(var p of result.products){
                        var {pid,title,price,md,dcount,sell}=p;
                        html+=` <li>
                        <a href="shopping_cart.html?pid=${pid}">
                            <div class="han_img"> <img src=${md} alt=""></div>
                            <h5>${title}</h5>
                            <div class="hantext_list">
                            <span class="text_price">￥${price}</span>
                            <div class="hanlow_price">${dcount}折</div>
                            <span class="han_sold">已售${sell}件</span>
                            </div>
                        </a>
                    </li>`
                        } 
                        var ul=$("#xian_list");
                        ul.html(html);

                        $(".changepage>p>span:first-child").html(pno+1);
                        $(".changepage>p>span:last-child").html(result.pageCount);
                        if(pno==0){
                        $(".btn>.btn1:first-child")
                        .prop("disabled","disabled")
                        .addClass("disabled");
                        }else{
                            $(".btn>.btn1:first-child")
                            .removeClass("disabled")
                            .prop("disabled","");
        
                        }
                        if(pno==result.pageCount-1){
                            $(".btn>.btn1:last-child")
                            .prop("disabled","disabled")
                            .addClass("disabled");
                        }else{
                            $(".btn>.btn1:last-child")
                            .removeClass("disabled")
                            .prop("disabled","");
        
                        }
                            
                        }
                    })
               }
                loadPage(); 
                $(".btn").on("click",".btn1",function(){
                    console.log(1);
                    $btn1=$(this);
                    if(!$btn1.is("disabled")){
                        if($btn1.is(":first-child")){
                            var  no=pno-1;
                        }else if($btn1.is(":last-child")){
                            var  no=pno+1;
                        }
                        loadPage(no);   
                    }
                   
                
                   
        
                }) 
            }
              
          

        })

        $(".price_order>a>p:first-child").click(function(e){
            e.preventDefault();
            if(location.search.indexOf("kwords")!=-1){
                var pno=0;
                function loadPage(no=0){
                    pno=no;
                    $.ajax({
                        url:"http://127.0.0.1:3000/products/productsDesc",
                        type:"get",
                        data:{kwords,pno},
                        success:function(result){
                        console.log(result);
                        var html="";
                        for(var p of result.products){
                        var {pid,title,price,md,dcount,sell}=p;
                        html+=` <li>
                        <a href="shopping_cart.html?pid=${pid}">
                            <div class="han_img"> <img src=${md} alt=""></div>
                            <h5>${title}</h5>
                            <div class="hantext_list">
                            <span class="text_price">￥${price}</span>
                            <div class="hanlow_price">${dcount}折</div>
                            <span class="han_sold">已售${sell}件</span>
                            </div>
                        </a>
                    </li>`
                        } 
                        var ul=$("#xian_list");
                        ul.html(html);

                        $(".changepage>p>span:first-child").html(pno+1);
                        $(".changepage>p>span:last-child").html(result.pageCount);
                        if(pno==0){
                        $(".btn>.btn1:first-child")
                        .prop("disabled","disabled")
                        .addClass("disabled");
                        }else{
                            $(".btn>.btn1:first-child")
                            .removeClass("disabled")
                            .prop("disabled","");
        
                        }
                        if(pno==result.pageCount-1){
                            $(".btn>.btn1:last-child")
                            .prop("disabled","disabled")
                            .addClass("disabled");
                        }else{
                            $(".btn>.btn1:last-child")
                            .removeClass("disabled")
                            .prop("disabled","");
        
                        }
                            
                        }
                    })
               }
                loadPage(); 
                $(".btn").on("click",".btn1",function(){
                    console.log(1);
                    $btn1=$(this);
                    if(!$btn1.is("disabled")){
                        if($btn1.is(":first-child")){
                            var  no=pno-1;
                        }else if($btn1.is(":last-child")){
                            var  no=pno+1;
                        }
                        loadPage(no);   
                    }
                   
                
                   
        
                }) 
            }
              
          

        })

       
       
    
    }else if(location.search.indexOf("kw")!=-1){
        var kw=decodeURI(location.search.split("=")[1]);
        var pno=0;
        function loadPage(no=0){
             pno=no;
             $.ajax({
                 url:"http://127.0.0.1:3000/products/pro",
                 type:"get",
                 data:{kw,pno},
                 success:function(result){
                    
                 //console.log(result);
                 var html="";
                 for(var p of result.products){
                 var {pid,title,price,md,dcount,sell}=p;
                 html+=` <li>
                 <a href="shopping_cart.html?pid=${pid}">
                     <div class="han_img"> <img src=${md} alt=""></div>
                     <h5>${title}</h5>
                     <div class="hantext_list">
                     <span class="text_price">￥${price}</span>
                     <div class="hanlow_price">${dcount}折</div>
                     <span class="han_sold">已售${sell}件</span>
                     </div>
                    </a>
                  </li>`
                 } 
                 var ul=$("#xian_list");
                 ul.html(html);

                 var html="";
                 for(var item of result.obj){
                     var {pid,title,price,md,sell}=item;
                     html+=` <li>
                     <a href="shopping_cart.html?pid=${pid}" title="商品">
                       <div class="details_pic">
                         <img src=${md}>
                       </div>
                       <div class="details_text">
                         <h5>${title}</h5>
                         <p>￥${price} <span id="details_text1">已售 ${sell} 件</span></p>
                       </div>
                     </a>
                   </li>`
                 }
                 $(".nav_details").html(html);
               
 
 
                 $(".changepage>p>span:first-child").html(pno+1);
                 $(".changepage>p>span:last-child").html(result.pageCount);
                 if(pno==0){
                 $(".btn>.btn1:first-child")
                 .prop("disabled","disabled")
                 .addClass("disabled");
                 }else{
                     $(".btn>.btn1:first-child")
                     .removeClass("disabled")
                     .prop("disabled","");
 
                 }
                 if(pno==result.pageCount-1){
                     $(".btn>.btn1:last-child")
                     .prop("disabled","disabled")
                     .addClass("disabled");
                 }else{
                     $(".btn>.btn1:last-child")
                     .removeClass("disabled")
                     .prop("disabled","");
 
                 }
                     
                 }
             })
        }
        loadPage();
        
         $(".btn").on("click",".btn1",function(){
             console.log(1);
             $btn1=$(this);
             if(!$btn1.is("disabled")){
                 if($btn1.is(":first-child")){
                     var  no=pno-1;
                 }else if($btn1.is(":last-child")){
                     var  no=pno+1;
                 }
                 loadPage(no);   
             }
            
         
            
 
         })


        $(".nav_list>p").html(`热销${kw}`);
        
        $(".price_order>a>p:last-child").click(function(e){
            e.preventDefault();
            var kw=decodeURI(location.search.split("=")[1]);
            var pno=0;
            function loadPage(no=0){
                 pno=no;
                 $.ajax({
                     url:"http://127.0.0.1:3000/products/proAsc",
                     type:"get",
                     data:{kw,pno},
                     success:function(result){
                     //console.log(result);
                     var html="";
                     for(var p of result.products){
                     var {pid,title,price,md,dcount,sell}=p;
                     html+=` <li>
                     <a href="shopping_cart.html?pid=${pid}">
                         <div class="han_img"> <img src=${md} alt=""></div>
                         <h5>${title}</h5>
                         <div class="hantext_list">
                         <span class="text_price">￥${price}</span>
                         <div class="hanlow_price">${dcount}折</div>
                         <span class="han_sold">已售${sell}件</span>
                         </div>
                        </a>
                      </li>`
                     } 
                     var ul=$("#xian_list");
                     ul.html(html);
    
                     var html="";
                     for(var item of result.obj){
                         var {pid,title,price,md,sell}=item;
                         html+=` <li>
                         <a href="shopping_cart.html?pid=${pid}" title="商品">
                           <div class="details_pic">
                             <img src=${md}>
                           </div>
                           <div class="details_text">
                             <h5>${title}</h5>
                             <p>￥${price} <span id="details_text1">已售 ${sell} 件</span></p>
                           </div>
                         </a>
                       </li>`
                     }
                     $(".nav_details").html(html);
     
     
                     $(".changepage>p>span:first-child").html(pno+1);
                     $(".changepage>p>span:last-child").html(result.pageCount);
                     if(pno==0){
                     $(".btn>.btn1:first-child")
                     .prop("disabled","disabled")
                     .addClass("disabled");
                     }else{
                         $(".btn>.btn1:first-child")
                         .removeClass("disabled")
                         .prop("disabled","");
     
                     }
                     if(pno==result.pageCount-1){
                         $(".btn>.btn1:last-child")
                         .prop("disabled","disabled")
                         .addClass("disabled");
                     }else{
                         $(".btn>.btn1:last-child")
                         .removeClass("disabled")
                         .prop("disabled","");
     
                     }
                         
                     }
                 })
            }
            loadPage();
            
             $(".btn").on("click",".btn1",function(){
                 console.log(1);
                 $btn1=$(this);
                 if(!$btn1.is("disabled")){
                     if($btn1.is(":first-child")){
                         var  no=pno-1;
                     }else if($btn1.is(":last-child")){
                         var  no=pno+1;
                     }
                     loadPage(no);   
                 }
                
             
                
     
             })
           
          

        })
         
        $(".price_order>a>p:first-child").click(function(e){
            e.preventDefault();
            var kw=decodeURI(location.search.split("=")[1]);
            var pno=0;
            function loadPage(no=0){
                 pno=no;
                 $.ajax({
                     url:"http://127.0.0.1:3000/products/proDesc",
                     type:"get",
                     data:{kw,pno},
                     success:function(result){
                     //console.log(result);
                     var html="";
                     for(var p of result.products){
                     var {pid,title,price,md,dcount,sell}=p;
                     html+=` <li>
                     <a href="shopping_cart.html?pid=${pid}">
                         <div class="han_img"> <img src=${md} alt=""></div>
                         <h5>${title}</h5>
                         <div class="hantext_list">
                         <span class="text_price">￥${price}</span>
                         <div class="hanlow_price">${dcount}折</div>
                         <span class="han_sold">已售${sell}件</span>
                         </div>
                        </a>
                      </li>`
                     } 
                     var ul=$("#xian_list");
                     ul.html(html);
    
                     var html="";
                     for(var item of result.obj){
                         var {pid,title,price,md,sell}=item;
                         html+=` <li>
                         <a href="shopping_cart.html?pid=${pid}" title="商品">
                           <div class="details_pic">
                             <img src=${md}>
                           </div>
                           <div class="details_text">
                             <h5>${title}</h5>
                             <p>￥${price} <span id="details_text1">已售 ${sell} 件</span></p>
                           </div>
                         </a>
                       </li>`
                     }
                     $(".nav_details").html(html);
     
     
                     $(".changepage>p>span:first-child").html(pno+1);
                     $(".changepage>p>span:last-child").html(result.pageCount);
                     if(pno==0){
                     $(".btn>.btn1:first-child")
                     .prop("disabled","disabled")
                     .addClass("disabled");
                     }else{
                         $(".btn>.btn1:first-child")
                         .removeClass("disabled")
                         .prop("disabled","");
     
                     }
                     if(pno==result.pageCount-1){
                         $(".btn>.btn1:last-child")
                         .prop("disabled","disabled")
                         .addClass("disabled");
                     }else{
                         $(".btn>.btn1:last-child")
                         .removeClass("disabled")
                         .prop("disabled","");
     
                     }
                         
                     }
                 })
            }
            loadPage();
            
             $(".btn").on("click",".btn1",function(){
                 console.log(1);
                 $btn1=$(this);
                 if(!$btn1.is("disabled")){
                     if($btn1.is(":first-child")){
                         var  no=pno-1;
                     }else if($btn1.is(":last-child")){
                         var  no=pno+1;
                     }
                     loadPage(no);   
                 }
                
             
                
     
             })
           
          

        })
        

        
   
    }



        $(".page_header>ul>li:nth-child(3)").on("mouseover",function(e){
            e.preventDefault();
            $(".price_order").css("display","block");
        })
        
        $(".page_header>ul>li:nth-child(3)").on("mouseout",function(e){
            e.preventDefault();
            $(".price_order").css("display","none");
        })

        



 $(".box_list").on("click","li",function(e){
    e.preventDefault();
    var num=$(this).index();
    var pt=num;
     $.ajax({
        url:"http://127.0.0.1:3000/products/list",
        data:{pt},
        type:"get",
        success:function(result){
           var html="";
           for(var item of result){

             var {pid,title,price,md,dcount,sell}=item;
                html+=` <li>
                <a href="shopping_cart.html?pid=${pid}">
                    <div class="han_img"> <img src=${md} alt=""></div>
                    <h5>${title}</h5>
                    <div class="hantext_list">
                    <span class="text_price">￥${price}</span>
                    <div class="hanlow_price">${dcount}折</div>
                    <span class="han_sold">已售${sell}件</span>
                    </div>
                </a>
            </li>`
                } 
                var ul=$("#xian_list");
                ul.html(html);





            
           

        }
     })
 })

    
    })