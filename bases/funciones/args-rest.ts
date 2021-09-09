(() => {

  const fullName = (fristName: string, ...restArgs: string[] ): string => {
    return `${ fristName } ${ restArgs.join(' ')}`;
  }

  const superman = fullName('Clarck', 'Joseph', 'Kent');

  console.log({superman});
})()