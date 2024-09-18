const words = [
    // Short A
    'bat', 'bag', 'cap', 'cat', 'fan', 'fat', 'mat', 'man', 'nap', 'rat', 
    'sat', 'van', 'jam', 'lag', 'ram', 'cab', 'dam', 'gap', 'lap', 'map',
    // Short E
    'bed', 'beg', 'bet', 'den', 'jet', 'leg', 'let', 'net', 'pen', 'red', 
    'vet', 'web', 'men', 'pet', 'peg', 'fed', 'hen', 'met', 'ten', 'wed',
    // Short I
    'bit', 'dig', 'fit', 'hit', 'kit', 'lid', 'mix', 'nip', 'pig', 'rid', 
    'sit', 'wig', 'dim', 'fin', 'lit', 'pin', 'bin', 'zip', 'lip', 'tip', 
    // Short O
    'bog', 'dot', 'dog', 'fog', 'hot', 'job', 'log', 'mob', 'not', 'pot', 
    'rob', 'top', 'cot', 'dot', 'got', 'jot', 'lot', 'rot', 'sot', 'hop', 
    // Short U
    'bun', 'cub', 'fun', 'gun', 'hug', 'jug', 'mud', 'nut', 'pup', 'rug', 
    'sun', 'tub', 'bud', 'cut', 'dug', 'fun', 'gut', 'hut', 'mug', 'run'
];

let wordIndex = 0;
let wordsRevealed = 0;

function revealWord() {
    const word = words[wordIndex];
    const letters = word.split("");
    const wordContainer = document.querySelector('.wheel');
    wordContainer.innerHTML = ''; // Clear the container before showing new letters

    let letterIndex = 0;
    const revealInterval = setInterval(() => {
        if (letterIndex < letters.length) {
            const span = document.createElement('span');
            span.textContent = letters[letterIndex];
            if (letters[letterIndex] === 'a' || letters[letterIndex] === 'e' || letters[letterIndex] === 'i' || letters[letterIndex] === 'o' || letters[letterIndex] === 'u') {
                span.style.color = 'red'; // Highlight vowels in red
            }
            wordContainer.appendChild(span);
            letterIndex++;
        } else {
            clearInterval(revealInterval);
            playWordAudio(word); // Play the word audio after all letters are revealed
        }
    }, 500); // Adjust the timing if needed
}

function playWordAudio(word) {
    const audio = new SpeechSynthesisUtterance(word);
    audio.lang = 'en-US';
    window.speechSynthesis.speak(audio);
}

function updateProgress() {
    wordsRevealed++;
    const progressBar = document.getElementById('progressBar');
    const progressText = document.getElementById('progressText');
    const progressValue = (wordsRevealed / words.length) * 100;
    progressBar.value = progressValue;
    progressText.textContent = `${wordsRevealed} / ${words.length} Words Revealed`;
}

document.getElementById('spinButton').addEventListener('click', () => {
    revealWord();
    wordIndex = (wordIndex + 1) % words.length; // Move to the next word or loop back to the first
    updateProgress(); // Update the progress bar and word count
});
