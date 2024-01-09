$('document').ready(function () {

    // 내비게이션 등장
    $('.fa-bars').mouseenter(function () {
        $('.gnb_wrap').css({ 'left': '0px' })
    })

    $('.gnb_wrap').mouseleave(function () {
        $('.gnb_wrap').css({ 'left': '-1000px' })
    }

    )


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



});
