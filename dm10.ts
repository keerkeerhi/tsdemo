class A {
    username:string;
    age:number;
    constructor(){

    }
}
class B {
    username:string;
    constructor(){

    }
}

let aa: A = new A()
aa.username = 'aaa'
let bb: B = new B()

function test_eqobj(a:B){
    console.log('--->',a)
}

// test_eqobj(aa)

// function test_of(){
//     return of(1,2,3)
// }
//
// console.log(test_of())