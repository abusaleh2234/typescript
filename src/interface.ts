type User = {
    name: string;
    age: number
}
type Role = {
    role: "user" | "admin"
}

type userWithRole = User & Role

const userX: userWithRole = {
    name: "Jarin",
    age: 21,
    role: "user"
}
const user1: User = {
    name: "Imaran",
    age: 42
}

// interface 
interface IUser {
    name: string;
    age: number
}
const user2: IUser = {
    name: "Robi",
    age: 42
}

interface IUserWithRole extends IUser {
    role : "user" | "admin"
}

const user3 : IUserWithRole = {
    name: "Kabir",
    age: 34,
    role: "admin"
}

type Friends = string[]
interface IFriends {
    [index : number] : string
}
const friend : Friends = ["Kabir", "Mamun","Fuad"]
const IFriends : IFriends = ["Kabir", "Mamun","Fuad"]

type Add = (num1: number, num2: number) => number
interface IAdd {
    (num1: number, num2:number) :number
}
const add:Add = (num1,num2) => num1 + num2
const iAdd:IAdd = (num1,num2) => num1 + num2
