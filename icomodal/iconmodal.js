
$(function() {

    "use strict"

    $.ajax({

        type: "GET",
        url: "assets/js/icomodal/icomodal.json",
        success: function(data) {

            icomodal.libraryData(data);
            icomodal.icoMoonData(data);

            icomodal.fontawesome(data);
            icomodal.fontawesome5(data); 
            icomodal.bootstrap(data); 
            icomodal.foundation(data); 
            icomodal.icomoonfree(data); 
            icomodal.icomoonpack(data);
        } 

    });

    let libraryFloor = '<div class="fontawesomeFl"></div>' +
                       '<div class="fontawesomeFl5"></div>' + 
                       '<div class="bootstrapFontFl"></div>' +
                       '<div class="foundationFontFl"></div>' +
                       '<div class="icomoonFontFl"></div>' +
                       '<div class="icomoonpackFl"></div>';

    $(libraryFloor).appendTo('#iconsFloor-innav');
            
    let icomodal = {

        libraryData: function(data) {

            let libraryData = '';

            for( let i in data.libraryData ) {

                libraryData += '<li><span class="' + data.libraryData[i].mainClass + '">' + data.libraryData[i].data + '</span></li>';
            }
            $('.libraryData .sub-icomenu').before(libraryData);
        },

        icoMoonData: function(data) {

            let icoMoonData = '';

            for( let i in data.icoMoonData ) {

                icoMoonData += '<li><span class="' + data.icoMoonData[i].mainClass + '">' + data.icoMoonData[i].data + '</span></li>';
            }
            $(icoMoonData).appendTo('.libraryData .sub-icomenu');
        },

        fontawesome: function(data) {

            let $fontawesome = '';

            for( let i in data.fontawesome ) {
                $fontawesome += '<span data-id="fa ' + data.fontawesome[i].dataid + '" class="ico-stage"><i class="fa ' + data.fontawesome[i].dataid + '" aria-hidden="true"><em>' + data.fontawesome[i].icoName + '</em></i></span>';
            }
            $($fontawesome).appendTo('.imagesettings .fontawesomeFl');
        },

        fontawesome5: function(data) {

            let $fontawesome5 = '';

            for( let i in data.fontawesome5 ) {
                $fontawesome5 += '<span data-id="' + data.fontawesome5[i].dataid + '" class="ico-stage"><i class="' + data.fontawesome5[i].dataid + '" aria-hidden="true"><em>' + data.fontawesome5[i].icoName + '</em></i></span>';
            }
            $($fontawesome5).appendTo('.imagesettings .fontawesomeFl5');
        },

        bootstrap: function(data) {

            let $bootstrapFont = '';

            for( let i in data.bootstrapFont ) {
                $bootstrapFont += '<span data-id="glyphicon ' + data.bootstrapFont[i].dataid + '" class="ico-stage"><i class="glyphicon ' + data.bootstrapFont[i].dataid + '"><em>' + data.bootstrapFont[i].icoName + '</em></i></span>';
            }
            $($bootstrapFont).appendTo('.imagesettings .bootstrapFontFl');
        },
        foundation: function(data) {

            let $foundationFont = '';

            for( let i in data.foundationFont ) {
                $foundationFont += '<span data-id="fd ' + data.foundationFont[i].dataid + '" class="ico-stage"><i class="fd ' + data.foundationFont[i].dataid + '"><em>' + data.foundationFont[i].icoName + '</em></i></span>'; 
            }
            $($foundationFont).appendTo('.imagesettings .foundationFontFl');
        },
        icomoonfree: function(data) {

            let $icomoonFree = '';

            for( let i in data.icomoonFreeFont ) {
                $icomoonFree += '<span data-id="lnr ' + data.icomoonFreeFont[i].dataid + '" class="ico-stage"><i class="lnr ' + data.icomoonFreeFont[i].dataid + '"><em>' + data.icomoonFreeFont[i].icoName + '</em></i></span>';
            }
            $($icomoonFree).appendTo('.imagesettings .icomoonFontFl');
        },
        icomoonpack: function(data) {

            let $icomoonpack = '';

            for( let i in data.icomoonpack ) {

              $icomoonpack += '<span data-id="icon ' + data.icomoonpack[i].dataid + '" class="ico-stage"><i class="icon ' + data.icomoonpack[i].dataid + '"><em>' + data.icomoonpack[i].icoName+ '</em></i></span>';  
            }
            $($icomoonpack).appendTo('.imagesettings .icomoonpackFl');
        }

    }

    $.getScript('assets/js/icomodal/modalFunc.js');

});