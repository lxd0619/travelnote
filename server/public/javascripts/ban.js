
$(function(){
    $('#sure').click(function(){
        console.log($('textarea:eq(0)').val())
        $('#myModal').modal('hide')
    })
})
