
const express=require("express");
var router=express.Router();
const pool=require("../pool");

router.get("/shop",(req,res)=>{
	var pid=req.query.pid;
	var sql="SELECT * FROM  flower_laptop WHERE fid=(SELECT fid FROM flower_laptop WHERE pid=?)"
	pool.query(sql,[pid],(err,result)=>{
		if(err) throw err;
		var n=Math.ceil(Math.random()*7);
		res.send(result.slice(n,n+4));

	})
})

router.get("/cart",(req,res)=>{
	var pid=req.query.pid;
	var count=req.query.count;
	var specs=decodeURI(req.query.specs);
	var uid=req.session.uid;
	var lid=req.query.lid;
	if(pid!=undefined){
		var sql="select * from flower_shoppingcart where uid=? and pid=? and specs=?";
		data=[uid,pid,specs];
		data1=[uid,pid,count,specs];
		var sql1="insert into flower_shoppingcart values(null,?,?,null,?,?)"  
		var sql2="update flower_shoppingcart set count=count+? where uid=? and pid=? and specs=?"
        var data2=[count,uid,pid,specs];
	}else if(lid!=undefined){
		var sql="select * from flower_shoppingcart where uid=? and lid=? and specs=?";
		data=[uid,lid,specs];
		data1=[uid,lid,count,specs];
		var sql1="insert into flower_shoppingcart values(null,?,null,?,?,?)"  
		var sql2="update flower_shoppingcart set count=count+? where uid=? and lid=? and specs=?"
        var data2=[count,uid,lid,specs];
	}
	
	
	pool.query(sql,data,(err,result)=>{
		if(err) throw err;
		if(result.length==0){
			
			pool.query(sql1,data1,(err,result)=>{
				if(err) throw err;
				res.end();

			})

		}else{
			
			pool.query(sql2,data2,(err,result)=>{
				if(err) throw err;
				res.end();
			})

		}

	})

})

router.get("/items",(req,res)=>{
	var uid=req.session.uid;
	console.log(uid);
	var sql="SELECT *,(SELECT pics FROM  flower_laptop_pic WHERE flower_laptop_pic.pid=flower_shoppingcart.pid LIMIT 1) as md FROM flower_shoppingcart INNER JOIN flower_laptop ON flower_shoppingcart.pid=flower_laptop.pid WHERE uid=?"


	/*"SELECT *,(SELECT pics FROM  flower_laptop_pic WHERE flower_laptop_pic.pid=flower_shoppingcart.pid LIMIT 1) as md,(SELECT pics FROM hua_index_pic WHERE hua_index_pic.pid=flower_shoppingcart.lid LIMIT 1) as lg FROM flower_shoppingcart INNER JOIN flower_laptop ON flower_shoppingcart.pid=flower_laptop.pid  INNER JOIN hua_index_product ON flower_shoppingcart.lid=hua_index_product.pid WHERE uid=1"*/



	pool.query(sql,[uid],(err,result)=>{
		if(err) throw err;
		res.send(result);
	})
})
router.get("/itemsLid",(req,res)=>{
	var uid=req.session.uid;
	console.log(uid);
	var sql="SELECT *,(SELECT pics FROM hua_index_pic WHERE hua_index_pic.pid=flower_shoppingcart.lid LIMIT 1) as md FROM flower_shoppingcart INNER JOIN hua_index_product ON flower_shoppingcart.lid=hua_index_product.pid WHERE uid=?";
	pool.query(sql,[uid],(err,result)=>{
		if(err) throw err;
		res.send(result);
	})
})

router.get("/update",(req,res)=>{
	var iid=req.query.iid;
	var count=req.query.count;
	if(count>0){
		var sql="UPDATE flower_shoppingcart SET count=? WHERE iid=? "
		var data=[count,iid];
	}else{
		var sql="delete from flower_shoppingcart where iid=? ";
		var data=[iid];
	}
	pool.query(sql,data,(err,result)=>{
		if(err) throw err;
		res.end();
	})
})

router.get("/delete",(req,res)=>{
	var iid=req.query.iid;
	var sql="delete from flower_shoppingcart where iid=? ";
	pool.query(sql,[iid],(err,result)=>{
		if(err) throw err;
		res.end();
	})
})





module.exports=router;