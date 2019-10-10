
$(function(){
    $('#sure').click(function(){
        console.log($('textarea:eq(0)').val())
        $('#myModal').modal('hide')
    })
})
function OK(){
   if(confirm("是否确认通过")){
       alert("审核通过")
       location.href="manage.html"
   } 
        
}