let randomNumber = Math.floor(Math.random() * 10) + 1;
let attempts = 0;
let userGuess = Number(prompt("Guess a random number between 1 + 10, or 999 to exit: ")); // Prompt user for a number between 1 and 10, or type 999 to exit.

// Create while loop that continues for as long as the user guesses are incorrect.
while(userGuess != randomNumber){
    
    // Loop should exit if user enters 999 and not display "Too high!"
    if(userGuess == "999"){
        break;
    }else if(userGuess < randomNumber){   // If the guess is too low, the user should be promped "Too low!" and be able to guess again.
        alert("Too Low!");
    } else if(userGuess > randomNumber){ // If the guess is too high, the user should be promped 'Too high!" and be able to guess again.
        alert("Too High!");
    } else if(userGuess == randomNumber){
        alert(`Hooray! You guessed the number in ${attempts} guesses!!`);
        break;
    }else{ // If anything else is entered, the user should be prompted that their input is invalid and  to guess again.
        alert("Input Invalid");
    }
    // Loop should count the number of guesses.
    attempts += 1;
    userGuess = Number(prompt("Guess a random number between 1 + 10, or 999 to exit: ")); // Prompt user for a number between 1 and 10, or type 999 to exit.
}

// If the guess is correct, the user should be alerted of their win and 
// be told the number of guesses they made.
if(userGuess == randomNumber){
    alert(`Hooray! You guessed the number in ${attempts} guesses!!`);
}else{
    alert(`You tried. You guessed ${attempts} time(s)!`);
}

