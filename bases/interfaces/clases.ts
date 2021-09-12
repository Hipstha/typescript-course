(() => {

  interface Xmen {
    name: string,
    realName: string,
    mutantPower( id: number ): string;
  }

  class Mutant implements Xmen {
    public age: number;
    public name: string;
    public realName: string;

    constructor( age: number, name: string, realName: string ) {
      this.age = age;
      this.name = name;
      this.realName = realName;
    }

    mutantPower() {
      return this.name + ' ' + this.realName;
    }
  }
  
})