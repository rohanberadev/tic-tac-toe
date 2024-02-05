const items = document.getElementsByClassName('items');

const resetBtn = document.getElementById('reset-btn');

const h1 = document.getElementById('h1');

let showTurn = document.getElementById('show-turn');

let gameOver = false;

let count = 0;

/* ||GAME LOGIC */

/* ||RESET BUTTON */
let turn = 'X';

resetBtn.addEventListener('click', ()=> {
    resetGame();
});

const checkWin = ()=> {
    let items = document.getElementsByClassName('items');
    let wins = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],

        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],

        [0, 4, 8],
        [2, 4, 6]
    ];

    wins.forEach(e => {
        if((items[e[0]].innerText === items[e[1]].innerText) && (items[e[1]].innerText === items[e[2]].innerText) && items[e[0]].innerText != '') {
            gameOver = true;
            h1.innerText = 'Game Over';
            h1.style.color = 'red';
            showTurn.innerText = `${turn} Won`;
        }
    });
}

const changeTurn = ()=> {
    if(turn == 'X') {
        turn = 'O';
    }
    else if(turn == 'O') {
        turn = 'X';
    }
}

Array.from(items).forEach((e) => {
        e.addEventListener('click', ()=> {
            if(gameOver == false) {
                if(e.innerText === '') {
                    e.innerText = turn;
                    checkWin();
                    changeTurn();
                    console.log(count);
                    count++;
                    if(!gameOver) {
                        showTurn.innerText = `Turn for ${turn}`;
                    }
                    else {
                        setTimeout(() => {
                            resetGame();
                        }, 1000);
                    }
                } 
            }
        });
});


function resetGame() {
    Array.from(items).forEach(e => {
        e.innerHTML = '';
        h1.style.color = 'black';
        h1.innerText = 'Tic-Tac-Toe';
        turn = 'X';
        showTurn.innerText = `Turn for ${turn}`;
        gameOver = false;
    });
}