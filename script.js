let thingy = function () {



/* Loops have 3 parts: CONTROL VARIABLE; CONTROL BOOLEAN EXPRESSION; CONTROL INCREMENT/DECREMENT/UPDATE
    let count = 0;
    CONTROL BOOLEAN EXPRESSION - boolean expression using the control variable which should at some point evaluate to false

    CONTROL UPDATE: assigning a new value to the control variable INSIDE the loop so that the boolean expression eventually evaluates to false

 */
//Computer picks a #
    let restart = "Yes";
    while(restart === "Yes") {
        let computernum = Math.floor((Math.random() * 10) + 1);



        //Alert to get players guess
        let playersGuess = parseInt(prompt("Guess a number between 1 and 10."), 10);
        while (playersGuess !== computernum){
            if (playersGuess > computernum){
                playersGuess = parseInt(prompt("Too High, guess a again."), 10);
            } else
                playersGuess = parseInt(prompt("Too Low, guess again."), 10);
    }
    alert("YOU GUESSED IT!!!");

    restart = prompt("Would you like to play again? Type 'Yes' or 'No' (case sensitive)");

    }
};
let otherthing = function () {

    //Same program with a do-while loop
    let restart;


    do {
        let computernum = Math.floor((Math.random()*10)+1);
        let playersGuess;

        do {
            let playersGuess = parseInt(prompt("Guess a number between 1 and 10."),10);

            if(playersGuess > computernum ) {
                playersGuess = parseInt(prompt("Too High, guess again."), 10);
            }else
                playersGuess = parseInt(prompt("Too Low, guess again. "), 10);

        }while (playersGuess != computernum);

        alert("YOU GUESSED IT!!!");
        restart = prompt("Would you like to play again? Type 'Yes' or 'No' (case sensitive)");

    }while(restart === "Yes");



};











        //Compare guess to #
        //if higher - Alert too high and then get player's guess - repeat
        //if lower - Alert too low and then get player's guess - repeat
        //if equal - Alert you win then ask to restart
    // if yes - repeat from beginning
    //if no - set computer on fire and escape

