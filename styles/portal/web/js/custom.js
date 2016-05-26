﻿jQuery.noConflict();
jQuery(document).ready(function ()
{
    jQuery('#top-menu ul').superfish({hoverClass:'over', delay:400, animation:{opacity:'show', height:'show'}, speed:150, autoArrows:true, dropShadows:true});
    jQuery('#cat-menu ul').superfish({hoverClass:'over', delay:400, animation:{opacity:'show', height:'show'}, speed:150, autoArrows:true, dropShadows:true});
    jQuery('#main-menu ul').superfish({hoverClass:'over', delay:400, animation:{opacity:'show', height:'show'}, speed:150, autoArrows:true, dropShadows:true});
    jQuery('.toggle-content').hide();
    jQuery(".toggle").toggle(function () {
        jQuery(this).addClass("active")
    }, function () {
        jQuery(this).removeClass("active")
    });
    jQuery(".toggle").click(function () {
        jQuery(this).next(".toggle-content").slideToggle()
    });
    jQuery('#post-1').click(function () {
        jQuery('#slider1').cycle(0);
        return false
    });
    jQuery('#post-2').click(function () {
        jQuery('#slider1').cycle(1);
        return false
    });
    jQuery('#post-3').click(function () {
        jQuery('#slider1').cycle(2);
        return false
    });
    jQuery('#post-4').click(function () {
        jQuery('#slider1').cycle(3);
        return false
    });
    jQuery('#post-5').click(function () {
        jQuery('#slider1').cycle(4);
        return false
    });
    jQuery('#post-6').click(function () {
        jQuery('#slider1').cycle(5);
        return false
    });

    jQuery('#tabs-frontpage > ul').tabs({fx:{opacity:'toggle', duration:150}});
    jQuery('#tabbed-posts > ul').tabs({fx:{opacity:'toggle', duration:150}});
    jQuery('#tabbed-archives > ul').tabs({fx:{opacity:'toggle', duration:150}});
    jQuery('#tabbed-reviews > ul').tabs({fx:{opacity:'toggle', duration:150}});
    jQuery('#tabbed-reviews-compact > ul').tabs({fx:{opacity:'toggle', duration:150}});
    jQuery('.tabs-shortcode > ul').tabs({fx:{opacity:'toggle', duration:150}});
    if (!jQuery.browser.msie) {
        button_hover_shortcode()
    }

    jQuery('#forecolorSelector').ColorPicker({color:'#C32C0D', onShow:function (colpkr) {
        jQuery(colpkr).fadeIn(300);
        return false
    }, onHide:function (colpkr) {
        jQuery(colpkr).fadeOut(300);
        return false
    }, onChange:function (hsb, hex, rgb) {
        jQuery('#logo-bar-wrapper').css('backgroundColor', '#' + hex);
        jQuery('#dontmiss-header').css('color', '#' + hex);
        jQuery('#forecolorSelector div').css('backgroundColor', '#' + hex)
    }});

    jQuery('#colorSelector').ColorPicker({color:'#E1E1E1', onShow:function (colpkr) {
        jQuery(colpkr).fadeIn(300);
        return false
    }, onHide:function (colpkr) {
        jQuery(colpkr).fadeOut(300);
        return false
    }, onChange:function (hsb, hex, rgb) {
        jQuery('body').css('backgroundColor', '#' + hex);
        jQuery('#colorSelector div').css('backgroundColor', '#' + hex)
    }})
});
jQuery(window).load(function () {
    jQuery(function () {
        jQuery("#latest-wrapper .latest").jCarouselLite({btnNext:".latest-next", btnPrev:".latest-prev", easing:"easeInOutExpo", speed:700, visible:5, scroll:2})
    });
    jQuery(function () {
        jQuery(".main-content-left #trending").jCarouselLite({btnNext:".trending-next", btnPrev:".trending-prev", easing:"easeInOutExpo", speed:300, visible:5, scroll:2})
    });
    jQuery(function () {
        jQuery(".main-content #trending").jCarouselLite({btnNext:".trending-next", btnPrev:".trending-prev", easing:"easeInOutExpo", speed:300, visible:8, scroll:2})
    });
    jQuery(function () {
        jQuery("#shortcode-slider").jCarouselLite({btnNext:".shortcode-slider-next", btnPrev:".shortcode-slider-prev", easing:"easeInOutExpo", speed:300, visible:1})
    });
    jQuery(function () {
        jQuery(".brighten").css("opacity", "0.75");
        jQuery(".brighten").hover(function () {
            jQuery(this).stop().animate({opacity:1.0}, 70)
        }, function () {
            jQuery(this).stop().animate({opacity:0.75}, 700)
        });
        jQuery(".darken img").hover(function () {
            jQuery(this).stop().animate({opacity:.28}, 150)
        }, function () {
            jQuery(this).stop().animate({opacity:1.0}, 600)
        })
    })
});
function hidedemo() {
    jQuery('.demo-wrapper').animate({"right":"-=128px"}, 300, "easeInOutExpo");
    jQuery('.hide-demo').hide();
    jQuery('.show-demo').show()
}
function showdemo() {
    jQuery('.demo-wrapper').animate({"right":"0px"}, 300, "easeInOutExpo");
    jQuery('.hide-demo').show();
    jQuery('.show-demo').hide()
}
function changebg(id, repeat, image) {
    jQuery('.bg').css("opacity", "1");
    jQuery('.bg').css("border-color", "#FFF");
    jQuery('#' + id + '').css("opacity", "0.5");
    jQuery('#' + id + '').css("border-color", "#000");
    jQuery('body').css("background-image", "url(" + image + ")");
    jQuery('body').css("background-repeat", "" + repeat + "")
}
function changeskin(addclass, removeclass) {
    jQuery('.bg').css("opacity", "1");
    jQuery('.bg').css("border-color", "#FFF");
    jQuery('body').removeClass(removeclass);
    jQuery('body').addClass(addclass)
}
function button_hover_shortcode() {
    jQuery('.button_link,.more-button a,.comment-reply-link,button[type=submit],button,input[type=submit],input[type=button],input[type=reset],input[type=image]').hover(function () {
        jQuery(this).stop().animate({opacity:0.80}, 300)
    }, function () {
        jQuery(this).stop().animate({opacity:1}, 300)
    })
}
(function ($) {
    if (!document.defaultView || !document.defaultView.getComputedStyle) {
        var oldCurCSS = jQuery.curCSS;
        jQuery.curCSS = function (elem, name, force) {
            if (name === 'background-position') {
                name = 'backgroundPosition'
            }
            if (name !== 'backgroundPosition' || !elem.currentStyle || elem.currentStyle[name]) {
                return oldCurCSS.apply(this, arguments)
            }
            var style = elem.style;
            if (!force && style && style[name]) {
                return style[name]
            }
            return oldCurCSS(elem, 'backgroundPositionX', force) + ' ' + oldCurCSS(elem, 'backgroundPositionY', force)
        }
    }
    var oldAnim = $.fn.animate;
    $.fn.animate = function (prop) {
        if ('background-position'in prop) {
            prop.backgroundPosition = prop['background-position'];
            delete prop['background-position']
        }
        if ('backgroundPosition'in prop) {
            prop.backgroundPosition = '(' + prop.backgroundPosition + ')'
        }
        return oldAnim.apply(this, arguments)
    };
    function toArray(strg) {
        strg = strg.replace(/left|top/g, '0px');
        strg = strg.replace(/right|bottom/g, '100%');
        strg = strg.replace(/([0-9\.]+)(\s|\)|$)/g, "$1px$2");
        var res = strg.match(/(-?[0-9\.]+)(px|\%|em|pt)\s(-?[0-9\.]+)(px|\%|em|pt)/);
        return[parseFloat(res[1], 10), res[2], parseFloat(res[3], 10), res[4]]
    }

    $.fx.step.backgroundPosition = function (fx) {
        if (!fx.bgPosReady) {
            var start = $.curCSS(fx.elem, 'backgroundPosition');
            if (!start) {
                start = '0px 0px'
            }
            start = toArray(start);
            fx.start = [start[0], start[2]];
            var end = toArray(fx.end);
            fx.end = [end[0], end[2]];
            fx.unit = [end[1], end[3]];
            fx.bgPosReady = true
        }
        var nowPosX = [];
        nowPosX[0] = ((fx.end[0] - fx.start[0]) * fx.pos) + fx.start[0] + fx.unit[0];
        nowPosX[1] = ((fx.end[1] - fx.start[1]) * fx.pos) + fx.start[1] + fx.unit[1];
        fx.elem.style.backgroundPosition = nowPosX[0] + ' ' + nowPosX[1]
    }
})(jQuery);

jQuery("select#select-menu-top-menu").change(function () {
    window.location = jQuery(this).find("option:selected").val()
});
jQuery("select#select-menu-main-menu").change(function () {
    window.location = jQuery(this).find("option:selected").val()
});
jQuery(document).ready(function () {
    jQuery("select#select-menu-top-menu, select#select-menu-main-menu").selectBox();

    jQuery("#orderSelectNetwork").change( function()
    {
        var $this = jQuery(this),
            $val = $this.val();

        if(!$val) { return false; }
        jQuery("#orderSelectNetwork").hide();
        if($val == "airtelmw" || $val.substring($val.length-2) == "ke") {
            jQuery("#orderEnterNum").show();
            jQuery("#orderEnterNum").append('<input type="hidden" name="network" value="'+ $val +'" />');
            jQuery('#orderInstructions').text('Enter your mobile number to GET this item now'); }
        else {
            jQuery("#orderKeyword").show();
            jQuery('#orderInstructions').text('SMS keyword to GET this item now');
        }
    });

    jQuery("img").error(function()
    {
       jQuery(this).hide();
    });

});
