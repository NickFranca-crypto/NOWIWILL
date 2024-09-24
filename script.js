let board = ['', '', '', '', '', '', '', '', ''];
let currentPlayer = 'x';
const cells = document.querySelectorAll('.cell');

cells.forEach(cell => {
    cell.addEventListener('click', () => {
        const index = cell.getAttribute('data-index');
        if (!board[index]) {
            board[index] = currentPlayer;
            cell.classList.add(currentPlayer); // Adiciona a classe correspondente
            cell.textContent = currentPlayer === 'x' ? 'X' : 'O'; // Marca com 'X' ou 'O'
            currentPlayer = currentPlayer === 'x' ? 'o' : 'x'; // Troca de jogador
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
        cell.classList.remove('x', 'o'); // Remove classes para reset
    });
    currentPlayer = 'x'; // Começa sempre com 'X'
}

let currentPlayer = 'heart'; // Define o jogador inicial como coração

function handleClick(event) {
    const cell = event.target;
    
    // Verifica se a célula já não foi clicada
    if (cell.textContent === '') {
        const currentClass = currentPlayer === 'heart' ? '❤️' : 'O';
        cell.textContent = currentClass; // Coloca um coração ou O
        
        // Alterna o jogador
        currentPlayer = currentPlayer === 'heart' ? 'O' : 'heart';
    }
}

// Seleciona todas as células e adiciona o evento de clique
const cells = document.querySelectorAll('.cell');
cells.forEach(cell => cell.addEventListener('click', handleClick));

// Função para reiniciar o jogo
document.getElementById('reset').addEventListener('click', function() {
    cells.forEach(cell => {
        cell.textContent = ''; // Limpa as células
    });
    currentPlayer = 'heart'; // Reinicia com o jogador coração
});
