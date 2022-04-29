/* 

Reference
***************************************
http://idangero.us/swiper/demos/
http://idangero.us/swiper/api/

Good Demos
***************************************
http://idangero.us/swiper/demos/110-slides-per-view.html
http://idangero.us/swiper/demos/130-centered.html
http://idangero.us/swiper/demos/160-scroll-container.html
http://idangero.us/swiper/demos/240-effect-coverflow.html
http://idangero.us/swiper/demos/260-keyboard-control.html
http://idangero.us/swiper/demos/270-mousewheel-control.html
http://idangero.us/swiper/demos/280-autoplay.html
http://idangero.us/swiper/demos/360-parallax.html
http://idangero.us/swiper/demos/380-responsive-breakpoints.html

*/

/* Trading Bots
**************************************************************/
var botSwiper = new Swiper ('#botSwiper', {
	
	direction: 'horizontal',
	loop: true,
	autoplay: {
		delay: 1000,
	}
	
});


/* Plans
**************************************************************/
var planSwiper = new Swiper ('#planSwiper', {
	
	slidesPerView: 4,
	centeredSlides: true,
	spaceBetween: 10,
	direction: 'horizontal',
	effect: 'coverflow',
	
	coverflowEffect: {
		rotate: 0,
		stretch: 0,
		depth: 0,
		modifier: 0,
		slideShadows: false,
	},

	breakpoints: {

		768: {
			slidesPerView: 1,
			spaceBetween: -60,
			effect: 'coverflow',
			
			coverflowEffect: {
				rotate: 0,
				stretch: 20,
				depth: 120,
				modifier: 3,
				slideShadows: false,
			}
		}

	}
	
});

planSwiper.slideTo(1, false, false);


/* Testimonials
**************************************************************/
var customerSwiper = new Swiper ('#customerSwiper', {
	
	direction: 'horizontal',
	loop: true,
	autoplay: {
		delay: 4000,
	},
	centeredSlides: true,
	slidesPerView: 1,
	spaceBetween: 0,
	effect: 'coverflow',
	
	coverflowEffect: {
		rotate: 0,
		stretch: 0,
		depth: 0,
		modifier: 0,
		slideShadows: false,
	},
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
	
});

customerSwiper.slideTo(1, false, false);


/* Update Theme Color
***********************************/
function updateTheme() {

	const theme 	  = document.querySelector("meta[name=theme-color]");
	const plans 	  = Array.from(document.querySelectorAll('.plan'));
	const planLinks = Array.from(document.querySelectorAll('.megabot-link'));
	const planMega  = document.querySelector(".plan-mega");
	const swiper 	  = document.querySelector("#planSwiper");

	
	

	planLinks.forEach(link => {
	
		link.addEventListener("click", function() {
			
			// green
			planSwiper.slideTo(1, false, false);
			planMega.classList.add('swiper-slide-active');
			theme.setAttribute("content", "#00e676");
		}, true);

	});

	plans.forEach(plan => {
	
		// Listen for change
		swiper.addEventListener("touchend", function() {

			setTimeout(function(){ 
				
				const bluePlan 	   = 		document.querySelector(".plan-robo.swiper-slide-active");
				const greenPlan 	 = 		document.querySelector(".plan-mega.swiper-slide-active");
				const yellowPlan 	 = 		document.querySelector(".plan-giga.swiper-slide-active");
				const redPlan 	   = 		document.querySelector(".plan-ultra.swiper-slide-active");

				if(plan == bluePlan) {
					// blue
					theme.setAttribute("content", "#33daff");
				} else if (plan == greenPlan) {
					// green
					theme.setAttribute("content", "#00e676");
				} else if (plan == yellowPlan) {
					// yellow
					theme.setAttribute("content", "#efff48");
				} else if (plan == redPlan) {
					// red
					theme.setAttribute("content", "#ff49cb");
				}
			}, 100);

			
		}, true);


		// mouseover
		plan.addEventListener("mouseover", function() {
			plan.classList.add('swiper-slide-active');
		}, true);

		// mouseout
		plan.addEventListener("mouseout", function() {
			plan.classList.remove('swiper-slide-active');
		}, true);

	});
}

/* Run Function
***********************************/
updateTheme();