$(function(){
    $.ajax({
        url:"http://127.0.0.1:3000/index/getIndexProducts",
        type:"get",
        success:function(result){
           //console.log(result);
           var html="";
           for(var item of result.slice(0,4)){
            var {pid,title,price,md,sdown,dcount,sell}=item;
            //console.log(item);
            //console.log(title);
             
                 html+=`<li>
                 <a href="/shopping_cart.html?lid=${pid}">
                   <div class="right_img">
                     <img src="${md}" alt="">
                   </div>
                   <h5>${title}</h5>
                   <h6>玫瑰花 </h6>
                   <div class="right_price">
                     <span>￥${price}</span>
                     <div id="low_price">
                       直降&nbsp;￥
                       <span>${sdown}</span>
                     </div>
                   </div>
                   
                   
                 </a>
               </li>`

           }
           var flashScaleRight=$(".flash_scale>.flash_scale_right");
           flashScaleRight.html(html);


           var html="";
           for(var key of result.slice(4,10)){
               var {pid,title,price,md,sdown,dcount,sell}=key;
               html+=`<li>
               <a href="/shopping_cart.html?lid=${pid}">
                 <div class="han_img"> <img src="${md}" alt=""></div>
                 <h5>${title}</h5>
                 <div class="hantext_list">
                   <span class="text_price">￥${price}</span>
                   <div class="hanlow_price">${dcount}折</div>
                   <span class="han_sold">已售${sell}件</span>
                 </div>
               </a>
              </li>

              `
             } 
          var korRight1= $("#kor_right1");
          korRight1.html(html);
        
         var html="";
         for(var key of result.slice(10,16)){
             var {pid,title,price,md,sdown,dcount,sell}=key;
             html+=`<li>
             <a href="/shopping_cart.html?lid=${pid}">
               <div class="han_img"> <img src="${md}" alt=""></div>
               <h5>${title}</h5>
               <div class="hantext_list">
                 <span class="text_price">￥${price}</span>
                 <div class="hanlow_price">${dcount}折</div>
                 <span class="han_sold">已售${sell}件</span>
               </div>
             </a>
            </li>

            `
           } 
        var korRight2= $("#kor_right2");
        korRight2.html(html);

       var html="";
       for(var key of result.slice(16,22)){
           var {pid,title,price,md,sdown,dcount,sell}=key;
           html+=`<li>
           <a href="/shopping_cart.html?lid=${pid}">
             <div class="han_img"> <img src="${md}" alt=""></div>
             <h5>${title}</h5>
             <div class="hantext_list">
               <span class="text_price">￥${price}</span>
               <div class="hanlow_price">${dcount}折</div>
               <span class="han_sold">已售${sell}件</span>
             </div>
           </a>
          </li>

          `
         } 
     var korRight3= $("#kor_right3");
     korRight3.html(html);

     var html="";
     for(var key of result.slice(22,28)){
         var {pid,title,price,md,sdown,dcount,sell}=key;
         html+=`<li>
         <a href="/shopping_cart.html?lid=${pid}">
           <div class="han_img"> <img src="${md}" alt=""></div>
           <h5>${title}</h5>
           <div class="hantext_list">
             <span class="text_price">￥${price}</span>
             <div class="hanlow_price">${dcount}折</div>
             <span class="han_sold">已售${sell}件</span>
           </div>
         </a>
        </li>

        `
    } 
    var korRight4= $("#kor_right4");
    korRight4.html(html);

   var html="";
   for(var key of result.slice(28,34)){
       var {pid,title,price,md,sdown,dcount,sell}=key;
       html+=`<li>
       <a href="/shopping_cart.html?lid=${pid}">
         <div class="han_img"> <img src="${md}" alt=""></div>
         <h5>${title}</h5>
         <div class="hantext_list">
           <span class="text_price">￥${price}</span>
           <div class="hanlow_price">${dcount}折</div>
           <span class="han_sold">已售${sell}件</span>
         </div>
       </a>
      </li>

      `
   } 
    var korRight5= $("#kor_right5");
    korRight5.html(html);

    var html="";
    for(var key of result.slice(34,40)){
        var {pid,title,price,md,sdown,dcount,sell}=key;
        html+=`<li>
        <a href="/shopping_cart.html?lid=${pid}">
          <div class="han_img"> <img src="${md}" alt=""></div>
          <h5>${title}</h5>
          <div class="hantext_list">
            <span class="text_price">￥${price}</span>
            <div class="hanlow_price">${dcount}折</div>
            <span class="han_sold">已售${sell}件</span>
          </div>
        </a>
        </li>

        `
      } 
    var korRight6= $("#kor_right6");
    korRight6.html(html);

    var html="";
    for(var key of result.slice(40,46)){
        var {pid,title,price,md,sdown,dcount,sell}=key;
        html+=`<li>
        <a href="/shopping_cart.html?lid=${pid}">
          <div class="han_img"> <img src="${md}" alt=""></div>
          <h5>${title}</h5>
          <div class="hantext_list">
            <span class="text_price">￥${price}</span>
            <div class="hanlow_price">${dcount}折</div>
            <span class="han_sold">已售${sell}件</span>
          </div>
        </a>
      </li>

      `
      } 
    var korRight7= $("#kor_right7");
    korRight7.html(html);

    var html="";
    for(var key of result.slice(47,50)){
      var {pid,title,price,md,sdown,dcount,sell,pic}=key;
      html+=`<li>
      <a href="/shopping_cart.html?lid=${pid}" class="week_list">
       <img src="${pic}" alt=""> 
       <h6>${title}</h6>
       <p class="week_note">精选1种花材（每周一束/包月）</p>
       <p class="week_price">￥${price.toFixed(2)}</p>
      </a>
      </li>

    `
    } 
    console.log(html);
 
  $(".week_flower").append(html);


  var html="";
  var {pid,title,price,md,sdown,dcount,sell}=result[12];
  html+=`<a href="/shopping_cart.html?lid=${pid}">
  <div class="moods_img">
    <img src=${md} alt="">
  </div>
  <h5>${title}</h5>
  <p>￥<span>${price}</span></p>
</a>`
 $("#moods_flower2").html(html);

 var html="";
  var {pid,title,price,md,sdown,dcount,sell}=result[7];
  html+=`<a href="/shopping_cart.html?lid=${pid}">
  <div class="moods_img">
    <img src=${md} alt="">
  </div>
  <h5>${title}</h5>
  <p>￥<span>${price}</span></p>
</a>`
 $(".moods_ino").html(html);

 
        }
        
})
//定时器
 function timer(){
   var now=new Date();
   var end=new Date("2018/12/26 10:00:00");
   var s=parseInt((end-now)/1000);
   var h=parseInt(s%(3600*24)/3600);
   if(h<10) h="0"+h;
   var m=parseInt(s%3600/60);
   if(m<10) m="0"+m;
   s%=60;
   if(s<10) s="0"+s;
   var html=`<div class="content">
   <span>${h}</span>
   <sub>小时</sub>
    </div>
    <div class="content">
   <span>${m}</span>
   <sub>分</sub>
    </div>
    <div class="content">
   <span>${s}</span>
   <sub>秒</sub>
    </div>`
   $(".time").html(html);

 }
 timer();
 var time=setInterval(timer,1000)

 console.log($(".all_list>.kor_folwers_list").children(1));

 $(".all_list>.kor_folwers_list").children(1).on("click","p",function(e){
  e.preventDefault();
  
   if($(this).hasClass("floor1")){
    location.href=`/products.html?kwords=鲜花`
   }
   if($(this).hasClass("floor2")){
    location.href=`/products.html?kwords=玫瑰`
   }
   if($(this).hasClass("floor3")){
    location.href=`/products.html?kwords=花盒`
   }
   if($(this).hasClass("floor4")){
    location.href=`/products.html?kwords=百合`
   }
   if($(this).hasClass("floor5")){
    location.href=`/products.html?kwords=花篮`
   }
   if($(this).hasClass("floor6")){
    location.href=`/products.html?kwords=永生花`
   }
   if($(this).hasClass("floor7")){
    location.href=`/products.html?kwords=链`
   }
  
  
 })


$(".menu").on("click",".menu-item>.item-list1>li",function(e){
  e.preventDefault();
   var list=$(this).children().html()
  location.href=`/products.html?kwords=${list}`
})

})