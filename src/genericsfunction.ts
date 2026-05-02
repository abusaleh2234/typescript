// const createArrayWithString = (value : string) => [value]
// const createArrayWithNumber = (value : number) => [value]
// const createArrayWithBoolean = (value : boolean) => [value]

const createArrayWithGeneric = <T>(value: T) => [value] 

const arrString = createArrayWithGeneric("string")
const arrNumber= createArrayWithGeneric(3434)

const arrObj =createArrayWithGeneric({
    name: "X",
    age: 34
})

const createArrayTupleWithGeneric =<X,Y> (param1: X, param2: Y) => [param1,param2]

const tuple1 = createArrayTupleWithGeneric("Rafi", 45)

const tuple2 = createArrayTupleWithGeneric(232, {name:"Zabir",isChild: false})

// console.log(tuple2);

const addStudentToCourse =<T> (studentInfo : T) => {
    return {
        courseName: "Next level",
        ...studentInfo
    }
}

const std1 = {
    name: "Mr. Baki",
    roll: 2,
    hasPen: true
}
const std2= {
    name: "Ms. Mahia",
    roll: 1,
    hasCar: true,
    isMarried: true
}
const student = addStudentToCourse(std1)
console.log(student);
const student2 = addStudentToCourse(std2)
console.log(student2);


