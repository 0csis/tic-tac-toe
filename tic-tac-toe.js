const gameBoard = (() => {
  const gameboard = ['', '', '', '', '', '', '', '', ''];
  return { gameboard };
})();

const Player = (weapon) => game.playGame(weapon);

function playAgain() {
  const game = document.querySelector('.game');
  game.remove();
  const again = document.querySelector('.again');
  again.textContent = 'Play again?';
  const yes = document.querySelector('.yes');
  yes.textContent = 'Yes';
  const no = document.querySelector('.no');
  no.textContent = 'No';

  const buttons = document.querySelectorAll('button');
  buttons.forEach((btn) => {
    btn.addEventListener('click', () => {
      if (btn.id == 'yes') {
        location.reload();
      }
    });
  });
}

function endGame(winner) {
  const winnerGame = document.querySelector('.winner');
  winnerGame.textContent = `${winner} wins!`;
  playAgain();
}

function checkGame(table) {
  if (table[0] == 'X' && table[1] == 'X' && table[2] == 'X'
      || table[3] == 'X' && table[4] == 'X' && table[5] == 'X'
      || table[0] == 'X' && table[3] == 'X' && table[6] == 'X'
      || table[6] == 'X' && table[7] == 'X' && table[8] == 'X'
      || table[1] == 'X' && table[4] == 'X' && table[7] == 'X'
      || table[0] == 'X' && table[4] == 'X' && table[8] == 'X'
      || table[2] == 'X' && table[5] == 'X' && table[8] == 'X'
      || table[2] == 'X' && table[4] == 'X' && table[6] == 'X') {
    endGame('X');
  } else if (table[0] == 'O' && table[1] == 'O' && table[2] == 'O'
      || table[3] == 'O' && table[4] == 'O' && table[5] == 'O'
      || table[0] == 'O' && table[3] == 'O' && table[6] == 'O'
      || table[6] == 'O' && table[7] == 'O' && table[8] == 'O'
      || table[1] == 'O' && table[4] == 'O' && table[7] == 'O'
      || table[0] == 'O' && table[4] == 'O' && table[8] == 'O'
      || table[2] == 'O' && table[5] == 'O' && table[8] == 'O'
      || table[2] == 'O' && table[4] == 'O' && table[6] == 'O') {
    endGame('O');
  }
}

function playComputer(player) {
  if (player == 'X') {
    const computer = Math.floor((Math.random() * 8) + 1);
    if (gameBoard.gameboard[computer] === '') {
      gameBoard.gameboard[computer] = 'O';
      checkGame(gameBoard.gameboard);
      console.log(computer);
      const addComputer = document.getElementById(`${computer}`);
      addComputer.textContent = 'O';
    } else {
      playComputer(player);
    }
  } else {
    const computer = Math.floor((Math.random() * 8) + 1);
    if (gameBoard.gameboard[computer] === '') {
      gameBoard.gameboard[computer] = 'X';
      checkGame(gameBoard.gameboard);
      console.log(computer);
      const addComputer = document.getElementById(`${computer}`);
      addComputer.textContent = 'X';
    } else {
      playComputer(player);
    }
  }
}

const game = (() => {
  const choose = document.querySelector('.choose');
  const chosen = document.querySelectorAll('.chosen');
  let Weapon = chosen.forEach((o_x) => {
    o_x.addEventListener('click', () => {
      if (o_x.id == 'x') {
        Weapon = 'X';
        document.getElementById('o').remove();
        choose.textContent = 'Choose X or O';
        Player('X');
      } else {
        Weapon = 'O';
        document.getElementById('x').remove();
        choose.textContent = 'Choose X or O';
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
          playComputer(player);
        }
      });
    });
  };

  return { Weapon, playGame, squares };
})();
