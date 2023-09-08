window.addEventListener('DOMContentLoaded', () => {
	const tiles = Array.from(document.querySelectorAll('#tile'));
	const playerDisplay = document.querySelector('.display-turn');
	const resetButton = document.querySelector('#reset');
	const announcer = document.querySelector('.announcer');

	let board = ['', '', '', '', '', '', '', '', ''];
	let currentPlayer = 'X';
	let isGameActive = true;

	const PLAYERX_WON = 'PLAYERX_WON';
	const PLAYERO_WON = 'PLAYERO_WON';
	const TIE = 'TIE';

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

	function handleResultValidation() {
		let roundWon = false;
		let winningCombination = null;

		for (let i = 0; i <= 7; i++) {
			const winCondition = winningConditions[i];
			const [a, b, c] = [
				board[winCondition[0]],
				board[winCondition[1]],
				board[winCondition[2]],
			];

			if (a === '' || b === '' || c === '') {
				continue;
			}
			if (a === b && b === c) {
				winningCombination = winCondition;
				roundWon = true;
				break;
			}
		}

		if (roundWon) {
			announce(currentPlayer === 'X' ? PLAYERX_WON : PLAYERO_WON);
			highlightWinningTiles(winningCombination);
			isGameActive = false;
			return;
		}
		if (!board.includes('')) announce(TIE);
	}

	function highlightWinningTiles(winningCombination) {
		for (let i = 0; i < 3; i++) {
			const index = winningCombination[i];
			const tile = tiles[index];
			tile.classList.add('winningTile');
		}
	}

	const announce = (type) => {
		switch (type) {
			case PLAYERO_WON:
				announcer.innerHTML = 'O Wins';
				setTimeout(() => alert('O is the Winner!'), 100);
				break;
			case PLAYERX_WON:
				announcer.innerHTML = 'X Wins';
				setTimeout(() => alert('X is the Winner!'), 100);
				break;
			case TIE:
				announcer.innerText = 'TIE';
				setTimeout(() => alert('The match is draw'), 100);
		}
		announcer.classList.remove('hide');
	};

	const isValidAction = (tile) => !['X', 'O'].includes(tile.innerText);

	const updateBoard = (index) => {
		board[index] = currentPlayer;
	};

	const changePlayer = () => {
		currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
		playerDisplay.innerText = `Player ${currentPlayer}'s turn `;
	};

	const userAction = (tile, index) => {
		if (isValidAction(tile) && isGameActive) {
			tile.innerText = currentPlayer;
			updateBoard(index);
			handleResultValidation();
			changePlayer();
		}
	};

	function removeHighlight() {
		tiles.forEach((tile) => tile.classList.remove('winningTile'));
	}

	const resetBoard = () => {
		board = ['', '', '', '', '', '', '', '', ''];
		isGameActive = true;
		announcer.classList.add('hide');
		removeHighlight();

		if (currentPlayer === 'O') {
			changePlayer();
		}

		tiles.forEach((tile) => (tile.innerText = ''));
		announcer.innerHTML = '';
	};

	tiles.forEach((tile, index) => {
		tile.addEventListener('click', () => userAction(tile, index));
	});

	resetButton.addEventListener('click', resetBoard);
});
