const gameBoard = (() => {
  const gameboard = ['', '', '', '', '', '', '', '', ''];
  return { gameboard };
})();

const Player = (weapon) => game.playGame(weapon);

function checkGame(table) {
  if (table[0] == 'X' && table[1] == 'X' && table[2] == 'X'
      || table[3] == 'X' && table[4] == 'X' && table[5] == 'X'
      || table[0] == 'X' && table[3] == 'X' && table[6] == 'X'
      || table[6] == 'X' && table[7] == 'X' && table[8] == 'X'
      || table[1] == 'X' && table[4] == 'X' && table[7] == 'X'
      || table[0] == 'X' && table[4] == 'X' && table[8] == 'X'
      || table[2] == 'X' && table[5] == 'X' && table[8] == 'X'
      || table[2] == 'X' && table[4] == 'X' && table[6] == 'X') {
    console.log('a');
  } else if (table[0] == 'O' && table[1] == 'O' && table[2] == 'O'
      || table[3] == 'O' && table[4] == 'O' && table[5] == 'O'
      || table[0] == 'O' && table[3] == 'O' && table[6] == 'O'
      || table[6] == 'O' && table[7] == 'O' && table[8] == 'O'
      || table[1] == 'O' && table[4] == 'O' && table[7] == 'O'
      || table[0] == 'O' && table[4] == 'O' && table[8] == 'O'
      || table[2] == 'O' && table[5] == 'O' && table[8] == 'O'
      || table[2] == 'O' && table[4] == 'O' && table[6] == 'O') {
    console.log('a');
  }
}

function playComputer(player) {
  if (player == 'X') {
    console.log('b');
  }
}

const game = (() => {
  const chosen = document.querySelectorAll('.chosen');
  const Weapon = chosen.forEach((o_x) => {
    o_x.addEventListener('click', () => {
      if (o_x.id == 'x') {
        Player('X');
      } else {
        Player('O');
      }
    });
  });

  const squares = document.querySelectorAll('.square');

  const playGame = (player) => {
    const computer = player == 'X' ? 'O' : 'X';

    squares.forEach((square) => {
      square.addEventListener('click', () => {
        if (gameBoard.gameboard[square.id + 1] === undefined) {
          gameBoard.gameboard[square.id] = player;
          square.textContent = player;
          checkGame(gameBoard.gameboard);
          playComputer(Weapon);
        }
      });
    });
  };

  return { Weapon, playGame, squares };
})();
