// function sendMessage({arg1, arg2}: { arg1: any, arg2: any }) {
//     console.log(arg1)
//     console.log(arg2)
// }
//
// sendMessage({arg1: "Мам, привет", arg2: "да, я покушал"})


// export class Kata {
//     static highAndLow(numbers: string): string {
//         let high = Math.max(+numbers);
//         let low = Math.min(+numbers);
//         console.log(high);
//         console.log(low);
//     }
// }

function highAndLow(numbers: string): string {
    const numbersArray: number[] = numbers.split(" ").map(Number);
    const high = Math.max(...numbersArray);
    const low = Math.min(...numbersArray);
    return high.toFixed() + ' ' + low.toFixed()
}

console.log(highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4"));