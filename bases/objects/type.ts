(() => {

  type Hero = {
    name: string,
    age?: number,
    powers: string[],
    getName?: () => string;
  }

  let flash: Hero = {
    name: 'Bare Alle',
    age: 24,
    powers: ['Super velocidad', 'Viajar en el tiempo']
  }

  let superman: Hero = {
    name: 'Clark Kent',
    age: 40,
    powers: ['Super fuerza']
  }

  console.log(flash);

})()