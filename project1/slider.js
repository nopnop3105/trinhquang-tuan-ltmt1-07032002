
$(document).ready(function () {
    $('.list-thumb .thumb-item').click(function () {
        let pictrure_src = $(this).find('img').attr('src');
        // console.log(pictrure_src) 
        $('.show-pictures img').attr('src', pictrure_src)
        $('.list-thumb .thumb-item').removeClass('active')
        $(this).addClass('active')
    })
    //Xử lí nhấp vào right-btn
    $('.right-btn').click(function () {
        // alert('ok')
        if ($('.thumb-item:last-child').hasClass('active')) {
            $('.thumb-item:first-child').click()
        }
        else {
            $('.thumb-item.active').next().click()
        }
    })
    $('.left-btn').click(function () {
        if ($('.thumb-item:first-child').hasClass('active')) {
            $('.thumb-item:last-child').click()
        }
        else {
            $('.thumb-item.active').prev().click()
        }
    })
    //    hiển thị active phần tử ảnh thumb đầu tiên
    $('thumb-item:first-child').click()
})