document.getElementById("reset").addEventListener("click", function() {
    try {
      window.location.href = "Index.html";
    } catch (error) {
      console.error(error);
    }
  });