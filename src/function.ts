function addNormal(numA: number, numB: number): number{
    return numA + numB
}

addNormal(5,7)

const addArrow = (numA: number, numB: number): number => numA + numB
addArrow(5,8)

const user = {
    name: "Amali",
    balance: 0,
    addBalance(value: number):number {
        return value + this.balance
    }
}

user.addBalance(12000)

const nums: number[] = [2,3,5,7]

const squer = nums.map((elem:number):number => elem * elem)

