$(function() {

    tempTrace = '<span class="stepTrace"></span>';
    $('.number').text('');
    $('.current-info').remove();
    $(tempTrace).appendTo('.steps li a');
    $('.steps li:last .stepTrace').remove();

    window.upKey = {};
    upKey.keypress = {
        runKey: function(i, x) {

            var $showthis = $(window);
            var $inputTab = $('input');

            $showthis.add($inputTab).on('keyup', function(event) {
                if (event.keyCode == 13) {
                    $('#nextItem').click();
                }
            });
        },

        runSteps: function() {

            if( $(this).find('li').length == 7 ) { $('li a').addClass('length41');} else if( $(this).find('li').length <= 6 ) { 
                $('li a').addClass('length48');} else if( $(this).find('li').length >= 8 ) { $('li a').addClass('lengthmore'); }
        }
    }

    if (upKey.keypress.runKey(2, 2) == 0 || $('.steps ul').each(upKey.keypress.runSteps) == 1) { return this }

});