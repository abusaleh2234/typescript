
const isEligible = (age:number) => {
    return age >= 21 ? "You can marry" : "You can not marry"
}
// console.log(isEligible(24));

const theme = "fdg";

const selectTheme = theme ?? "theme is light"
// console.log(selectTheme);

const isAuth = undefined;

const result = isAuth ?? "you are guest"
console.log(result);
