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
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/

//saving all sections in html to const sections
const sections= Array.from(document.querySelectorAll('section'));
//saving navbar list in html to const navbar
const navbar= document.getElementById('navbar__list');

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/

//show navigation bar
function NavBar()
{
    for (section of sections)
    {
        SectionName= section.getAttribute('data-nav');
        SectionID= section.getAttribute('id');
    listItem= document.createElement('li');
    listItem.innerHTML=`<a class='menu__link' href='#${SectionID}'>${SectionName}</a>`;
    //adding navbar to our web page
    navbar.appendChild(listItem);
}
}


/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/


//checking if section is in our range
function isInViewPort(element) {

    return (element.getBoundingClientRect().top >= 0)
}
//toggle between sections by scrolling
function Scroll() {


    sections.forEach(sec => {
        (isInViewPort(sec)) ?  sec.classList.add('your-active-class') :  sec.classList.remove('your-active-class')
    })
}



// build the nav
NavBar();

//to run only while scrolling
document.addEventListener('scroll', Scroll)


// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


