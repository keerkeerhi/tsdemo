interface Animal{
    face: string;
}

interface Dog extends Animal{
    name: string;
    age: number;
}

class BenBen implements Dog {
    name: string;
    age: number;
    face: string;
}