export class Users {
  id: number;
  firstName: string;
  lastName: string;
  dob: string;
  occupation: string;
  deathInsured: number;
  age: number;


  constructor() {
    this.id = 0;
    this.firstName = "";
    this.lastName = "";
    this.dob = "";
    this.occupation = "";
    this.deathInsured = 0;
    this.age = 0;
  }

}
