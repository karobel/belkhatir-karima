const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
const menu_item = document.querySelectorAll('.header .nav-bar .nav-list ul li a');
const header = document.querySelector('.header.container');

hamburger.addEventListener('click', () => {
	hamburger.classList.toggle('active');
	mobile_menu.classList.toggle('active');
});

document.addEventListener('scroll', () => {
	var scroll_position = window.scrollY;
	if (scroll_position > 250) {
		header.style.backgroundColor = '#29323c';
	} else {
		header.style.backgroundColor = 'transparent';
	}
});

menu_item.forEach((item) => {
	item.addEventListener('click', () => {
		hamburger.classList.toggle('active');
		mobile_menu.classList.toggle('active');
	});
});

//----------------------------------------------------------------------------------------------------------------
// empêcher que votre visiteur effectue un clic droit sur votre page.

// function disableselect(e){ 
// 	return false 
// } 
// function reEnable(){ 
// return true 
// } 
// //if IE4+ 
// document.onselectstart=new Function ("return false") 
// document.oncontextmenu=new Function ("return false") 
// //if NS6 
// if (window.sidebar){ 
// document.onmousedown=disableselect 
// document.onclick=reEnable 
// } 

//----------------------------------------------------------------------------------------------------------------
// pour permetre de copier le mail et le tel
function copy(that){
	var inp =document.createElement('input');
	document.body.appendChild(inp)
	inp.value =that.textContent
	inp.select();
	document.execCommand('copy',false);
	inp.remove();
}
