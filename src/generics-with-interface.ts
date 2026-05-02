interface Developer<T, X = null> {
    name: string;
    salary: number;
    devices: {
        brand: string;
        model: string
    }
    watch: T,
    bike?: X
}

const jsDeveloper: Developer<{
    brand: string;
    model: string
}> = {
    name: "Rafi",
    salary: 100,
    devices: {
        brand: "Walton",
        model: "wd232"
    },
    watch: {
        brand: "Vivo",
        model: "V00x3"
    },
    bike: null
}
const phpDeveloper: Developer<{
    brand: string;
    model: string;
    price: number;
    alarm: boolean
}, {
    model: "Tvs 4v",
    cc: "200 cc"
}> = {
    name: "Hasan",
    salary: 200,
    devices: {
        brand: "HP",
        model: "hp2454"
    },
    watch: {
        brand: "Apple",
        model: "a023",
        price: 75,
        alarm: true
    }
}