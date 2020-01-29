function isResponsive(x) {
    return x.className === 'responsive';
}

function toggleMenu() {
    const x = document.querySelector('#links');
    if (isResponsive(x)) {
        x.className = '';
        document.querySelector('#menu').className = 'fa fa-bars';
    } else {
        x.className = 'responsive';
        document.querySelector('#menu').className = 'fa fa-times';
    }
}