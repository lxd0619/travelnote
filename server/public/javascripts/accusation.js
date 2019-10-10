
$(function(){
    $('#sure').click(function(){
        console.log($('textarea:eq(0)').val())
        $('#myModal').modal('hide')
    })
})
function OK(){
   if(confirm("是否确定将该文章恢复成正常文章？")){
       alert("设置成功！")
       location.href="manage.html"
   } 
        
}