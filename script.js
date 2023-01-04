function setLightMode() {
	let body = document.querySelector('body');
	let icon = document.querySelector('#mode-icon');
	body.className = '';
	icon.className = "far fa-moon";
}

function toggleDarkMode() {
	let body = document.querySelector('body');
	let icon = document.querySelector('#mode-icon');
	let currentClass = body.className;
	if (currentClass === 'dark-mode') {
		body.className = '';
		icon.className = "far fa-moon";
	} else {
		body.className = 'dark-mode';
		icon.className = "fas fa-sun";
	}
}