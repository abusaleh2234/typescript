type AreaOfNum = {
    hight: number;
    width: number;
}
type hight = AreaOfNum["hight"]
// type AreaOfString = {
//     hight: string;
//     width: string;
// }

type AreaOfString = {
    [key in keyof AreaOfNum]:string
}

type Area<T> = {
    [key in keyof T]: number
}

const area1 : Area<{hight: number, width: number}> = {
    hight: 23,
    width : 23
}