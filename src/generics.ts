

// type GenericsArray<value> = Array<value>
type GenericsArray<T> = Array<T>

type Friends = string[]
const friend : Friends = ["Kabir", "Mamun","Fuad"]

const roll: Array<number> = [1,2,4,5,6,7,9]
const rollB: GenericsArray<number> = [1,2,4,5,6,7,9]

// const isStudent: boolean[] =[true, false,false,true,false] 
const isStudent: GenericsArray<boolean> =[true, false,false,true,false] 

// use in object 

const user: GenericsArray<{user: string, age: number}> =[
    {
        user: "Mr. X",
        age : 22
    },
    {
        user: "Mr. Y",
        age:25
    }
]

// generics use in tuple

// type Coordinates = [number, number]
type Coordinates = [number, number]
const coordinates:number[]  = [20, 30]

type Coordinates2<X,Y> = [X,Y]
const coordinates2:Coordinates2<Number,Number>  = [20, 30]

const coordinates3:Coordinates2<string,string>  = ["20", "30"]