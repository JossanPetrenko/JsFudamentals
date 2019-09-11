//constructorFunctions();
function constructorFunctions() {

    //  capital letter (C) convention on constructor
    function Car(id) {
        //with new this and the constructor function will be a new empty object
        this.cardId = id;
        this.start = function () {
            console.log('start: ' + this.cardId);
        };
    };
    // with the keyword new the fucntions gets a brand new context
    let car = new Car(123);
    let car2 = Car(456);

    console.log(car);
    console.log(car2);

    car.start();

    function Xpto() {
        console.log(this);
    }

    Xpto(); // Não é um novo contexto
    let x = new Xpto();

    console.log("Constructor Functions");
}

//prototypes();
function prototypes() {
    function Car(id) {
        this.cardId = id;
    };

    // Dessa maneira posso ter varias instancias de Car mas havera apenas uma copia da função start
    // é necessario usar sempre o contexto da instancia (this)
    Car.prototype.start = function () {
        console.log('start: ' + this.cardId);
    };

    let car = new Car(123);

    car.start();

    console.log("Prototypes");
}

//expandingObjectUsingPrototypes();
function expandingObjectUsingPrototypes() {

    String.prototype.hello = () => {
        return this.toString() + ' Hello';
    };

    console.log('foo'.hello());
    console.log('foo');

    console.log("Expanding Object Using Prototypes");
}

//jSON();
function jSON() {

    let car = {
        id: 123,
        style: 'convertible'
    };

    console.log(JSON.stringify(car));

    const carIds =
        [{ carId: 123 }, { carId: 456 }, { carId: 789 }];

    console.log(JSON.stringify(carIds));

    //Parsing JSON

    const response =
        `
[
{ "carId": 123 },
{ "carId": 456 },
{ "carId": 789 }
]
`;
    const dto = JSON.parse(response);
    console.log(dto);

    console.log("JSON - Java Script Object Notation");
}

//arrayIteration();
function arrayIteration() {

    const carIds =
        [{ carId: 123, style: 'sedan' }, { carId: 456, style: 'convertible' }, { carId: 789, style: 'cross' }];

    carIds.forEach(xpto => console.log(xpto));

    carIds.forEach((xpto, index) => console.log(xpto, index));

    //Array Filtering

    const convertibles = carIds.filter(e => e.style === 'convertible');
    console.log(convertibles);

    //Array Testing
    const result = carIds.every(x => x.carId > 0);
    console.log(result);

    const result2 = carIds.some(x => x.carId > 999);
    console.log(result2)

    //Locate the First Match
    const car = carIds.find(c => c.carId > 400);
    console.log(car);


    console.log("Array Iteration");
}