<!-- Codec Mega Menu Material design -->
<script src='http://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js' type='text/javascript'/>
<script type='text/javascript'>
/*<![CDATA[*/
var iQ=setInterval(function(){window.jQuery&&(clearInterval(iQ),jQuery(document).ready(function(){jQuery(window).scroll(function(){jQuery(this).scrollTop()>500?jQuery(".scrollup").fadeIn():jQuery(".scrollup").fadeOut()}),jQuery(".scrollup").click(function(){return jQuery("html, body").go-adb({scrollTop:0},600),!1}),jQuery(".fancybox").fancybox(),jQuery('a[href$=".png"], a[href$=".PNG"], a[href$=".jpg"], a[href$=".JPG"], a[href$=".gif"], a[href$=".GIF"]').each(function(){jQuery(this).addClass("fancybox")}),jQuery(".menu-btn").on("click",function(){jQuery(".main-menu").toggleClass("active")}),jQuery(".main-menu a").on("click",function(){jQuery(".main-menu").hasClass("active")&&jQuery(".main-menu").removeClass("active")}),jQuery(document).on("click",function(e){jQuery(e.target).closest(".menu-wrapper").length||jQuery(".main-menu").removeClass("active"),e.stopPropagation()})}))});
  /*]]>*/
</script>

<script type='text/javascript'>
$(document).ready(function(){$(&quot;#mega-informa&quot;).click(function(){$(&quot;#nav-menu1&quot;).toggleClass(&quot;shows&quot;);});});
$(document).ready(function(){$(&quot;.toggleMenu&quot;).click(function(){$(&quot;.dropdowns&quot;).toggleClass(&quot;shows&quot;);});});
$(document).ready(function(){$(&quot;.oscuro,#closedrop&quot;).click(function(){$(&quot;.dropdowns,.oscuro&quot;).removeClass(&quot;shows&quot;);});});
$(document).ready(function(){$(&quot;.toggleMenu&quot;).click(function(){$(&quot;.oscuro&quot;).toggleClass(&quot;shows&quot;);});});
$(document).ready(function(){$(&quot;#show-menu-small&quot;).click(function(){$(&quot;#mega-menu-material,.adb-open&quot;).toggleClass(&quot;shows&quot;);});});
$(document).ready(function(){$(&quot;.adb-open&quot;).click(function(){$(&quot;#mega-menu-material,.adb-open&quot;).removeClass(&quot;shows&quot;);});});

//<![CDATA[
// Mega menu Nav
var Script=function(){jQuery('.mega-menu-nav .sub-menu > a').click(function(){var last=jQuery('.sub-menu.open',$('.mega-menu-nav'));last.removeClass("open");jQuery('.dropdown').addClass("open");jQuery('.dropdown',last).removeClass("open");jQuery('.sub',last).slideUp(300);var sub=jQuery(this).next();if(sub.is(":visible")){jQuery('.dropdown',jQuery(this)).removeClass("open");jQuery(this).parent().removeClass("open");sub.slideUp(300)}else{jQuery('.dropdown',jQuery(this)).addClass("open");jQuery(this).parent().addClass("open");sub.slideDown(300)}var o=($(this).offset());diff=300-o.top;if(diff>0)$(".mega-menu-nav").scrollTo("-="+Math.abs(diff),500);else $(".mega-menu-nav").scrollTo("+="+Math.abs(diff),500)})}();
//]]>

</script>

<script type='text/javascript'>
//<![CDATA[
$(function() {
    var ink, d, x, y;
    $(".adb-th").click(function(e) {
        if ($(this).find(".ink").length === 0) {
            $(this).prepend("<span class='ink'></span>");
        }
       ink = $(this).find(".ink");
        ink.removeClass("go-adb");
        if (!ink.height() && !ink.width()) {
            d = Math.max($(this).outerWidth(), $(this).outerHeight());
            ink.css({
                height: d,
                width: d
            });
        }
        x = e.pageX - $(this).offset().left - ink.width() / 2;
        y = e.pageY - $(this).offset().top - ink.height() / 2;
        ink.css({
            top: y + 'px',
            left: x + 'px'
        }).addClass("go-adb");
    });
});

//]]>
</script>
<!-- End Codec Mega Menu Material design -->
