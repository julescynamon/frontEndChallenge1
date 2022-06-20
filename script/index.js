let button = document.getElementById("menu");
let button2 = document.getElementById("menu2");
let nav = document.getElementById("menuToogle");
let nav2 = document.getElementById("menuToogle2");

button.addEventListener("click", function (e) {
	if (nav.style.display == "block") {
		nav.style.display = "none";
	} else {
		nav.style.display = "block";
	}

	if (nav.style.display == "block") {
		image1 = document.getElementById("myImg");
		image1.classList.add("arrowChange");
	} else {
		image1 = document.getElementById("myImg");
		image1.classList.remove("arrowChange");
	}
});

button2.addEventListener("click", function (e) {
	if (nav2.style.display == "block") {
		nav2.style.display = "none";
	} else {
		nav2.style.display = "block";
	}

	if (nav2.style.display == "block") {
		image2 = document.getElementById("myImg2");
		image2.classList.add("arrowChange");
	} else {
		image2 = document.getElementById("myImg2");
		image2.classList.remove("arrowChange");
	}
});

// menu hamburger responsive

let openMenu = document.querySelector(".menuHamburger");
let toggleMenu = document.getElementById("toogleResponsive");
let closeMenu = document.querySelector(".menuMobile--close");
let body = document.getElementsByTagName("body")[0];
openMenu.addEventListener("click", function () {
	if (toggleMenu.style.display == "block") {
		toggleMenu.style.display = "none";
	} else {
		toggleMenu.style.display = "block";
		body.classList.add("overflow");
	}
});
closeMenu.addEventListener("click", function () {
	toggleMenu.style.display = "none";
	body.classList.remove("overflow");
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
