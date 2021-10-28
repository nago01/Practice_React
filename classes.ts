class Student {
    name: string;
    house: string[] = [];
    constructor(n:string){
        this.name=n;
    }
    addhouse(s:string){
      this.house.push(s);
    }

    printhouse(){
        console.log(this.house);
    }
}

const s=new Student("Ayush");
s.addhouse("green");
console.log(s);
s.addhouse("yellow");
s.printhouse;

const obj: {
    name: string,
    roll:number
}= {
    name: "strg",
    roll: 123
}
// console.log(obj);