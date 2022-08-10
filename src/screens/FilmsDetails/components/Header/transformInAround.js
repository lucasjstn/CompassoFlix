export default function transformInAround(number) {
    Math?.trunc(number)
    let string = String(number)
    if (number < 1000) {
        return number
    } else if (number < 10000) {
        string = string.slice(0, 2)
        return `${string[1] > 0 ? string.replace(string.slice(0, 1), `${string.slice(0, 1)}.`) : string.slice(0, 1)}k`
    } else if (number < 1000000) {
        return `${number.toString().slice(0, number < 100000 ? 2 : 3)}k`
    } else if (number < 100000000) {
        return `${number?.toString().slice(0, number < 10000000 ? 1 : 2)}kk`
    } else {
        return `${number?.toString().slice(0, 3)}M+`
    }
}