function roll() {
    let counter = 0;
    let id = setInterval(frame, 10);
    function frame() {
        if (counter == 40) {
            clearInterval(id);
        }
        else {

            // First Rolling
            var firstRollValue = Math.floor(Math.random() * 6) + 1;
            var rollImage = '<img src="image/' + firstRollValue + '.png" alt="diceImage ' + firstRollValue + ' ">'
            document.getElementById("result").innerHTML = rollImage;

            // Second Rolling
            var secondRollValue = Math.floor(Math.random() * 6) + 1;
            var rollImage = '<img src="image/' + secondRollValue + '.png" alt="diceImage">'
            document.getElementById("resultNext").innerHTML = rollImage;

            

            // Show the winner
            if (firstRollValue > secondRollValue) {
                document.getElementById("showWinner").innerHTML = "First Player wins";
            }
            else if (secondRollValue > firstRollValue) {
                document.getElementById("showWinner").innerHTML = "Second Player Wins";
            }
            else {
                document.getElementById("showWinner").innerHTML = "Player 1 and Player 2 are Equal";
            }
        }
        counter++;
    }
}