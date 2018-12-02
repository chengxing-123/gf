const express=require('express');
//引入MySQL连接池
const pool=require('../pool.js');
//创建路由
var router=express.Router();
//1、在路由器下添加路由
router.post("/sigin",(req,res)=>{
    var $phone=req.body.phone;
    var $pwd=req.body.pwd;
    var sql="SELECT * FROM flower_user_register WHERE phone=? AND pwd=?";
    pool.query(sql,[$phone,$pwd],(err,result)=>{
        if(err) throw err;
        if(result.length>0){
            var user=result[0];
           req.session.uid=user.uid;
         console.log(req.session.uid);
            res.send(
                {ok:1,
                 msg:"登录成功"
                }
            );
        }else{
            res.send({
                ok:0,
                msg:"密码或用户名错误"
            })
        }
    })
})

router.get("/islogin",(req,res)=>{
    res.writeHead(200);
    if(req.session.uid==undefined){
        res.write(JSON.stringify({ok:0}))
        res.end()
    }else{
        
       var uid=req.session.uid;
       var sql="select * from flower_user_register where uid=?";
       pool.query(sql,[uid],(err,result)=>{
           if(err) throw err;
           var user=result[0];
           
           res.write(JSON.stringify({
            ok:1,uphone:user.phone
          }))
          res.end();
          
       })
       

    }
})

router.post("/signout",(req,res)=>{
    req.session.uid=undefined;
    res.end();
})


router.post('/register',(req,res)=>{
	var obj=req.body;
//验证表单提交的内容是否为空
//验证电话号码是否为空
	var $phone=obj.phone;
	if($phone==''){
		res.send("电话号码不能为空");
		return;
	}
	//验证密码是否为空
	var $pwd=obj.pwd;
	if($pwd==''){
		res.send("密码不能为空");
		return;
	}

  var sql1="SELECT * FROM flower_user_register WHERE phone=?"
  pool.query(sql1,[$phone],(err,result)=>{
    if(err) throw err;
    if(result.length>0){
      res.send("该手机号已被注册");
    }else{
      var sql='INSERT INTO flower_user_register VALUES(NULL,?,?)';
      pool.query(sql,[$phone,$pwd],(err,result)=>{
        if(err) throw err;
        if(result.affectedRows>0){
          res.send('注册成功');
        }else{
          res.send('注册失败');
        }

      })

    }
  })

	


});
module.exports=router;
