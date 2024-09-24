let board = ['', '', '', '', '', '', '', '', ''];
let currentPlayer = 'heart'; // Define o jogador inicial como coração
const cells = document.querySelectorAll('.cell');
const mensagemVitoria = document.getElementById('mensagem-vitoria');

cells.forEach(cell => {
    cell.addEventListener('click', () => {
        const index = cell.getAttribute('data-index');
        if (!board[index]) {
            board[index] = currentPlayer;
            cell.classList.add(currentPlayer); // Adiciona a classe correspondente
            cell.textContent = currentPlayer === 'heart' ? '❤️' : 'O'; // Marca com coração ou 'O'
            currentPlayer = currentPlayer === 'heart' ? 'o' : 'heart'; // Troca de jogador
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
            mensagemVitoria.textContent = `UM BEIJO PRA MINHA GATINHA VITORIOSA!`;
            mensagemVitoria.style.display = "block"; // Mostra a mensagem
            setTimeout(() => {
                mensagemVitoria.style.opacity = 1; // Animação
            }, 100);
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
        cell.classList.remove('heart', 'o'); // Remove classes para resetar
    });
    currentPlayer = 'heart'; // Começa sempre com coração
    mensagemVitoria.style.display = "none"; // Esconde a mensagem
    mensagemVitoria.style.opacity = 0; // Reseta a opacidade
}
