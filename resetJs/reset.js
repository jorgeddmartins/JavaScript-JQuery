/**************************************************************
 * Reset.JDD // Version 1.2.0
 **************************************************************/

var $thisDocument = $(document);
var $clickEvent = 'click';

var resetIn = 'reset_In';
var thisBody = $('body');
var nullVal = 0;
var oneVal = 1;
var twoVal = 2;
var threeVal = 3;
var fourVal = 4;
var fiveVal = 5;
var sixVal = 6;
var sevenVal = 7;
var eightVal = 8;
var nineVal = 9;

var getThisDate = new Date();
var secNum = 5; // Section Numbers

var ImgBlks = $('<img/>');
var ic = $('<i/>');
var thisDiv = $('<div/>');
var thisSpan = $('<span/>');

var formTemp = $('<form/>');
var faI = 'fa';
var iconI = 'icon';

var runScroll = false; // if true the page will have a JQuery Scroll

// BootStrap Sizes
var BootSMaxW = 12;
var BootSHW = 6;

;
(function() {

    "use strict";

    var element = $('div, span, nav, header, section, ul, li, p, footer');
    var resetHeader = $('<header/>').addClass('r-Header');
    var resetNav = $('<nav/>');
    var resetFooter = $('<footer/>').addClass('r-Footer');
    var reaetTemp = $('<div/>').addClass('Content_In');
    var resetVal = 0;

    var addNull = function(i) {
        if (i < 10) { i = '0' + i; }
        return i; 
    }

    var nowDay = ((getThisDate.getDate().toString().length) == 1) ? '0' + (getThisDate.getDate()) : (getThisDate.getDate());
    var nowMonth = ((getThisDate.getMonth().toString().length) == 1) ? '0' + (getThisDate.getMonth() + 1) : (getThisDate.getMonth() + 1);
    var nowYear = getThisDate.getFullYear();
    var nowTime = addNull(getThisDate.getHours()) + ":" + addNull(getThisDate.getMinutes());
    var nowMinute = addNull(getThisDate.getMinutes());
    var nowHour = addNull(getThisDate.getHours());


    $.fn.resetland = function() {

    	thisBody.addClass('reset_Me');

        if (thisBody.hasClass('reset_Me')) {
            element.removeClass().removeAttr('id').addClass(resetIn);
            $('.' + resetIn + '').each(function() { $(this).addClass('_In' + '_' + resetVal);
                resetVal++; });

            $('div, span, a, td, li').html('');
            $('.' + resetIn + ':nth-child(n+2)').remove();
        }

    	$('img').removeAttr('src');

    	var rSection = '<section class="r-Section">' + '</section>';
        var secVal = nullVal;

        for (var i = nullVal; i < secNum; i++) { $(rSection).appendTo('._In_' + nullVal + ''); }

        $('.r-Section').each(function() { 
        	$(this).addClass('secTemp' + '_' + secVal); 
        	secVal++; 
        });

    	$(reaetTemp).appendTo('.reset_Me ._In_' + nullVal + '');
        $('._In_' + nullVal + '').before(resetHeader);
        $(resetNav).appendTo('.r-Header');
        $('._In_' + nullVal + '').after(resetFooter);

    }

    $thisDocument.resetland();

    //$.getScript('assets/js/resetThemes/rFormTheme.js');
    $.getScript('assets/js/resetThemes/rBlocksTheme.js');

    // Run ScrollBar JQuery
    $.getScript('assets/js/resetThemes/scrollBar_R.js');


})();
