export class Navbar {
    // function for open Navbar
    static openNavbar(topNav, mainNavbar) {
        topNav.className += " responsive";
        mainNavbar.style.boxShadow = '0 0 5px #f3f3f3';
        mainNavbar.style.position = 'fixed';
        mainNavbar.style.zIndex = '2';
    }

    // function for close Navbar
    static closeNavbar(topNav, mainNavbar) {
        if(topNav.className.includes('responsive')) {
            topNav.className = "topnav";
            mainNavbar.removeAttribute('style');
        }
    }
}