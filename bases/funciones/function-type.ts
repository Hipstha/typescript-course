(() => {

  const addNumbers = (a: number, b: number) => a + b;
  const greet = (name: string) => `Hola ${ name }`;
  const saveTheWorld = () => `El mundo está salvado!`;

  let myFunction: () => string;

  // myFunction = 10;

  // myFunction = addNumbers;
  // console.log( myFunction(1, 5) );

  // myFunction = greet;
  // console.log( myFunction('Alejandro') );

  myFunction = saveTheWorld;
  console.log( myFunction() );

})()