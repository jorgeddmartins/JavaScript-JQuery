
$(function() {

    window.ranges = {};
    ranges.rage = {

        thisRangerun: function() {

            var slider = $('.range-slider'); range = $('.range-slider__range'); value = $('.range-slider__value');

            slider.each(function() {

                value.each(function() {
                    var value = $(this).prev().attr('value');
                    $(this).html(value);
                });

                range.on('input', function() {
                    $(this).next(value).html(this.value);
                });
            });

        }
    }


    if(ranges.rage.thisRangerun() == 0 ) { return this }

});
