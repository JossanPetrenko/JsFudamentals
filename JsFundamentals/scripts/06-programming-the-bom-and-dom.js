// if work with models, make sure to declare our variables
//import { Car } from './models/car';

// BOM (Browser Object Model)
// DOM (Document Object Model)

//theWindowObject();
function theWindowObject() {

    //Window is the global object in JavaScript
    //We can access window from anywhere

    //Properties
    console.log(this.document); // DOM
    console.log(this.location); // details on the browser location
    console.log(this.console); // console in on window
    console.log(this.innerHeight); // dimension of the screen
    console.log(this.innerWidth); // dimension of the screen
    console.log(this.pageXoffset); // posiiton of the scrollbars
    console.log(this.pageYoffset);

    //Methods
    // this.alert(); // alert display
    // this.back(); // bact to browse backward in browser history
    // this.confirm(); // yes or no dialog

    //Events
    //(not common)

    //direct in the window object
    year = 2000;
    console.log(window.year);

    console.log("The Window Objetc");
}

//timers();
function timers() {

    const timeoutId = setTimeout(() => {
        console.log('one second passed');
    }, 1000); // number of milliseconds

    console.log(timeoutId);
    // if need to cancel...
    // clearTimeout(timeoutId);

    // setInterval() - fires a function repeatedly
    let index = 0;
    const timeIntervalId = setInterval(() => {
        index += 1;
        console.log('one second passed', index);
    }, 1000); // number of milliseconds

    console.log(timeIntervalId);
    // if need to cancel...
    // clearInterval(timeIntervalId);

    console.log("Timers");
}

//theLocationObject();
function theLocationObject() {
    //Location
    //Properties 

    //from global object
    console.log(location.href); // is the URL
    console.log(location.hostname); // hostname
    console.log(location.port); // port
    console.log(location.pathname); // pathname
    console.log(location.search); // query string if you have

    //from the DOM
    console.log(document.location.href); // is the URL

    //Methods
    // location.assign(); // assign a new location to the browser
    // location.reload(); // reload the current URL

    //Events
    //(not common)

    console.log("The Location Object");
}

//theDocumenteObjetct();
function theDocumenteObjetct() {

    //Properties
    console.log(document.body); // entire body of the HTML page;
    console.log(document.forms); // list of all the forms on the web page
    console.log(document.link); // list of links on the web page

    //Methods
    // document.createElement(); //create a new HTML element 
    // document.createEvent(); //create a new HTML event to fire on the DOM
    // document.getElementById(); // singles out a specific element to retrieve from the DOM
    // document.getElementsByClassName();  // will return all of the DOM elements for a passed-in class name

    //Events
    //document.onload; // which fires afeter the document loads
    //document.onclick // for a mouse click or a fig tap 
    //document.onkeypress; // when a key is pressed

    console.log("the Document Objetc");
}

//selectDOMElements();
function selectDOMElements() {

    //use the index.html to try
    console.log(document.getElementById('first'));

    console.log(document.getElementsByClassName('p1'));
    console.log(document.getElementsByClassName('p1')[1]);

    console.log(document.getElementsByTagName('p'));
    console.log(document.getElementsByTagName('p')[2]);


    console.log("Select DOM Elements");
}

//modifyingDOMElements();
function modifyingDOMElements() {

    //use the index.html to try
    let e = document.getElementById('first');
    e.textContent = 'New Text Here';

    e.setAttribute('name', 'nameValue');
    e.setAttribute('foo', 'fooValue');

    e.classList.add('myClassName');
    e.style.color = 'blue';

    console.log(e);


    console.log("Modifying DOM Elements");
}