interface Ps {
    a:string;
    b:number;

    setTime(a:Date);
}

class Student implements Ps{
    setTime(a: Date) {
        console.log('----->>',a)
    }
    a: string;
    b: number;

}

new Student().setTime(new Date())