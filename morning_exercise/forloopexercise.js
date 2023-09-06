//
// Loops
//
// MDN: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration
//

const shoppingList = ["Milk", "Eggs", "Bread", "Sugar", "Coffee"];

// 1. Replace CONDITION with a condition that is true while i is less than the length of the shopping list
for (let i = 0; i < shoppingList.length; i++) {console.log(i)
  // 2. Console log the value of i, save the file and run it to see what your loop does
} 


console.log("\nExercise 3");
// 3. Using the above loop as a reference (don't copy and paste), create a for loop that console logs each item in the shopping list
for (let i = 0; i < shoppingList.length; i++) {console.log(shoppingList[i])
}
console.log("\nExercise 4");
// 4. Create a for loop that console logs an item in the shopping list if it's Eggs
for (let i = 0; i < shoppingList.length; i++)
if(shoppingList[i] === "Eggs") {console.log(shoppingList[i])
}
console.log("\nExercise 5");
// 5. Create a for loop that console logs an item in the shopping list if it is not Eggs
for (let i = 0; i < shoppingList.length; i++)
if (shoppingList[i] != "Eggs") {console.log (shoppingList[i])}
console.log("\nExercise 6");
// 6. Create a for loop that console logs "I found Sugar" if the shopping list contains Sugar
for (let i = 0; i < shoppingList.length; i++)
if (shoppingList[i] === "Sugar") {console.log("I found Sugar")}
console.log("\nExercise 7");
// 7. Create a for loop that starts at the end of the shopping list and runs to the beginning,
// console log each item
for (let i = 0; i < shoppingList.length; i++)
console.log("\nExercise 8");
// 8. Create a for loop that console logs "I found Tea" if the shopping list contains Tea,
// otherwise console log "I don't need Tea". The log should only run once the loop has finished;
// use a variable to keep track of whether you've found Tea in the shopping list