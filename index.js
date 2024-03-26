#! /usr/bin/env node
import inquirer from "inquirer";
// 1) computer will generate a random number
// 2) user input for guessing number
// 3) compare user input with computer generater number and show result
const randomNumber = Math.floor(Math.random() * 6 + 1);
const answers = await inquirer.prompt([
    {
        name: "userGuessdNumber",
        type: "number",
        message: "please guess a number between 1-10: ",
    },
]);
if (answers.userGuessdNumber === randomNumber) {
    console.log("congtratulation! you guessed right number.");
}
else {
    console.log("you guessed wrong number");
}
