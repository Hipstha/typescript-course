(() => {

  let flash: { name: string, age?: number, powers: string[], getName?: () => string } = {
    name: 'Bare Alle',
    age: 24,
    powers: ['Super velocidad', 'Viajar en el tiempo']
  }

  let superman: { name: string, age?: number, powers: string[], getName?: () => string } = {
    name: 'Clark Kent',
    age: 40,
    powers: ['Super fuerza']
  }

  console.log(flash);

})()