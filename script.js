const faust = 5;
const may = 5;
const hc = 7;
const baiken = 3;

document.getElementById("pickOpponent").addEventListener("click", function() {
    try {
      window.location.href = "http://127.0.0.1:5500/Opponent.html";
    } catch (error) {
      console.error(error);
    }
  });
  


