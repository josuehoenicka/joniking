function abrirNav() {
	document.getElementById("nav-responsive").style.width = "100vw";
	document.getElementById("slide").style.marginLeft = "250px";
	document.body.style.backgroundColor = "#1d1c1c";
}

function cerrarNav() {
	document.getElementById("nav-responsive").style.width = "0"
	document.getElementById("slide").style.marginLeft = "0";
	document.body.style.backgroundColor = "#1d1c1c";
}