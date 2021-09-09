(() => {

  const hero: string = 'Flash';

  function returnName():string {
    return hero;
  }

  const activateBatisignal = ():string => {
    return 'Batiseñal activada';
  }

  console.log(typeof returnName);

  const heroName = returnName();

})();