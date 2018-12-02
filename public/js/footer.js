$(function(){
    $("<link rel='stylesheet' href='css/footer.css'></link>").appendTo("head");
    $.ajax({
        url:"http://127.0.0.1:3000/footer.html",
        type:"get",
        success:function(result){
           
             $("#footer").replaceWith(result);
        }
    })
})