var adDay;
var adMonth;
var adYear;
var dDay;
var dMonth;
var dYear;
var instance;
var settings;
var thisDocument;
var nowDate = new Date();

var nullVal = 0;
var oneVal = 1;

;
(function() {

    "use strict";

    $('div').addClass('thisClose');
    $('.formCalendar, #calendar').removeClass('thisClose');

    var thisNowDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    var thisNowMonths = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    var TeamCalendar = function(options, object) {
        adDay = nowDate.getDate();
        adMonth = nowDate.getMonth();
        adYear = nowDate.getFullYear();
        dDay = adDay;
        dMonth = adMonth;
        dYear = adYear;
        instance = object;

        settings = $.extend({}, $.fn.TeamCalendar.defaults, options);

        function lpad(value, length, pad) {
            if (typeof pad == 'undefined') { pad = '0'; }
            var p;
            for (var i = 0; i < length; i++) { p += pad; }
            return (p + value).slice(-length);
        }

        var mouseOver = function() { $(this).addClass('c-nav-btn-over'); };
        var mouseLeave = function() { $(this).removeClass('c-nav-btn-over'); };
        var nextMonth = function() {
            if (dMonth < 11) { dMonth++; } else { dMonth = 0;
                dYear++; }
            runTCalendar(); };
        var previousMonth = function() {
            if (dMonth > 0) { dMonth--; } else { dMonth = 11;
                dYear--; }
            runTCalendar(); };

        function runTCalendar() {
            var dWeekDayOfMonthStart = new Date(dYear, dMonth, 1).getDay();
            var dLastDayOfMonth = new Date(dYear, dMonth + 1, 0).getDate();
            var dLastDayOfPreviousMonth = new Date(dYear, dMonth + 1, 0).getDate() - dWeekDayOfMonthStart + 1;

            var cBody = $('<div/>').addClass('c-grid');
            var cNext = $('<span/>').addClass('c-next c-grid-title c-pad-top');
            var cMonth = $('<div/>').addClass('c-month c-grid-title c-pad-top');
            var cPrevious = $('<span/>').addClass('c-previous c-grid-title c-pad-top');
            cMonth.html(settings.months[dMonth] + ' ' + dYear);

            cPrevious.on('mouseover', mouseOver).on('mouseleave', mouseLeave).on('click', previousMonth);
            cNext.on('mouseover', mouseOver).on('mouseleave', mouseLeave).on('click', nextMonth);

            cBody.append(cPrevious);

            cBody.append(cMonth);
            cBody.append(cNext);
            for (var i = 0; i < settings.weekDays.length; i++) {
                var cWeekDay = $('<span/>').addClass('c-week-day c-pad-top');
                cWeekDay.html(settings.weekDays[i]);
                cBody.append(cWeekDay);
            }
            var day = 1;
            var dayOfNextMonth = 1;
            for (var i = 0; i < 42; i++) {
                var cDay = $('<span/>');
                if (i < dWeekDayOfMonthStart) {
                    cDay.addClass('c-day-previous-month c-pad-top');
                    cDay.html(dLastDayOfPreviousMonth++);

                } else if (day <= dLastDayOfMonth) {
                    cDay.addClass('c-day c-pad-top').attr({ 'data-date': day, 'data-month': dMonth, 'data-year': dYear });

                    if (day == dDay && adMonth == dMonth && adYear == dYear) { cDay.addClass('today-select'); }
                    cDay.html(day++);

                } else { cDay.addClass('c-day-next-month c-pad-top');
                    cDay.html(dayOfNextMonth++); }
                cBody.append(cDay);
            }

            thisDocument = $(document);

            var addNull = function(i) {
                if (i < 10) { i = '0' + i; }
                return i; }

            var nowDay = ((nowDate.getDate().toString().length) == 1) ? '0' + (nowDate.getDate()) : (nowDate.getDate());
            var nowMonth = ((nowDate.getMonth().toString().length) == 1) ? '0' + (nowDate.getMonth() + 1) : (nowDate.getMonth() + 1);
            var nowYear = nowDate.getFullYear();
            var nowTime = addNull(nowDate.getHours()) + ":" + addNull(nowDate.getMinutes());
            var nowMinute = addNull(nowDate.getMinutes());
            var formatDate = nowDay + "/" + nowMonth + "/" + nowYear + " " + nowTime;
            var formDateTimer = nowDay + "/" + nowMonth + "/" + nowYear;
            var halfDate = "/" + nowMonth + "/" + nowYear + " " + nowTime;
            var nowHour = addNull(nowDate.getHours());

            var calendarDate = $('.teamPicker');
            var clickEvent = 'click';
            var mouseOverEvent = 'mouseover';
            var mouseLeaveEvent = 'mouseleave';

            // Extra Plugin
            $.fn.extend({

                gobalDay: function() {
                    return this.on('click', '*', function(e) {

                        switch (true) {

                            case ($(this).hasClass('c-day')):
                                $('.c-day').removeClass('thisSelect');
                                $(this).addClass('thisSelect');

                                var thisDate = $(this).attr('data-date');
                                var thisMonth = $(this).attr('data-month');
                                var thisYear = $(this).attr('data-year');

                                var janMonth = '01';
                                var febMonth = '02';
                                var marMonth = '03';
                                var aprMonth = '04';
                                var mayMonth = '05';
                                var junMonth = '06';
                                var julMonth = '07';
                                var augMonth = '08';
                                var sepMonth = '09';
                                var octMonth = '10';
                                var novMonth = '11';
                                var decMonth = '12';
                                var middleToken = '/';

                                if (thisMonth == 0) {
                                    calendarDate.val(thisDate + middleToken + janMonth + middleToken + thisYear);

                                    if (thisDate >= 1 && thisDate <= 9) { calendarDate.val(0 + thisDate + middleToken + janMonth + middleToken + thisYear); }

                                } else if (thisMonth == 1) {
                                    calendarDate.val(thisDate + middleToken + febMonth + middleToken + thisYear);

                                    if (thisDate >= 1 && thisDate <= 9) { calendarDate.val(0 + thisDate + middleToken + febMonth + middleToken + thisYear); }

                                } else if (thisMonth == 2) {
                                    calendarDate.val(thisDate + middleToken + marMonth + middleToken + thisYear);

                                    if (thisDate >= 1 && thisDate <= 9) { calendarDate.val(0 + thisDate + middleToken + marMonth + middleToken + thisYear); }

                                } else if (thisMonth == 3) {
                                    calendarDate.val(thisDate + middleToken + aprMonth + middleToken + thisYear);

                                    if (thisDate >= 1 && thisDate <= 9) { calendarDate.val(0 + thisDate + middleToken + aprMonth + middleToken + thisYear); }

                                } else if (thisMonth == 4) {
                                    calendarDate.val(thisDate + middleToken + mayMonth + middleToken + thisYear);

                                    if (thisDate >= 1 && thisDate <= 9) { calendarDate.val(0 + thisDate + middleToken + mayMonth + middleToken + thisYear); }

                                } else if (thisMonth == 5) {
                                    calendarDate.val(thisDate + middleToken + junMonth + middleToken + thisYear);

                                    if (thisDate >= 1 && thisDate <= 9) { calendarDate.val(0 + thisDate + middleToken + junMonth + middleToken + thisYear); }

                                } else if (thisMonth == 6) {
                                    calendarDate.val(thisDate + middleToken + julMonth + middleToken + thisYear);

                                    if (thisDate >= 1 && thisDate <= 9) { calendarDate.val(0 + thisDate + middleToken + julMonth + middleToken + thisYear); }

                                } else if (thisMonth == 7) {
                                    calendarDate.val(thisDate + middleToken + augMonth + middleToken + thisYear);

                                    if (thisDate >= 1 && thisDate <= 9) { calendarDate.val(0 + thisDate + middleToken + augMonth + middleToken + thisYear); }

                                } else if (thisMonth == 8) {
                                    calendarDate.val(thisDate + middleToken + sepMonth + middleToken + thisYear);

                                    if (thisDate >= 1 && thisDate <= 9) { calendarDate.val(0 + thisDate + middleToken + sepMonth + middleToken + thisYear); }

                                } else if (thisMonth == 9) {
                                    calendarDate.val(thisDate + middleToken + octMonth + middleToken + thisYear);

                                    if (thisDate >= 1 && thisDate <= 9) { calendarDate.val(0 + thisDate + middleToken + octMonth + middleToken + thisYear); }

                                } else if (thisMonth == 10) {
                                    calendarDate.val(thisDate + middleToken + novMonth + middleToken + thisYear);

                                    if (thisDate >= 1 && thisDate <= 9) { calendarDate.val(0 + thisDate + middleToken + novMonth + middleToken + thisYear); }

                                } else if (thisMonth == 11) {
                                    calendarDate.val(thisDate + middleToken + decMonth + middleToken + thisYear);

                                    if (thisDate >= 1 && thisDate <= 9) { calendarDate.val(0 + thisDate + middleToken + decMonth + middleToken + thisYear); }
                                }

                                $('#calendar').hide();
                                $('.k-inputCalendar').removeClass('teamPicker_' + oneVal + '').addClass('teamPicker');

                                break;

                            case ($(this).hasClass('teamPicker')):
                                $('#calendar').show();
                                $('.k-inputCalendar').removeClass('teamPicker').addClass('teamPicker_' + oneVal + '');
                                $('.boxSystem').removeClass('thisClose');
                                e.stopPropagation();
                                break;

                            case ($(this).hasClass('teamPicker_' + oneVal + '')):
                                $('#calendar').hide();
                                $('.k-inputCalendar').removeClass('teamPicker_' + oneVal + '').addClass('teamPicker');
                                break;

                        }

                    });
                }

            });

            $(instance).addClass('calendar');
            $(instance).html(cBody);
            thisDocument.gobalDay();

        }

        return runTCalendar();

    }

    $.fn.TeamCalendar = function(oInit) {
        return this.each(function() {
            return TeamCalendar(oInit, $(this)); }); };

    $('#calendar').TeamCalendar({

        weekDays: thisNowDays,
        months: thisNowMonths

    });

}());