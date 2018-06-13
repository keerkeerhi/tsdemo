class Test {
    constructor(){
        console.log('===>create Test')
    }
}

function tt(b){
    console.log('what is b==>',b)
    new b()
}

tt(Test)