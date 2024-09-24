let board = ["", "", "", "", "", "", "", "", ""];
let currentPlayer = "❤️"; // Coração representa o "X"
let gameActive = true;
    document.getElementById('resetButton').addEventListener('click', function() {
    // Aqui você pode definir o que o botão de reset deve fazer.
    location.reload(); // Reinicia a página
});

const winningConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];

function makeMove(cell, index) {
    if (cell.innerHTML !== "" || !gameActive) return;


    cell.innerHTML = currentPlayer;
    board[index] = currentPlayer;
    checkWinner();
}

function checkWinner() {
    for (let condition of winningConditions) {
        const [a, b, c] = condition;
        if (board[a] && board[a] === board[b] && board[a] === board[c]) {
            gameActive = false;
            displayMessage(`${currentPlayer "❤️"} venceu! Parabéns, minha fofuxa!`);
            return;
        }
    }

    if (!board.includes("")) {
        displayMessage("Empate! Vamos jogar novamente!");
    }

    currentPlayer = currentPlayer === "❤️" ? "❌" : "❤️"; // Alterna entre coração e X
}

function displayMessage(message) {
    document.getElementById("message").innerText = message;
}
