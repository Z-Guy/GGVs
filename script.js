const FA = {
  name: "Faust",
  value: 5
};
const MA = {
  name: "May",
  value: 5
};
const HC = {
  name: "Happy Chaos",
  value: 7
};
const BA = {
  name: "Baiken",
  value: 3
};

function displayFighter(){
  var fighter = document.getElementsByName('FighterSelect');
  for (var i = 0; i < fighter.length; i++) {
    if(fighter[i].checked){
      document.getElementById("result").innerHTML = "You choose " + fighter[i].value;
    }
  }
}

function whoseBetter(a, b){
  return a.value > b.value 
    ? a.name + " wins!!!" 
    : b.value > a.value  
    ? b.name + " wins!!!" 
    : "Draw!!";
}

const person = process.argv[2];
const opponent = process.argv[3];
console.log(`Your character: ${person}`);
console.log(`Your opponent: ${opponent}`);


console.log(whoseBetter(person, opponent));


