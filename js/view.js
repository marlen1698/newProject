/**
 * Created by MAJL on 2017/3/2.
 */
function findDimensions() {  //��������ȡ�ߴ�
    var winWidth = 0;
    var winHeight = 0;
    //��ȡ���ڿ��
    if (window.innerWidth) {
        winWidth = window.innerWidth;
    } else if ((document.body) && (document.body.clientWidth)) {
        winWidth = document.body.clientWidth;
    }
    //��ȡ���ڸ߶�
    if (window.innerHeight) {
        winHeight = window.innerHeight;
    } else if ((document.body) && (document.body.clientHeight)) {
        winHeight = document.body.clientHeight;
    }
    //ͨ������Document�ڲ���body���м�⣬��ȡ���ڴ�С
    if (document.documentElement && document.documentElement.clientHeight && document.documentElement.clientWidth) {
        winHeight = document.documentElement.clientHeight;
        winWidth = document.documentElement.clientWidth;
    }
    //����div�ĸ߶��Լ�iframe�Ŀ��
    var div_content_h = winHeight - 50;
    var content_w = winWidth - 450 - 7;
    var content_iframe_h = winHeight - 50 - 90;
    var content_iframe_w = winWidth - 450;
    //iframe height and width
    $("#content iframe").each(function () {
        $(this).context.height = content_iframe_h + "px";
        $(this).context.width = content_iframe_w + "px";
    });
   //�������˵�tab-list�߶�
    var xx=$(window).height()-90;
    //alert(xx);
    $(".tab-list").height(xx);
    //����content-center��˵�tab-list�߶�
   //  $("#content").height(xx);
   //  //$(".content-footer").width($(window).width()-551);
   //  $(".content-footer").each(function () {
   //      $(this).context.width = content_iframe_w + "px";
   //  });
}
$(document).ready(function () {
    findDimensions();
});
//���ú�������ȡ��ֵ
$(window).resize(function () {
    findDimensions();
});





