const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let passwordOne = document.getElementById("pass-one")
let passwordTwo = document.getElementById("pass-two")

let randomCharacterOne = []
let randomCharacterTwo = []

function randomize() {
        for (let i = 0; i < 9; i++) {
            let pickRandomCharacterOne = Math.floor(Math.random() * characters.length)
            randomCharacterOne.push(characters[pickRandomCharacterOne])
            
            let pickRandomCharacterTwo = Math.floor(Math.random() * characters.length)
            randomCharacterTwo.push(characters[pickRandomCharacterTwo])
        }
        
}

function generateP() {
    randomize()
for (let i = 0; i < randomCharacterOne.length; i++) {
    passwordOne.textContent = randomCharacterOne.join("")
    passwordTwo.textContent = randomCharacterTwo.join("")
}
randomCharacterOne.splice(0, randomCharacterOne.length)
randomCharacterTwo.splice(0, randomCharacterTwo.length)
          
    
}