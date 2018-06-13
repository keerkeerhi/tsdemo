var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
var _a = [1, 2, 3, 4, 45,], a = _a[0], b = _a.slice(1);
console.log(a, b, 333);
var _b = { nm: 33, age: 22, t: 'aaa' }, nm = _b.nm, t = __rest(_b, ["nm"]);
console.log('====>', nm, t);
//# sourceMappingURL=demo2.js.map