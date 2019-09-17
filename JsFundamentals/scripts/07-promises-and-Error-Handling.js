//errorsInJavaScript();
function errorsInJavaScript() {

    let car = newCar;

    console.log('continuing...');

    console.log("Errors In JavaScript");
}

//errorHandlingUsingTryAndCatch();
function errorHandlingUsingTryAndCatch() {

    try {
        let car = newCar;
    } catch (error) {
        console.log('error: ', error);

    }
    console.log('continuing...');


    console.log("Error Handling Using Trya and Catch");
}

//_finally();
function _finally() {
    try {
        let car = newCar;
    } catch (error) {
        console.log('error: ', error);

    }
    finally {
        // let car = newCar;
        console.log('this always executes, if it runs well...');
    }

    console.log("Finally");
}

//developerDefinedErrors();
function developerDefinedErrors() {

    try {
        //lots of code
        throw new Error('My custom error!');
    } catch (error) {
        console.log('error: ', error);

    }
    finally {
        console.log('this always executes!');
    }

    console.log("Developer Defined Errors");
}

//creatingAPromise();
function creatingAPromise() {

    let promise = new Promise(
        function (resolve, reject) {
            setTimeout(resolve, 100, ['someValue', 2, 'abc']);
        }
    );

    let promise2 = new Promise(
        function (resolve, reject) {
            setTimeout(reject, 100, 'someValue'); //Uncaught error
        }
    );
    console.log(promise);
    console.log(promise2);

    console.log("Creating a Promise");
}

//settingAPromise();
function settingAPromise() {
    let promise = new Promise(
        function (resolve, reject) {
            setTimeout(resolve, 100, ['someValue', 2, 'abc']);
        }
    );

    promise.then(
        value => console.log('fulfilled: ' + value),
        error => console.log('reject: ' + error)
    );



    let promise2 = new Promise(
        function (resolve, reject) {
            setTimeout(reject, 100, 'someValue'); //Uncaught error
        }
    );

    promise2.then(
        value => console.log('fulfilled2: ' + value),
        error => console.log('reject2: ' + error)
    );

    console.log("Setting a Promise");
}
