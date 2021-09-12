(()=> {

  class Avenger {
    constructor(
      public name: string,
      public realName: string
    ) {
      console.log('Constructor Avenger Llamado');
    }

    protected getFullName() {
      return `${ this.name } ${ this.realName}`;
    }

  }

  class Xmen extends Avenger {

    constructor(
      name: string,
      realName: string,
      public isMutant: boolean
    ) {
      super( name, realName );
      console.log('Constructor de Xman llamado');
    }

    public getFullNameDesdeXmen() {
      console.log( super.getFullName() )
    }

    get fullName() {
      return `${ this.name } - ${ this.realName }`;
    }

    set fullName( name: string ) {
      this.name = name;
    }

  }

  // const wolverine = new Xmen('Wolverine', 'Logan', true);

  // wolverine.fullName = 'Alejandro';
  // console.log(wolverine.fullName);
  // wolverine.getFullNameDesdeXmen();

})();