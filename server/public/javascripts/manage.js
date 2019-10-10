
var currentposition = 0
window.onload = function () {
    var lis = document.getElementsByTagName('li')
    for (var i=0; i < lis.length; i++) {
        lis[i].onmouseover = function () {
            console.log(this.childNodes)
            this.childNodes[0].style.color="#c5f0a4"
        }
        lis[i].onmouseout=function(){
            this.childNodes[0].style.color="white"
        }
        lis[i].onclick=function(){
            document.getElementById('lump').style.top=this.offsetTop +'px'
            currentposition=this.offsetTop
        }
    }
}
$(function(){
    $('#right').load('manage_auditing.html')
    $('#auditing').click(function(){
        $('#right').load('manage_auditing.html')
    })
    $('#accusation').click(function(){
        $('#right').load('manage_accusation.html')
    })
    $('#normal').click(function(){
        $('#right').load('manage_normal.html')
    })
    $('#ban').click(function(){
        $('#right').load('manage_ban.html')
    })
    $('#user').click(function(){
        $('#right').load('manage_user.html')
    })
})