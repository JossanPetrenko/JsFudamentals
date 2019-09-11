// brackets []
// curly braces {}
// parentheses ()
// comma ,
// dash -
// dot .

// constants();
function constants() {
  const cardID = 92;
  // errors
  //const a;
  //cardId = 100;
  console.log("cardID", cardID);
}

// letAndVar();
function letAndVar() {
  //console.log("letX", letX); // dar erro aqui
  //let letX = 43;

  console.log("varX", varX); // aqui undefined mesmo
  var varX = 44;

  if (true) {
    var foo = 9;
  }
  console.log("foo", foo);

  // let has block scoping and var doesnt
  if (true) {
    //let foo2 = 99;
  }
  //console.log('foo', foo2);
}

// restParameters(); // (Parametros restantes)
function restParameters() {
  function sendCars(day, ...allCarsId) {
    allCarsId.forEach(cabecada => console.log(cabecada));
  }

  // function sendCars(allCarsId){
  //     allCarsId.forEach( cabecada => console.log(cabecada));
  // }

  // function sendCars(...allCarsId , day){
  //     allCarsId.forEach( cabecada => console.log(cabecada));
  // }
  sendCars(100, 200, 555);
  sendCars(
    { id: 100, rola: "rola" },
    { id: 200, rola: "rola" },
    { id: 555, rola: "rola" }
  );
  sendCars([100, "rola"], [200, "rola"], [555, "rola"]);
}

// desctruringArrays()
function desctruringArrays() {
  let ids = [1, 2, 5];
  //let [id1, id2] = ids;
  //console.log("Desctruring Arrays", id1, id2);

  // let id1, remaningId;
  // [id1, ...remaningId] = ids;
  // console.log("Desctruring Arrays", id1, remaningId);

  let remaningId;
  [, ...remaningId] = ids; // para cada , remove um parametro
  console.log("Desctruring Arrays", remaningId);
}

//desctruringObjects();
function desctruringObjects() {
  let car = {
    id: 500,
    style: "convertible"
  };

  // let { id, style } = car;

  // let id, style;
  // //{ id, style } = car; // error {} curly braces é usado como escopo de codigo
  // ({ id, style } = car); // usando () parentheses pode se usar uma variavel ja declarada

  console.log("Desctruring Objects", id, style);
}

//spreadSyntax();
function spreadSyntax() {

  function startCars(car1, car2, car3, ...rest) {
    console.log(car1, car2, car3, ...rest);
  }

  let carIds = [100, 300, 500, 700];
  startCars(...carIds);

  let carCodes = 'abcd efg'; // an iterable string
  startCars(...carCodes);

  console.log("Spread Syntax", car1, car2, car3);
}

//typeOf();
function typeOf() {
  console.log(typeof (1), 'number');
  console.log(typeof (NaN), 'number');

  console.log(typeof (true), 'boolean');

  console.log(typeof ('string'), 'string');

  console.log(typeof (function () { }), 'function');

  console.log(typeof ({}), 'object');
  console.log(typeof (null), 'object');

  console.log(typeof (undefined), 'undefined');

  console.log("typeof()");
}

//commonTypeConversions();
function commonTypeConversions() {

  const foo = { id: 55 };

  // convert to string
  console.log(foo.toString());

  //So precisa garantir que o inicio é um numero 
  // convert string to integer
  console.log(Number.parseInt('55ABC'));
  console.log(Number.parseInt('55.99'));


  // convert string to number
  console.log(Number.parseFloat('55.99IOH'));
  //NaN
  console.log(Number.parseFloat('ABC55.99IOH'));

  console.log("Common Type Conversions");
}

//controllingLoops();
function controllingLoops() {
  // for (let index = 0; index < array.length; index++) {
  //   const element = array[index];
  // }

  // initialize index before loop 
  let i = 0;
  for (; i < 12; i++) {
    if (i === 8) break; // break exit a loop;
    console.log('inside for', i);
  }
  console.log(i);

  for (let index = 0; index < 4; index++) {
    if (index === 2) {
      continue; // skip an iteration
    };
    console.log('inside for2', index);
  }

  console.log("Controlling Loops");
}
