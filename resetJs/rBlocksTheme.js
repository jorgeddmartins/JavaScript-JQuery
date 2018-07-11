var lRval = 0; // min-val = 0; max=val = 2 val To change Template with Slide Show or Without Slide Show
var slideNum = 3; // Number of Sliders to run
var runScroll = false; // if true the page will have a JQuery Scroll
var navRun = false; // If True Menu will show up, If false Menu will hide
var footerRun = false; // If True Footer will show up, If false Footer will hide

var ImPath = 'assets/img/';

var daTa = 'data';

;
(function() {

    "use strict"

    $('.Content_In, .r-Footer').remove();
    $('.r-Header').addClass('col-md-12 col-xs-12 BlocksHeader');
    $('nav').addClass('BlocksNav');

    var $edoc = $thisDocument;
    var conTentBlk = 'contentBack';
    var thisColor = 'colorBack';

    var iconF = $('<i/>').appendTo('.BlocksNav').addClass('' + faI + ' fa-ellipsis-h');
    var NavTemp = $('<div/>').addClass('navTemplate').appendTo('body');
    var NavTempIn = '<span></span>';

    var logTemp = $('<div/>').addClass('logoTemp').appendTo('.BlocksHeader');

    var footTemp = $('<footer/>').addClass('bkThFoot').attr({

        id: 'bottFooter'
    });

    var sendContact = $('<span/>').addClass('SendContact').appendTo('body');


    $.fn.blocksTheme = function(contentB, sTS, cnTbL, tHo, SldT) {

        var contentBl = contentB;
        var sT = sTS;
        var cTBl = cnTbL;

        var sTVal = nullVal;
        var contBVal = nullVal;
        var navVal = nullVal;

        var titleHero = tHo;
        var SldTxt = SldT;

        $('._In_' + nullVal + '').addClass('R_BlockTheme').attr({

            id: 'BlockTheme'

        }).css({

            'z-index': 1
        });
        $(contentBl).appendTo('.secTemp_' + nullVal + '').addClass('' + conTentBlk + ' iBack');
        $(thisDiv).appendTo('.secTemp_' + nullVal + '').addClass('heroUp');

        $(thisSpan).appendTo('.heroUp').addClass('middleR');

        $('.heroUp .middleR').before(titleHero);
        $('.heroUp .RthT').html('Hello Umbraco Template!!!');


        // Button Style
        var btnRadius = 50; // Radius Btn Value
        $('.heroUp .RthT').after('<div class="btnFloor">' + '<span class="getQuote radius' + btnRadius + '">' + 'Get a Free Quote' + '</span>' + '</div>');

        for (var m = 0; m < 3; m++) { $(NavTempIn).appendTo('.navTemplate').addClass('navUrl'); }

        $.fn.extend({

        	BlocksNav: function() {

                return this.on($clickEvent, '*', function() {

                	let thisEl = $(this);

                	switch(true) {

                		case (thisEl.hasClass('BlocksNav')):
                			$(this).toggleClass('BlockNavWhite');
                    		$('.navTemplate').toggleClass('left' + nullVal + '');
                			break;

                		case (thisEl.hasClass('getQuote')):
                			$('html, body').animate({
                        		scrollTop: $('.secTemp_' + oneVal + '').offset().top
                    		}, 1000);
                			break;
                	}

                });
            },

            navUrl: function() {
                return this.each(function() { $(this).addClass('Url_' + navVal);
                    navVal++; 
                }); 
            }

        });

        $edoc.BlocksNav();
        $('.navUrl').navUrl();


        // Section Height
        $('.secTemp_' + nullVal + ', .secTemp_' + oneVal + ', .secTemp_' + twoVal + ', .navTemplate').addClass('fullHeight');
        $('.secTemp_' + threeVal + ', .secTemp_' + fourVal + '').addClass('midHeight');

        var navElements = $('.BlocksNav, .navTemplate');

        // Nav Menu
        $('.Url_' + nullVal + '').html('Menu 0');
        $('.Url_' + oneVal + '').html('Menu 1');
        $('.Url_' + twoVal + '').html('Menu 2');


        $(NavTempIn).appendTo('.logoTemp');
        $('.logoTemp span').html('Ut.');


        // Nav Menu Events
        $.fn.extend({});


        // section 1
        $('.secTemp_' + oneVal + '').addClass('' + thisColor + ' greyBk');
        $('.secTemp_' + twoVal + '').addClass('' + thisColor + ' blueGreyBk');

        $('.secTemp_' + threeVal + '').addClass('' + thisColor + ' goldenGrey');
        $('.secTemp_' + fourVal + '').addClass('' + thisColor + ' orangeBk');

        $('.' + thisColor + '').addClass('col-md-' + BootSMaxW + ' col-xs-' + BootSMaxW + '');

        var contIn = $('<div/>').css({

            height: '99%',
            width: '90%'

        }).attr({

            role: 'container',
            'data-container': 'containerId_' + daTa + '',
            id: 'data_Id'

        }).addClass('container').appendTo('.' + thisColor + '');

        var contIn = $('<div/><div/>').addClass('Container_In ContIn5' + nullVal + '').css({

            position: 'relative',
            float: 'left'

        }).appendTo('.container');

        $('.secTemp_' + threeVal + ' .Container_In, .secTemp_' + fourVal + ' .Container_In').removeClass('ContIn5' + nullVal + '').addClass('ContIn1' + nullVal + '' + nullVal + '');
        $('.secTemp_' + threeVal + ' .Container_In:last, .secTemp_' + fourVal + ' .Container_In:last').remove();

        var ImgBlkCont = $('<div/>').addClass('bkImgFloor').appendTo('.secTemp_' + oneVal + ' .Container_In:first, .secTemp_' + twoVal + ' .Container_In:last');

        $('.secTemp_' + oneVal + ' .bkImgFloor').addClass('ImgFloorGrey_Color');
        $('.secTemp_' + twoVal + ' .bkImgFloor').addClass('ImgFloorGreen_Color');

        var infoCont1 = $('<div/>').addClass('info_Box').css({

            float: 'left',
            left: '7%'

        }).appendTo('.secTemp_' + oneVal + ' .Container_In:last');

        var infoCont2 = $('<div/>').addClass('info_Box').css({

            float: 'right',
            left: '-7%'

        }).appendTo('.secTemp_' + twoVal + ' .Container_In:first');

        $('.info_Box').css({

            position: 'relative',
            width: '60%',
            top: '32%'
        });

        var infoIn = $('<h2/><span/><span/>').appendTo('.info_Box');

        $('.info_Box span:nth-child(' + twoVal + ')').addClass('textN');
        $('.info_Box span:nth-child(' + threeVal + ')').addClass('navigateN');

        var imgGreyTemp = $('<div/>').addClass('imgGreyTemp speedInleft').appendTo('.ImgFloorGrey_Color');
        var imgGreenTemp = $('<div/>').addClass('imgGreenTemp speedInright').appendTo('.ImgFloorGreen_Color');



        // Products Inside
        var rSectIn = $('<div/>').addClass('secTempSlide_').appendTo('.secTemp_' + oneVal + '');

        $.fn.extend({

            navigateN1: function() {
                return this.on($clickEvent, '.secTemp_' + oneVal + ' .navigateN', function() {

                    $('.secTempSlide_').addClass('secLeft');

                });
            }

        });

        $edoc.navigateN1();


        // Skills Block
        $('<h2/>').add('<div class="Info_Content" />').appendTo('.secTemp_' + threeVal + ' .Container_In, .secTemp_' + fourVal + ' .Container_In');

        if (lRval == 2) {

            var $htmlMain = 'Hello Digital Umbraco Template!!';
            var $slideTwo = 'Umbraco Slide Two';
            var $slideThree = 'Umbraco Slide Three';

            $('.iBack, .middleR, .RthT, .btnFloor, .R_Form').remove();

            for (var s = nullVal; s < lRval; s++) { $(sT).appendTo('.heroUp'); }
            for (var i = nullVal; i < slideNum; i++) { $(cTBl).appendTo('.secTemp_' + nullVal + ''); }

            $.fn.extend({

                spanSt: function() {
                    return this.each(function() { $(this).addClass('lRsp sT_' + sTVal);
                        sTVal++ 
                    }); 
                },
                contenBl: function() {
                    return this.each(function() { $(this).addClass('CTb_' + contBVal);
                        contBVal++; 
                    }); 
                },

				slide: function() {

                    return this.on($clickEvent, '*', function() {

                    	let thisEl = $(this);

                        switch(true) {

                        	case (thisEl.hasClass('slide_' + oneVal + '')): // Slide 1
                        		$('.CTb_' + nullVal + '').addClass('moveLeft');
		                        $('.SlDTx').html($slideTwo);
		                        $('.sT_' + oneVal + '').removeClass('slide_' + oneVal + '').addClass('slide_' + twoVal + '');
		                        if (slideNum == 2) { $(this).hide(); }
                        		break;

                        	case (thisEl.hasClass('slide_' + nullVal + '')): // Slide 0
                        		$('.CTb_' + nullVal + '').removeClass('moveLeft');
		                        $('.SlDTx').html($htmlMain);
		                        $('.sT_' + oneVal + '').removeClass('slide_' + twoVal + '').addClass('slide_' + oneVal + '');
		                        $('.slide_' + oneVal + '').show();
                        		break;

                        	case (thisEl.hasClass('slide_' + twoVal + '')): // Slide 2
                        		$('.SlDTx').html($slideThree);
		                        $('.CTb_' + oneVal + '').addClass('moveLeft');
		                        $('.sT_' + nullVal + '').removeClass('slide_' + nullVal + '').addClass('slide_' + threeVal + '');
		                        $(this).hide();
                        		break;

                        	case (thisEl.hasClass('slide_' + threeVal + '')): // Slide 3
                        		$('.CTb_' + oneVal + '').removeClass('moveLeft');
		                        $('.slide_' + twoVal + '').show();
		                        $('.SlDTx').html($slideTwo);
		                        $('.sT_' + nullVal + '').removeClass('slide_' + threeVal + '').addClass('slide_' + nullVal + '');
		                        $('.sT_' + oneVal + '').removeClass('slide_' + twoVal + '').addClass('slide_' + oneVal + '');
                        		break;
                        }

                    });
                }

            });

            $edoc.slide();

            $('.heroUp span').spanSt();
            $('.' + conTentBlk + '').contenBl();

            $(ic).appendTo('.lRsp');
            $('.sT_' + nullVal + '').addClass('slide_' + nullVal + '');
            $('.sT_' + nullVal + ' i').addClass('' + faI + ' fa-chevron-left');

            $('.sT_' + oneVal + '').addClass('slide_' + oneVal + '');
            $('.sT_' + oneVal + ' i').addClass('' + faI + ' fa-chevron-right');


            $(ImgBlks).appendTo('.' + conTentBlk + '');

            $('.CTb_' + nullVal + ' img').attr({
                src: '' + ImPath + 'slides/digital.jpg',
                class: 'ctBSlide_' + nullVal + ''
            });
            $('.CTb_' + oneVal + ' img').attr({
                src: '' + ImPath + 'heroBlocks.jpg',
                class: 'ctBSlide_' + oneVal + ''
            });
            $('.CTb_' + twoVal + ' img').attr({
                src: '' + ImPath + 'beach.jpg',
                class: 'ctBSlide_' + twoVal + ''
            });

            $('.heroUp .sT_' + nullVal + '').before(SldTxt);
            $('.SlDTx').html($htmlMain);

        }

        if (navRun == false) { navElements.remove(); }
        if (footerRun == true) {

            $('.R_BlockTheme').after(footTemp);
            $('.r-Section:last').css({

                'margin-bottom': '80px'
            });

            // Footer Scroll Top
            window.onscroll = function() { scrollFunction() };

            function scrollFunction() {
                if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {

                    document.getElementById("bottFooter").style.display = "block";

                } else {

                    document.getElementById("bottFooter").style.display = "none";
                }
            }

            function topFunction() {

                document.body.scrollTop = 0;
                document.documentElement.scrollTop = 0;

            }
        }

    }

    $edoc.blocksTheme($('<div/>'), '<span></span>', '<div class="' + conTentBlk + '"></div>', $('<h1/>').addClass('RthT'), $('<h1/>').addClass('SlDTx'));

})();