function CC() {
    var a = {};
    var count = function (d) { console.log('count'); };
    count.interval = 0;
    count.reset = function () { console.log('count.reset'); };
    return count;
}
var c = CC();
c(new Date());
c.reset();
console.log(c);
// class cc implements Counter {
//     interval: number;
//     reset() {
//         throw new Error("Method not implemented.");
//     }
// }
//# sourceMappingURL=dm8.js.map