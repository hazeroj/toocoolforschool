$('document').ready(function () {

    // 내비게이션 등장

    $('.fa-bars').click(function () {
        $('.gnb_wrap').toggleClass('left');
    })

    $('.fa-window-close').click(function () {
        $('.gnb_wrap').removeClass('left').css('left', '-1000px')
    })

    $('.fa-bars').mouseover(function () {
        $('.gnb_wrap').css('left', '0px')
    })
    $('.gnb_wrap').mouseleave(function () {
        $('.gnb_wrap').css('left', '-1000px')
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
    // NEW
    const n_r_btn = $('.new .fa-arrow-right');
    const n_l_btn = $('.new .fa-arrow-left');
    let n_l_width = $('.new_list li').width();
    let zero = 0

    let nw;
    let num = 1
    let w_width = $(window).innerWidth();
    if (w_width >= 1280) {
        $('.new span:last-child').text(num + ' / ' + ($('.new_list li').length - 1));

        n_r_btn.click(function () {

            if (zero >= 3) {
                zero = 0
            } else {
                zero++;
            }
            nw = -(zero * n_l_width)
            $('.new_list').css('left', nw)

            if (num === 4) {
                num = 1;
            } else {
                num++;
            }
            $('.new span:last-child').text(num + ' / ' + ($('.new_list li').length - 1));


        })
        n_l_btn.click(function () {

            if (zero == 0) {
                zero = 3;
            } else {
                zero--;
            }

            nw = -(zero * n_l_width);
            $('.new_list').css('left', nw);


            if (num === 1) {
                num = 4;
            } else {
                num--;
            }
            $('.new span:last-child').text(num + ' / ' + ($('.new_list li').length - 1));
        });
    } else {
        $('.new span:last-child').text(num + ' / ' + ($('.new_list li').length));

        n_r_btn.click(function () {

            if (zero >= 4) {
                zero = 0
            } else {
                zero++;
            }
            nw = -(zero * n_l_width)
            $('.new_list').css('left', nw)

            if (num === 5) {
                num = 1;
            } else {
                num++;
            }
            $('.new span:last-child').text(num + ' / ' + ($('.new_list li').length));


        })
        n_l_btn.click(function () {

            if (zero == 0) {
                zero = 4;
            } else {
                zero--;
            }

            nw = -(zero * n_l_width);
            $('.new_list').css('left', nw);


            if (num === 1) {
                num = 5;
            } else {
                num--;
            }
            $('.new span:last-child').text(num + ' / ' + ($('.new_list li').length));
        });

    }



    ////////////////////////////////////////////////////////////

    // LOOK
    const l_r_btn = $('.look_list>li .fa-angle-right');
    const l_l_btn = $('.look_list>li .fa-angle-left');
    let w = 1

    l_l_btn.click(function () {
        // console.log('눌림')
        // $('.look_list>li:first-child>div ').css('background-image','url(./images/LOOK01.jpg)');

        if (w == 1) {
            w = 4
        } else {
            w--;
        }
        $('.look_list>li:first-child>div').css('background-image', 'url(./images/LOOK0' + w + '.jpg)');

    })

    l_r_btn.click(function () {
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


    // 헤더 배경색바꾸고, 탑버튼 등장.
    let scrollTop1

    $(window).scroll(function () {
        scrollTop1 = $(this).scrollTop();
        // console.log(scrollTop1); //세로 스크롤값 출력

        if (scrollTop1 >= 700) {
            $('header').css('background-color', '#fff');
            $('button').addClass('appear')
        } else {
            $('header').css('background-color', 'rgba(255, 255, 255, 0.5)');
            $('button').removeClass('appear')
        };
    });

    // 탑버튼 클릭시 상단으로 올라감
    $('button').click(function () {
        $('html, body').animate({ scrollTop: 0 }, 400)
    });


    // 푸터 서브메뉴 내려오기
    $('footer address').click(function () {
        $('address>span:last-child').toggle();
    });
    $('footer .service li:first-child').click(function () {
        $('.f_inner>.service>li:not(:first-child)').toggle();
    });
    $('footer .center dt').click(function () {
        $('.f_inner>.center>dd ').toggle();
    });

});
