$(function(){
    $("<link rel='stylesheet' href='css/head.css'></link>").appendTo("head");
    $.ajax({
        url:"http://127.0.0.1:3000/header.html",
        type:"get",
        success:function(result){
             $("#headerAll").replaceWith(result);
             var btn=$(".search_top>.button");
             var $input=$(".text");
              btn.click(function(){
              
                var kw=$input.val().trim();
                if(kw!==""){
                location.href=`products.html?kwords=${kw}`;
                
                
                }
                
             })
             $input.keyup(function(e){
               if(e.keyCode==13){
                   btn.click();
               }

             })
             if(location.search.indexOf("kwords")!=-1){
                 if(location.search.indexOf("back")==-1){
                    var $kwords=decodeURI(location.search.split("=")[1]);
                    $input.val($kwords);
                    }
             
            }
            
            
            
              
        $(".login_reg").click(function(e){
              e.preventDefault();
              $(".login_all").css("display","block");
        })
        $(".login_top_list>li:last-child>a").click(function(e){
            e.preventDefault();
            location.href="register.html?back="+location.href;
           
           
          

        })
        if(location.search.indexOf("back=")!=-1){
            $(".poit").css("display","block");
        }
         
        $(".moment_login").click(function(){
            console.log(1);
            var phone=$(".login_center>form>.input_pnone:nth-child(2)>input").val();
            var pwd=$(".login_center>form>.input_pnone:nth-child(3)>input").val();
            console.log(phone,pwd);
            $.ajax({
                url:"http://127.0.0.1:3000/user/sigin",
                data:{phone,pwd},
                type:"post",
                success:function(res){
                console.log(res);
                if(res.ok==1){
                    $(".login_all").css("display","none");
                    location.reload();
                }else{
                    $(".moment_login").before(`<div class="err_msg">${res.msg}</div>`)
                }
                }
            })
            
            
        
        })

        $.ajax({
            url:"http://127.0.0.1:3000/user/islogin",
            type:"get",
            dataType:"json",
            success:function(result){
                if(result.ok==0){
                   
                }else{
                    $(".top_right>.head_login").html(`<a href=""><i class="iconfont icon-wode"></i></a><span>用户中心(${result.uphone})</span> <a href="" title="注销" class="login_reg">注销</a>`)
                    $(".login_reg").click(function(e){
                        e.preventDefault();
                       $.ajax({
                           url:"http://127.0.0.1:3000/user/signout",
                           type:"post",
                           success:function(){
                               location.reload();
                           }
                       })
                    })
                   

                }
              
            }
        })

        $(".login_box1 .login_text").click(function(e){
            e.preventDefault();
        
            var html=` <div class="login_inbox">
            <div class="login_top">
            <ul class="login_top_list">
                <li><a href="" class="login_text" id="login">登录</a></li>
                <li><a href="" >注册</a></li>
            </ul>
            </div>
            <!--  账户密码登录 -->
            <div class="login_center">
                <form action="" method="post">
                <a href="#login_center_all" class="phone_login"></a>
                <div class="input_pnone">
                    <input type="text" placeholder="请输入11位手机号" class="pwd" name="phone" >
                </div>
                    <div class="input_pnone" >
                    <input type="password" placeholder="请设置登录密码" class="pwd" name="pwd" >
                    </div>
                    
                <div class="moment_register moment_login moment_loginL" id="m_login" value="登录">登录</div>
                
                </form>
                 
                    
            </div>
        `
        $(".login_box1").html(html);
            $(".moment_register").click(function(){
                var phone=$(".login_box1 .login_center>form>.input_pnone:nth-child(2)>input").val();
                var pwd=$(".login_box1 .login_center>form>.input_pnone:nth-child(3)>input").val();
               if(phone!=""&&pwd!=""){
                $.ajax({
                    url:"http://127.0.0.1:3000/user/sigin",
                    data:{phone,pwd},
                    type:"post",
                    success:function(res){
                    console.log(res);
                    if(res.ok==1){
                        $(".login_all").css("display","none");
                        location.reload();
                        var path=location.href.split("back=")[1];
                        location.href=`${path}`;
                        console.log(path);
                    }else{
                        $(".moment_login").before(`<div class="err_msg">${res.msg}</div>`)
                        $(".login_box1 .login_center>form>.input_pnone:nth-child(2)>input").val("")
                        $(".login_box1 .login_center>form>.input_pnone:nth-child(3)>input").val("")
                        

                        
                    }
                    }
                 })
               }
              console.log(55555);
        
            
              })
        


        })
        $(".moment_register").before(`<div class="err_msg"></div>`) 
        $(".moment_register").click(function(){
            console.log(000);
            var phone=$(".login_center>form>.input_pnone:first-child>input").val();
            var pwd=$(".upwd").val();
            var regPhone=/^[1][3,4,5,7,8][0-9]{9}$/;
            if(!regPhone.test(phone)){
                $(".err_msg").html("请输入正确的手机号格式");
                return;

            }
            var regPwd=/^[a-zA-Z\d_]{6,}$/
            if(!regPwd.test(pwd)){
                $(".err_msg").html("请至少输入6位数字的密码");
                return;
            }
            $.ajax({
                url:"http://127.0.0.1:3000/user/register",
                type:"post",
                data:{phone,pwd},
                success:function(result){
                     $(".err_msg").html(result);
                    //$(".moment_register").before(`<div class="err_msg">${result}</div>`) 
                    if(result=="注册成功"){
                         $(".err_msg").html(`${result}，即将跳往登录页面`);
                        setInterval(function(){
                            $(".login_box1 .login_text").click()
                        },2000)
                    }
                    

                }
            })
        })

      

        
    
        $(".list_right").on("click","li",function(e){
            e.preventDefault();
            var li=$(this);
            if(li.index()==0){
                location.href=`/index.html`;
                

            }else if(li.index()==1){
                var kw=li.children().html();
                location.href=`products.html?kwords=${kw}`;

            }else if(li.index()==5){
                location.href=`/brand.html`;
                   
                
            }else{
                var kw=$(this).children().html();
                location.href=`products.html?kw=${kw}`; 
            }
           
        })
        
        $(".search_bottom").on("click","li",function(e){
            e.preventDefault();
            if($(this).index()!=0){
                var kw=$(this).children().html();
                location.href=`products.html?kwords=${kw}`; 
                
            }

        })

       
        $(".top_right>li:last-child").click(function(){
            $.ajax({
                url:"http://127.0.0.1:3000/user/islogin",
                type:"get",
                dataType:"json",
                success:function(result){
                    if(result.ok==0){
                        alert("您还未登陆！！")
                    }else{
                        location.href=`/shop_cart.html`;
                    }
                }
            })
        })

        $(".error").click(function(e){
            e.preventDefault();
            $(".login_all").css("display","none");    

        })


       
            
       
        

       
       

        }
       
    })
    
   
})