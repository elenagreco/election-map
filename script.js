
var createPolitician = function(name, partyColor){
  
  var politician = {};
    politician.name = name;
    politician.electionResults = null;
    politician.totalVotes = 0;
    politician.partyColor = partyColor;

  politician.tallyVotes = function(){
    this.totalVotes = 0;
    for (var i = 0; i < this.electionResults.length; i++)
    {
      this.totalVotes = this.totalVotes + this.electionResults[i];
    }
  };
  
  return politician;
  
};

var jane =  createPolitician("Jane Doe", [132, 17, 11]);
var john = createPolitician("John Doe", [245, 141, 136]);

jane.electionResults = [5, 1, 7, 2, 33, 6, 4, 2, 1, 14, 8, 3, 1, 11, 11, 0, 5, 3, 3, 3, 7, 4, 8, 9, 3, 7, 2, 2, 4, 2, 8, 3, 15, 15, 2, 12, 0, 4, 13, 1, 3, 2, 8, 21, 3, 2, 11, 1, 3, 7, 2];

john.electionResults = [4, 2, 4, 4, 22, 3, 3, 1, 2, 15, 8, 1, 3, 9, 0, 6, 1, 5, 5, 1, 3, 7, 8, 1, 3, 3, 1, 3, 2, 2, 6, 2, 14, 0, 1, 6, 7, 3, 7, 3, 6, 1, 3, 17, 3, 1, 2, 11, 2, 3, 1];

//Changes to results

jane.electionResults[9] = 1;
john.electionResults[9] = 28;

jane.electionResults[4] = 17;
john.electionResults[4] = 38;

jane.electionResults[43] = 11;
john.electionResults[43] = 27;


// State Info Table

var setStateResults = function(state){
  theStates[state].winner = null;
  
  if (jane.electionResults[state] > john.electionResults[state]){
    theStates[state].winner = jane;
  }
  else if (jane.electionResults[state] < john.electionResults[state]){
    theStates[state].winner = john;
  }

  var stateWinner = theStates[state].winner;
  if (stateWinner !== null){
    theStates[state].rgbColor = stateWinner.partyColor;
  } else {
    theStates[state].rgbColor = [11, 32, 57];
  }
 
var stateTable = document.getElementById('stateResults');
var header = stateTable.children[0];
var body = stateTable.children[1];
var stateName = header.children[0].children[0];
var stateAbbrev = header.children[0].children[1];
var candidate1Name = body.children[0].children[0];
var candidate2Name = body.children[1].children[0];
var candidate1Results = body.children[0].children[1];
var candidate2Results = body.children[1].children[1];
var winnersName = body.children[2].children[1];

stateName.innerText = theStates[state].nameFull;
stateAbbrev.innerText = "(" + theStates[state].nameAbbrev + ")";
candidate1Name.innerText = jane.name;
candidate2Name.innerText = john.name;
candidate1Results.innerText = jane.electionResults[state];
candidate2Results.innerText = john.electionResults[state];

if (theStates[state].winner === null){
  winnersName.innerText = "DRAW";
}
else{
  winnersName.innerText = theStates[state].winner.name;
}
};

jane.tallyVotes();
john.tallyVotes();

var winner = "???";

  if(jane.totalVotes > john.totalVotes){
    winner = jane.name;
  }
  else if (john.totalVotes > jane.totalVotes){
    winner = john.name;
  }
  else{
    winner = "DRAW";
  }
  
// Country Info Table

var countryTable = document.getElementById('countryResults');
var row = countryTable.children[0].children[0];

row.children[0].innerText = jane.name;
row.children[1].innerText = jane.totalVotes;
row.children[2].innerText = john.name;
row.children[3].innerText = john.totalVotes;
row.children[5].innerText = winner;


console.log(jane.totalVotes);
console.log(john.totalVotes);

console.log("The winner is " + winner + "!!");

console.log("Jane's party color is " + jane.partyColor);
console.log("John's party color is " + john.partyColor);



