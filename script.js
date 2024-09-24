let board = ['', '', '', '', '', '', '', '', ''];
let currentPlayer = 'heart'; // Define o jogador inicial como coração
const cells = document.querySelectorAll('.cell');
const mensagemVitoria = document.getElementById("mensagem-vitoria"); // Obtém o elemento da mensagem de vitória

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
            mostrarMensagemVitoria(); // Chama a função para mostrar a mensagem de vitória
            return;
        }
    }
    if (!board.includes('')) {
        setTimeout(() => alert("Empate!"), 100);
    }
}

function mostrarMensagemVitoria() {
    mensagemVitoria.style.display = "block"; // Mostra o div da mensagem
    mensagemVitoria.classList.add("mostrar"); // Adiciona a classe para fazer a mensagem aparecer

    // Após 3 segundos, remova a mensagem
    setTimeout(() => {
        mensagemVitoria.classList.remove("mostrar"); // Remove a classe para iniciar a transição de saída
        
        // Usar um pequeno timeout para garantir que a transição aconteça antes de esconder
        setTimeout(() => {
            mensagemVitoria.style.display = "none"; // Esconde o div
        }, 1000); // Tempo para a transição de saída (1 segundo)
        
    }, 3000); // Tempo antes de começar a esconder a mensagem (3 segundos)
}

function resetGame() {
    board = ['', '', '', '', '', '', '', '', ''];
    cells.forEach(cell => {
        cell.textContent = '';
        cell.classList.remove('heart', 'o'); // Remove classes para resetar
    });
    currentPlayer = 'heart'; // Começa sempre com coração
}

