

var DateSeleClass = 'selectDate';

;(function() {

	"use strict"

	var $edoc = $thisDocument;

	var addNull = function(i) { if(i < 10) { i = '0' + i; } return i; }
	var getTime = ' ' + '/' + ' ' + addNull(getThisDate.getMonth()) + ' ' + '/' + ' ' + getThisDate.getFullYear();
	var getMonth = getThisDate.getMonth();
	var getYear = getThisDate.getFullYear();
	var getDay = getThisDate.getDate();

	$.fn.extend({

		formTheme: function(hForm, formTag, fvar, rVar) {

			var f = fvar; 
			var r = rVar;
			var fielReset = 'fieldForm_Reset';
			var fieldForm = '<div class="fieldForm_Reset_Box">' + '<label>' + 'Field Title' + '</label>' + '<input class="' + fielReset + '" placeholder="Create a placeholder" />' + '</div>';

			var btnForm = $('<button/>').addClass('formBtn').html('Submit');

			var titleH = hForm;
			var thisForm = formTag;

			$(titleH).appendTo('.Content_In');
			$('.Content_In h1:first').addClass('reset_Title').html('Welcome To Form Theme!!!');

			thisForm.attr({'action': '#', 'method': 'POST', 'class': 'reset_Form_', 'id': 'thisResetForm'});
			$(thisForm).appendTo('.Content_In');

			if(f >= 5) { 

				for( var i = 0; i < f; i++) { $(fieldForm).appendTo('#thisResetForm'); }
				$('.' + fielReset + '_Box').each(function() { $(this).addClass('R_Box' + '_' + r); r++; });
				$('.' + resetIn + '').addClass('R_FormLarge');
			}

			var Rbox = 'R_Box_';

			if($('.' + fielReset + '_Box').hasClass('' + Rbox + '' + nullVal + '')) {

				$('.' + Rbox + '' + nullVal + ' label').html('First Name');
				$('.' + Rbox + '' + oneVal + ' label').html('Last Name');
				$('.' + Rbox + '' + twoVal + ' label').html('Email');
				$('.' + Rbox + '' + threeVal + ' label').html('Phone Number');
				$('.' + Rbox + '' + fourVal + ' label').html('Date Of Birth');
				$('.' + Rbox + '' + fiveVal + ' label').html('Post Code');
				$('.' + Rbox + '' + sixVal + ' label').html('Address');
				$('.' + Rbox + '' + sevenVal + ' label').html('Title');

				$('.' + Rbox + '' + nullVal + ' .' + fielReset + '').attr({'type': 'text', 'placeholder': 'Your First Name'});
				$('.' + Rbox + '' + oneVal + ' .' + fielReset + '').attr({'type': 'text', 'placeholder': 'Your Last Name'});
				$('.' + Rbox + '' + twoVal + ' .' + fielReset + '').attr({'type': 'email', 'placeholder': 'Your Email'});
				$('.' + Rbox + '' + threeVal + ' .' + fielReset + '').attr({'type': 'number', 'placeholder': 'Your Phone Number'});
				$('.' + Rbox + '' + fourVal + ' .' + fielReset + '').attr({'type': 'text', 'placeholder': 'Choose Your Date of Birth', 'id': 'dateClalendar', 'readonly': 'readonly'});
				$('.' + Rbox + '' + fiveVal + ' .' + fielReset + '').attr({'type': 'text', 'placeholder': 'Your Post Code'});
				$('.' + Rbox + '' + sixVal + ' .' + fielReset + '').attr({'type': 'text', 'placeholder': 'Your Address'});
				$('.' + Rbox + '' + sevenVal + ' .' + fielReset + '').attr({'type': 'text', 'placeholder': 'Select Your Title', 'id': 'title', 'readonly': 'readonly'});
			}

			$(ic).appendTo('.fieldForm_Reset_Box').addClass('icon');

			$('.' + Rbox + '' + nullVal + ' .icon, .' + Rbox + '' + oneVal + ' .icon').addClass('icon-user');
			$('.' + Rbox + '' + twoVal + ' .icon').addClass('icon-at-sign');
			$('.' + Rbox + '' + threeVal + ' .icon').addClass('icon-telephone');
			$('.' + Rbox + '' + fourVal + ' .icon').addClass('icon-calendar-31');
			$('.' + Rbox + '' + fiveVal + ' .icon').addClass('icon-home2');
			$('.' + Rbox + '' + sixVal + ' .icon').addClass('icon-home');
			$('.' + Rbox + '' + sevenVal + ' .icon').addClass('icon-users2');

			$(thisDiv).appendTo('.reset_Form_').addClass('btnR_Floor');
			$(btnForm).appendTo('.btnR_Floor');

			$('.' + Rbox + '' + fourVal + '').attr({'id': 'dateBirth'});
			$('.' + Rbox + '' + sevenVal + '').attr({'id': 'titleTemp'});


			// Title
			var tVal = 5;
			var tChildVal = nullVal;
			var titleTemp = $('<div/>').addClass('titleAnimated');
			var titleChild = '<span class="tChild"></span>';
			var childT = 'child_';
			$(titleTemp).appendTo('body');

			for( var i = 0; i < tVal; i++ ) { $(titleChild).appendTo('.titleAnimated'); }

			$('.tChild').each(function() {

				$(this).addClass('child_' + tChildVal); tChildVal++;
			});

			$('.' + childT + '' + nullVal + '').html('Mr');
			$('.' + childT + '' + oneVal + '').html('Ms');
			$('.' + childT + '' + twoVal + '').html('Miss');
			$('.' + childT + '' + threeVal + '').html('Dr');
			$('.' + childT + '' + fourVal + '').html('Eng');



			// Date Birth Calendar

			var birthTitle = $('<div/>').addClass('birthTitle');

			var birthCalendar = $('<div/>').addClass('birthCalendar');
			var birthDays = $('<div/>').addClass('birthDays');
			var thisDays = '<span class="daysRole"></span>';

			$(birthCalendar).appendTo('body');
			$(birthDays).appendTo('.birthCalendar');

			var daysVal = '3' + oneVal + ''; // 31
			var daysNum = oneVal;
			var daysRole = nullVal;
			var thisRole = nullVal;
			var roleD = 'roleD_';

			for(i = 0; i < daysVal; i++) { $(thisDays).appendTo('.birthDays'); }

			$('.daysRole').each(function() {

				$(this).html(daysNum).addClass('roleD_' + thisRole).attr({'data-date': daysRole}); 
				daysNum++; daysRole++; thisRole++;
			});

			$('.' + roleD + '' + nullVal + '').html(nullVal + '1');
			$('.' + roleD + '' + oneVal + '').html(nullVal + '2');
			$('.' + roleD + '' + twoVal + '').html(nullVal + '3');
			$('.' + roleD + '' + threeVal + '').html(nullVal + '4');
			$('.' + roleD + '' + fourVal + '').html(nullVal + '5');
			$('.' + roleD + '' + fiveVal + '').html(nullVal + '6');
			$('.' + roleD + '' + sixVal + '').html(nullVal + '7');
			$('.' + roleD + '' + sevenVal + '').html(nullVal + '8');
			$('.' + roleD + '' + eightVal + '').html(nullVal + '9');


			var monthsVal = '' + oneVal + '' + twoVal + ''; // 12
			var monthsRole = nullVal;
			var thisMRole = nullVal;
			var roleM = 'roleM_';

			var birthMonths = $('<div/>').addClass('birthMonths');
			var thisMonths = '<span class="monthsRole">' + '</span>';
			$(birthMonths).appendTo('.birthCalendar');

			for( var i = 0; i < monthsVal; i++ ) { $(thisMonths).appendTo('.birthMonths'); }

			$('.monthsRole').each(function() {

				$(this).addClass('roleM_' + thisMRole).attr({'data-month': monthsRole});
				thisMRole++; monthsRole++;
			});

			$('.' + roleM + '' + nullVal + '').html('Jan');
			$('.' + roleM + '' + oneVal + '').html('Feb');
			$('.' + roleM + '' + twoVal + '').html('Mar');
			$('.' + roleM + '' + threeVal + '').html('Apr');
			$('.' + roleM + '' + fourVal + '').html('May');
			$('.' + roleM + '' + fiveVal + '').html('Jun');
			$('.' + roleM + '' + sixVal + '').html('Jul');
			$('.' + roleM + '' + sevenVal + '').html('Aug');
			$('.' + roleM + '' + eightVal + '').html('Sep');
			$('.' + roleM + '' + nineVal + '').html('Oct');
			$('.' + roleM + '' + oneVal + '' + nullVal + '').html('Nov');
			$('.' + roleM + '' + oneVal + '' + oneVal + '').html('Dec');


			var StYear = 1945;
			var yearsVal = 54;
			var yearNow = StYear;
			var yearsRole = nullVal;
			var datayear = StYear;

			var birthYears = $('<div/>').addClass('birthYears');
			var BYearIn = $('<div/>').addClass('birthYears_In');
			var thisYears = '<span class="yearsRole">' + '</span>';
			$(birthYears).appendTo('.birthCalendar');

			$(BYearIn).appendTo('.birthYears');

			for( var i = 0; i < yearsVal; i++ ) { $(thisYears).appendTo('.birthYears .birthYears_In'); }

			$('.yearsRole').each(function() {

				$(this).addClass('roleY' + yearsRole).attr({'data-year': datayear} ).html(yearNow); 
				yearsRole++; datayear++; yearNow++;
			});

			$('.yearsRole:last').addClass(DateSeleClass);
			$(".birthYears").mCustomScrollbar({ theme:"minimal" });

			$('.birthDays').before(birthTitle);

			var dateTitle = '<span class="dateTitle">' + '</span>';
			var dateTVal = nullVal;

			var topT = $('<span/>').addClass('topTitle').html('Choose Your Date Of Birth');

			$('.birthTitle').before(topT);

			for( var i = 0; i < 3; i++ ) { $(dateTitle).appendTo('.birthTitle'); }
			$('.dateTitle').each(function() { $(this).addClass('dateT_' + dateTVal); dateTVal++; });

			$('.dateT_' + nullVal + '').html('Day');
			$('.dateT_' + oneVal + '').html('Month');
			$('.dateT_' + twoVal + '').html('Year');

			var DateCalendar = $('#dateClalendar');
			var titleF = $('#title');

			$.fn.extend({

				birthCalendar: function() {

					return this.on($clickEvent, '#dateClalendar', function() { 
						$('.birthCalendar').slideToggle(100); 
						thisDiv.toggleClass('close_Reset');
						$('#dateBirth, .birthCalendar, .birthDays').removeClass('close_Reset');
						$('.titleAnimated').slideUp(100);
						$('.R_Box_7').removeClass('r_Box_Rotate')
					}); 
				},

				closeReset: function() {

					return this.on($clickEvent, '.close_Reset', function() {
						$('.birthCalendar, .titleAnimated').slideUp(100);
						thisDiv.removeClass('close_Reset');
						$('.R_Box_7').removeClass('r_Box_Rotate')
					});
				},

				daysRole: function() {

					return this.on($clickEvent, '.daysRole', function() {

						$('.daysRole').removeClass(DateSeleClass);
						$(this).addClass(DateSeleClass);

						if(DateCalendar.val() == '') {

							DateCalendar.val($(this).html() + ' ' + '/' + ' ' + $('.monthsRole.' + DateSeleClass + '').html() + ' ' + '/' + ' ' + getYear);

						} else {

							DateCalendar.val($(this).html() + ' ' + '/' + ' ' + $('.monthsRole.' + DateSeleClass + '').html() + ' ' + '/' + ' ' + $('.yearsRole.' + DateSeleClass + '').html());
						}

					});
				},

				monthsRole: function() {

					return this.on($clickEvent, '.monthsRole', function() {

						$('.monthsRole').removeClass(DateSeleClass);
						$(this).addClass(DateSeleClass);

						if(DateCalendar.val() == '') {

							DateCalendar.val($('.daysRole.' + DateSeleClass + '').html() + ' ' + '/' + ' ' + $(this).html() + ' ' + '/' + ' ' + getYear);

						} else {

							DateCalendar.val($('.daysRole.' + DateSeleClass + '').html() + ' ' + '/' + ' ' + $(this).html() + ' ' + '/' + ' ' + $('.yearsRole.' + DateSeleClass + '').html());
						}

					});
				},

				yearsRole: function() {

					return this.on($clickEvent, '.yearsRole', function() {

						$('.yearsRole').removeClass(DateSeleClass);
						$(this).addClass(DateSeleClass);

						if(DateCalendar.val() == '') {

							DateCalendar.val($('.daysRole.' + DateSeleClass + '').html() + ' ' + '/' + ' ' + $('.monthsRole.' + DateSeleClass + '').html() + ' ' + '/' + ' ' + $(this).html());

						} else {

							DateCalendar.val($('.daysRole.' + DateSeleClass + '').html() + ' ' + '/' + ' ' + $('.monthsRole.' + DateSeleClass + '').html() + ' ' + '/' + ' ' + $(this).html());
							$('.birthCalendar').slideUp(100);

						}

					});
				},
				birthCalendarOver: function() {

					return this.on('mouseover', '#dateClalendar', function() {
						thisDiv.removeClass('close_Reset');
					});
				}

			});

			$.fn.extend({

				title: function() {

					return this.on($clickEvent, '#title', function() {

						$('.titleAnimated').slideToggle(100);
						thisDiv.toggleClass('close_Reset');
						$('#titleTemp, .titleAnimated').removeClass('close_Reset');
						$('.birthCalendar').slideUp(100);
						$('.R_Box_7').toggleClass('r_Box_Rotate')

					});
				},
				tChild: function() {

					return this.on($clickEvent, '.tChild', function() {
						
						titleF.val($(this).html());
						$('.titleAnimated').slideUp(100);
						thisDiv.removeClass('close_Reset');
						$('.R_Box_7').removeClass('r_Box_Rotate')

					});
				},
				titleOver: function() {

					return this.on('mouseover', '#title', function() {

						thisDiv.removeClass('close_Reset');

					});
				}

			});

			$edoc.birthCalendar().closeReset().daysRole().monthsRole().yearsRole().birthCalendarOver();

			$edoc.title().tChild().titleOver();


			if(getDay == 1) { $('.' + roleD + '0').addClass(DateSeleClass);

			} else if(getDay == 2) { $('.' + roleD + '1').addClass(DateSeleClass);

			} else if(getDay == 3) { $('.' + roleD + '2').addClass(DateSeleClass);

			} else if(getDay == 4) { $('.' + roleD + '3').addClass(DateSeleClass);

			} else if(getDay == 5) { $('.' + roleD + '4').addClass(DateSeleClass);

			} else if(getDay == 6) { $('.' + roleD + '5').addClass(DateSeleClass);

			} else if(getDay == 7) { $('.' + roleD + '6').addClass(DateSeleClass);

			} else if(getDay == 8) { $('.' + roleD + '7').addClass(DateSeleClass);

			} else if(getDay == 9) { $('.' + roleD + '8').addClass(DateSeleClass);

			} else if(getDay == 10) { $('.' + roleD + '9').addClass(DateSeleClass);

			} else if(getDay == 11) { $('.' + roleD + '10').addClass(DateSeleClass);

			} else if(getDay == 12) { $('.' + roleD + '11').addClass(DateSeleClass);

			} else if(getDay == 13) { $('.' + roleD + '12').addClass(DateSeleClass);

			} else if(getDay == 14) { $('.' + roleD + '13').addClass(DateSeleClass);

			} else if(getDay == 15) { $('.' + roleD + '14').addClass(DateSeleClass);

			} else if(getDay == 16) { $('.' + roleD + '15').addClass(DateSeleClass);

			} else if(getDay == 17) { $('.' + roleD + '16').addClass(DateSeleClass);

			} else if(getDay == 18) { $('.' + roleD + '17').addClass(DateSeleClass);

			} else if(getDay == 19) { $('.' + roleD + '18').addClass(DateSeleClass);

			} else if(getDay == 20) { $('.' + roleD + '19').addClass(DateSeleClass);

			} else if(getDay == 21) { $('.' + roleD + '20').addClass(DateSeleClass);

			} else if(getDay == 22) { $('.' + roleD + '21').addClass(DateSeleClass);

			} else if(getDay == 23) { $('.' + roleD + '22').addClass(DateSeleClass);

			} else if(getDay == 24) { $('.' + roleD + '23').addClass(DateSeleClass);

			} else if(getDay == 25) { $('.' + roleD + '24').addClass(DateSeleClass);

			} else if(getDay == 26) { $('.' + roleD + '25').addClass(DateSeleClass);

			} else if(getDay == 27) { $('.' + roleD + '26').addClass(DateSeleClass);

			} else if(getDay == 28) { $('.' + roleD + '27').addClass(DateSeleClass);

			} else if(getDay == 29) { $('.' + roleD + '28').addClass(DateSeleClass);

			} else if(getDay == 30) { $('.' + roleD + '29').addClass(DateSeleClass);

			} else if(getDay == 31) { $('.' + roleD + '30').addClass(DateSeleClass);

			}

			// Cleaning Template
			if($('.reset_In').hasClass('R_FormLarge')) { $('section, header, footer').remove(); }

			if(getMonth == 0) { $('.' + roleM + '0').addClass(DateSeleClass); 

			} else if(getMonth == 1) { $('.' + roleM + '1').addClass(DateSeleClass);

			} else if(getMonth == 2) { $('.' + roleM + '2').addClass(DateSeleClass); 

			} else if(getMonth == 3) { $('.' + roleM + '3').addClass(DateSeleClass); 

			} else if(getMonth == 4) { $('.' + roleM + '4').addClass(DateSeleClass); 

			} else if(getMonth == 5) { $('.' + roleM + '5').addClass(DateSeleClass); 

			} else if(getMonth == 6) { $('.' + roleM + '6').addClass(DateSeleClass); 

			} else if(getMonth == 7) { $('.' + roleM + '7').addClass(DateSeleClass); 

			} else if(getMonth == 8) { $('.' + roleM + '8').addClass(DateSeleClass); 

			} else if(getMonth == 9) { $('.' + roleM + '9').addClass(DateSeleClass); 
 
			} else if(getMonth == 9) { $('.' + roleM + '9').addClass(DateSeleClass); 

			} else if(getMonth == 10) { $('.' + roleM + '10').addClass(DateSeleClass); 

			} else if(getMonth == 11) { $('.' + roleM + '11').addClass(DateSeleClass); 

			}
		}

	});

	$edoc.formTheme($('<h1/>'), $('<form/>'), 8, 0);

})();