
//theEvalFunction();
function theEvalFunction() {

    // The eval() function evaluates JavaScript code represented as a string.

    let inputString = "alert('Heello');";
    eval(inputString);

    console.log("The Eval() Function");
}

//preventingManInTheMiddleAttacks();
function preventingManInTheMiddleAttacks() {

    // Use SSl
    // Use HTTP Header: Strict-Transport-Seccurity
    // Use cookie atributes: Secure and HttpOnly

    console.log("Prevent Man-in-the-middle Attacks");
}

//crossSiteScripting();
function crossSiteScripting() {
    // XSS - Cross-site Scripting

    // Addressing Cross-site Scripting Attacks

    //This are HTTP headers, not javascript features

    // CSP : Content Security Policy
    // Use HTTP Header : Content Security Policy


    // CORS: Cross Origin Resource Sharing
    // Use HTTP Header: Acess-Control-Allow-Origin


    console.log("Cross-site Scripting (XSS)");
}

//buildingYourApplicationForProduction();
function buildingYourApplicationForProduction() {

    console.log('Hello Word in Production!');
    // yarn build
    // build file
    // look webpack documentation

    console.log("Building Your Application for Production");
}