type A = null
type B= undefined

type C = A extends number ? true : B extends undefined ? true : false

type RichPeopleVehicle = {
    car: string;
    bike: string;
    cng: string
}

type CheckVehicle<T> = T extends keyof RichPeopleVehicle ? true :false 

type hasVehicle = CheckVehicle<"car">