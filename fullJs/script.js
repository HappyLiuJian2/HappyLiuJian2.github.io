/**
 * Created by LiuJian on 2015/8/19.
 */

var timer = null;
$(document).ready(function () {
    $('#wrap').pagepiling({
        'verticalCentered': false,
        'css3': true,
        'sectionsColor': ['#254875', '#254875', '#254875', '#254875', '#254875'],
        'anchors': ['page1', 'page2', 'page3', 'page4', 'page5'],
        'navigation' : {
            'textColor' : '#000',
            'bulletsColor': '#000',
            'position': 'right',
            'tooltips': ['section1', 'section2', 'section3', 'section4']
        },
        'touchSensitivity': 5,

        'onLeave' : function (index) {
            if(index>=2&&index<=5) {
                var self = $("#selfIntro" + String(index));
                self.css({
                    'marginTop' : 0
                });
                self.attr({
                    'class' : "selfIntro"
                })
            }
        },

        'afterLoad' : function(link,index) {
            if(index>=2&&index<=5) {
                var self = $("#selfIntro" + String(index));
                var margin = parseInt(self.css('marginTop'));
                var speed = 1;
                timer = setInterval(function () {
                    var classCur = '';
                    if(index == 4) {
                        if(margin >= 16) {
                            clearInterval(timer);
                            classCur = self.attr('class');
                            classCur += " shake";
                            self.attr({
                                'class' : classCur
                            });
                        }
                        margin += speed;
                        self.css({
                            'marginTop' : margin + '%'
                        })
                    } else {
                        if (margin >= 23) {
                            clearInterval(timer);
                            classCur = self.attr('class');
                            classCur += " shake";
                            self.attr({
                                'class': classCur
                            });
                        }
                        margin += speed;
                        self.css({
                            'marginTop': margin + '%'
                        })
                    }
                },5)
            }
        }
    });
});
