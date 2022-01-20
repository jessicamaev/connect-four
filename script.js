//define const 
//player 1 //player 2
let winner, board
//player

const currentPlayer = 1;
const redPiece = 'player1';
const yellowPiece = 'Player2';


//selectors 

//columm
const boardRow = document.getElementsByTagName('tr');
//individual 
const boardColumn = document.getElementsByTagName('td');
const eachCell = document.querySelector('.boardCol');
//button
const reset = document.querySelector('rematch')


//log coordinates by index
for (let i = 0; i < boardColumn.length; i++) {
    boardColumn[i].addEventListener('click', (evt) => {
        console.log(`${evt.target.parentElement.rowIndex}, ${evt.target.cellIndex}`)
    });
}

//add event listener to each cell for change function 
Array.prototype.forEach.call(boardColumn, (cell) => {
    cell.addEventListener('click', changeColour);
    cell.style.backgroundColor = '#737373';
});

//column index 
function changeColour(evt) {
    let column = evt.target.cellIndex;
    let row = [];

    //check bottom row first
    for (let i = 4; i > -1; i--) {
        //each cell in each row

    }
}



