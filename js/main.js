var $body,
	$menuTrigger;

$(document).ready(function ($) {
	$body = $('body');
	$menuTrigger = $('#menu__trigger');

	$menuTrigger.on('click', function () {
		if ($body.hasClass('menu__open')) {
			$body.removeClass('menu__open');
			$(this).removeClass('active__mod');
		} else {
			$body.addClass('menu__open');
			$(this).addClass('active__mod');
		}
	});
});
