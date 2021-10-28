interface SWtudent {
    name:string;
    roll:number;

    fun(message:string):number;
}

let ss : SWtudent;
ss={
    name: "asa",
    roll: 123,
    fun(message:string){
        console.log("asaasaaaaaaaaaaaaa");
      return 25;
    }
}

console.log(ss);
console.log(ss.fun);