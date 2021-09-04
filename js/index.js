const body = document.querySelector('body'); // get body from html document
body.style.backgroundColor = '#ddd'; // body background color light grey

// create and style wrapper div
const mainWrap = document.createElement('div'); //create div
body.appendChild(mainWrap); // append to body
// mainWrap.classList.add('main-wrap'); // add class
mainWrap.style.backgroundColor = '#fff'; // background color white
mainWrap.style.width = '90vw'; // width 90% of viewport width
mainWrap.style.margin = '0 auto'; // center on page
mainWrap.style.padding = '2rem'; // add padding

// create and style header
const header = document.createElement('header');
mainWrap.appendChild(header);
header.style.display = 'flex';

// create and style logo and div
const logoContainer = document.createElement('div');
header.appendChild(logoContainer);
// logo h1 element
const logo = document.createElement('h1');
header.appendChild(logo);
logo.style.fontFamily = '"Poppins", sans-serif';
const logoFirstWord = document.createElement('span');
logoFirstWord.innerText = 'Flex';
const logoSecondWord = document.createElement('span');
logoSecondWord.innerText = 'Box';
logo.appendChild(logoFirstWord);
logo.appendChild(logoSecondWord);
logoFirstWord.style.fontWeight = '700';
logoSecondWord.style.fontWeight = '200';


// create and style nav menu
const navMenu = document.createElement('nav');
header.appendChild(navMenu);
const navLink = document.createElement('a');




// create and style register button and div