$(function(){
    $('#tab_tb').on('click','li',function(){
        $(this).addClass('tb-active').siblings().removeClass('tb-active');
        var index=$(this).index();
        $('#tab_wrap > div').eq(index).show().siblings().hide();
    });


    $(".tab_gh_ywclb li").hover(function(){
        $(this).find(".tab_gh_ywclb3").show();
        $(this).find(".icon-sanjiaoxing-right").addClass("icon-sanjiaoxing-down");
    },function(){
        $(this).find(".tab_gh_ywclb3").hide();
        $(this).find(".icon-sanjiaoxing-right").removeClass("icon-sanjiaoxing-down");    });


    function changeBackgroundColor() {
        var obj = document.getElementById("btnB");
        this.style.display = "none";
    }

    $('.yh-kjxq-section-two').on('click','li',function(){
        var bgm = document.getElementById('bgMusic');
        var index=$(this).index();
            this.style.display='none'
            console.log(bgm.paused);
            if (bgm.paused) {
                bgm.play();
            }else{
                bgm.pause();
            }
        console.log(index)
    });


});

