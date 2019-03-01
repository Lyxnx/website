function toggleId(id) {
	var e = document.getElementById(id);
	var disp = getComputedStyle(e, null).display;
	if (disp !== 'none')
		e.style.display = 'none';
	else
		e.style.display = 'block';
}