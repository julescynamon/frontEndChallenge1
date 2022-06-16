window.onload = function () {
	var bouton = document.getElementById("menu");
	var nav = document.getElementById("menuToogle");
	bouton.onclick = function (e) {
		if (nav.style.display == "block") {
			nav.style.display = "none";
		} else {
			nav.style.display = "block";
		}
	};
};

window.onload = function () {
	var bouton = document.getElementById("menu2");
	var nav = document.getElementById("menuToogle2");
	bouton.onclick = function (e) {
		if (nav.style.display == "block") {
			nav.style.display = "none";
		} else {
			nav.style.display = "block";
		}
	};
};