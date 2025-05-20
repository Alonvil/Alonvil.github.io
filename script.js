
window.onload = function () {
  function scrollToGameArea() {
    document.getElementById("game-area").scrollIntoView({ behavior: "smooth" });
  }

  document.getElementById("python-btn").addEventListener("click", function () {
    document.getElementById("game-area").innerHTML = `
      <h2>Python Tic Tac Toe (Simulated)</h2>
      <p><em>This would be a real embedded Python game using something like Brython or a Python-to-JS compiler.</em></p>
      <pre>
X | O | X
---------
O | X |  
---------
  |   | O
      </pre>
    `;
    scrollToGameArea();
  });

  document.getElementById("js-btn").addEventListener("click", function () {
    // Embed MakeCode Arcade iframe here
    document.getElementById("game-area").innerHTML = `
      Java game Below 
    `;
    scrollToGameArea();
  });

  document.getElementById("surprise-btn").addEventListener("click", function () {
    document.getElementById("game-area").innerHTML = `
      <h2>! </h2>
      <div class="confetti">SUI</div>
      <p>You just triggered the SUI Celebration !</p>
      <img src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExNWhicmF6MDZna2g1dngxZGY4anZwYjZpOHVoeGRwZWs3anJkb3RpMCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/hryis7A55UXZNCUTNA/giphy.gif" alt="Celebration GIF" style="width: 100%; max-width: 500px; margin-top: 20px;">
        
    `;
    scrollToGameArea();
  });
};
