$(function () {
    $('#head').load('head.html')
    // $('#right').load('userCenter_person.html')
    $('#foot').load('foot.html')
    $('#headPic').click(function () {
        $('input[type="file"]').trigger('click');
    })
    $('#updHeadBtn').click(function () {
        $('input[type="file"]').trigger('click');
    })
    $('input[type="file"]').change(function () {
        var fread = new FileReader()
        fread.onload = function (e) {
            $('.rounded-circle').css('background-image', 'url(' + e.target.result + ')')
        }
        fread.readAsDataURL(this.files[0])
    })
})