jQuery(document).ready(function(d){var l=2500,t=3800,r=t-3e3,n=50,o=150,c=500,h=c+800,u=600,e=1500;function p(s){var i,e,a=m(s);s.parents(".cd-headline").hasClass("type")?((i=s.parent(".cd-words-wrapper")).addClass("selected").removeClass("waiting"),setTimeout(function(){i.removeClass("selected"),s.removeClass("is-visible").addClass("is-hidden").children("i").removeClass("in").addClass("out")},c),setTimeout(function(){f(a,o)},h)):s.parents(".cd-headline").hasClass("letters")?(e=s.children("i").length>=a.children("i").length,function s(i,e,a,n){i.removeClass("in").addClass("out");i.is(":last-child")?a&&setTimeout(function(){p(m(e))},l):setTimeout(function(){s(i.next(),e,a,n)},n);{var t;i.is(":last-child")&&d("html").hasClass("no-csstransitions")&&(t=m(e),w(e,t))}}(s.find("i").eq(0),s,e,n),C(a.find("i").eq(0),a,e,n)):s.parents(".cd-headline").hasClass("clip")?s.parents(".cd-words-wrapper").animate({width:"2px"},u,function(){w(s,a),f(a)}):s.parents(".cd-headline").hasClass("loading-bar")?(s.parents(".cd-words-wrapper").removeClass("is-loading"),w(s,a),setTimeout(function(){p(a)},t),setTimeout(function(){s.parents(".cd-words-wrapper").addClass("is-loading")},r)):(w(s,a),setTimeout(function(){p(a)},l))}function f(s,i){s.parents(".cd-headline").hasClass("type")?(C(s.find("i").eq(0),s,!1,i),s.addClass("is-visible").removeClass("is-hidden")):s.parents(".cd-headline").hasClass("clip")&&s.parents(".cd-words-wrapper").animate({width:s.width()+10},u,function(){setTimeout(function(){p(s)},e)})}function C(s,i,e,a){s.addClass("in").removeClass("out"),s.is(":last-child")?(i.parents(".cd-headline").hasClass("type")&&setTimeout(function(){i.parents(".cd-words-wrapper").addClass("waiting")},200),e||setTimeout(function(){p(i)},l)):setTimeout(function(){C(s.next(),i,e,a)},a)}function m(s){return s.is(":last-child")?s.parent().children().eq(0):s.next()}function w(s,i){s.removeClass("is-visible").addClass("is-hidden"),i.removeClass("is-hidden").addClass("is-visible")}(function(s){s.each(function(){var s=d(this),e=s.text().split(""),a=s.hasClass("is-visible");for(i in e)0<s.parents(".rotate-2").length&&(e[i]="<em>"+e[i]+"</em>"),e[i]=a?'<i class="in">'+e[i]+"</i>":"<i>"+e[i]+"</i>";var n=e.join("");s.html(n).css("opacity",1)})})(d(".cd-headline.letters").find("b")),function(s){var n=l;s.each(function(){var s,i,e,a=d(this);a.hasClass("loading-bar")?(n=t,setTimeout(function(){a.find(".cd-words-wrapper").addClass("is-loading")},r)):a.hasClass("clip")?(i=(s=a.find(".cd-words-wrapper")).width()+10,s.css("width",i)):a.hasClass("type")||(i=a.find(".cd-words-wrapper b"),e=0,i.each(function(){var s=d(this).width();e<s&&(e=s)}),a.find(".cd-words-wrapper").css("width",e)),setTimeout(function(){p(a.find(".is-visible").eq(0))},n)})}(d(".cd-headline"))});