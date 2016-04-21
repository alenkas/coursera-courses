var colors = ["blue", "cyan", "gold", "green", "magenta", "orange", "red", "white", "yellow", "black", "brown", "purple"];
var guest_guess;
var guess = 0;
var random_color = Math.floor(Math.random() * colors.length);
var finished = false;
var body_tag = document.getElementsByTagName("body")[0];;

// colors.sort();
// console.log(colors);

function guessing_game() {
    // while (!finished) {
        // console.log("guessing");
		guest_guess = prompt("I am thinking one of these colors:\n\n" + "computer guess is " + random_color + " colors are " + "\n\n" + colors.sort());        
        // console.log(guest_guess);
        check_guess(guest_guess);
        guess++;
        // console.log(guess);
    // }
}

function check_guess() {
    if (guest_guess == NaN) {
        alert("Sorry, I don't recognize your color\n\nPlease try again");
        return false;
    }
    if (guest_guess == colors[random_color]) {
    	
    	console.log(body_tag);
        body_tag.style.backgroundColor = colors[random_color];
        // console.log(guess + " " + random_color);
        alert("Congratulations! You have guessed the color!\n\nIt took you " + guess + " guesses to finish the game!\n\nYou can see the colour in the background");
        finished = true;
        return true;
    } 
    if(guest_guess > colors[random_color]) {
        // console.log(guess + " " + random_color);
        alert("Sorry, your guess is not correct\n\nHint: your color is alphabetically is higher than mine.\n\nPlease try again");
        return false;
    }
    if(guest_guess < colors[random_color]){
    	// console.log(guess + " " + random_color);
        alert("Sorry, your guess is not correct\n\nHint:your color is alphabetically lower than mine.\n\nPlease try again");
    }
}

guessing_game();
