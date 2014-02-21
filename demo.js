$(document).ready(function () {
	$(".form-control").tooltip({ trigger: 'click'});

	$("#testInfo").focusin(function() {
			$("#infoValue").fadeIn();
	});
	
	$("#testInfo").focusout(function() {
			$("#infoValue").fadeOut(600);
	});

	$('#addExpenseSelectDate').datepicker({});/*NOT SHOWING CURRENT DATE IN BLUE */

});