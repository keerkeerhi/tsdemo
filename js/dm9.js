var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Control = /** @class */ (function () {
    function Control() {
    }
    Control.prototype.reset = function () {
        return 'b';
    };
    return Control;
}());
// 必须实现 接口 和 control中的成员
var myCon = /** @class */ (function () {
    function myCon() {
    }
    myCon.prototype.select = function () {
        throw new Error('Method not implemented.');
    };
    myCon.prototype.reset = function () {
        throw new Error('Method not implemented.');
    };
    return myCon;
}());
// control 已有的成员变量 可以不实现
var myCon2 = /** @class */ (function (_super) {
    __extends(myCon2, _super);
    function myCon2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    myCon2.prototype.select = function () {
        throw new Error("Method not implemented.");
    };
    myCon2.prototype.reset = function () {
        return 'a';
    };
    return myCon2;
}(Control));
console.log(new myCon2().reset());
//# sourceMappingURL=dm9.js.map