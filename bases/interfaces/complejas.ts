(() => {

  interface Client {
    name: string;
    age?: number;
    address?: Address;
    getFullAddress( id: string ):string;
  }

  interface Address {
    id: number;
    zip: string;
    city: string
  }

  const client = {
    name: 'Fernando',
    age: 25,
    address: {
      id: 123,
      zip: 'KSFDW',
      city: 'Ottawa'
    },
    getFullAddress( id: string ) {
      return this.address.city
    }
  }

})();