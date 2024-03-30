#! /usr/bin/env node 

import inquirer from "inquirer";


//1)computer will genrate a random number 
//2)user  input for guessing number 
//3)computer user input wuith computer genrated number and show result

const randomNumber = Math.floor(Math.random()* 6 + 1);

const answer = await inquirer.prompt([
    {
        name:"userGuessedNumber",
        type:"number",
        message:"Enter your Guess Number (Number Limit  from 1 to 6): ",
    },
]);

if (answer.userGuessedNumber === randomNumber){
    console.log("Congratulation  !  you guess a correct number. ");
}

else{
    console.log("Sorry, you guess  a wrong  number ");
}

