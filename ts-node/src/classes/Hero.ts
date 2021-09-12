import { powers } from '../data/powers';

class Hero {
  constructor(
    public name: string,
    public powerId: number,
    public age: number
  ) {
    name = this.name;
    powerId = this.powerId;
    age = this.age;
  }

  get power(): string { // return string
    // return powers.find( power => power.id === this.powerId ).desc || 'Not found';
    return powers.find( power => power.id === this.powerId )?.desc || 'Not found'
  }

}

export default Hero;