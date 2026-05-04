type AlphaNumeric = number | string

const add = (num1: AlphaNumeric, num2: AlphaNumeric) => {
    if(typeof num1 === "number" && typeof num2 === "number"){
        return num1 + num2
    }else{
        return num1.toString() + num2.toString()
     }
}

console.log(add(12,20));
console.log(add(12,"20"));


type NormalUser = {
    name: string
}

type AdminUser = {
    name: string;
    role: "Admin"
}

const getUserInfo = (user: NormalUser| AdminUser) => {
    if ("role" in user) {
        console.log("name: ", user.name , " role: ", user.role);
    }else{
        console.log(user.name);
        
    }
}
console.log(getUserInfo({name:"Sattar"}));
