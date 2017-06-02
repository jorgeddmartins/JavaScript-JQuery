	$(document).ready(function () {

    function adjustIframeHeight() {
        var $body   = $('body'),
            $iframe = $body.data('iframe.fv');
        if ($iframe) {
            // Adjust the height of iframe
            $iframe.height($body.height());
        }
    }
	$(function() {
	  	var num1 = $("#post_code");
		var num2 = $("#main_phone");
		var num3 = $("#second_phone");

		var func1 = function() {
			num1.val(num1.val().replace(/\s/g, ''));
		}
		var func2 = function() {
			num2.val(num2.val().replace(/\s/g, ''));
		}
		var func3 = function() {
			num3.val(num3.val().replace(/\s/g, ''));
		}
		num1.keyup(func1).blur(func1);
		num2.keyup(func2).blur(func2);
		num3.keyup(func3).blur(func3);
	});
    $("#stepForm").steps({
        headerTag: "h2",
        bodyTag: "section",
		transitionEffect: "fade",
		enableKeyNavigation: true,
		autoFocus: true,
        saveState: true,
            // Triggered when clicking the Previous/Next buttons
            onStepChanging: function(e, currentIndex, newIndex) {
                	var fv = $('#stepForm').data('formValidation'), // FormValidation instance
                    // The current step container
                    $container = $('#stepForm').find('section[data-step="' + currentIndex +'"]');
					// Validate the container
					fv.validateContainer($container);
					var isValidStep = fv.isValidContainer($container);
					// Do not jump to the next step
					if (currentIndex > newIndex){pxlclear(); return true; }
					if (isValidStep === false || isValidStep === null) {return false;}
					if(currentIndex === 1 && $('.windowsCheckList').length > 0){
					   if($('#window_units_list label.labelChecked').length == 0){
						$("#errorMessage").removeClass("hidden").text("Please Select A Window Option");
						return false;
						}
					}
					if(currentIndex === 1 && $('.doorsCheckList').length > 0){
					   if($('#door_units_list label.labelChecked').length == 0){
						$("#errorMessage").removeClass("hidden").text("Please Select A Door Option");
						return false;
						}
					}
					if(currentIndex === 1 && $('.bothCheckList').length > 0){
					   if($('#bothSelect label.labelChecked').length == 0){
						$("#errorMessage").removeClass("hidden").text("Please Select An Option");
						return false;
						}
					}
					return true;
            },
			onStepChanged: function(e, currentIndex, priorIndex) {
                // You don't need to care about it
                // It is for the specific demo
                adjustIframeHeight();
				var $container = $('#stepForm').find('section[data-step="' + currentIndex +'"]');
				$container.addClass("animated fadeIn");
				if (currentIndex === 0  ){pxl1();}//&& currentIndex > priorIndex
				else if (currentIndex === 1 ){pxl2();}//&& currentIndex > priorIndex 
				else if (currentIndex === 2 ){pxl3();}//&& currentIndex > priorIndex 
				$('html, body').animate({ scrollTop: 0 }, 'fast');
            },
            // Triggered when clicking the Finish button
            onFinishing: function(e, currentIndex) {
                var fv         = $('#stepForm').data('formValidation'),
                    $container = $('#stepForm').find('section[data-step="' + currentIndex +'"]');
                // Validate the last step container
                fv.validateContainer($container);
                var isValidStep = fv.isValidContainer($container);
                if (isValidStep === false || isValidStep === null) {
                    return false;
                }
                return true;
            },
            onFinished: function(e, currentIndex) {
               function loadPageVar(sVar) { return unescape(window.location.search.replace(new RegExp("^(?:.*[&\\?]" + escape(sVar).replace(/[\.\+\*]/g, "\\$&") + "(?:\\=([^&]*))?)?.*$", "i"), "$1"));}
				function isNumeric(num) {return !isNaN(num);}
				if($("label#WinDoorNotOwner").hasClass('selected')){
					$('#WinDoorNotHomeOwner').modal('show');
					var addPostCode = $("#post_code").val();
					$("input[name='postcode']").val(addPostCode);
					return false;
				}else{
				var currentTime = new Date();
				var currentYear = currentTime.getFullYear();
				currentYear = parseInt(currentYear);
				var dobYear = $("#dd_dob_year").val();
				dobYear = parseInt(dobYear);
				var yearDiff = currentYear - dobYear;
				//if (yearDiff < 50){
					//$('#under50Modal').modal('show');
					//return false;
				//}else{
				
				$('#loader').css('display','block');
				setTimeout(function(){
					var thank_you_url = document.getElementById("thank_you_url").innerHTML;
					var dd_dob_day = document.getElementById("dd_dob_day").value;
					var dd_dob_month = document.getElementById("dd_dob_month").value;
					var dd_dob_year = document.getElementById("dd_dob_year").value;
						if(dd_dob_day === '' || dd_dob_month === '' || dd_dob_year === ''){
							var main_dob = "01 JAN 1997";
							$('#main_dob').val(main_dob);
							}
						else{
							var main_dob = dd_dob_day + " " + dd_dob_month + " " + dd_dob_year;
							$('#main_dob').val(main_dob);
							}
					var part_dob_day = document.getElementById("part_dob_day").value;
					var part_dob_month = document.getElementById("part_dob_month").value;
					var part_dob_year = document.getElementById("part_dob_year").value;
                    if(part_dob_day === '' || part_dob_month === '' || part_dob_year === ''){
                        var partner_dob = "01 JAN 1998";
                        $('#partner_dob').val(partner_dob);
                        }
                    else{
                        partner_dob = $("#part_dob_day").val() + " " + $("#part_dob_month").val() + " " + $("#part_dob_year").val();
                        $('#partner_dob').val(partner_dob);
                    }
					
				//----------------------- Calculate Double Doors Value
					$("input.prodChosen.doubleVal").each(function(){
						var theVal = parseInt($(this).val());
						var doubleTheVal = theVal * 2;
						$(this).val(doubleTheVal);
						//alert(doubleTheVal);
					});
				//----------------------- End Calculate Double Doors Value
				//----------------------- Calculate Number of doors or Windows	
				var totalDoor = 0;
				$("#extraFields input.doorSum").each(function(){
					totalDoor += parseInt($(this).val());
				});
				$("#door_units").val(totalDoor);	
				var totalWin = 0;
				$("#extraFields input.winSum").each(function(){
					totalWin += parseInt($(this).val());
				});
				$("#window_units").val(totalWin);	
				//----------------------- End Calculate Number of doors or Windows				
				//----------------------- concatinate window and doors product selected and amount selected	
				var productListing = $("#extraFields input.prodChosen").map(function() {
					var prodName = $(this).data('product');
					var prodAmount = $(this).val();
					var prodList = " " + prodName + " " + prodAmount;
					return prodList;
				}).get().join(",");
					
				$("#comments").val(productListing);	
				//----------------------- end concatinate window and doors product selected and amount selected	
				var sendToForm = $('#stepForm').serialize();
				console.log(sendToForm);
				$.ajax({
						url : "https://www.cvcapt.com/SaveWebLead.aspx",
						type: "POST",
						data : sendToForm,
						cache: false,			
						beforeSend: function () {
							//alert("Before sending");
							//return false;
							},
						 success: function(data){            
                                if(isNumeric(data))
                                {// alert('Redirect to thankyou with qs values for tracking pixel');
                                    window.location.replace("../" + thank_you_url + "/?s=1&ch=" + (loadPageVar("ch")) + "&lid=" + data);
                                }else{ 
                                    window.location.replace("../" + thank_you_url + "/?s=0");
                                    }
                                },
						error: function (data){ 
							//alert('error: not getting data!!!');
						}		
					});}, 2000);
				}
				return false;
			}
        }).formValidation({
        excluded: ':disabled, .ignore, .hidden',
        message: 'This value is not valid',
        container: 'tooltip',
        feedbackIcons: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },
        fields: {
			product_type: {
                container: 'popover',
                validators: {
                    notEmpty: {
                        message: 'Please select one or more products'
                    },
                    stringLength: {
                        min: 1,
                        max: 40,
                        message: 'Your selection must be more than 0 and less than 40 characters long'
                    }
                }
            },
            title: {
                container: 'popover',
                validators: {
                    notEmpty: {
                        message: 'Please choose a title'
                    }
                }
            },
            firstName: {
                container: 'popover',
                validators: {
                    notEmpty: {
                        message: 'Your First Name is required'
                    },
                    stringLength: {
                        min: 2,
                        max: 30,
                        message: 'Your Name must be more than 1 and less than 30 characters long'
                    },
                    regexp: {
                        regexp: /^[A-Z ]+$/i,
                        message: 'Your First Name can only consist of alphabetical characters'
                    }
                }
            },
            lastName: {
                container: 'popover',
                validators: {
                    notEmpty: {
                        message: 'Your Last Name is required and cannot be empty'
                    },
                    stringLength: {
                        min: 2,
                        max: 30,
                        message: 'Your Last Name must be more than 1 and less than 30 characters long'
                    },
                    regexp: {
                        regexp: /^[A-Z ]+$/i,
                        message: 'Your Last Name can only consist of alphabetical characters'
                    }
                }
            },
			dd_dob_day: {
                container: 'popover',
                validators: {
                    notEmpty: {
                        message: 'Please supply Your Day of Birth'
                    }
                }
            },
			dd_dob_month: {
                container: 'popover',
                validators: {
                    notEmpty: {
                        message: 'Please supply Your Month of Birth'
                    }
                }
            },
			dd_dob_year: {
                container: 'popover',
                validators: {
                    notEmpty: {
                        message: 'Please supply Your Year of Birth'
                    }
                }
            },
			owner_day: {
                container: 'popover',
                validators: {
                    notEmpty: {
                        message: 'Please supply Your Day of Birth'
                    }
                }
            },
			owner_month: {
                container: 'popover',
                validators: {
                    notEmpty: {
                        message: 'Please supply Your Month of Birth'
                    }
                }
            },
			owner_year: {
                container: 'popover',
                validators: {
                    notEmpty: {
                        message: 'Please supply Your Year of Birth'
                    }
                }
            },
			postcode: {
                container: 'popover',
                validators: {
                    notEmpty: {
                        message: 'Please Supply Your Post Code'
                    },
                    regexp: {
                        regexp: /^(([gG][iI][rR] {0,}0[aA]{2})|((([a-pr-uwyzA-PR-UWYZ][a-hk-yA-HK-Y]?[0-9][0-9]?)|(([a-pr-uwyzA-PR-UWYZ][0-9][a-hjkstuwA-HJKSTUW])|([a-pr-uwyzA-PR-UWYZ][a-hk-yA-HK-Y][0-9][abehmnprv-yABEHMNPRV-Y]))) {0,}[0-9][abd-hjlnp-uw-zABD-HJLNP-UW-Z]{2}))$/,
                        message: 'Your Post Code Is Invalid'
                    }
                }
            },
			landLinePhone: {
                container: 'popover',
                validators: {
                    notEmpty: {
                        message: 'Please Supply a phone number'
                    },
                    stringLength: {
                        min: 9,
                        max: 16,
                        message: 'Your Phone Number must be less than 11 characters long'
                    },
					regexp: {
                        regexp: /^((0|0044|\+44|44)[1]\d{8,9})|^((0|0044|\+44|44)[238]\d{9})|^(((0|0044|\+44|44)[7])[1-9]\d{8})$/i,
                        message: 'Your Phone Number Is Invalid'
                    }
                }
            },
			workPhone: {
                container: 'popover',
                validators: {
                    notEmpty: {
                        message: 'Please Supply a Secondary phone number'
                    },
                    stringLength: {
                        min: 9,
                        max: 16,
                        message: 'Your Phone Number must be less than 11 characters long'
                    },
					regexp: {
                        regexp: /^((0|0044|\+44|44)[1]\d{8,9})|^((0|0044|\+44|44)[238]\d{9})|^(((0|0044|\+44|44)[7])[1-9]\d{8})$/i,
                        message: 'Your Phone Number Is Invalid'
                    }
                }
            },
            addressLine1: {
                container: 'popover',
                validators: {
                    notEmpty: {
                        message: 'Please supply Your Address'
                    },
                    stringLength: {
                        min: 1,
                        max: 40,
                        message: 'Your Address must be more than 0 and less than 40 characters long'
                    }
                }
            },
			addressTown: {
                container: 'popover',
                validators: {
                    notEmpty: {
                        message: 'Please supply Your Town'
                    },
                    stringLength: {
                        min: 1,
                        max: 40,
                        message: 'Your Town must be more than 0 and less than 40 characters long'
                    }
                }
            },
			addressCounty: {
                container: 'popover',
                validators: {
                    notEmpty: {
                        message: 'Please supply Your County'
                    },
                    stringLength: {
                        min: 1,
                        max: 40,
                        message: 'Your County must be more than 0 and less than 40 characters long'
                    }
                }
            },
			postCode: {
                container: 'popover',
                validators: {
                    notEmpty: {
                        message: 'Please Supply Your Post Code'
                    },
                    regexp: {
                        regexp: /^(([gG][iI][rR] {0,}0[aA]{2})|((([a-pr-uwyzA-PR-UWYZ][a-hk-yA-HK-Y]?[0-9][0-9]?)|(([a-pr-uwyzA-PR-UWYZ][0-9][a-hjkstuwA-HJKSTUW])|([a-pr-uwyzA-PR-UWYZ][a-hk-yA-HK-Y][0-9][abehmnprv-yABEHMNPRV-Y]))) {0,}[0-9][abd-hjlnp-uw-zABD-HJLNP-UW-Z]{2}))$/,
                        message: 'Your Post Code Is Invalid'
                    }
                }
            },
			landLinePhone: {
                container: 'popover',
                validators: {
                    notEmpty: {
                        message: 'Please Supply a phone number'
                    },
                    stringLength: {
                        min: 9,
                        max: 16,
                        message: 'Your Phone Number must be less than 11 characters long'
                    },
					regexp: {
                        regexp: /^((0|0044|\+44|44)[1]\d{8,9})|^((0|0044|\+44|44)[238]\d{9})|^(((0|0044|\+44|44)[7])[1-9]\d{8})$/i,
                        message: 'Your Phone Number Is Invalid'
                    }
                }
            },
			mobilePhone: {
                container: 'popover',
                validators: {
                    notEmpty: {
                        message: 'Please Supply a Secondary phone number'
                    },
                    stringLength: {
                        min: 9,
                        max: 16,
                        message: 'Your Phone Number must be less than 11 characters long'
                    },
					regexp: {
                        regexp: /^((0|0044|\+44|44)[1]\d{8,9})|^((0|0044|\+44|44)[238]\d{9})|^(((0|0044|\+44|44)[7])[1-9]\d{8})$/i,
                        message: 'Your Phone Number Is Invalid'
                    }
                }
            },
            email: {
                container: 'popover',
                validators: {
                    notEmpty: {
                        message: 'please supply you email addresss'
                    },
                    regexp: {
                        regexp: /.+@.+/,
                        message: 'The email address is not valid'
                    }
                }
            },
        }

    });
	
	$('.radio-group1 input:radio').addClass('input_hidden');
	$('.radio-group1 label').click(function() {
		$('.radio-group1 label').removeClass('selected');
		$(this).addClass('selected');
	});
	
	$('.radio-group2 input:radio').addClass('input_hidden');
	$('.radio-group2 label').click(function() {
		$('.radio-group2 label').removeClass('selected');
		$(this).addClass('selected');
	});
	
	$('.radio-group3 input:radio').addClass('input_hidden');
	$('.radio-group3 label').click(function() {
		$('.radio-group3 label').removeClass('selected');
		$(this).addClass('selected');
	});

});


function genderFunc() {
	$('.radio-group1 label').removeClass('selected');
	var female = document.getElementById("genderFemale");
	var title = document.getElementById("title");
	if(title.value === "Mrs" || title.value === "Ms" || title.value === "Miss"){
		$('.female').addClass('selected');
		$('.radio-group1  input:radio[value=Female]').prop("checked",true);
	}
	if(title.value === "Mr" || title.value === "Other"){
		$('.male').addClass('selected');
		$('.radio-group1  input:radio[value=Male]').prop("checked",true);
	}
}

$(function() {
	incomeprotec = {
		loadProtec: function() {
			callthis = $('#formWrapper');
			incomeClass = 'incomeProtec';
			if (callthis.hasClass(incomeClass) == 1 ) {
				$('#section1').addClass(incomeClass + '-section');
				$('.jumbotron2').addClass(incomeClass + '-jumbotron2');
				$('.jumbotron3').addClass(incomeClass + '-jumbotron3');
				$('.sectionHeading').addClass(incomeClass + '-heading');
				$('.product-logos').addClass(incomeClass + '-prodLogos');
				
			} else { return false; }
		}
	}
	if (incomeprotec.loadProtec() !== 1) {return this;}
});