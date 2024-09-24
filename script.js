const board = document.getElementById('board');
const cells = document.querySelectorAll('.cell');
const messageDisplay = document.getElementById('message');
const resetButton = document.getElementById('reset');

let currentPlayer = '♥'; // Corações para o jogador 1
let boardState = ['', '', '', '', '', '', '', '', '']; // Estado do tabuleiro

const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

function handleClick(event) {
    const cell = event.target;
    const index = cell.getAttribute('data-index');

    if (boardState[index] || checkWinner()) return;

    boardState[index] = currentPlayer;
    cell.textContent = currentPlayer;

    if (checkWinner()) {
        displayMessage(`${currentPlayer} ganhou! Parabéns, minha fofuxa! ❤️`);
    } else {
        currentPlayer = currentPlayer === '♥' ? 'X' : '♥'; // Alterna entre jogadores
    }
}

function checkWinner() {
    return winningCombinations.some(combination => {
        const [a, b, c] = combination;
        return boardState[a] === currentPlayer && boardState[b] === currentPlayer && boardState[c] === currentPlayer;
    });
}

function displayMessage(message) {
    messageDisplay.textContent = message;
}

function resetGame() {
    boardState = ['', '', '', '', '', '', '', '', ''];
    cells.forEach(cell => {
        cell.textContent = '';
    });
    messageDisplay.textContent = '';
    currentPlayer = '♥'; // Reseta para o jogador 1
}

cells.forEach(cell => {
    cell.addEventListener('click', handleClick);
});

resetButton.addEventListener('click', resetGame);

