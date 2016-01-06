/**
 * Created by LiuJian on 2016/1/6.
 */
$(document).ready(function () {
    $('.article').on('mouseover', function (e) {
        e.stopPropagation();
        $target = $(e.currentTarget);
        var index = $target.index();
        var length = $('.deck').children().length;

        $('.deck').children().find('.article_content').css('opacity',0);
        $target.find('.article_content').css('opacity',1);
        for(var i = 0; i <= index; i++) {
            $('.deck').children().eq(i).css('top', 60 * i + 'px');
        }
        for(var j = index + 1; j < length; j++) {
            $('.deck').children().eq(j).css('top', 60 * (j-1) + 280 + 'px');
        }

    })
});