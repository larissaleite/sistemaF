$(document).ready(function () {
	$(".form-control").tooltip({ trigger: 'click'});

	$("#testInfo").focusin(function() {
			$("#infoValue").fadeIn();
	});
		$("#testInfo").focusout(function() {
			$("#infoValue").fadeOut(1000);
	});
});