// function Hamburger menu
let funcHamburger = () => {
	const tombolNav = document.querySelector('.hamburger');
	const menu = document.querySelector('.bar');
	const menuMobile = document.querySelector('.nav-mobile');
	tombolNav.addEventListener('click', function () {
		tombolNav.classList.toggle('active');
		menu.classList.toggle('active');
		menuMobile.classList.toggle('active');
	});
};

funcHamburger();

// Function animation GSAP
let gsapAnimation = () => {
	gsap.from('.description', { duration: 3, opacity: 0, ease: 'rough' });
};

gsapAnimation();
