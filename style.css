const words = [
    'hop', 'nut', 'bed', 'cat', 'dog', 'pen', 'run', 'bug', 'fox', 'hat',
    'jam', 'net', 'map', 'pig', 'tub', 'cup', 'van', 'wax', 'win', 'box',
    'bat', 'bet', 'bit', 'bot', 'but', 'cut', 'dot', 'fit', 'gut', 'hit',
    'hot', 'jet', 'kit', 'lot', 'met', 'not', 'pat', 'pot', 'rat', 'sat',
    'set', 'sit', 'tan', 'tap', 'tin', 'top', 'wet', 'wit', 'yet', 'zoo',
    'dim', 'dip', 'lip', 'lit', 'mix', 'mop', 'nip', 'pan', 'pin', 'pit',
    'pod', 'pop', 'rim', 'rip', 'rot', 'sob', 'sum', 'sun', 'tap', 'ten',
    'tip', 'tug', 'vet', 'wed', 'wig', 'win', 'yam', 'yen', 'yip',
    'bud', 'bun', 'bus', 'cob', 'cod', 'cog', 'con', 'cop', 'cub', 'dud',
    'dug', 'fun', 'gum', 'gun', 'hug', 'hum', 'hut', 'jog', 'jug', 'mud'
];

// Function to get a random compliment
function getRandomCompliment() {
    const compliments = ['Great job!', 'Well done!', 'Fantastic!', 'You did it!', 'Amazing!'];
    return compliments[Math.floor(Math.random() * compliments.length)];
}

// Function to check if a letter is a vowel
function isVowel(letter) {
    return 'aeiou'.includes(letter);
}

// Function to reveal a word letter by letter
function revealWordLetterByLetter(word) {
    let index = 0;
    wordBox.innerHTML = '';  // Clear the word box
    const complimentText = document.getElementById('complimentText');
    complimentText.textContent = '';  // Clear previous compliment
    wordBox.classList.remove('shake');
    
    const revealInterval = setInterval(() => {
        const letterSpan = document.createElement('span');
        letterSpan.textContent = word[index];
        if (isVowel(word[index])) {
            letterSpan.style.color = 'red';  // Red color for vowels
        } else {
            letterSpan.style.color = 'black';  // Black color for consonants
        }
        wordBox.appendChild(letterSpan);
        index++;
        if (index >= word.length) {
            clearInterval(revealInterval);
            const compliment = getRandomCompliment();
            setTimeout(() => {
                complimentText.textContent = compliment;  // Display compliment in its own div
                wordBox.classList.add('shake');  // Add shake effect
                speakCompliment(compliment);
                speakWord(word);  // Speak the word after reveal
            }, 1000);  // Delay before speaking compliment
        }
    }, 500);  // Adjust speed of letter-by-letter reveal here
}

// Function to speak the word using the Web Speech API
function speakWord(word) {
    const utterance = new SpeechSynthesisUtterance(word);
    window.speechSynthesis.speak(utterance);
}

// Function to speak the compliment
function speakCompliment(compliment) {
    const utterance = new SpeechSynthesisUtterance(compliment);
    window.speechSynthesis.speak(utterance);
}

// Selecting elements from the DOM
const wordBox = document.querySelector('.wheel');
const spinButton = document.getElementById('spinButton');
let progress = 0;  // Track the number of words revealed
const progressBar = document.getElementById('progressBar').firstElementChild;
const progressText = document.getElementById('progressText');

// Function to update the progress bar
function updateProgress() {
    progress++;
    progressBar.style.width = `${(progress / words.length) * 100}%`;
    progressText.textContent = `${progress} / ${words.length} Words Revealed`;
}

// Event listener for the spin button
spinButton.addEventListener('click', () => {
    const randomWord = words[Math.floor(Math.random() * words.length)];
    revealWordLetterByLetter(randomWord);
    updateProgress();
});
