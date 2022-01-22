var currentPlayer = 1;
let winner;


const redPiece = '#FF5757';
const yellowPiece = '#FFDE59';


const boardRow = document.getElementsByTagName('tr');
const boardCol = document.getElementsByTagName('td');
const cells = document.getElementsByClassName('cell');
const restartBtn = document.querySelector('.rematch')


for (i = 0; i < boardCol.length; i++) {
    boardCol[i].addEventListener('click', (evt) => {
        console.log(`${evt.target.parentElement.rowIndex},${evt.target.cellIndex}`)
    });
};


function changePlayer(evt) {
    let column = evt.target.cellIndex;
    let row = [];

    for (i = 4; i > -1; i--) {
        if (boardRow[i].children[column].style.backgroundColor == 'grey') {
            row.push(boardRow[i].children[column]);
            if (currentPlayer === 1) {
                row[0].style.backgroundColor = '#FF5757';
                if (horizWin() || vertWin() || diag1Win() || diag2Win()) {

                    return alert('Player 1 wins');
                } else if (drawCheck()) {

                    return alert('DRAW!');
                } else {

                    return currentPlayer = 2;
                }
            } else {
                row[0].style.backgroundColor = '#FFDE59';
                if (horizWin() || vertWin() || diag1Win() || diag2Win()) {
                    return alert('Player 2 wins');

                } else if (drawCheck()) {
                    return alert('DRAW!');
                } else {

                    return currentPlayer = 1;
                }

            }
        }
    }

}

Array.prototype.forEach.call(boardCol, (cell) => {
    cell.addEventListener('click', changePlayer);
    cell.style.backgroundColor = 'grey';
});

function colorMatchCheck(one, two, three, four) {
    return (one === two && one === three && one === four && one !== 'grey' && one !== undefined);
}

function horizWin() {
    for (let row = 0; row < boardRow.length; row++) {
        for (let col = 0; col < 3; col++) {
            if (colorMatchCheck(
                boardRow[row].children[col].style.backgroundColor,
                boardRow[row].children[col + 1].style.backgroundColor,
                boardRow[row].children[col + 2].style.backgroundColor,
                boardRow[row].children[col + 3].style.backgroundColor)) {
                console.log("horizWin")
                return true;
            }
        }
    }

}

function vertWin() {
    for (let col = 0; col < 6; col++) {
        for (let row = 0; row < 2; row++) {
            if (colorMatchCheck(
                boardRow[row].children[col].style.backgroundColor,
                boardRow[row + 1].children[col].style.backgroundColor,
                boardRow[row + 2].children[col].style.backgroundColor,
                boardRow[row + 3].children[col].style.backgroundColor)) {
                console.log("vertWin")
                return true;
            }
        }
    }
}


function diag1Win() {
    for (let col = 0; col < 3; col++) {
        for (let row = 0; row < 2; row++) {
            if (colorMatchCheck(
                boardRow[row].children[col].style.backgroundColor,
                boardRow[row + 1].children[col + 1].style.backgroundColor,
                boardRow[row + 2].children[col + 2].style.backgroundColor,
                boardRow[row + 3].children[col + 3].style.backgroundColor)) {
                console.log("diag1Win")
                return true;
            }
        }
    }

}

function diag2Win() {
    for (let col = 0; col < 3; col++) {
        for (let row = 4; row > 2; row--) {
            if (colorMatchCheck(
                boardRow[row].children[col].style.backgroundColor,
                boardRow[row - 1].children[col + 1].style.backgroundColor,
                boardRow[row - 2].children[col + 2].style.backgroundColor,
                boardRow[row - 3].children[col + 3].style.backgroundColor)) {
                console.log("diag2Win")
                return true;
            }
        }
    }
}

function drawCheck() {

    let fullcell = []
    for (i = 0; i < boardCol.length; i++) {
        if (boardCol[i].style.backgroundColor !== 'grey') {
            fullcell.push(boardCol[i]);
        }
    }
    if (fullcell.length === boardCol.length) {
        return true;
    }


};


const refreshPage = () => {
    window.location.reload();
}

restartBtn.addEventListener('click', refreshPage)