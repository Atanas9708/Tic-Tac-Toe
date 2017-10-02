function startGame() {
    document.turn = 'X';
    document.winner = null;
    document.full = 0;
}

function changeTurn(box) {
    if (document.winner !== null) {
        setMessage(`${document.winner} already won.`)
    } else if (box.innerText === '') {
        box.innerText = document.turn;
        nextMove();
    }

    if (document.full == 9 && document.winner === null){
        setMessage('No winner.');
    }
}

function nextMove() {
    if (checkForWinner(document.turn)) {
        setMessage(`Congratulations ${document.turn}, you won!`);
        document.winner = document.turn;
    } else if (document.turn === 'X') {
        document.turn = 'O';
        setMessage(`It's ${document.turn}'s turn.`);
    } else {
        document.turn = 'X';
        setMessage(`It's ${document.turn}'s turn.`);
    }

    document.full++;
}

function checkForWinner(move) {
    if (checkForMatches(1, 2, 3, move) ||
        checkForMatches(4, 5, 6, move) ||
        checkForMatches(7, 8, 9, move) ||
        checkForMatches(1, 4, 7, move) ||
        checkForMatches(2, 5, 8, move) ||
        checkForMatches(3, 6, 9, move) ||
        checkForMatches(1, 5, 9, move) ||
        checkForMatches(3, 5, 7, move)) {

        return true;
    }

    return false;
}

function checkForMatches(a, b, c, move) {
    if (getNumber(a) == move && getNumber(b) == move && getNumber(c) == move) {
        return true;
    }

    return false;
}

function getNumber(box) {
    return document.getElementById('s' + box).innerText;
}

function setMessage(message) {
    $('#message').text(message);
}

function restartGame() {
    Array.from($('table tr td')).forEach(x => x.innerText = "");
    document.winner = null;
    document.turn = "X";
    document.full = 0;
    setMessage("It's X's turn.");
}
