
const fromEuroToDollar = function (valueInEuro) {
    // convertimos el valor a dolares
    let valueInDollar = valueInEuro * 1.2;
    // retornamos el valor
    return valueInDollar;
}


// app.js file content
// console.log("Hello World")

// const sum = (a, b) => {
//     return a + b
// }

// console.log(sum(7, 3))

// module.exports = { sum };



const fromYenToPound = function (valueInYen) {
    // convertimos el valor a libras
    let valueInPound = valueInYen * 0.0061;
    // retornamos el valor
    return valueInPound;
}


const fromDollarToYen = function (valueInDollar) {
    // convertimos el valor a yenes
    let valueInYen = valueInDollar * 138.53;
    // retornamos el valor
    return valueInYen;
}

module.exports = { fromEuroToDollar, fromYenToPound, fromDollarToYen }