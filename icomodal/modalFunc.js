
let $thisDocument = $(document); 
let clickEvent = 'click';
let fontawesomeFl = $('.fontawesomeFl'); 
let bootstrapFontFl = $('.bootstrapFontFl'); 
let foundationFontFl = $('.foundationFontFl');
let icomoonFontFl = $('.icomoonFontFl'); 
let icomoonpackFl = $('.icomoonpackFl');
let fontawesomeFl5 = $('.fontawesomeFl5');

$(function() {

	"use strict"

	$('.labraryDrop').hide(); 
	let libraryDrop = $('.labraryDrop');
	let dropOption = '.drop'; let icoStage = '.ico-stage'; // closedrop = '.close-floor, .ico-stage, .save-blk';


	$.fn.extend({

        libraryDrop: function() {
            return this.on(clickEvent, '.library-floor', function() { $('.labraryDrop').slideToggle(200); $(this).toggleClass('rotate90'); }); 
        },
        drop: function() {
            return this.on(clickEvent, dropOption, function() {
            	let itemdrop = $(this);
                let thisClass = true;
                $('.library-floor span').remove();
                itemdrop.clone().appendTo('.library-floor').removeClass('drop');
                $(dropOption).removeClass('optionBcak'); 
                itemdrop.addClass('optionBcak');
                libraryDrop.hide();
                $('.library-floor').removeClass('rotate90');
                $('.iconActive-floor .selectedId i').hide();

                switch(thisClass) {
                    case itemdrop.hasClass('opt-other'):
                        icoRemove();
                        bootstrapFontFl.show();
                        fontawesomeFl.add(foundationFontFl).add(icomoonFontFl).add(icomoonpackFl).add(fontawesomeFl5).hide(); 
                    break;
                    case itemdrop.hasClass('opt-awesome'):
                        icoRemove();
                        fontawesomeFl.show(); 
                        bootstrapFontFl.add(foundationFontFl).add(icomoonFontFl).add(icomoonpackFl).add(fontawesomeFl5).hide();
                    break;
                    case itemdrop.hasClass('opt-awesome5'):
                        icoRemove();
                        fontawesomeFl5.show(); 
                        bootstrapFontFl.add(foundationFontFl).add(icomoonFontFl).add(icomoonpackFl).add(fontawesomeFl).hide();
                    break;
                    case itemdrop.hasClass('opt-found'):
                        icoRemove();
                        foundationFontFl.show(); 
                        fontawesomeFl.add(bootstrapFontFl).add(icomoonFontFl).add(icomoonpackFl).add(fontawesomeFl5).hide();
                    break;
                    case itemdrop.hasClass('opt-icomoom'):
                        icomoonFontFl.show();
                        fontawesomeFl.add(foundationFontFl).add(bootstrapFontFl).add(icomoonpackFl).add(fontawesomeFl5).hide();
                    break;
                    case itemdrop.hasClass('opt-icomoonessential'):
                        icomoonpackFl.show();
                        fontawesomeFl.add(foundationFontFl).add(bootstrapFontFl).add(icomoonFontFl).add(fontawesomeFl5).hide(); 
                    break;
                }

            });
        },

        icostage: function() {
            return this.on(clickEvent, icoStage, function() {
            	let itemstage = $(this);
                $('.ico-stage').removeClass('focusColor');
                itemstage.addClass('focusColor');
                $('.iconActive-floor .ico-stage').remove();
                itemstage.clone().appendTo('.iconActive-floor').removeClass('focusColor').addClass('selectedId');

                $('.grid-body-6 .ico-stage').remove();
                $('.grid-body-6 .fa-plus-circle, .grid-body-6 .fa em, .grid-body-6 .glyphicon em, .grid-body-6 .fd em').remove();

                $('.saveChanges').removeClass('saveNotallowed');
            });
        },
        default1: function() {
            return this.on(clickEvent, '.grid-body-4', function() { 
                $('.imagesettings').fadeIn(300); 
                $('.iconActive-floor .ico-stage').remove();
                $(this).clone().appendTo('.iconActive-floor').removeClass('tgb-13 tgb-icogrey-color grid-body-4').addClass('ico-stage selectedId');

                $('.selectedId i').removeClass('default-1');
            });
        },

        closesettingsenter: function() { return this.on('mouseenter', '.closesettings', function() { $('.coseTooltip').show(); }); },
        closesettingsleave: function() { return this.on('mouseleave', '.closesettings', function() { $('.coseTooltip').hide(); }); },

        subIcomenu: function() { 
            return this.on(clickEvent, '.icoM', function() { $(this).toggleClass('icoMRotate'); $('.sub-icomenu').slideToggle(200); });
        },
        closesetting: function() { return this.on(clickEvent, '.closesettings', function() { $('.imagesettings').fadeOut(300); }); }

    });
	

    // Start Autocomplete
   	let search = {
        searchitem: function(element) {
            let value = $(element).val();
            $("#iconsFloor-innav .ico-stage").each(function() { if ($(this).text().search(new RegExp(value, "i")) > -1) { $(this).show(); } else { $(this).hide(); } });
        },
        runAutocomplete: function() { search.searchitem(this); }
    }
    // End Autocomplete

    let loadelements = {
        elements: function() {

            $thisDocument.libraryDrop()
            .drop().icostage().closesettingsenter().closesettingsleave().subIcomenu().closesetting();

            search.searchitem(); $('.auto-search').on('keyup', search.runAutocomplete);
        }
    }

    loadelements.elements(); 
    $('#iconsFloor-innav').mCustomScrollbar({ theme:"minimal" });


    // Save Icons
    $.fn.extend({

        thisBorder: function() {
            return this.on(clickEvent, '.thisBorder', function() {
                $('.imagesettings').fadeIn(300); 
                $('.iconActive-floor .ico-stage').remove();
                $(this).clone().appendTo('.iconActive-floor').removeClass().addClass('ico-stage selectedId');
                $('.ico-stage').removeClass('focusColor');
                $('.thisBorder').removeClass('TIcoSelected');
                $(this).addClass('TIcoSelected');
            });
        },
        saveChanges: function() {
            return this.on(clickEvent, '.saveChanges', function() {
                $('.TIcoSelected i').remove();
                $('.selectedId i').clone().appendTo('.TIcoSelected');
                $('.TIcoSelected i em').remove();
            });
        }

    });

    $thisDocument.thisBorder().saveChanges();

});

function icoRemove() { $('.icoM').removeClass('icoMRotate'); $('.sub-icomenu').hide(); }
