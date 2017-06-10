/**
 * Created by MAJL on 2017/3/29.
 */

$(function () {
    $('.inactive').click(function () {
        if ($(this).siblings('ul').css('display') == 'none') {
            $(this).parent('li').siblings('li').removeClass('inactives').addClass('hover');
            $(this).addClass('inactives');
            $(this).siblings('ul').slideDown(100).children('li');
            if ($(this).parents('li').siblings('li').children('ul').css('display') == 'block') {
                $(this).parents('li').siblings('li').children('ul').parent('li').children('a').removeClass('inactives');
                $(this).parents('li').siblings('li').children('ul').slideUp(100);
            }
        } else {
            //控制自身变成+号
            $(this).removeClass('inactives');
            //控制自身菜单下子菜单隐藏
            $(this).siblings('ul').slideUp(100);
            //控制自身子菜单变成+号
            $(this).siblings('ul').children('li').children('ul').parent('li').children('a').addClass('inactives');
            //控制自身菜单下子菜单隐藏
            $(this).siblings('ul').children('li').children('ul').slideUp(100);
            //控制同级菜单只保持一个是展开的（-号显示）
            $(this).siblings('ul').children('li').children('a').removeClass('inactives');
        }
        $(".list ul li ul li").click(function () {
            $(this).addClass("selected").siblings().removeClass("selected");
            $(this).parents("li").siblings().find("li").removeClass("selected");
        });
    });

    //hover之后，页面横竖向显示提醒
    $(".a-active i").hover(//为li绑定了鼠标进入和鼠标移开的两个参数
        function () {
            if ($(this).index() == 0) {
                $(this).siblings().append($("<span style='z-index:99;height:18px;background:#6E6E6E;color: white;position: absolute;top: -16px; left: 0;font-size: 12px;border-radius: 5px;line-height: 18px; padding:0 10px'>页面横向显示</span>"));
            } else {
                $(this).siblings().append($("<span style='z-index:99;height:18px;background:#6E6E6E;color: white;position: absolute;top: -16px; right: 0;font-size: 12px;border-radius: 5px;line-height: 18px; padding:0 10px'>页面竖向显示</span>"));
            }
        }, function () {
            $(this).parents(".a-active").find("span").remove();
        }
    );

    $(".text-input").on('click', function () {
        $("#input-w").val($(this).width());
        $("#input-h").val($(this).height());
    });
    $("#content").scroll(function () {
        var yy = $(this).scrollTop();
        $(".hRule").css("top", yy);
        var xx = $(this).scrollLeft();
        $(".vRule").css("left", xx);
    });

    //点击当前的i添加red类，并给其他i清除类名
    $(".ddd li i").on('click', function () {
        $(this).addClass('red').parent().siblings().find('i').removeClass('red');
    });
    //点击当前的i添加red类，并给其他i清除类名
    $(".a-active i").on('click', function () {
        $(this).addClass('bg-white').siblings().removeClass('bg-white');
    });
    $(".ltrb li").on('click', function () {
        $(this).addClass('bg-back').siblings().removeClass('bg-back');
    });

    $(".ui-menu-right-icon").on('click', function () {
        $(this).toggleClass('bg-white');
        $(this).children().toggleClass("ui-icon-cut-normal")
    });
    $("#u190").on('click', function () {
        $(this).val()
    });
    //头部**折叠切换
    $(".ui-select-right").toggle(function () {
        $(this).siblings('.drop-menu01').removeClass('hide').addClass('block');
        $(this).parents('.ui-select').siblings().find('.drop-menu01').addClass('hide').removeClass('block');
    },function () {
        $(this).siblings('.drop-menu01').removeClass('block').addClass('hide');
        // $(this).parents('.ui-select').siblings().find('.drop-menu01').addClass('hide').removeClass('block');
        })
});

(function ($) {
    var $box = $('#box');
    var $bg = $('#bg');
    var $bgcolor = $('#bgcolor');
    var $btn = $('#bt');
    var $text = $('#text');
    var statu = false;
    var ox = 0;
    var lx = 0;
    var left = 0;
    var bgleft = 0;
    $btn.mousedown(function (e) {
        lx = $btn.offset().left;
        ox = e.pageX - left;
        statu = true;
    });
    $(document).mouseup(function () {
        statu = false;
    });
    $box.mousemove(function (e) {
        if (statu) {
            left = e.pageX - ox;
            if (left < 0) {
                left = 0;
            }
            if (left > 130) {
                left = 130;
            }
            $btn.css('left', left);
            $bgcolor.width(left);
            $text.html(parseInt(left / 1.3) + '%');
        }
    });
    $bg.click(function (e) {
        if (!statu) {
            bgleft = $bg.offset().left;
            left = e.pageX - bgleft;
            if (left < 0) {
                left = 0;
            }
            if (left > 130) {
                left = 130;
            }
            $btn.css('left', left);
            $bgcolor.stop().animate({width: left}, 130);
            $text.html(parseInt(left / 1.3) + '%');
        }
    });
})(jQuery);

