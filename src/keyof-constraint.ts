type RichPeopleVehicle = {
    car: string;
    bike: string;
    cng: string
}

type MyVehicle1 = "car" | "bike" | "cng"
type MyVehicle2 = keyof RichPeopleVehicle;
const myVehicle1: MyVehicle2 = "car"

type User = {
    id: number;
    name: string;
    address: {
        city: string
    }
}
const user: User = {
    id: 3243,
    name: "Moni",
    address: {
        city: "ctg"
    }
}

const getPropertyFromObj = <X>(obj : X, key: keyof X) => {
    return obj[key]
}

const result = getPropertyFromObj(user, "name")
console.log(result);
const product = {
    name: "Phone"
}
const result2 = getPropertyFromObj(product, "name")