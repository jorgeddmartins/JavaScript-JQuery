
var thisDocument = $(document); var nullVal; var InVal; var ChartSpan; var chartSpacePlat; var barSpan;

;(function() {

	"use strict"

	var leftScale = $('<div/>');
	var AllChartsInPlat = $('<div/>').addClass('AllCharts_InPlat');

	var thisSpan = ChartSpan = barSpan = '<span></span>';
	var ScaleVal = nullVal = InVal = 0;
	var thisDiv = chartSpacePlat = '<div></div>';

	var SaleDashTitle = 'Sale Dashboard';

	var bar1 = '.chartSpacePlat .SpacePlatBar:nth-child(1)';
	var bar2 = '.chartSpacePlat .SpacePlatBar:nth-child(2)';

	$.ajax({

		type: 'GET',
		url: 'assets/js/dashboard.json',

		success: function(thisData) { chartsLoad.thischartsRun(thisData); }

	});

	var chartsLoad = { 

		thischartsRun: function(thisData) {

			var chartMain = '';
			for( var i in thisData.mainChart ) {

				chartMain += 
				'<div class="dashCharts ' + thisData.mainChart[i].widthCl + ' Chart_' + thisData.mainChart[i].id + '">' +
					'<div class="chart_Floor">' +
						'<span class="chartTitle">' + thisData.mainChart[i].title + '</span>' +
						'<div class="Allchart_Floor">' +

							'<div class="AllChart_Title"></div>' +
							'<div class="AllCharts_Plat"></div>' +

						'</div>' +
					'</div>' +
				'</div>';
			}

			$(chartMain).appendTo('.Dashboard');

			$(leftScale).addClass('leftScale').add(AllChartsInPlat).appendTo('.Chart_' + nullVal + ' .AllCharts_Plat');


			for( var s = 0; s < 11; s++ ) { $(thisSpan).appendTo('.leftScale'); }

			for( var a = 0; a < 9; a++ ) { $(thisDiv).addClass('chartSpace').appendTo('.AllCharts_InPlat'); }

			for( var c = 0; c < 10; c++ ) { $(ChartSpan).appendTo('.chartSpace'); }
			$(chartSpacePlat).addClass('chartSpacePlat').appendTo('.chartSpace');

			for( var b = 0; b < 2; b++ ) { $(barSpan).addClass('SpacePlatBar').appendTo('.chartSpacePlat'); }

			$('<span/>').addClass('ChartBarToolTip').appendTo('.SpacePlatBar');

			$('.SpacePlatBar:nth-child(1) .ChartBarToolTip').addClass('Orange');
			$('.SpacePlatBar:nth-child(2) .ChartBarToolTip').addClass('Green');


			$.fn.extend({

				scaleSp: function(MthS) {

					var MathSp = MthS;
					return this.each(function() { 

						$(this).html(ScaleVal * MathSp); ScaleVal++;  
						$('.leftScale').html($('.leftScale').find('span').get().reverse());

					});
				},

				chartSpace: function() { return this.each(function() { $(this).addClass('spaceBar_' + InVal); InVal++; }); }
			});

			$('.leftScale span').scaleSp(5 + nullVal); $('.chartSpace').chartSpace();


			var $bar1Height = '';

			for( var i in thisData.sundayChartsOrange ) {
				$bar1Height += '@keyframes sdaySundayOrange {' + '0%' + '{ height: 0}' + '100%' + '{ height: ' + thisData.sundayChartsOrange[i].today + '%}' + '}';
				$bar1Height += '@-weblit-keyframes sdaySundayOrange {' + '0%' + '{ height: 0}' + '100%' + '{ height: ' + thisData.sundayChartsOrange[i].today + '%}' + '}';
				$bar1Height += '@-moz-keyframes sdaySundayOrange {' + '0%' + '{ height: 0}' + '100%' + '{ height: ' + thisData.sundayChartsOrange[i].today + '%}' + '}';
			}
			for(  var s in thisData.sundayChartsGreen ) {
				$bar1Height += '@keyframes sdaySundayGreen {' + '0%' + '{ height: 0}' + '100%' + '{ height: ' + thisData.sundayChartsGreen[i].today + '%}' + '}';
				$bar1Height += '@-webkit-keyframes sdaySundayGreen {' + '0%' + '{ height: 0}' + '100%' + '{ height: ' + thisData.sundayChartsGreen[i].today + '%}' + '}';
				$bar1Height += '@-moz-keyframes sdaySundayGreen {' + '0%' + '{ height: 0}' + '100%' + '{ height: ' + thisData.sundayChartsGreen[i].today + '%}' + '}';
			}
			for( var i in thisData.mondayChartsOrange ) {
				$bar1Height += '@keyframes sdayMondayOrange {' + '0%' + '{ height: 0}' + '100%' + '{ height: ' + thisData.mondayChartsOrange[i].today + '%}' + '}';
				$bar1Height += '@-weblit-keyframes sdayMondayOrange {' + '0%' + '{ height: 0}' + '100%' + '{ height: ' + thisData.mondayChartsOrange[i].today + '%}' + '}';
				$bar1Height += '@-moz-keyframes sdayMondayOrange {' + '0%' + '{ height: 0}' + '100%' + '{ height: ' + thisData.mondayChartsOrange[i].today + '%}' + '}';
			}
			for(  var s in thisData.mondayChartsGreen ) {
				$bar1Height += '@keyframes sdayMondayGreen {' + '0%' + '{ height: 0}' + '100%' + '{ height: ' + thisData.mondayChartsGreen[i].today + '%}' + '}';
				$bar1Height += '@-webkit-keyframes sdayMondayGreen {' + '0%' + '{ height: 0}' + '100%' + '{ height: ' + thisData.mondayChartsGreen[i].today + '%}' + '}';
				$bar1Height += '@-moz-keyframes sdayMondayGreen {' + '0%' + '{ height: 0}' + '100%' + '{ height: ' + thisData.mondayChartsGreen[i].today + '%}' + '}';
			}
			for( var i in thisData.tuesdayChartsOrange ) {
				$bar1Height += '@keyframes sdayTuesdayOrange {' + '0%' + '{ height: 0}' + '100%' + '{ height: ' + thisData.tuesdayChartsOrange[i].today + '%}' + '}';
				$bar1Height += '@-weblit-keyframes sdayTuesdayOrange {' + '0%' + '{ height: 0}' + '100%' + '{ height: ' + thisData.tuesdayChartsOrange[i].today + '%}' + '}';
				$bar1Height += '@-moz-keyframes sdayTuesdayOrange {' + '0%' + '{ height: 0}' + '100%' + '{ height: ' + thisData.tuesdayChartsOrange[i].today + '%}' + '}';
			}
			for(  var s in thisData.tuesdayChartsGreen ) {
				$bar1Height += '@keyframes sdayTuesdayGreen {' + '0%' + '{ height: 0}' + '100%' + '{ height: ' + thisData.tuesdayChartsGreen[i].today + '%}' + '}';
				$bar1Height += '@-webkit-keyframes sdayTuesdayGreen {' + '0%' + '{ height: 0}' + '100%' + '{ height: ' + thisData.tuesdayChartsGreen[i].today + '%}' + '}';
				$bar1Height += '@-moz-keyframes sdayTuesdayGreen {' + '0%' + '{ height: 0}' + '100%' + '{ height: ' + thisData.tuesdayChartsGreen[i].today + '%}' + '}';
			}
			for( var i in thisData.wednesdayChartsOrange ) {
				$bar1Height += '@keyframes sdayWednesdayOrange {' + '0%' + '{ height: 0}' + '100%' + '{ height: ' + thisData.wednesdayChartsOrange[i].today + '%}' + '}';
				$bar1Height += '@-weblit-keyframes sdayWednesdayOrange {' + '0%' + '{ height: 0}' + '100%' + '{ height: ' + thisData.wednesdayChartsOrange[i].today + '%}' + '}';
				$bar1Height += '@-moz-keyframes sdayWednesdayOrange {' + '0%' + '{ height: 0}' + '100%' + '{ height: ' + thisData.wednesdayChartsOrange[i].today + '%}' + '}';
			}
			for(  var s in thisData.wednesdayChartsGreen ) {
				$bar1Height += '@keyframes sdayWednesdayGreen {' + '0%' + '{ height: 0}' + '100%' + '{ height: ' + thisData.wednesdayChartsGreen[i].today + '%}' + '}';
				$bar1Height += '@-webkit-keyframes sdayWednesdayGreen {' + '0%' + '{ height: 0}' + '100%' + '{ height: ' + thisData.wednesdayChartsGreen[i].today + '%}' + '}';
				$bar1Height += '@-moz-keyframes sdayWednesdayGreen {' + '0%' + '{ height: 0}' + '100%' + '{ height: ' + thisData.wednesdayChartsGreen[i].today + '%}' + '}';
			}
				
			var $columnmStyle = '<style type="text/css">' + $bar1Height + '</style>';
			$($columnmStyle).appendTo(document.head);

			$('.spaceBar_0 ' + bar1 + '').addClass('OrangeBar sdaySundayOrange');
			$('.spaceBar_0 ' + bar2 + '').addClass('GreenBar sdaySundayGreen');

			$('.spaceBar_1 ' + bar1 + '').addClass('OrangeBar sdayMondayOrange');
			$('.spaceBar_1 ' + bar2 + '').addClass('GreenBar sdayMondayGreen');

			$('.spaceBar_2 ' + bar1 + '').addClass('OrangeBar sdayTuesdayOrange');
			$('.spaceBar_2 ' + bar2 + '').addClass('GreenBar sdayTuesdayGreen');

			$('.spaceBar_3 ' + bar1 + '').addClass('OrangeBar sdayWednesdayOrange');
			$('.spaceBar_3 ' + bar2 + '').addClass('GreenBar sdayWednesdayGreen');




		}
	}


	if($('div').hasClass('Dashboard')) { $('h2.navTitle').html(SaleDashTitle); }


})();