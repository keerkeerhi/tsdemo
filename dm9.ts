class Control {
    username:string;
    reset():string{
        return 'b';
    }
}

interface lCon extends Control{
    select();
}

// 必须实现 接口 和 control中的成员
class myCon implements lCon {
    select() {
        throw new Error('Method not implemented.');
    }

    username: string;

    reset(): string {
        throw new Error('Method not implemented.');
    }
}

// control 已有的成员变量 可以不实现
class myCon2 extends Control implements lCon {
    select() {
        throw new Error("Method not implemented.");
    }
    reset() {
        return 'a'
    }
}

console.log(new myCon2().reset())