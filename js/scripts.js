$(window).load(function () {
	// Section scroll na desktopowych rozdzielczościach
	var offset = -50;

	if ($(window).width() > 991) {
		$.scrollify({
			section: ".scrollify",
			sectionName: "section-name",
			interstitialSection: "nav",
			easing: "easeOutExpo",
			scrollSpeed: 900,
			offset: offset,
			scrollbars: true,
			standardScrollElements: ".standard-scroll",
			setHeights: false,
			overflowScroll: true
		});
	}
});

// Automatyczne zmniejszanie górnej nawigacji po rozpoczęciu scrollowania
$(window).scroll(function () {
	if ($(document).scrollTop() > 0) {
		$('.navbar-fixed-top').addClass('shrink');
	} else {
		$('nav').removeClass('shrink');
	}
});

// Powrót do góry po kliknięciu na logo Bond Flare
$('.navbar-brand').click(function () {
	$('html, body').animate({
		scrollTop: 0
	}, 900);
	return false;
});

// Smooth scroll przy klikaniu w linki górnej nawigacji
$('a[href^="#"]').on('click', function (e) {
	e.preventDefault();

	var target = this.hash;

	if ($(window).width() < 767) {
		$('html, body').stop().animate({
			'scrollTop': $(target).offset().top - 100
		}, 900, 'swing');
	} else {
		$('html, body').stop().animate({
			'scrollTop': $(target).offset().top - 50
		}, 900, 'swing');
	}
});

function detectFirefox() {
	var firefox  = navigator.userAgent.indexOf('Firefox') > -1;
	if (firefox) {
		$('.mark-icon').on('click', function () {
			$(this).addClass('rotated');
			setTimeout(function () {
				$('.main-page').fadeToggle(2500);
			}, 900);
			setTimeout(function () {
				$('.main-page').fadeToggle(0);
			}, 901);
			setTimeout(function () {
				window.location.href = "book.html";
			}, 3400);
		});
	}
	else {
		$('.mark-icon').on('click', function () {
			$(this).addClass('rotated');
			setTimeout(function () {
				$('.main-page').fadeToggle(2500);
			}, 900);
			setTimeout(function () {
				$('body').css({
					'padding-top': '0',
					'padding-bottom': '0'
				});
				$('iframe, #close-book-button').fadeToggle(2500);
			}, 3400);
		});

		$('#close-book-button').on('click', function () {
			$('iframe, #close-book-button').fadeToggle(1250);
			setTimeout(function () {
				$('.main-page').fadeToggle(1250);
				$('body').css({
					'padding-top': '100px',
					'padding-bottom': '40px'
				});
			}, 1250);
		});
	}
}

detectFirefox();
