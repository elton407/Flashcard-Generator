var inquirer = require("inquirer");
var fs = require("fs");


var loop = 1 ;
var count = 0;


function BasicCard(front, back) {

  // Note that we don't create a new object...

  this.front = front;

  this.back = back;
}

  		inquirer.prompt([{
				type: "input",
				name: "front",
				message: "Ask a question" 
			},{ 
				type: "input",
				name: "back",
				message:"What is the answer "

			}]).then(function(answers){ 
				question = answers.question;
				answer = answers.correctAnswer;

				var newCard = new BasicCard (answers.front, answers.back);
				console.log(newCard);
		}) 

  	



module.exports = BasicCard;

