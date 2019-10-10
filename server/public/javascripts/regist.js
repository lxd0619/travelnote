var users = null
window.onload = function () {
    
    if (localStorage.getItem('users')) {
        users = JSON.parse(localStorage.getItem('users'))
        console.log(users.length)
    } else {
        users = []
        console.log(users)
    }
    var check=document.getElementById('check')
    var username = document.getElementsByName('username')[0]
    var password = document.getElementsByName('password')[0]
    var passwordcheck = document.getElementsByName('passwordcheck')[0]
    var telephone = document.getElementsByName('telephone')[0]
    // var reg=document.getElementById('reg')
    var isUsernameOk = false;
    var isPasswordOk = false;
    var isCpasswordOk = false;
    var isTelephoneOK = false;
    document.getElementById('submit').onclick = function () {
        var uname = username.value
        var pword = password.value
        
        if (!(isUsernameOk && isPasswordOk && isCpasswordOk && isTelephoneOK))
            return false;
            // console.log(users)
        for (var i = 0; i < users.length; i++) {
            // console.log(uname)
            if (uname == users[i].username) {
                alert("该用户名已存在，请重新输入！")
                username.value = ''
                return false;
            }
        }
        if (i >= users.length) {
            users.push({ "username": uname, "password": pword })
            alert('注册成功！')
            // console.log(users)
            localStorage.setItem('users', JSON.stringify(users))
            location.href="login.html"
        }
        
    }
    username.onfocus = function () {
        var span = this.nextElementSibling.nextElementSibling
        span.className = 'tipMsg';
        span.innerHTML = '设置后不可更改，中英文都可以，最长14个英文或7个汉字'
    }
    username.onblur = function () {
        var uname = this.value.trim();   //去除空白字符
        if (uname == '') {
            var span = this.nextElementSibling.nextElementSibling
            span.className = 'error';
            span.innerHTML = '用户名不能为空';
            this.value = ''
            isUsernameOk = false;
            return;
        }
        //判断是否有非法字符（除了中英文、数字、下划线以外的文字）
        var charReg = /[\u4E00-\u9FA5] | [\w]/; //[]是取反的意思
        var res = charReg.test(uname)
        if (res) {
            var span = this.nextElementSibling.nextElementSibling;
            span.className = 'error';
            span.innerHTML = "用户名仅支持中英文、数字和下划线";
            isUsernameOk = false;
            return;
        }
        var numReg = /\D/
        var res = numReg.test(uname)
        if (!res) {
            var span = this.nextElementSibling.nextElementSibling;
            span.className = 'error';
            span.innerHTML = '用户名仅支持中英文、数字和下划线，且不能位纯数字';
            isUsernameOk = false;
            return;
        }
        var len = 0;
        for (var i = 0; i < uname.length; i++) {
            if (/[\u4E00-\u9FA5]/.test(uname[i])) {
                len += 2;
            } else
                len += 1;
            if (len > 14) {
                break;
            }
        }
        if (len > 14) {
            var span = this.nextElementSibling.nextElementSibling
            span.className = "error";
            span.innerHTML = '用户名不能超过7个汉字或14个字符';
            isUsernameOk = false;
            return;
        } else {
            var span = this.nextElementSibling.nextElementSibling
            span.className = 'success';
            span.innerHTML = '√';
            isUsernameOk = true
        }
    }
    password.onfocus = function () {
        var span = this.nextElementSibling.nextElementSibling
        span.className = 'tipMsg';
        span.innerHTML = '密码必须英文+数字，长度8至15位'
    }
    password.onblur = function () {
        var pw = this.value.trim();
        if (pw == '') {
            var span = this.nextElementSibling.nextElementSibling
            span.className = 'error';
            span.innerHTML = '密码不能为空';
            this.value = ''
            isPasswordOk = false;
            return;
        }
        var pwReg = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]+$/
        var res = pwReg.test(pw)
        if (!res) {
            var span = this.nextElementSibling.nextElementSibling;
            span.className = 'error';
            span.innerHTML = '密码必须英文+数字';
            this.value = ''
            isPasswordOk = false;
            return;
        }
        var pwleng = 0
        for (var i = 0; i < pw.length; i++) {
            pwleng++
            if (pwleng > 15) {
                var span = this.nextElementSibling.nextElementSibling
                span.className = "error";
                span.innerHTML = '密码不能超过15位！';
                this.value = ''
                isPasswordOk = false;
                return;
            }
        }
        if (pwleng < 8) {
            var span = this.nextElementSibling.nextElementSibling
            span.className = "error";
            span.innerHTML = '密码不能低于8位！';
            this.value = ''
            isPasswordOk = false;
            return;
        } else {
            var span = this.nextElementSibling.nextElementSibling
            span.className = "success";
            span.innerHTML = '√';
            isPasswordOk = true;
        }
    }
    passwordcheck.onblur = function () {
        var pw = password.value
        var cpw = this.value.trim()
        if (cpw == '') {
            var span = this.nextElementSibling.nextElementSibling
            span.className = "error";
            span.innerHTML = '不能为空';
            this.value = ''
            isCpasswordOk = false;
            return;
        }
        if (cpw != pw) {
            var span = this.nextElementSibling.nextElementSibling
            span.className = "error";
            span.innerHTML = '两次输入的密码不同，请重新输入';
            this.value = ''
            isCpasswordOk = false;
            return;
        }
        else {
            var span = this.nextElementSibling.nextElementSibling
            span.className = "success";
            span.innerHTML = '√';
            isCpasswordOk = true;
        }
    }
    telephone.onblur = function () {
        var telReg = /^1(3|4|5|7|8)\d{9}$/
        var res = telReg.test(telephone.value)
        var tel = telephone.value.trim()
        if (tel == '') {
            var span = this.nextElementSibling.nextElementSibling
            span.className = "error";
            span.innerHTML = '不能为空';
            this.value = ''
            isTelephoneOK = false;
            return;
        }
        if (!res) {
            var span = this.nextElementSibling.nextElementSibling;
            span.className = 'error';
            span.innerHTML = '请输入有效号码！';
            isTelephoneOK = false;
            return;
        }else{
            var span = this.nextElementSibling.nextElementSibling
            span.className = "success";
            span.innerHTML = '√';
            isTelephoneOK = true;
        }
    }
    check.onclick=function(){
        var time=120
    var timer= window.setInterval(function(){
            check.value=time--+"秒后重新获取"
            if(time==-2)
              {
                  check.value="获取验证码"
                  check.disabled=false
                  console.log(check.disabled)
                  check.style.backgroundColor="#03a9f4"
                  clearInterval(timer)
                  
              } 
              else{
                  check.disabled=true
              }
            if(check.disabled){
                check.style.backgroundColor="#aaa"
            }
        },1000)
    }
}
