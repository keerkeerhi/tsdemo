interface Machine {
    new (f:number,s:string);
}

// 接口只对类的实例部分进行检查，这里接口限制了 constructor (对象的静态部分)
// class mm implements Machine{
//     constructor(a:number,b:string){
//
//     }
// }