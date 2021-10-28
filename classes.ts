class Student {
    name: string;
    constructor(n:string){
        this.name=n;
    }
}

const s=new Student("Ayush");
console.log(s);

const obj: {
    name: string,
    roll:number
}= {
    name: "strg",
    roll: 123
}
console.log(obj);