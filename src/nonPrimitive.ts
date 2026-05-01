const users: string[] = ["Alex", "Jon","Kabir","Smit"]
// users.push(34)

const bazar: (string|number)[] = ["patato", 2, "eggs", 12, "banana",12]

// bazar.push(true)

const pare: [string, string] = ["Poli", "Roni"]
// pare.push(232)

const user:[string,number] = ["Habib", 22]
user[1]= 23

const destination:[string,string,number] = ["Dhaka", "Amtali", 8]
// destination[0] = 2




// Object

// const User: {
//     firstName: string;
//     middleName?: string;
//     lastName: string;
//     isMarried: boolean;
//     profession: "Developer"
// } = {
//     firstName: "Abdullah",
//     lastName: "Saleh",
//     isMarried: false,
//     profession: "Developer" //Developer works like type
// }
const User: {
    firstName: string;
    middleName?: string;
    lastName: string;
    isMarried: boolean;
    readonly profession: string
} = {
    firstName: "Abdullah",
    lastName: "Saleh",
    isMarried: false,
     profession: "Developer" 
}
// User.profession = "figth"
console.log(User);
