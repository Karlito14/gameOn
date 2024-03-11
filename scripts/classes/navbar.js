export class Navbar {
    // function for open Navbar
    static openNavbar(topNav, mainNavbar, iconNavbar) {
        topNav.className += ' responsive';
        mainNavbar.style.boxShadow = '0 0 5px #f3f3f3';
        mainNavbar.style.position = 'fixed';
        mainNavbar.style.zIndex = '2';
        iconNavbar.setAttribute('aria-expanded', 'true');
    }

    // function for close Navbar
    static closeNavbar(topNav, mainNavbar, iconNavbar) {
        topNav.className = 'topnav';
        mainNavbar.removeAttribute('style');
        iconNavbar.setAttribute('aria-expanded', 'false');
    }
}