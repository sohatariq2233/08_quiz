import inquirer from "inquirer"

const quiz: {
    question_1: string;
    question_2: string;
    question_3: string;
    question_4: string;
    question_5: string;
 } = await inquirer.prompt([
    {
        name: "question_1",
        type: "list",
        message:"Q1.What is the correct way to check if two values are not equal in typescript?",
        choices:["a == b", "a === b","a = b","a !== b"]
    },
    {
        name: "question_2",
        type: "list",
        message:"Q2.Which of the following character is commonly allowed in varianle name in Typescript",
        choices:["$","@","#","&"]
    },
    {
        name: "question_3",
        type: "list",
        message:"Q3.Which operator is commonly used for string concatenation in Typescript?",
        choices:["+","-","*","/"]
        
    },
    {
        name: "question_4",
        type: "list",
        message:"Q4.In Typescript which symbol is commonly used to terminte a statement?",
        choices:[".",":",";",","]
    },
    {
        name: "question_5",
        type: "list",
        message:"Q5.Which method ofInquirer.js is used to start the prompt interface and receive user input?",
        choices:["start()","prompt()","init()","run()"]
    }
]);

let score: number = 0;

switch(quiz.question_1) {
    case "a !==b":
        console.log("1. Correct!");
        ++score;
        break;
        default:
            console.log("1.Icorrect!");

}

switch(quiz.question_2) {
    case "$":
        console.log("2. Correct!");
        ++score;
        break;
        default:
            console.log("2.Icorrect!");

}
switch(quiz.question_3) {
    case "+":
        console.log("3. Correct!");
        ++score;
        break;
        default:
            console.log("3.Icorrect!");

}
switch(quiz.question_4) {
    case ";":
        console.log("4. Correct!");
        ++score;
        break;
        default:
            console.log("4.Icorrect!");

}
switch(quiz.question_5) {
    case "prompt()":
        console.log("5. Correct!");
        ++score;
        break;
        default:
            console.log("5.Icorrect!");
}

console.log(`Score: ${score}`);