var inquirer = require("inquirer");

var clozeCards = [];
var loop = 1;


function ClozeCard(text, cloze) {

  // Note that we don't create a new object...

  this.text = text;

  this.fullText = function () {
  	var fullText = text;
  	console.log("Full text: " +fullText)
  }

  this.cloze = function(){
  	var cardCloze = cloze;
  	console.log("Cloze: " + cloze);
  }

  this.partial = function () {
  	var partial = text.replace(cloze, "...");
  }

  	this.getUserInput = function(){
		if (loop <=6){
 		inquirer.prompt([{
 			name: "fact",
 			message: "Enter a statement for Card #" + loop + "." 
 		},{ 
			name: "cloze",
			message: "Enter text you would like to hide"

		}]).then(function(answers){
			fact = answers.fact;
			cloze = answers.cloze; 
			
			// call the cloze card constructor function to create a new cloze card
			var newClozeCard = new ClozeCard(fact, cloze);
			clozeCards.push(newClozeCard);
			loop++;
			newClozeCard.getUserInput();
		});
	}
	
	};

}

var card = new ClozeCard ("Who was the first president", "George Washington");
card.fullText();
card.cloze();
card.partial();


module.exports = ClozeCard;
