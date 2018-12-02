const express=require("express")
const router=express.Router()
const pool=require("../pool")
router.get("/getIndexProducts",(req,res)=>{
    
    var sql="SELECT * ,(SELECT pics FROM hua_index_pic WHERE hua_index_product.pid=hua_index_pic.pid LIMIT 1) as md FROM hua_index_product ";
    pool.query(sql,(err,result)=>{
        if(err) throw err;
        res.send(result);
        res.end;
    })
   
})
module.exports=router;