const playButton = document.getElementById('play-button')
const pauseButton = document.getElementById('pause-button')
const stopButton = document.getElementById('stop-button')


const textInput = document.getElementById('text')
const speedInput = document.getElementById('speed')
let currentCharacter

playButton.addEventListener('click', () => {
  playText(textInput.value)
})
pauseButton.addEventListener('click', pauseText)
stopButton.addEventListener('click', stopText)
speedInput.addEventListener('input', () => {
  stopText()
  playText(utterance.text.substring(currentCharacter))
})

const utterance = new SpeechSynthesisUtterance()
utterance.addEventListener('end', () => {
  textInput.disabled = false
})
utterance.addEventListener('boundary', e => {
  currentCharacter = e.charIndex
})

function playText(text) {
    if (speechSynthesis.paused && speechSynthesis.speaking) {

    return speechSynthesis.resume()
  }
  if (speechSynthesis.speaking) return
  utterance.text = text
  utterance.rate = speedInput.value || 1
  textInput.disabled = true
  speechSynthesis.speak(utterance)
}

// Pauses Speech
function pauseText() {
  if (speechSynthesis.speaking) speechSynthesis.pause()
}
// Stops and Resets Speech
function stopText() {
  speechSynthesis.resume()
  speechSynthesis.cancel()
}



function countWords() {
 
    // Get the input text value
    var text = document
        .getElementById("text").value;

    // Initialize the word counter
    var numWords = 0;

    // Loop through the text
    // and count spaces in it
    for (var i = 0; i < text.length; i++) {
        var currentCharacter = text[i];

        // Check if the character is a space
        if (currentCharacter == " ") {
            numWords += 1;
        }
    }

    // Add 1 to make the count equal to
    // the number of words
    // (count of words = count of spaces + 1)
    numWords += 1;

    // Display it as output
    document.getElementById("show")
        .innerHTML = numWords;
}

