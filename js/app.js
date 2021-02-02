/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
*/

/**
 * Define Global Variables
 *
*/
const all = document.querySelectorAll('h2');
const navbarList = document.querySelector('#navbar__list');
/**
 * End Global Variables
 * Start Helper Functions
 *
*/



/**
 * End Helper Functions
 * Begin Main Functions
 *
*/

// build the nav
for (let i = 0; i < all.length; i += 1) {
  const htmlTextToAdd = '<li><a>'+all[i].textContent+'</a></li>';
navbarList.insertAdjacentHTML('beforeend', htmlTextToAdd);
}





/**
 * End Main Functions
 * Begin Events
 *
*/

// Build menu




    let navButton = document.getElementsByTagName('a');
    let sectionPos = document.getElementsByClassName('landing__container');
    let fromTop = window.scrollY;
    for (let i = 0; i < all.length; i += 1)
     {
       // Scroll to section on link click
          navButton[i].addEventListener('click', function() {
       // Scroll to anchor ID using scrollTO event
            window.scrollTo(0,sectionPos[i].offsetParent.offsetTop);
          });

          window.addEventListener('scroll', function()
          {
           fromUp = window.scrollY;
                if (
      sectionPos[i].offsetParent.offsetTop <= fromUp &&
      sectionPos[i].offsetParent.offsetTop + sectionPos[i].offsetParent.offsetHeight > fromUp
    ) {
    // Add class 'active' to section when near top of viewport
    // Set sections as active
      navButton[i].classList.add('your-active-class') ;
      sectionPos[i].classList.add('your-active-class');
    } else {
      navButton[i].classList.remove('your-active-class');
      sectionPos[i].classList.remove('your-active-class');
    }

});



};
