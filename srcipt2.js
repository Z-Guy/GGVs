document.getElementById("startMatch").addEventListener("click", function() {
    try {
      window.location.href = "Fight.html";
    } catch (error) {
      console.error(error);
    }
  });