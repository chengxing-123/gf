const express=require("express");
const router=express.Router()
const pool=require("../pool")
router.get("/products",(req,res)=>{
    var kwords=req.query.kwords;
    var output={
        pageSize:15
    }
    output.pno=req.query.pno;
    var arr=kwords.split(" ");
    for(var i=0;i<arr.length;i++){
        arr[i]=`title like "%${arr[i]}%"`
    }
    var where=" where "+arr.join(" and ");
    var sql="SELECT *,(SELECT pics FROM flower_laptop_pic WHERE flower_laptop_pic.pid=flower_laptop.pid limit 1) as md FROM flower_laptop";
   // console.log(sql+where);
    
    pool.query(sql+where,(err,result)=>{
        if(err) throw err;
        //console.log(result);
        //output.count=result.length;
        if(result.length==0){
        output.count=1;
        }else{
          output.count=result.length;//获得总记录数
        }
        output.pageCount=Math.ceil(output.count/output.pageSize);
        output.products=result.slice(output.pno*15,output.pno*15+15);
        var n=Math.ceil(Math.random()*5);
        output.obj=result.slice(n,n+7);
        res.send(output);
        res.end();
       
        
    })
    
})



router.get("/productsAsc",(req,res)=>{
    var kwords=req.query.kwords;
    var output={
        pageSize:15
    }
    output.pno=req.query.pno;
    var arr=kwords.split(" ");
    for(var i=0;i<arr.length;i++){
        arr[i]=`title like "%${arr[i]}%"`
    }
    var where=" where "+arr.join(" and ")+"ORDER BY price ASC";
    var sql="SELECT *,(SELECT pics FROM flower_laptop_pic WHERE flower_laptop_pic.pid=flower_laptop.pid limit 1) as md FROM flower_laptop ";
   // console.log(sql+where);
    
    pool.query(sql+where,(err,result)=>{
        if(err) throw err;
        //console.log(result);
        //output.count=result.length;
        if(result.length==0){
        output.count=1;
        }else{
          output.count=result.length;//获得总记录数
        }
        output.pageCount=Math.ceil(output.count/output.pageSize);
        output.products=result.slice(output.pno*15,output.pno*15+15);
        var n=Math.ceil(Math.random()*5);
        output.obj=result.slice(n,n+7);
        res.send(output);
        res.end();
       
        
    })
    
})

router.get("/productsDesc",(req,res)=>{
    var kwords=req.query.kwords;
    var output={
        pageSize:15
    }
    output.pno=req.query.pno;
    var arr=kwords.split(" ");
    for(var i=0;i<arr.length;i++){
        arr[i]=`title like "%${arr[i]}%"`
    }
    var where=" where "+arr.join(" and ")+"ORDER BY price DESC";
    var sql="SELECT *,(SELECT pics FROM flower_laptop_pic WHERE flower_laptop_pic.pid=flower_laptop.pid limit 1) as md FROM flower_laptop ";
   // console.log(sql+where);
    
    pool.query(sql+where,(err,result)=>{
        if(err) throw err;
        //console.log(result);
        //output.count=result.length;
        if(result.length==0){
        output.count=1;
        }else{
          output.count=result.length;//获得总记录数
        }
        output.pageCount=Math.ceil(output.count/output.pageSize);
        output.products=result.slice(output.pno*15,output.pno*15+15);
        var n=Math.ceil(Math.random()*5);
        output.obj=result.slice(n,n+7);
        res.send(output);
        res.end();
       
        
    })
    
})

router.get("/pro",(req,res)=>{
    var kw=req.query.kw;
    var sql=`SELECT * ,(SELECT pics FROM flower_laptop_pic WHERE flower_laptop.pid=flower_laptop_pic.pid LIMIT 1) as md FROM flower_laptop WHERE fid=(select fid FROM flower_laptop_family WHERE fname like "%${kw}%")`;
    pool.query(sql,(err,result)=>{
        if(err) throw err;
        var output={
            pageSize:15
        }
        output.pno=req.query.pno;
        //output.count=result.length;
        if(result.length==0){
        output.count=1;
        }else{
          output.count=result.length;//获得总记录数
        }
        output.pageCount=Math.ceil(output.count/output.pageSize);
        output.products=result.slice(output.pno*15,output.pno*15+15);
        
        var n=Math.ceil(Math.random()*5);
        output.obj=result.slice(n,n+7);
        res.send(output);
        
       
      

    })
   

})
router.get("/proAsc",(req,res)=>{
    var kw=req.query.kw;
    var sql=`SELECT * ,(SELECT pics FROM flower_laptop_pic WHERE flower_laptop.pid=flower_laptop_pic.pid LIMIT 1) as md FROM flower_laptop WHERE fid=(select fid FROM flower_laptop_family WHERE fname like "%${kw}%") ORDER BY price ASC`;
    pool.query(sql,(err,result)=>{
        if(err) throw err;
        var output={
            pageSize:15
        }
        output.pno=req.query.pno;
        //output.count=result.length;
        if(result.length==0){
        output.count=1;
        }else{
          output.count=result.length;//获得总记录数
        }
        output.pageCount=Math.ceil(output.count/output.pageSize);
        output.products=result.slice(output.pno*15,output.pno*15+15);
        
        var n=Math.ceil(Math.random()*5);
        output.obj=result.slice(n,n+7);
        res.send(output);
        
       
      

    })
   

})

router.get("/proDesc",(req,res)=>{
    var kw=req.query.kw;
    var sql=`SELECT * ,(SELECT pics FROM flower_laptop_pic WHERE flower_laptop.pid=flower_laptop_pic.pid LIMIT 1) as md FROM flower_laptop WHERE fid=(select fid FROM flower_laptop_family WHERE fname like "%${kw}%") ORDER BY price DESC`;
    pool.query(sql,(err,result)=>{
        if(err) throw err;
        var output={
            pageSize:15
        }
        output.pno=req.query.pno;
        //output.count=result.length;
        if(result.length==0){
        output.count=1;
        }else{
          output.count=result.length;//获得总记录数
        }
        output.pageCount=Math.ceil(output.count/output.pageSize);
        output.products=result.slice(output.pno*15,output.pno*15+15);
        
        var n=Math.ceil(Math.random()*5);
        output.obj=result.slice(n,n+7);
        res.send(output);
        
       
      

    })
   

})

router.get("/list",(req,res)=>{
    var pt=req.query.pt;
    if(pt==0){
        var sql="SELECT *,(SELECT pics FROM flower_laptop_pic WHERE flower_laptop_pic.pid=flower_laptop.pid limit 1) as md FROM  flower_laptop WHERE fid=2 OR fid=3"
        pool.query(sql,(err,result)=>{
            res.send(result);

        })
    }
    else if(pt==1){
         var sql="SELECT *,(SELECT pics FROM flower_laptop_pic WHERE flower_laptop_pic.pid=flower_laptop.pid limit 1) as md FROM  flower_laptop WHERE fid=4 OR fid=6"
        pool.query(sql,(err,result)=>{
            res.send(result);

        })

    }
     else if(pt==2){
         var sql="SELECT *,(SELECT pics FROM flower_laptop_pic WHERE flower_laptop_pic.pid=flower_laptop.pid limit 1) as md FROM  flower_laptop WHERE fid=2 OR fid=4"
        pool.query(sql,(err,result)=>{
            res.send(result);

        })

    }
     else if(pt==3){
         var sql="SELECT *,(SELECT pics FROM flower_laptop_pic WHERE flower_laptop_pic.pid=flower_laptop.pid limit 1) as md FROM  flower_laptop WHERE fid=1 OR fid=4"
        pool.query(sql,(err,result)=>{
            res.send(result);

        })

    }
     else if(pt==4){
         var sql="SELECT *,(SELECT pics FROM flower_laptop_pic WHERE flower_laptop_pic.pid=flower_laptop.pid limit 1) as md FROM  flower_laptop WHERE fid=2 OR fid=6"
        pool.query(sql,(err,result)=>{
            res.send(result);

        })

    }

     else if(pt==5){
         var sql="SELECT *,(SELECT pics FROM flower_laptop_pic WHERE flower_laptop_pic.pid=flower_laptop.pid limit 1) as md FROM  flower_laptop WHERE fid=1 OR fid=5"
        pool.query(sql,(err,result)=>{
            res.send(result);

        })

    }
     else if(pt==6){
         var sql="SELECT *,(SELECT pics FROM flower_laptop_pic WHERE flower_laptop_pic.pid=flower_laptop.pid limit 1) as md FROM  flower_laptop WHERE fid=2 OR fid=3"
        pool.query(sql,(err,result)=>{
            res.send(result);

        })

    }
     else if(pt==7||pt==8){
         var sql="SELECT *,(SELECT pics FROM flower_laptop_pic WHERE flower_laptop_pic.pid=flower_laptop.pid limit 1) as md FROM  flower_laptop WHERE fid=5 "
        pool.query(sql,(err,result)=>{
            res.send(result);

        })

    }

    

})





module.exports=router;