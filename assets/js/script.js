window.onscroll = function() {
    if (window.scrollY < 630) {
        document.querySelector('header').style.position = 'absolute';
    } else if (window.scrollY > 631) {
        document.querySelector('header').style.position = 'fixed';
    }
}