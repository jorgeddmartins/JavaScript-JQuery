
;(function() {

	"use strict"

	$.fn.extend({

		ctResetMe: function() {

            var tdv = $('<div><div></div></div>').css({
                    position: 'absolute',
                    left: -1000,
                    width: 300,
                    overflow: 'scroll'
                }).appendTo('.R_BlockTheme'),
                twi = tdv.width() - tdv.find('div').width();
                
            	tdv.remove();

            return this.each(function() {

                var that = $(this),
                    he = that.outerHeight(),
                    wi = that.outerWidth();

                var sbp = that.css('direction') === 'rtl' ? 'left' : 'right',
                    sbf = that.css('direction') === 'rtl' ? 'right' : 'left',
                    scroller = $('<div>').addClass('resetMe-scroller').css({
                            overflow: 'hidden',
                            position: 'relative',
                            height: he,
                            width: wi,
                            marginTop: that.css('margin-top'),
                            marginBottom: that.css('margin-bottom'),
                            marginLeft: that.css('margin-left'),
                            marginRight: that.css('margin-right'),
                            float: that.css('float'),
                        }),

                    scrollarea = $('<div>').css({
                            overflow: 'scroll',
                            position: 'relative',
                            height: he + twi,
                            width: wi + twi
                        }).appendTo( scroller ),

                    scrollareax = $('<div>').css({float: sbf}).appendTo(scrollarea);

                	that.css({
                        overflow: 'visible',
                        height: 'auto',
                        margin: 0,
                        float: ''
                    }).after(scroller).appendTo(scrollareax);

                var nhe = scrollareax.outerHeight( true ),
                    ratio = Math.min( 1, he / nhe );
                if( ratio >= 1 ) { return; }

                // create scrollbars
                var scrollbar = $('<div>').addClass('resetMe-scrollbar').css({ height: he }).css(sbp, 0).appendTo( scroller ),
                    scrollbarbutton = $('<div>').addClass('resetMe-scrollbarbutton').css({ height: he * ratio }).css(sbp, 0).appendTo(scrollbar);
                	that.css({ width: "-=" + scrollbar.css('width') });

                	scroller.scroll(function() { scroller.scrollLeft(0).scrollTop(0); });
                	scrollarea.scroll(function() {
                    	scrollbarbutton.css({
                        	top: scrollarea.scrollTop() * ratio,
                       		height: he * ratio
                    	});
                	});

                (function() {
                    var dragging = false,
                        pageY = null,
                        pageX = null,
                        top = null,
                        timer = null;

                    scrollbar.on('mousedown', function(e) {

                        if( e.which !== 1 || $(e.target).hasClass('scrollbarbutton') ) { return; }

                        top = parseInt( scrollbarbutton.css('top'), 10  ) + ( he * ratio * ( e.pageY > scrollbarbutton.offset().top ? 1 : -1 ));
                        clearTimeout( timer );
                        timer = setTimeout(function() {
                            top = Math.min( Math.max( 0, e.pageY - scrollbar.offset().top ) - he * ratio / 2, he - ( he * ratio ) );
                            scrollbarbutton.css({ top: top });
                            scrollarea.scrollTop( Math.round( top / ratio ) );
                        }, 300);
                        scrollbarbutton.css({ top: top });
                        scrollarea.scrollTop( Math.round( top / ratio ) );
                        return false;
                    });

                    scrollbar.on('mouseup', function() { clearTimeout(timer); });

                    scrollbarbutton.on('mousedown', function(e) {

                        if( e.which !== 1 ) { return; }

                        dragging = true;
                        pageY = e.pageY;
                        pageX = e.pageX;
                        top = parseInt( scrollbarbutton.css('top'), 10 );
                        $(document).on('mousemove', function(e) {
                            if( dragging ) {
                                if( Math.abs( e.pageX - pageX ) < 50 ) {
                                    var newtop = Math.min( Math.max( 0, top + e.pageY - pageY ), he - he * ratio );
                                    scrollbarbutton.css('top', newtop );
                                    scrollarea.scrollTop( Math.round( newtop / ratio ) );
                                }
                                else { scrollarea.scrollTop( Math.round( top / ratio ) ); scrollbarbutton.css({ top: top }); }

                                return false;
                            }
                            else { $(document).unbind('mousemove'); }
                        });
                        return false;
                    });

                    $(document).on('mouseup', function() {
                        if(dragging) {
                            dragging = false;
                            $(document).unbind('mousemove');
                            return false;
                        }
                    });

                })();

            });
        }

	});


	if(runScroll == true) { $('#BlockTheme').ctResetMe({ scrollbarWidth: 10 });

	} else { $('.R_BlockTheme').removeAttr('id'); }

			
})();