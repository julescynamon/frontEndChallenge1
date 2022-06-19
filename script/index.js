let button = document.getElementById("menu");
let button2 = document.getElementById("menu2");
let nav = document.getElementById("menuToogle");
let nav2 = document.getElementById("menuToogle2");

button.addEventListener("click", function (e) {
	if (nav.style.display == "block") {
		nav.style.display = "none";
		document.getElementById("myImg").src = "../images/icon-arrow-down.svg";
	} else {
		nav.style.display = "block";
		document.getElementById("myImg").src = "../images/icon-arrow-up.svg";
	}
});

button2.addEventListener("click", function (e) {
	if (nav2.style.display == "block") {
		nav2.style.display = "none";
		document.getElementById("myImg2").src = "../images/icon-arrow-down.svg";
	} else {
		nav2.style.display = "block";
		document.getElementById("myImg2").src = "../images/icon-arrow-up.svg";
	}
});

// menu hamburger responsive

let openMenu = document.querySelector(".menuHamburger");
let toggleMenu = document.getElementById("toogleResponsive");
let closeMenu = document.querySelector(".menuMobile--close");
openMenu.addEventListener("click", function () {
	if (toggleMenu.style.display == "block") {
		toggleMenu.style.display = "none";
	} else {
		toggleMenu.style.display = "block";
	}
});
closeMenu.addEventListener("click", function () {
	toggleMenu.style.display = "none";
});

let menu = document.getElementById("menuResponsive");
let menu2 = document.getElementById("menuResponsive2");
let item = document.getElementById("menuToogleResponsive");
let item2 = document.getElementById("menuToogleResponsive2");

menu.addEventListener("click", function (e) {
	if (item.style.display == "block") {
		item.style.display = "none";
		document.getElementById("myImg").src = "../images/icon-arrow-down.svg";
	} else {
		item.style.display = "block";
		document.getElementById("myImg").src = "../images/icon-arrow-up.svg";
	}
});

menu2.addEventListener("click", function (e) {
	if (item2.style.display == "block") {
		item2.style.display = "none";
		document.getElementById("myImg2").src = "../images/icon-arrow-down.svg";
	} else {
		item2.style.display = "block";
		document.getElementById("myImg2").src = "../images/icon-arrow-up.svg";
	}
});
