
const express=require("express");
const bodyParser=require("body-parser");
/*引入路由模块*/ 
const session=require('express-session')
const user=require('./routes/user.js')
const index=require('./routes/index.js')
const details=require('./routes/details')
const products=require('./routes/products')
const shop=require('./routes/shop')
/*构建web服务器*/
var app=express();
app.listen(3000,()=>{
	console.log("服务器创建成功");
});
/*托管静态资源*/
app.use(express.static("./public"));


/*使用body-parser中间件*/
app.use(bodyParser.urlencoded({
	extended:false
}));
app.use(session({
	secret: '128位随机字符串',
	resave: false,
	saveUninitialized: true,
  }))
//使用路由器
//把用户路由器挂载到/user下
app.use('/user',user);
app.use('/index',index);
app.use('/details',details);
app.use('/products',products);
app.use('/shop',shop);



