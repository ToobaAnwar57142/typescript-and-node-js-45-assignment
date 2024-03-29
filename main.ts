//They think of something you could store in a TypeScript Object. 
//Write a program that creates Objects containing these items.

interface person{
    age: number,
    name: string,
    nationality: string,
    student : Boolean
}

let person :person = {

    age : 14,
    name :'Tooba',
    nationality : 'Pakistan',
    student : true,
}
//print person
console.log(person);


//Datatype of car object
interface car{
    maker : string,
    color : string,
    automatic : boolean,
}
//car object
let car = {
    maker : 'toyota',
    color : 'Black',
    automatic : true
}

//print car
console.log(car);
