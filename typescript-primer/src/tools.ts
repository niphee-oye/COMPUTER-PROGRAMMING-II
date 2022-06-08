export class Person{
    lastName: string; 
    firstName: string;
    gender: string;
    height: number;
    hobbies: string[];
    birthday: Date;
    isAlive: string;

    constructor(firstName: string, lastName: string, gender: string, height: number, hobbies: string[], birthday:  Date, isAlive: string){ 
    this.firstName = firstName; 
    this.lastName = lastName; 
    this.gender = gender; 
    this.height = height; 
    this.hobbies = hobbies; 
    this.birthday = birthday; 
    this.isAlive = isAlive; 
    }
}
