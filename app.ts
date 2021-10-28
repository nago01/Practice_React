
let arr : string[];
arr = ["asa","saas"];
console.log(arr[0]);

let arr2: string[] = ["adding values","index 4"];
let arr3 = [arr2[1],...arr];
console.log(arr3[1]);
console.log('Your code goes here...');
console.log('Your code goes here111...');
console.log('Your code goes here111.saassaasa..');

const person: {
    name : string;
    age: number;
    hobbies: string[];
}= {
    name: "abc",
    age: 25,
    hobbies: ['hello','nnnn']
};


for(const valus in person.hobbies){
    console.log(valus.toUpperCase());
}
console.log(person);