var cars = ['toyota', 'honda', 'mazda', 'mitsubishi', 'tesla', 'lexus']; //array named cars

console.log('First item:', cars[0]);
console.log('Last item:', cars[cars.length - 1]); //lof first and last items into console

cars.push('mercedes-benz'); //add an item
console.log('Updated array:', cars);

console.log('All items in the array:'); //loop all items using while loop
let i = 0; 
while (i < cars.length) {
    console.log(cars[i]); //log into console
    i++; 
}

