const userInfo  = {
    name: "Hannan",
    age: 23,
    gender: "male",
    hobby: {
        h1:"playing",
        h2:"danceing"
    }
}

const {name, gender, hobby: {h1,h2}} = userInfo

// console.log(h1,h2,gender);

const fruits = ["Apple", "Mango", "banana", "Pineapple"]

const [,,,d] = fruits
console.log(d);

