//classBasics();
function classBasics() {

    //Class, by convention the name is uppercase
    class Car { };

    const car = new Car();
    console.log(car);

    console.log("Class Basics");
}

//constructorsAndProperties();
function constructorsAndProperties() {
    class Car {
        constructor(id) {
            this.id = id;
        }
    };

    const car = new Car(123);
    car.id = 456;
    console.log(car.id);

    console.log("Constructor and Properties");
}

//methods();
function methods() {
    class Car {
        constructor(id) {
            this.id = id;
        }
        identify(suffix) {
            return `Car Id: ${this.id} ${suffix}`;
        }
    };

    const car = new Car(123);
    car.id = 456;
    console.log(car.identify('!'));

    console.log("Methods");
}

//inheritance();
function inheritance() {

    class Vehicle {
        constructor(id) {
            this.type = 'car';
        }
        start() {
            return `Starting: ${this.type} `;
        }
    };

    class Car extends Vehicle {

        // constructor() { 
        // }                    //Error

        //Para ter um constructor nessa classe, é necessario acesso ao construtor da superClass/baseClass
        constructor() {
            super();
        }
        //override
        start() {
            return 'in Car start... ' + super.start();
        }
    }

    const car = new Car();

    console.log(car.start());

    console.log("Inheritance");
}

import { Car } from './models/car.js';
//creatingAModule();
function creatingAndImportingAModule() {

    const car = new Car(123);

    console.log(car.id);

    console.log("Creating and Importing a Module");
}