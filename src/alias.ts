type User ={
    name: string;
    id: number;
    gender: "male" | "female"
    contact: string
    address : {
        division: string;
        city: string
    }
}

const user1: User = {
    name: "Nazmul",
    id: 1212433,
    gender: "male",
    contact: "0173445343",
    address : {
        division: "Dhaka",
        city: "Dhaka"
    }

} 

type AddFunc = (num1: number, num2: number) => number

const add: AddFunc = (num1, num2) => num1 + num2