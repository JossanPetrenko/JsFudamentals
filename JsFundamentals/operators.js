//equalityOperators();
function equalityOperators() {

    const id = 1;

    console.log(id == 1); // true
    console.log(id == "1"); // true
    console.log(id === "1"); // false

    console.log(id == true); // true
    console.log(id === true); // false

    console.log(id != 1); // false
    console.log(id != "1"); // false
    console.log(id !== "1"); // true

    console.log(id != true); // false
    console.log(id !== true); // true

    console.log("Equality Operators");
}

//unaryOperators();
function unaryOperators() {
    let year = 1967;
    console.log(++year); //1968
    console.log(year++); //1968 add depois de usar a variavel
    console.log(year); //1969

    console.log(--year); //1968
    console.log(year--); //1968 sub depois de usar a variavel
    console.log(year); //1967

    let anotherYear = "-1900";
    console.log(typeof (anotherYear)); // string
    console.log(anotherYear); // string
    console.log(typeof (+anotherYear)); // number
    console.log(+anotherYear); // number
    console.log(typeof (-anotherYear)); // number and change sign
    console.log(-anotherYear); // number

    console.log("Unary Operators");
}

//logicalOperators();
function logicalOperators() {
    if (5 === 5 && 6 === 7) {
        console.log(true);
    }
    else {
        console.log(false);
    }

    let userSettings = null;
    const defaultSettings = { name: 'Default' };

    console.log(userSettings || defaultSettings);

    console.log(userSettings && defaultSettings);

    userSettings = { name: 'Stan' };
    console.log(userSettings && defaultSettings);

    userSettings = null;
    console.log(!userSettings);
    if (!userSettings) {
        userSettings = { name: 'Stan' };
        console.log(!userSettings);
    }
    console.log("Logical Operators");
}

//relationalOperators();
function relationalOperators() {
    //  > < <= <=

    console.log("Zoo" < "alphabet"); // true
    console.log("zoo" < "alphabet"); // false
    console.log("Zoo".toUpperCase() < "alphabet".toUpperCase); // true

    console.log("Relational Operators");
}

//conditionalOperators();
function conditionalOperators() {

    console.log((5 > 4) ? true : false);
    console.log(5 > 44 ? true : false);

    console.log("Conditional Operators");
}

//assigmentOperators();
function assigmentOperators() {

    // += (plus) 
    // -= (substract) 
    // /= (division) 
    // *= (multiplication) 
    // %= (remainder / modulus)
    // <<= (shift left) shift one bit to the left
    // >>= (shift right) shift one bit to the right
    // <<<= (shift left) shift one bit to the left and equals sign
    // >>>= (shift left) shift one bit to the right and equals sign


    let year = 2000;
    year >>= 1;
    console.log(year);

    console.log("Logical Operators");
}

//operatorPrecedence();
function operatorPrecedence() {

    //https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/Operator_Precedence

    console.log("Operator Precedence");
}



