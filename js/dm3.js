var Student = /** @class */ (function () {
    function Student() {
    }
    Student.prototype.setTime = function (a) {
        console.log('----->>', a);
    };
    return Student;
}());
new Student().setTime(new Date());
//# sourceMappingURL=dm3.js.map