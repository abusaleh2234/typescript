let anything : any;

anything = "Apple";
anything = 34;
// (anything as number).valueOf
// (anything as string).length

const kgToGm = (input: number | string): string | number | undefined => {
    if (typeof input === "number") {
        return input * 1000
    }else if(typeof input === "string"){
        const [value] = input.split(" ")
        // console.log(value);
        
        return `Converted output is ${Number(value) * 1000}`
    }
}

const result1 = kgToGm(2) as number
// console.log(result1.toFixed());
const result2 = kgToGm("2 kg") as string
// console.log(result2.length);


type customErr = {
    massage : string
}

try{

}catch(err){
    console.log((err as customErr).massage);
    
}
