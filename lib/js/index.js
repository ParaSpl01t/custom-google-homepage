document.onreadystatechange = function () {
	if (document.readyState === "interactive") {
		initApplication();
	}
}
var colors = ['#4285F4', '#DB4437', '#F4B400', '#4285F4', '#0F9D58', '#DB4437'];

function getUrlVars() {
	var vars = {};
	var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function (m, key, value) {
		vars[key] = value;
	});
	return vars;
}

function initApplication() {
	var logo = document.getElementById('logo');
	if (getUrlVars()['name'] !== undefined)
		var logoText = getUrlVars()['name']
	else
		var logoText = logo.getAttribute('data-text');
	for (x = 0; x < 2; x++)
		colors.push.apply(colors, colors)
	console.log(colors)
	for (i = 0; i < logoText.length; i++) {
		logo.insertAdjacentHTML('beforeend', '<span style="color:' + colors[i] + '">' + logoText[i] + '</span>')
	}
}