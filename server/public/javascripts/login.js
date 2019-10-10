var users = null
window.onload = function () {
    var username = document.getElementsByName('username')[0]
    // console.log(localStorage.getItem('users'))
    if (localStorage.getItem('users')) {
        users = JSON.parse(localStorage.getItem('users'))
        // console.log(users.length)
    } else {
        users = []
        // console.log(users)
    }
    username.onfocus = function () {
        var span = this.nextElementSibling.nextElementSibling
        span.className = 'tipMsg';
        span.innerHTML = '请输入手机号'
    }
}
function login() {
    var username = document.getElementsByName('username')[0].value
    var password = document.getElementsByName('password')[0].value
    // console.log(username, password)
    // console.log(users)
    if (username == "admin" && password == "123456") {
        window.location.href = "manage.html"
        return
    }
    for (var i = 0; i < users.length; i++) {
        if (username == users[i].username && password == users[i].password) {
            alert('登录成功！')
            localStorage.setItem('user', username)
            window.location.href = "index.html"
            return
        }
    }
    if (i >= users.length) {
        alert('用户名或密码错误')
    }
}