$('document').ready(function () {

    // 내비게이션 등장

    $('.fa-bars').click(function () {
        $('.gnb_wrap').toggleClass('left');
    })

    $('.fa-window-close').click(function(){
        $('.gnb_wrap').removeClass('left').css('left','-1000px')
    })

    $('.fa-bars').mouseover(function(){
        $('.gnb_wrap').css('left','0px')
    })
    $('.gnb_wrap').mouseleave(function(){
        $('.gnb_wrap').css('left','-1000px')
    })


    ////////////////////////////////////////////////////////////

    // 메인 배너

    // 콘트롤 버튼
    const c_btn = $('.banner div .c_btn');
    let i;

    c_btn.click(function () {
        i = $(this).index();
        console.log(i);

        i = -(i * $('.banner>ul>li').width());
        console.log(i);

        $('.banner>ul').animate({ 'left': i }, 400);

        $('.banner>div>span').removeClass('act');
        $(this).addClass('act');
    });

    // 자동슬라이드

    function mslide(n) {
        n = -(n * $('.banner>ul>li').width());

        $('.banner ul').animate({ 'left': n }, 1000);

    }

    let n = 0
    let Timer = setInterval(function () {
        if (n == 2) {
            n = 0;
            $('.banner>div>span').removeClass('act');
            $('.banner>div>span').eq(n).addClass('act');
        } else {
            n++;
            $('.banner>div>span').removeClass('act');
            $('.banner>div>span').eq(n).addClass('act');
        }

        mslide(n);
    }, 4000);

    ////////////////////////////////////////////////////////////

    // LOOK
    const n_r_btn = $('.look_list>li .fa-angle-right');
    const n_l_btn = $('.look_list>li .fa-angle-left');
    let w = 1

    n_l_btn.click(function () {
        // console.log('눌림')
        // $('.look_list>li:first-child>div ').css('background-image','url(./images/LOOK01.jpg)');

        if (w == 1) {
            w = 4
        } else {
            w--;
        }
        $('.look_list>li:first-child>div').css('background-image', 'url(./images/LOOK0' + w + '.jpg)');

    })

    n_r_btn.click(function () {
        // console.log('눌림')

        if (w < 4) {
            w++;
        } else {
            w = 1;
        }
        $('.look_list>li:first-child>div').css('background-image', 'url(./images/LOOK0' + w + '.jpg)');
    })

    ////////////////////////////////////////////////////////////

    // 이벤트

    const c_btn2 = $('.event>div>span');
    let ii;

    c_btn2.click(function () {
        ii = $(this).index();
        console.log(ii);

        ii = -(ii * ($('.event_list>li').width()));
        console.log(ii);

        $('.event_list').animate({ 'left': ii }, 400);

        $('.event>div>span').removeClass('act');
        $(this).addClass('act');
    });

});
