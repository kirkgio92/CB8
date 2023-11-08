// EXCERCISE N1
const sum = (n1, n2, n3) => n1 + n2 + n3;
const sub = (n1, n2, n3) => n1 - n2 - n3;
const mult = (n1, n2, n3) => n1 * n2 * n3;
const div = (n1, n2, n3) => n1 / n2 / n3;

// console.log(sum(2,2,2));

// Calculator based on old lessons. Need to do the callback on the above arrow function.

// function calculator = (operator, firstNum, secondNum, thirdNum) => {
//     if (operator === "+") {
//         return firstNum + secondNum + thirdNum;
//     } else if (operator === "-") {
//         return firstNum - secondNum - thirdNum;
//     } else if (operator === "*") {
//         return firstNum * secondNum * thirdNum;
//     } else if (operator === "/") {
//         return firstNum / secondNum / thirdNum;
//     } else {
//         return "Operation not recognized. Please try again!"
//     }
// };

// Callback

// function calculator (fn) {
//     // You could use also promt and other different stuff inside this.
//     return fn;
// }

// Same as above but in a single line using arrow function (thanks to team mates)
const calculator = (fn, n1, n2, n3) => fn(n1, n2, n3);

console.log(calculator(sum, 1, 2, 3));
console.log(calculator(sub, 1, 2, 3));
console.log(calculator(mult, 1, 2, 3));
console.log(calculator(div, 1, 2, 3));

// EXCERCISE N2
// Creare un array di oggetti che simuli la lista del carrello di un e-commerce.
// Ogni oggetto deve avere al suo interno almeno un id, un nome, una indirizzo per immagine,
// e una descrizione. Processate il seguente array di oggetti con map e forEach,
// e scriverne in commento la differenza. Basta solo stamparne il contenuto.

let basket = [
  {
    id: "Prod_01234",
    itemName: "Product_1",
    imgAddress: "https://placehold.co/600x400",
    itemDescription: "Description_1",
  },
  {
    id: "Prod_012345",
    itemName: "Product_2",
    imgAddress: "https://placehold.co/600x400",
    itemDescription: "Description_2",
  },
  {
    id: "Prod_0123456",
    itemName: "Product_3",
    imgAddress: "https://placehold.co/600x400",
    itemDescription: "Description_3",
  },
];

// forEach is used to execute a function for each element of the array.
let basketForEach = basket.forEach((items) => items);
console.log("This is the forEach H.O.F.", basketForEach);

// map is used to create a new array with the same element of the array provided
let basketMap = basket.map((items) => items);
console.log("This is the map H.O.F.", basketMap);

// filter HOF - Used to filter an array given precise indications.
const basketFilter = basket.filter((items) => items.id.length < 11);
console.log("This is the filter H.O.F.", basketFilter);

// find HOF - Used to find inside an array an exact data.
const basketFind = basket.find(({ itemName }) => itemName == "Product_1");
console.log("This is the find H.O.F.", basketFind);

// EXCERCISE 3 - ADVANCED

// Creation of the arrays
let array_1 = [3, 6, 9, 12];
let array_2 = [5, 10, 15, 20];

// First attempt using separates functions. I'll try to put them together after.
// array_1 multiplied by 2
// const array_1Multiplied = array_1.map((elements) => elements * 2);
// console.log(array_1Multiplied)

// // array_2 adding 5 to each elements
// const array_2Sum = array_2.map((elements) => elements + 5);
// console.log(array_2Sum);

// // filter of array_1 keeping only numbers >10
// const array_1Filter = array_1Multiplied.filter((elements) => elements > 10);
// console.log(array_1Filter);

// // filter of array_2 keeping only even numbers
// const array_2Filter = array_2Sum.filter((elements) => elements % 2 == 0);
// console.log(array_2Filter);

// Now let's try to put all of the above in a single function
const transformAndFilter = (array_1, array_2) => {
  // Arrays transform
  const array_1Multiplied = array_1.map((elements) => elements * 2);
  const array_2Sum = array_2.map((elements) => elements + 5);

  // Filtering of the transformed arrays
  const array_1Filter = array_1Multiplied.filter((elements) => elements > 10);
  const array_2Filter = array_2Sum.filter((elements) => elements % 2 == 0);

  // Always have a return
  return [array_1Filter, array_2Filter];
};

// Console.log to try if it works
console.log(transformAndFilter(array_1, array_2));
