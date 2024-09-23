let board = ['', '', '', '', '', '', '', '', ''];
let currentPlayer = 'x';
const cells = document.querySelectorAll('.cell');

cells.forEach(cell => {
    cell.addEventListener('click', () => {
        const index = cell.getAttribute('data-index');
        if (!board[index]) {
            board[index] = currentPlayer;
            cell.classList.add(currentPlayer);
            cell.textContent = currentPlayer === 'x' ? 'X' : 'O';
            currentPlayer = currentPlayer === 'x' ? 'o' : 'x';
            checkWinner();
        }
    });
});

document.getElementById('reset').addEventListener('click', resetGame);

function checkWinner() {
    const winningCombinations = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [2, 4, 6]
    ];
    for (const combination of winningCombinations) {
        const [a, b, c] = combination;
        if (board[a] && board[a] === board[b] && board[a] === board[c]) {
            setTimeout(() => alert(`Jogador ${board[a]} venceu!`), 100);
            return;
        }
    }
    if (!board.includes('')) {
        setTimeout(() => alert("Empate!"), 100);
    }
}

function resetGame() {
    board = ['', '', '', '', '', '', '', '', ''];
    cells.forEach(cell => {
        cell.textContent = '';
        cell.classList.remove('x', 'o');
    });
    currentPlayer = 'x';
}

