class Parent {
        name: string;
    age: number;
    address: string;

    constructor (name: string, age: number, address: string){
        this.name = name,
        this.age = age,
        this.address = address
    }

    getSleep(hour:number) {
        console.log(`${this.name} ${hour} gonta ghumai`);
        
    }
}

class Student extends Parent {
    rollNo: number;
    constructor (name: string, age: number, address: string, rollNo: number){
        super(name,age,address)
        this.rollNo = rollNo
    }
}

const student1 = new Student("Mr. Ghumantu",21,"Dhaka 1200",2 )

student1.getSleep(10)

class Teacher extends Parent {
    designation: string

    constructor (name: string, age: number, address: string, designation:string){
        super(name,age,address)
        this.designation = designation
    }

    getSleep(hour:number) {
        console.log(`${this.name} ${hour} gonta ghumai`);
        
    }
    takeClass(hourClass: number){
        console.log(hourClass,"hour class nai");
        
    }
}
const techer1 = new Teacher("Kalam", 45,"chila", "English Techer")

techer1