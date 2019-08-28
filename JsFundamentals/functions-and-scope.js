//functionScope();
function functionScope() {
    // function startCar(carID) {
    //     let message = `Starting..${carID}`;
    // }
    // startCar(123);
    // console.log(message); //Reference error  (out of scope)


    // function startCar(carID) {
    //     let message = `Starting..${carID}`;
    //     let startFn = function turnKey() {
    //         console.log(message); //Parent scope
    //     };

    //     startFn();
    // }
    // startCar(123);


    function startCar(carID) {
        let message = `Starting..${carID}`;
        let startFn = function turnKey() {
            let message = 'Override';
            console.log(message);
        };

        startFn();
        console.log(message);

    }
    startCar(123);
    console.log("Function Scope");
}

//blockScope();
function blockScope() {
    // for, if, while or any set of curly braces other than a function

    // if (5 === 5) {
    //     var message = 'Equal';
    // }
    // console.log(message);

    // if (5 === 5) {
    //     let message = 'Equal';
    // }
    // console.log(message); // Error

    // var message = 'Outside';
    // if (5 === 5) {
    //     var message = 'Equal';
    //     console.log(message); // Equal
    // }
    // console.log(message); //Equal

    let message = 'Outside';
    if (5 === 5) {
        let message = 'Equal';
        console.log(message); // Equal
    }
    console.log(message); // Outside

    console.log("Block Scope");
}

//iIFEs();
function iIFEs() {
    //IIFE pattern 
    //Immediately Invoked Function Expression

    //running the function immediately after it`s declared

    // function() {
    //     console.log('in function');
    // } // Error

    (function () {
        console.log('in function');
    })(); //IIFE 

    let app = (function () {
        let id = 123;
        console.log(`in function ${id}`);
        return {
            idApp: id,
        };
    })();
    console.log(app);

    console.log("IIFE's");
}

//closures();
function closures() {

    let app = (function () {
        let id = 123;
        let getId = function () {
            return id;
        };
        //here is the closure, return a prop and its value is a function
        return {
            getId: getId
        };
        // variables declared in the IIFE will persist along with any functions
    })();

    console.log(app.getId());

    console.log("Closures");
}

//thisKeyword();
function thisKeyword() {

    // this; Its a special object called a context for the function
    let fn = function () {
        console.log(this === window);
    };
    fn();

    let o = {
        id: 123,
        getId: function () {
            console.log(this);
            return this.id;
        }
    };

    console.log(o.getId());

    console.log("this Keyword");
}

//callAndAplly();
function callAndAplly() {

    let o = {
        id: 123,
        getId: function (prefix) {
            console.log(this);
            return prefix + this.id;
        }
    };

    console.log(o.getId());

    let newObjetc = { id: 456 };

    console.log(o.getId.call(newObjetc));
    // call and apply are both used to change the value of this
    // but
    // apply accepts an array of arguments
    console.log('ultimo: ', o.getId.apply(newObjetc, ['ID: ']));


    console.log("Call and Aplly");
}

//bind();
function bind() {
    //make a copy of the function and assings a new context(new this)
    let o = {
        id: 123,
        getId: function () {
            console.log('inside', this);
            return this.id;
        }
    };

    let newObj = { id: 456 };
    let newFn = o.getId(newObj); // is not a function
    let newFn2 = o.getId.bind(newObj);

    // console.log(newFn());// is not a function
    console.log(newFn);// is not a function
    console.log(o.getId());
    console.log(newFn2());

    console.log("Bind");
}

//arrowFunctions();
function arrowFunctions() {

    // () parameters
    // => function (arrow function)
    // 123 return value
    let getId = () => 123;
    //let getId = _ => 123; // mesma coisa que paratenses vazio
    console.log(getId());

    let getIdWithPrefix = prefix => prefix + 123;
    console.log(getIdWithPrefix('ID: '));

    let getIdWithPrefixAndSuffix = (prefix, suffix) => prefix + 123 + suffix;
    console.log(getIdWithPrefixAndSuffix('ID: ', '!'));

    let getIdWithPrefixAndSuffix2 = (prefix, suffix) => {
        //lots of code
        return prefix + 123 + suffix;
    };
    console.log(getIdWithPrefixAndSuffix2('ID: ', '...'));

    //Arrow functions do not have their own "this"value.
    //"this" refers to the enclosing comtext

    console.log("Arrow Functions");
}

//defaultParameters();
function defaultParameters() {

    let trackCar = function (carId, city = 'NY') {
        console.log(`Tracking ${carId} in ${city}`);
    };

    trackCar(123);
    trackCar(123, 'Chicago');

    console.log("Default Parameters");
}


