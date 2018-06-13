var ns = [1, 2, 3, 4];
var ns2 = [3, 2, 3, 4, 3];
var xx;
var xx2;
var nmv = 55;
var Game;
(function (Game) {
    Game[Game["Start"] = 0] = "Start";
    Game[Game["Pause"] = 1] = "Pause";
    Game[Game["Stop"] = 2] = "Stop";
})(Game || (Game = {}));
function greeter(p) {
    // let {userName,age} = p
    xx = p;
    xx2 = ['aaa', 11];
    return "ok,my name is " + p.userName + ",\n    age is " + p.age + ns + "====>>\n    " + xx[0];
}
var user = { userName: 'Jim', psw: 'test' };
greeter(user);
console.log(xx, xx2, Game.Start, Game[1], xx2[0], nmv);
//# sourceMappingURL=gt.js.map