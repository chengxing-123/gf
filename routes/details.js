const express=require("express");
const router=express.Router()
const pool=require("../pool")
 

router.get("/details",(req,res)=>{
    var pid=req.query.pid;
    console.log(pid);
            var output={product:{},pics:[],specs:[],fname:[]};
            var sql1="SELECT * FROM flower_laptop WHERE pid=?";
            var sql2="SELECT * FROM flower_laptop_pic WHERE pid=?";
            var sql3="SELECT * FROM flower_laptop_family_specs WHERE fid=(SELECT fid FROM flower_laptop WHERE pid=?)";
            var sql4="SELECT fname  FROM  flower_laptop_family WHERE fid=(SELECT fid FROM flower_laptop WHERE pid=?)";
            Promise.all([
            new Promise(function(open){
                pool.query(sql1,[pid],(err,result)=>{
                    if(err) throw err;
                    output.product=result[0];
                    open();
                });
        }),
        new Promise(function(open){
            pool.query(sql2,[pid],(err,result)=>{
                if(err) throw err;
                output.pics=result;
                open();
                
            })
        }),
        new Promise(function(open){
            pool.query(sql3,[pid],(err,result)=>{
                if(err) throw err;
                output.specs=result;
                console.log(result);
                open();
            })
        }),
        new Promise(function(open){
            pool.query(sql4,[pid],(err,result)=>{
                if(err) throw err;
                output.fname=result;
                open();
            })
        }),
        ]).then(function(){
            res.send(output);
            res.end();
        })
       

   
   
})


router.get("/list",(req,res)=>{
    var pid=req.query.lid;
    console.log(pid);
            var output={product:{},pics:[],specs:[],fname:[]};
            var sql1="SELECT * FROM hua_index_product WHERE pid=?";
            var sql2="SELECT * FROM hua_index_pic WHERE pid=?";
            var sql3="SELECT * FROM flower_laptop_family_specs WHERE fid=(SELECT fid FROM flower_laptop WHERE pid=?)";
            var sql4="SELECT fname  FROM  flower_laptop_family WHERE fid=(SELECT fid FROM flower_laptop WHERE pid=?)";
            Promise.all([
            new Promise(function(open){
                pool.query(sql1,[pid],(err,result)=>{
                    if(err) throw err;
                    output.product=result[0];
                    open();
                });
        }),
        new Promise(function(open){
            pool.query(sql2,[pid],(err,result)=>{
                if(err) throw err;
                output.pics=result;
                open();
                
            })
        }),
        new Promise(function(open){
            pool.query(sql3,[pid],(err,result)=>{
                if(err) throw err;
                output.specs=result;
                console.log(result);
                open();
            })
        }),
        new Promise(function(open){
            pool.query(sql4,[pid],(err,result)=>{
                if(err) throw err;
                output.fname=result;
                open();
            })
        }),
        ]).then(function(){
            res.send(output);
           
        })
       

   
   
})

router.get("/product",(req,res)=>{
    var proName="鲜花";
    proName=decodeURI(proName);
    var sql=`SELECT * ,(SELECT pics FROM flower_laptop_pic WHERE flower_laptop_pic.pid=flower_laptop.pid LIMIT 1) as md FROM flower_laptop WHERE title LIKE '%${proName}%'`
    pool.query(sql,(err,result)=>{
        if(err) throw err;
        var n=Math.ceil(Math.random()*16);
        result=result.slice(n,n+22);
        res.send(result);


    })
})

module.exports=router;
