interface Counter{
    (start:Date):string;
    interval: number
    reset();
}

function CC(): Counter{
    let a = <Counter>{};
    let count = <Counter>function(d:Date){console.log('count')}
    count.interval = 0
    count.reset = function(){console.log('count.reset')}
    return count;
}
let c = CC()
c(new Date());
c.reset()
console.log(c)
// class cc implements Counter {
//     interval: number;
//     reset() {
//         throw new Error("Method not implemented.");
//     }
// }