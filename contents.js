function toggleContents() {
	var e = document.getElementById('contents');
	var disp = getComputedStyle(e, null).display;
	if (disp !== 'none')
		e.style.display = 'none';
	else
		e.style.display = 'block';
}