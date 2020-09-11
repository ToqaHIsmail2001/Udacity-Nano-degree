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
const navBarList = document.getElementById('navbar__list');
const sections = document.querySelectorAll('section');

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
const navBuild = (activeSec) => {
    let navList = '';
    // looping over all sections
    sections.forEach(section => {
        const section_ID = section.id;
        const section_DataNav = section.dataset.nav;
        if(section.id == activeSec){
          navList += `<li><a class="menu__link_active" href="#${section_ID}">${section_DataNav}</a></li>`;
        }
        else{
          navList += `<li><a class="menu__link" href="#${section_ID}">${section_DataNav}</a></li>`;
        }

    });
    navBarList.innerHTML = navList;
    navBarList.style.backgroundColor = "rgb(102, 153, 153)";
  };
  navBuild("section1");

// Add class 'active' to section when near top of viewport

// get the largest value that is less or equal to the number
const offset = (section) => {
  return Math.floor(section.getBoundingClientRect().top);
};

//add the active class 
const add_Active = (condition, section) => {
  if (condition) {
    section.classList.add("your-active-class");
    section.style.cssText = "background-color: rgb(255, 0, 102)";
    navBuild(section.id);
  }
}

//remove the active class
const remove_Active = (section) => {
  section.classList.remove("your-active-class");
  section.style.cssText = "background-color: linear-gradient(0deg, rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0) 100%)";
};

//set section active
const sectActive = () => {
  sections.forEach(section => {
    const element_Offset = offset(section);

    is_in_Top_viewport = () => element_Offset < 100 && element_Offset >= -100;

    remove_Active(section);
    add_Active(is_in_Top_viewport(),section);
  });
};

// Scroll to anchor ID using scrollTO event
$('a[href^="#"]').on('click', function(event) {
  var target = $(this.getAttribute('href'));
  if( target.length ) {
    // Using jQuery's animate() method to add smooth page scroll
    $('html, body').stop().animate({scrollTop: target.offset().top}, 1000);
  }
});

/**
 * End Main Functions
 * Begin Events
 * 
*/
document.addEventListener('scroll' ,sectActive);
// Build menu 

// Scroll to section on link click

// Set sections as active
