export default function transformInAround(number) {
    const numberTrunc = Math?.trunc(number)
    console.log(numberTrunc)
    let string = String(numberTrunc)
    if (numberTrunc < 1000) {
        return numberTrunc
    } else if (numberTrunc < 10000) {
        string = string.slice(0, 2)
        return `${string[1] > 0 ? string.replace(string.slice(0, 1), `${string.slice(0, 1)}.`) : string.slice(0, 1)}k`
    } else if (numberTrunc < 1000000) {
        return `${numberTrunc.toString().slice(0, numberTrunc < 100000 ? 2 : 3)}k`
    } else if (numberTrunc < 100000000) {
        return `${numberTrunc?.toString().slice(0, numberTrunc < 10000000 ? 1 : 2)}kk`
    } else {
        return `${numberTrunc?.toString().slice(0, 3)}M+`
    }
}