const body = document.querySelector('body'); // get body from html document
body.style.backgroundColor = '#ddd'; // body background color light grey

// create and style wrapper div
const mainWrap = document.createElement('div'); //create div
body.appendChild(mainWrap); // append to body
// mainWrap.classList.add('main-wrap'); // add class
mainWrap.style.backgroundColor = '#fff'; // background color white
mainWrap.style.width = '90vw'; // width 90% of viewport width
mainWrap.style.margin = '0 auto'; // center on page
mainWrap.style.padding = '1rem'; // add padding

// create and style header
const header = document.createElement('header'); // create header element
mainWrap.appendChild(header); // append header element to mainWrap
header.style.display = 'flex'; // set header element display flex
header.style.justifyContent = 'space-between'; // 
header.style.gap = '1rem'; // apply gap to child elements in header
header.style.flexWrap = 'wrap';

// create and style logo and div
const logoContainer = document.createElement('div'); // create logo div
header.appendChild(logoContainer); // append logo div to header element
// logo h1 element
const logo = document.createElement('h1'); // create h1 for logo text
logoContainer.appendChild(logo); // append logo text to logo div
logo.style.fontFamily = '"Poppins", sans-serif'; // set font family for logo text
const logoFirstWord = document.createElement('span'); // create span element for first half of logo
logoFirstWord.innerText = 'Logo'; // text for first word
const logoSecondWord = document.createElement('span'); // create span element for second word of logo text
logoSecondWord.innerText = 'Text'; // text for second word
logo.appendChild(logoFirstWord); // append first word to h1
logo.appendChild(logoSecondWord); // append second word to h1
logoFirstWord.style.fontWeight = '700'; // set font weight for first word
logoSecondWord.style.fontWeight = '200'; // set font weight for second word

// create and style nav menu
const navMenu = document.createElement('nav'); // create nav element
navMenu.style.display = 'flex'; // set display flex for nav menu 
navMenu.style.justifyContent = 'center'; // center nav items horizontally
navMenu.style.alignItems = 'center'; // center nav items vertically
navMenu.style.flexWrap = 'wrap'; // wrap for responsiveness
header.appendChild(navMenu); // append nav menu to header element

navData = [ // array of nav menu data
    'Home',
    'Blog',
    'About',
    'Contact'
];

navData.forEach((item) => { // loop through navData array
    let navLink = document.createElement('a'); // create anchor tag for each item
    navLink.innerText = item; // set text of menu item using parameter 'item'
    navLink.style.fontFamily = 'Poppins, sans-serif'; // set font family for menu item
    navLink.style.margin = '0 1rem'; // set margin for menu item
    navLink.style.padding = '0 .5rem'; // set padding for menu item
    navLink.style.textDecoration = 'none'; // remove underline for menu item
    navLink.style.color = '#777'; // set menu item color
    navLink.setAttribute('href', '#'); // set href attribute to # - '#' causes empty link
    navMenu.appendChild(navLink); // append menu item to menu
    // add mouseover effect
    navLink.addEventListener('mouseover', (e) => {
        e.target.style.color = '#000';
        e.target.style.borderLeft = '1px solid #000';
        e.target.style.borderRight = '1px solid #000';
    })
    // mouseout effect
    navLink.addEventListener('mouseout', (e) => {
        e.target.style.color = '#777';
        e.target.style.border = 'none';
    })

})

// create and style register button and div
const registerBtn = document.createElement('button'); // create button element
registerBtn.innerText = 'Register'; // set button text
registerBtn.style.textTransform = 'uppercase'; // button text uppercase
registerBtn.style.fontWeight = '700'; // set button text font weight 
registerBtn.style.backgroundColor = 'rgba(0, 0, 255, 1)'; // set button color
registerBtn.style.color = '#fff'; // set button text color
registerBtn.style.padding = '0.5rem 2rem' // set button padding
registerBtn.style.border = 'none'; // remove button border
registerBtn.style.borderRadius = '5px'; // set button border radius
registerBtn.style.outline = 'none'; // remove button outline
header.appendChild(registerBtn); // append button to header
// mouseover effect
registerBtn.addEventListener('mouseover', (e) => {
    e.target.style.backgroundColor = 'rgba(0, 0, 255, .6)';
})
// mouseout effect
registerBtn.addEventListener('mouseout', (e) => {
    e.target.style.backgroundColor = 'rgba(0, 0, 255, 1)';
})

