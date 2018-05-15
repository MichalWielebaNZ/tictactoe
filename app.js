var winner = document.getElementById('winner');
var board;
var clickCount;

//Click-handler
function handleClick(e) {
    var mark
    console.log(clickCount)
    if (clickCount % 2 === 0 ) {
        mark = "O"
    } else {
        mark = "X"
    } 
     document.getElementById('blop').play();
    
    e.target.innerHTML = mark
    if (e.target.id === '1') board[0][0] = mark
    if (e.target.id === '2') board[0][1] = mark
    if (e.target.id === '3') board[0][2] = mark
    if (e.target.id === '4') board[1][0] = mark
    if (e.target.id === '5') board[1][1] = mark
    if (e.target.id === '6') board[1][2] = mark
    if (e.target.id === '7') board[2][0] = mark
    if (e.target.id === '8') board[2][1] = mark
    if (e.target.id === '9') board[2][2] = mark
    clickCount++;
    
    
    // rows
    if (board[0][0] && board[0][0] === board[0][1] && board[0][2] === board[0][1]) { 
        winner.textContent = 'Player ' + board[0][0] + ' won the game!';
        document.getElementById('tada').play();
    }
    if (board[1][0] && board[1][0] === board[1][1] && board[1][2] === board[1][1]) { 
        winner.textContent = 'Player ' + board[1][0] + ' won the game!';
        document.getElementById('tada').play();
    }
    if (board[2][0] && board[2][0] === board[2][1] && board[2][2] === board[2][1]) { 
        winner.textContent = 'Player ' + board[2][0] + ' won the game!';
        document.getElementById('tada').play();
    }
    // cols
    if (board[0][0] && board[0][0] === board[1][0] && board[1][0] === board[2][0]) { 
        winner.textContent = 'Player ' + board[0][0] + ' won the game!';
        document.getElementById('tada').play();
    }
    if (board[0][1] && board[0][1] === board[1][2] && board[1][2] === board[2][1]) { 
        winner.textContent = 'Player ' + board[0][1] + ' won the game!';
        document.getElementById('tada').play();
    }
    if (board[0][2] && board[0][2] === board[1][2] && board[1][2] === board[2][2]) { 
        winner.textContent = 'Player ' + board[0][2] + ' won the game!';
        document.getElementById('tada').play();
    }
    // diagos
    if (board[0][0] && board[0][0] === board[1][1] && board[1][1] === board[2][2]) { 
        winner.textContent = 'Player ' + board[0][0] + ' won the game!';
        document.getElementById('tada').play();
    }
    if (board[0][2] && board[0][2] === board[1][1] && board[1][1] === board[2][0]) { 
        winner.textContent = 'Player ' + board[0][2] + ' won the game!';
        document.getElementById('tada').play();
    }

    e.target.removeEventListener(e.type, arguments.callee);
}

//Game initiation

function init() {
    board = [
        ['', '', ''],
        ['', '', ''],
        ['', '', '']
    ];
    clickCount = 0;
    for (var i = 1; i <=9; i++) {
        document.getElementById(i).addEventListener('click', handleClick)
    }
}

//Reset function

function reset(){
    for (var i = 1; i <= 9; i++){
        var element = document.getElementById(i)
        element.textContent = '';
        element.removeEventListener('click', handleClick);
    }
    init();
    winner.textContent = '';
    document.getElementById('whip').play();
}

document.getElementById('reset').addEventListener('click', reset)

init();





