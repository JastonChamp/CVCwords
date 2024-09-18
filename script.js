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
    'dug', 'fun', 'gum', 'gun', 'hug', 'hum', 'hut', 'jog', 'jug', 'mud',
];

const compliments = [
    "Great Job!", "Well Done!", "Keep Going!", "You're Awesome!", "Fantastic!"
];

let wordIndex = 0;
let wordsRevealed = 0;
const totalWords = words.length;

const wordBox = document.getElementById('wheel');
const spinButton = document.getElementById('spinButton');
const progressBar = document.getElementById('progressBar');
const progressText = document.getElementById('progressText');

function getRandomCompliment() {
    return compliments[Math.floor(Math.random() * compliments.length)];
}

function updateProgress() {
    wordsRevealed++;
    const progressPercentage = (wordsRevealed / totalWords) * 100;
    progressBar.style.width = progressPercentage + '%';
    progressText.textContent = `${wordsRevealed} / ${totalWords} Words Revealed`;
}

function speakCompliment(compliment) {
    const utterance = new SpeechSynthesisUtterance(compliment);
    speechSynthesis.speak(utterance);
}

function speakWord(word) {
    const utterance = new SpeechSynthesisUtterance(word);
    speechSynthesis.speak(utterance);
}

function revealWordLetterByLetter(word) {
    let index = 0;
    wordBox.textContent = '';  // Clear the word box
    wordBox.classList.remove('shake');
    
    const revealInterval = setInterval(() => {
        wordBox.textContent += word[index];
        index++;
        if (index >= word.length) {
            clearInterval(revealInterval);
            const compliment = getRandomCompliment();
            setTimeout(() => {
                wordBox.textContent += ` ${compliment}`;
                wordBox.classList.add('shake');  // Add shake effect
                speakCompliment(compliment);
                speakWord(word);  // Speak the word after reveal
            }, 1000);  // Delay before speaking compliment
        }
    }, 500);  // Adjust speed of letter-by-letter reveal here
}

spinButton.addEventListener('click', () => {
    if (wordIndex >= totalWords) {
        wordIndex = 0;
    }
    const word = words[wordIndex];
    wordIndex++;
    revealWordLetterByLetter(word);
    updateProgress();
});
