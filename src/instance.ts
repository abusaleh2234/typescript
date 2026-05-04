class Person {
    name: string;
    constructor(name: string){
        this.name = name
    }

    getSleep(numOfHours:number){
        console.log(`${this.name} doinik ${numOfHours} ghumai`);
        
    }
}

class Student extends Person {
    constructor(name:string){
        super(name)
    }
    doStudy(numOfHours:number) {
        console.log(`${this.name} doinik ${numOfHours} study kore`);
    }
}
class Teacher extends Person {
    constructor(name:string){
        super(name)
    }
    takeClass(numOfHours:number) {
        console.log(`${this.name} doinik ${numOfHours} class nai`);
    }
}

const isStudent = (user: Person) => {
    return user instanceof Student;
}
const getUserInfo = (user: Person) => {
    if(isStudent(user)){
        user.doStudy(8)
    }else if(user instanceof Teacher){
        user.takeClass(6)
    }else{
        user.getSleep(12)
    }
}
const student1 = new Student("Mr. Student")
const teacher1 = new Teacher("Mr. Teacher")
const man1 = new Person("Mr. Man")

getUserInfo(man1)