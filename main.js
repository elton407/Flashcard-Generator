var inquirer = require("inquirer");
var BasicCard = require("./BasicCard.js");
var ClozeCard = require("./ClozeCard.js");


var answer = "";
// User is asked if they want to create a Basic Flashcard or a Cloze Delete Flashcard? 
inquirer.prompt([{
	name: "cardType",
	type: "rawlist",
	message: "What type of flashcards would you like to create? Answer 1 or 2",
	choices: ["basic", "cloze"]
	}]).then(function(answers){
		answer = answers.cardType;
		console.log("----------------------");
		console.log("Answer questions to build 5 " + answer + " flashcards.");
		console.log("----------------------");
		chooser(answer);		
});

var basicCards = [];
var clozeCards = [];


var myBasicCards = new BasicCard();
var myClozeCards = new ClozeCard();

function chooser(choice){
	if (choice === "basic"){
		// console.log("Follow me down the basic path.");
		// getBasicCardData();
		myBasicCards.getUserInput();
		for (var i = 0; i < basicCards.length; i++) {
			console.log(basicCards[i])
		}
		
	} else if(choice === "cloze"){
		// console.log("Follow me down the cloze path");
		myClozeCards.getUserInput();
	}
}
