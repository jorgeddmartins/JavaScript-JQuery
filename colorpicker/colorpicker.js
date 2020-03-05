
// Document Element
let dt = $(document);

// Click Event
let ck = 'click';

$(function() {

	"use strict";

	$.fn.colorPicker = function(colorOpt) {

		let PluginName = 'ColorPicker';

		let colorDefault = {

			// ColorPicker Button
			ocp: 'openCPicker',

			// ColorPicker ToolTip
			ocpTip: 'openCPickerToolTip',

			// ToolTip Text 
			tipText: 'Color Picker',

			// ColorPicker Floor
			cpFloor: 'colorPickerFloor',

			// Icon Picker with Selected Class
			selIdi: 'selectedId i',

			// Main Color Picker Event
			clEl: 'clEl',

			// Values For ColorPicker
			value: {

				// Each Function Value
				clval: 0
			},

			// Html Tags
			tags: {

				// Div Tag
				divTag: '<div>',

				// Span Tag
				spanTag: '<span>',

				// HTML Tag
				htmlTag: 'html'
			},

			inputH: $('<input>', { type: 'text', id: 'ColorHex', class: 'inputPicker', name: 'hexa', value: 'Hexa:', readonly: 'readonly' }),

			inputRgb: $('<input>', { type: 'text', id: 'ColorRgb', class: 'inputPicker', name: 'rgb', value: 'Rgb()', readonly: 'readonly' }),

			// Loading Data
			data: {

				// Json Data Url
				Url: 'assets/js/colorpicker/colorpicker.json'
			},

			temp: {

				// Color Picker Template
				clPck: '<div class="colorPickerFloor"><div class="cPickerContent"></div><span class="delCol">Delete Color</span></div>'
			},

			// Color Picker Floor
			clPick: '.colorPickerFloor'
		};

		// ColorPicker Settings
		let cpsettings = $.extend( true, {}, colorDefault, colorOpt );

		// Color Picker Injection
		$(cpsettings.temp.clPck).appendTo('#GSettings');

		// Appending Hexa Input & Rgb input to the Color Picker Element
		$(cpsettings.inputH).add($(cpsettings.inputRgb)).appendTo('.cPickerContent');


		function ClPicker() {

			this._name = PluginName;

			this.RunClPicker();
		}


		$.extend( ClPicker.prototype, {

			RunClPicker: function() {

				// Ajax Call For Icon Picker
				$.ajax({

					type: "GET",
					url: cpsettings.data.Url,

					// Running Data Function
					success: function(cldata) { d.clPickerData(cldata); }
				});

				// Loading Data In Icon Picker 
				$.fn.clPickerData = function(cldata) {

					// Data For Neutral Colors
					let neutralCl = '<div class="NeutralCl">';
					for( let n in cldata.neutralhexa) {
						neutralCl += '<div class="clEl">' + 
										'<span class="hexaCl">' + cldata.neutralhexa[n].hexa + '</span>' +
										'<span class="rgb-r">' + cldata.neutralhexa[n].r + '</span>' +
									 '</div>';
					}
					neutralCl += '</div>';
					$(neutralCl).appendTo('.cPickerContent');

					// Data For Blue Colors
					let blueCl = '<div class="BlueCl">';
					for( let b in cldata.bluehexa) {
						blueCl += '<div class="clEl">' + 
										'<span class="hexaCl">' + cldata.bluehexa[b].hexa + '</span>' +
										'<span class="rgb-r">' + cldata.bluehexa[b].r + '</span>' +
								  '</div>';
					}
					blueCl += '</div>';
					$(blueCl).appendTo('.cPickerContent');

					// Data For Green Colors
					let greenCl = '<div class="GreenCl">';
					for( let g in cldata.greenhexa) {
						greenCl += '<div class="clEl">' + 
										'<span class="hexaCl">' + cldata.greenhexa[g].hexa + '</span>' +
										'<span class="rgb-r">' + cldata.greenhexa[g].r + '</span>' +
								   '</div>';
					}
					greenCl += '</div>';
					$(greenCl).appendTo('.cPickerContent');

					// Data For Purple Colors
					let purpleCl = '<div class="PurpleCl">';
					for( let p in cldata.purplehexa) {
						purpleCl += '<div class="clEl">' + 
										'<span class="hexaCl">' + cldata.purplehexa[p].hexa + '</span>' +
										'<span class="rgb-r">' + cldata.purplehexa[p].r + '</span>' +
									 '</div>';
					}
					purpleCl += '</div>';
					$(purpleCl).appendTo('.cPickerContent');

					// Data For Pink Colors
					let pinkCl = '<div class="PinkCl">';
					for( let p in cldata.pinkhexa) {
						pinkCl += '<div class="clEl">' + 
										'<span class="hexaCl">' + cldata.pinkhexa[p].hexa + '</span>' +
										'<span class="rgb-r">' + cldata.pinkhexa[p].r + '</span>' +
								  '</div>';
					}
					pinkCl += '</div>';
					$(pinkCl).appendTo('.cPickerContent');

					// Data For Red Colors
					let redCl = '<div class="RedCl">';
					for( let r in cldata.redhexa) {
						redCl += '<div class="clEl">' + 
										'<span class="hexaCl">' + cldata.redhexa[r].hexa + '</span>' +
										'<span class="rgb-r">' + cldata.redhexa[r].r + '</span>' +
								  '</div>';
					}
					redCl += '</div>';
					$(redCl).appendTo('.cPickerContent');

					// Data For Orange Colors
					let orangeCl = '<div class="OrangeCl">';
					for( let o in cldata.orangehexa) {
						orangeCl += '<div class="clEl">' + 
										'<span class="hexaCl">' + cldata.orangehexa[o].hexa + '</span>' +
										'<span class="rgb-r">' + cldata.orangehexa[o].r + '</span>' +
									'</div>';
					}
					orangeCl += '</div>';
					$(orangeCl).appendTo('.cPickerContent');

					// Data For Yellow Colors
					let yellowCl = '<div class="YellowCl">';
					for( let y in cldata.yellowhexa) {
						yellowCl += '<div class="clEl">' + 
										'<span class="hexaCl">' + cldata.yellowhexa[y].hexa + '</span>' +
										'<span class="rgb-r">' + cldata.yellowhexa[y].r + '</span>' +
									'</div>';
					}
					yellowCl += '</div>';
					$(yellowCl).appendTo('.cPickerContent');

					// Data For Salmon Colors
					let salmonCl = '<div class="SalmonCl">';
					for( let s in cldata.salmonhexa) {
						salmonCl += '<div class="clEl">' + 
										'<span class="hexaCl">' + cldata.salmonhexa[s].hexa + '</span>' +
										'<span class="rgb-r">' + cldata.salmonhexa[s].r + '</span>' +
									'</div>';
					}
					salmonCl += '</div>';
					$(salmonCl).appendTo('.cPickerContent');

					// Data For Salmon Colors
					let extraCl = '<div class="ExtraCl">';
					for( let e in cldata.extrahexa) {
						extraCl += '<div class="clEl">' + 
										'<span class="hexaCl">' + cldata.extrahexa[e].hexa + '</span>' +
										'<span class="rgb-r">' + cldata.extrahexa[e].r + '</span>' +
									'</div>';
					}
					extraCl += '</div>';
					$(extraCl).appendTo('.cPickerContent');

					// Each Function For Dynamical Classes
					$.fn.clEl = function() {
						return this.each(function() {

							$(this).addClass('cl_' + cpsettings.value.clval);
							cpsettings.value.clval++;
						});
					}
					$('.' + cpsettings.clEl).clEl();

					// Reverses Blue Color Picker
					$('.BlueCl').html($('.BlueCl').find('.' + cpsettings.clEl).get().reverse());

					// Reverses Purple Color Picker
					$('.PurpleCl').html($('.PurpleCl').find('.' + cpsettings.clEl).get().reverse());

					// Reverses Red Color Picker
					$('.RedCl').html($('.RedCl').find('.' + cpsettings.clEl).get().reverse());

					// Reveerses Yellow Color Picker
					$('.YellowCl').html($('.YellowCl').find('.' + cpsettings.clEl).get().reverse());

					// Font Size Sets to 0
					$('.hexaCl, .rgb-r').css({ 'font-size': 0 });
				}

				// Open ColorPicker Button( Mouseover / MouseLeave )
				$('.' + cpsettings.ocp).hover( 

					// Open ColorPicker Mouseover
					function() { 

						// ToolTip Shows( MouseOver )
						$('.' + cpsettings.ocpTip).stop().show(); 
					}, 

					// Open ColorPIcker MouseLeave
					function() { 

						// ToolTip Hides( MouseLeave )
						$('.' + cpsettings.ocpTip).stop().hide(); 
						
				});

				// Open ColorPicker Function
				$.fn.OpenCp = function() {
					return this.on(ck, '.OpenCP', function() {

						// ColorPicker Floor Shows
						$('.' + cpsettings.cpFloor).show();

						// ColorPicker Button swaps classes( Removes Open Class & Adds Close Class )
						$('.' + cpsettings.ocp).removeClass('OpenCP').addClass('CloseCP');

						// GenCpk Element Removes OpenCP Element & adds CloseCP Element
						$('.GenCpk').removeClass('OpenCP').addClass('CloseCP');

						// Tool Tip Changes Text
						$('.' + cpsettings.ocpTip).html('Close ' + cpsettings.tipText);

						// Add Close Class To Html Tag
						$('html').addClass('clPicker');

					});
				}
				dt.OpenCp();

				// Close ColorPicker Function
				$.fn.CloseCp = function() {
					return this.on(ck, '.CloseCP', function() {

						// ColorPicker Floor Hides
						$('.' + cpsettings.cpFloor).hide();

						// ColorPicker Button swaps Classes( Removes Close Class & Adds Open Class )
						$('.' + cpsettings.ocp).addClass('OpenCP').removeClass('CloseCP');

						$('.GenCpk').addClass('OpenCP').removeClass('CloseCP');

						// Tool Tip Changes Text
						$('.' + cpsettings.ocpTip).html('Open ' + cpsettings.tipText);

						// Remove Close Class To Html Tag
						$('html').removeClass('clPicker');

					});
				}
				dt.CloseCp();

				// Set Color Event
				$.fn.setColor = function() {
					return this.on(ck, '.GenCpk', function() {

						// All Color Pickers Remove SetColor Class
						$('.GenCpk').removeClass('setColor');

						// This Color Picker Adds SetColor Class
						$(this).addClass('setColor');

					});
				}
				dt.setColor();

				// Colors Golbal Click Event
				$.fn.glClPicker = function() {
					return this.on(ck, '*', function() {

						let tc = $(this)[0].className;

						// Each Color Element Click Event
						if(tc.indexOf('clEl') != -1) {

							// When Click on "clEl" Element Adds Hexas To This ID
							$('#ColorHex').val('Hexa: ' + $('.hexaCl', this).html());

							// When Click on "clEl" Element Adds Rgbs To This ID
							$('#ColorRgb').val('Rgb(' + $('.rgb-r', this).html() + ')');

							// When Click on "clEl" Change Icon selected Picker Color
							$('.selectedId i').css({ color: $('#ColorHex').val() });

							// General Settings Color Picker Color Random
							$('.setColor').css({ background: $('.hexaCl', this).html(), color: $('.hexaCl', this).html() });
						}

						// Clones Style For Set Icons Color
						else if(tc.indexOf('sClo') != -1) {

							// Clone Background Variable
							let x = $('.setColor').clone().attr('style');

							// Adds The Background Color to Element to Set Color
							$('#nav-left i.mainIco, #button-nav-right i').css({ color: x });
						}

						// Button To Remove Color From Picker
						else if(tc.indexOf('delCol') != -1) {

							// Removes Attr style From This Element
							$('.setColor, #nav-left i.mainIco, #button-nav-right i').removeAttr('style');

							// When Click on "clEl" Element Removes Hexas To This ID
							$('#ColorHex').val('Hexa:');

							// When Click on "clEl" Element Removes Rgbs To This ID
							$('#ColorRgb').val('Rgb()');
						}

						// Color Picker Floor Animates
						if(tc.indexOf('ClPicker1') != -1) {

							// First Block of Picker Elements Positioning
							$(cpsettings.clPick).animate({ left: '255px', top: '-49px'}, 200);
						}

						else if(tc.indexOf('ClPicker2') != -1) {

							// Second Block of Picker Elements Positioning
							$(cpsettings.clPick).animate({ left: '512px', top: '-49px'}, 200);
						}

						else if(tc.indexOf('ClPicker3') != -1) {	

							// Third Block of Picker Elements Positioning
							$(cpsettings.clPick).animate({ left: '753px', top: '-49px'}, 200);
						}

						else if(tc.indexOf('ClPicker4') != -1) {

							// Fourth Block of Picker Elements Positioning
							$(cpsettings.clPick).animate({ left: '240px', top: '176px'}, 200);
						}

					});
				}
				dt.glClPicker();

				// Hides Color Picker clicking anywhere in the Screen
				$.fn.htmlCl =  function() {

					return this.on(ck, '.clPicker', function() {

						// Color Picker Floor Hides
						$(cpsettings.clPick).hide();

						// Html Tag Removes The Close Picker Class
						$('html').removeClass('clPicker');

						// Picker Element Toggles Classes
						$('.GenCpk').removeClass('CloseCP').addClass('OpenCP');
					});
				}
				dt.htmlCl();

				// Color Picker Floor ( MouseHover / MouseLeave )
				$(cpsettings.clPick).hover( 

					// Open ColorPicker Mouseover
					function() { 

						// ToolTip Shows( MouseOver )
						$('html').removeClass('clPicker'); 
					}, 

					// Open ColorPIcker MouseLeave
					function() { 

						// ToolTip Hides( MouseLeave )
						$('html').addClass('clPicker'); 
				});
			}

		});

		let thCl = new ClPicker();

	}
	dt.colorPicker();

});
