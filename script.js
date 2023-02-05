const faust = {
  name: "Faust",
  value: 5
};
const may = {
  name: "May",
  value: 5
};
const hc = {
  name: "Happy Chaos",
  value: 7
};
const baiken = {
  name: "Baiken",
  value: 3
};

document.getElementById("pickOpponent").addEventListener("click", function() {
    try {
      window.location.href = "http://127.0.0.1:5500/Opponent.html";
    } catch (error) {
      console.error(error);
    }
  });

function whoseBetter(a, b){
  return a.value > b.value 
    ? a.name + " wins!!!" 
    : b.value > a.value  
    ? b.name + " wins!!!" 
    : "Draw!!";
}
/* For when it goes live
let person = prompt("Select your character:");
let opponent = prompt("Select your opponent:");
8?
*/

//get to the command line
const person = process.argv[2];
const opponent = process.argv[3];
console.log(`Your character: ${person}`);
console.log(`Your opponent: ${opponent}`);


console.log(whoseBetter(person, opponent));


