const body = document.querySelector('body'); // get body from html document
body.style.backgroundColor = '#ddd'; // body background color light grey

// create and style wrapper div
const mainWrap = document.createElement('div'); //create div
body.appendChild(mainWrap); // append to body
mainWrap.classList.add('main-wrap'); // add class
mainWrap.style.backgroundColor = '#fff'; // background color white
mainWrap.style.width = '90vw'; // width 90% of viewport width
mainWrap.style.margin = '0 auto'; // center on page
mainWrap.style.padding = '2rem'; // add padding

// create and style header
const header = document.createElement('header');
mainWrap.appendChild(header);
header.style.display = 'flex';