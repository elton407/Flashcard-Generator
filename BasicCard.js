var inquirer = require("inquirer");
var fs = require("fs");

var questionArray = [];
var loop = 1 ;
var count = 0;


function BasicCard(front, back) {

  // Note that we don't create a new object...

  this.front = front;

  this.back = back;
  this.getUserInput = function () {

  	if (loop <= 5) {

  		inquirer.prompt([{
				name: "question",
				message: "Enter a question for the front of card number " + loop + "." 
			},{ 
				name: "correctAnswer",
				message: "Enter the answer to the question"

			}]).then(function(answers){ 
				question = answers.question;
				answer = answers.correctAnswer;

				var newCard = new BasicCard (question, answer);
				questionArray.push(newCard);
				loop ++;
				newCard.getUserInput();
		}) 

  	}


  }

}


module.exports = BasicCard;

