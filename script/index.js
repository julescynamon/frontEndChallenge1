window.onload = function () {
	let button = document.getElementById("menu");
	let button2 = document.getElementById("menu2");
	let nav = document.getElementById("menuToogle");
	let nav2 = document.getElementById("menuToogle2");
	button.onclick = function (e) {
		if (nav.style.display == "block") {
			nav.style.display = "none";
			document.getElementById("myImg").src =
				"../images/icon-arrow-down.svg";
		} else {
			nav.style.display = "block";
			document.getElementById("myImg").src =
				"../images/icon-arrow-up.svg";
		}
	};
	button2.onclick = function (e) {
		if (nav2.style.display == "block") {
			nav2.style.display = "none";
			document.getElementById("myImg2").src =
				"../images/icon-arrow-down.svg";
		} else {
			nav2.style.display = "block";
			document.getElementById("myImg2").src =
				"../images/icon-arrow-up.svg";
		}
	};
};
