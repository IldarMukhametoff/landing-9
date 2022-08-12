const iconMenu = document.querySelector('.introduce__burger');
const headerMenu = document.querySelector('.header__menu');
if(iconMenu){
	iconMenu.addEventListener("click", function(e){
		document.body.classList.toggle('lock');
		iconMenu.classList.toggle('active');
		headerMenu.classList.toggle('active');
	});
}

const menuLinks = document.querySelectorAll('.header__link[data-goto]');
if(menuLinks.length>0){
	menuLinks.forEach(menuLink=>{
		menuLink.addEventListener("click",onMenuLinkClick);
	});
	function onMenuLinkClick(e){
		const menuLink = e.target;
		if(menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)){
			const gotoBlock = document.querySelector(menuLink.dataset.goto);
			const gotoBlockValue = gotoBlock.getBoundingClientRect().top+pageYOffset;
			
			if(iconMenu.classList.contains('active')) {
				document.body.classList.remove('lock');
				iconMenu.classList.remove('active');
				headerMenu.classList.remove('active');
			}

			window.scrollTo({
				top:gotoBlockValue,
				behavior:"smooth"
			});
			e.preventDefault();
		}
	}
}