console.log("is this working?")
var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s","t","u", "v", "w", "x", "y", "z"]
var cGuess = alphabet[Math.floor(Math.random() * alphabet.length)]
var wins = 0
var losses = 0
var guessesLeft = 10
console.log(cGuess)

document.onkeyup=function(game){
    console.log(game.key)
    var uGuess = game.key
    
    if(uGuess === cGuess){
        console.log ("You Won!")
        wins++
        console.log ("Wins" + wins)
    }
    else if (uGuess !== cGuess){
        if (guessesLeft !== 0 ){
            guessesLeft--
            console.log("Guesses Left" + guessesLeft)
        }
        else if (guessesLeft === 0){
            console.log ("You Lost!")
            losses++
            console.log ("losses" + losses)
        }
    }
}