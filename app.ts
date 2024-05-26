import inquirer from "inquirer"

// printing welcome message.
console.log("WELCOME TO OUR DAILY QUIZ");

// printing quiz format explanation
console.log("Each question has 10 marks");

// variable to store the value
let marks = 0;

// asking questions from user.
const userAns = await inquirer.prompt(
    [
        {
            type: 'list',
            name: 'question1',
            message: 'Javascript was invented by Brenfan Eich in?',
            choices: [1992, 1995, 2002, 2015] 
        },
        {
            type: 'list',
            name: 'question2',
            message: 'which is the capital city of England?',
            choices: ["Ankara", "Berlin", "paris", "London"]

        },
        {
            type: 'list',
            name: 'question3',
            message: 'Who is the first CEO of Microsoft?',
            choices: ["Bill Gates", "Elon Musk", "Andy Jassy", "Mark Zuckberg?"] 
        },
        {
            type: 'list',
            name: 'question4',
            message: 'How many continents in the world?',
            choices: [2, 5, 7, 12] 
        },
        {
            type: 'list',
            name: 'question5',
            message: 'Who is known as the father of computer?',
            choices: ["Mick Tyson", "Blaise Pascal", "Charles Babbage", "Paul Ehrlich"] 
        }
    ]
);

// Storing the correct answers in an array
let correctAns = [1995, 'London', 'Bill Gates', 7, 'Charles Babbage']


// Checking the user answers with the correct answers.
if(userAns.question1 === 1995){
    marks+= 10
}if(userAns.question2 === 'London'){ 
    marks+= 10
}if(userAns.question3 == 'Bill Gates'){ 
    marks+= 10
} if(userAns.question4 === 7){ 
    marks+= 10
}if(userAns.question5 === 'Charles Babbage'){ 
    marks+= 10
}
console.log(marks);

// function declare to check the user marks and display a message accordingly
function  userAnswers(){
    console.log('Correct answers:' +  " "+ correctAns);
    if (marks === 50){
        console.log(`\nCongratulations! you got ${marks} marks out of 50.`);
    }else if  (marks > 0){
        console.log(`\nYou got ${marks} marks out of 50.`);
    }else{
        console.log(`\nOps! you got ${marks} marks out of 50.`);   
    }
    
}userAnswers(); // calling the function 

//printing the message at the end of the program
console.log("\nThanks for using our quiz app");









