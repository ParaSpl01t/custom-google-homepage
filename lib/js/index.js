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

function customFavicon(text) {
	console.log(text)
	var canvas = document.createElement('canvas');
	canvas.width = 16;
	canvas.height = 16;
	var ctx = canvas.getContext('2d');
	ctx.textAlign= 'center';
	ctx.fillStyle = "#fff";
	ctx.arc(8, 8, 8, 0, 2 * Math.PI);
	ctx.fill();
	ctx.fillStyle = '#4285F4';
	ctx.font = 'bold 14px "Product Sans"';
	ctx.fillText(text, 8, 14);
	var link = document.createElement('link');
	link.type = 'image/x-icon';
	link.rel = 'shortcut icon';
	link.href = canvas.toDataURL("image/x-icon");
	document.getElementsByTagName('head')[0].appendChild(link);
}

function initApplication() {
	var logo = document.getElementById('logo');
	if (getUrlVars()['name'] !== undefined)
		var logoText = getUrlVars()['name']
	else
		var logoText = logo.getAttribute('data-text');
	document.title = logoText;
	customFavicon(logoText[0]);
	for (x = 0; x < 2; x++)
		colors.push.apply(colors, colors)
	for (i = 0; i < logoText.length; i++) {
		logo.insertAdjacentHTML('beforeend', '<span style="color:' + colors[i] + '">' + logoText[i] + '</span>')
	}
}
