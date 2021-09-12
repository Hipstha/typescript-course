(() => {

  class Avenger {

    static avgAge: number = 35;
    static getAvgAge() {
      return this.avgAge;
    }
    
    constructor( 
      private name: string, 
      public team: string, 
      public realName?: string
      ) { }
      
      public bio() {
        return `${ this.name } (${ this.team })`;
      }

  }

  const ironman: Avenger = new Avenger('Iron Man', 'Red', 'Tony');

  // console.log(ironman.bio())

})();