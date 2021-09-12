


// export const printObject = ( argument: any ) => {
//   console.log( argument );
// }

import { Villian } from "../interfaces";

// export function genericFunction<Generic> ( argument: Generic ):Generic {
//   return argument;
// }

export const genericFunctionArrow = <Generic>( argument: Generic) => argument;

const deadpool = {
  name: 'Deadpool',
  realName: 'Wade Winston Wilson',
  dangerLevel: 130
}

console.log( genericFunctionArrow<Villian>( deadpool ).realName );

