interface Student {
    id: number;
    name: string;
}

const addStudentToCourse =<T extends Student> (studentInfo : T) => {
    return {
        courseName: "Next level",
        ...studentInfo
    }
}

const std1 = {
    id: 12122,
    name: "Mr. Baki",
    roll: 2,
    hasPen: true
}
const std2= {
    id: 988,
    name: "Ms. Mahia",
    roll: 1,
    hasCar: true,
    isMarried: true
}

const student = addStudentToCourse(std1)
console.log(student);
const student2 = addStudentToCourse(std2)
console.log(student2);