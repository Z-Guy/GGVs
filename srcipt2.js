document.getElementById("startMatch").addEventListener("click", function() {
    try {
      window.location.href = "http://127.0.0.1:5500/Index.html";
    } catch (error) {
      console.error(error);
    }
  });