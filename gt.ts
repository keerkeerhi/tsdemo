interface Person {
    userName: string;
    age: number;
}

let ns: number[] = [1,2,3,4]
let ns2: Array<number> = [3,2,3,4,3]
let xx: [string,number];
let xx2: [string,number]

const nmv = 55

enum Game {Start,Pause,Stop}
function greeter(p:any){
    // let {userName,age} = p
    xx = p;
    xx2 = ['aaa',11]
    return `ok,my name is ${p.userName},
    age is ${p.age}` + ns +`====>>
    ` + xx[0];
}

let user = {userName: 'Jim',psw: 'test'}
greeter(user)
console.log(xx,xx2,Game.Start,Game[1],xx2[0],nmv)