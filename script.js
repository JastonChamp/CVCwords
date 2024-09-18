const words = [
    'cat', 'dog', 'bat', 'rat', 'hat', 'log', 'jug', 'mop', 'top', 'pan',
    'fan', 'man', 'can', 'hop', 'pop', 'sap', 'tap', 'zip', 'lip', 'rip',
    'sun', 'fun', 'run', 'tin', 'pin', 'win', 'kit', 'bit', 'fit', 'sit',
    'net', 'let', 'bet', 'pet', 'dot', 'lot', 'pot', 'rot', 'cot', 'got',
    'hut', 'but', 'cut', 'nut', 'rug', 'bug', 'jug', 'mud', 'bud', 'rub',
    'bag', 'tag', 'lag', 'rag', 'sip', 'tip', 'lip', 'dip', 'map', 'nap',
    'cap', 'lap', 'gap', 'zap', 'jam', 'ram', 'bam', 'ham', 'cab', 'jab',
    'dab', 'lab', 'sad', 'lad', 'bad', 'mad', 'pad', 'bed', 'red', 'led',
    'fed', 'wed', 'peg', 'leg', 'beg', 'ten', 'hen', 'pen', 'men', 'den',
    'hen', 'bin', 'fin', 'sin', 'tin', 'win', 'kid', 'rid', 'bid', 'hid',
    'rod', 'cod', 'pod', 'nod', 'mud', 'tug', 'rug', 'jug', 'bug', 'hug'
];

let revealedWords = 0;
let totalWords = words.length;

// Sounds
const revealSound = new Audio('reveal-sound.mp3'); // Make sure to upload this file
const complimentSound = new Audio('compliment-sound.mp3'); // Optional if you have a compliment sound

// Update the progress bar
function updateProgress() {
    const progress = document.getElementById('progress');
    const progressText = document.getElementById('progressText');
    revealedWords++;
    const percent = (revealedWords / totalWords) * 100;
    progress.style.width = percent + '%';
    progressText.textContent = `${revealedWords} / ${totalWords} Words Revealed`;
}

// Show a compliment
function showCompliment() {
    const compliments = ['Great!', 'Well Done!', 'Fantastic!', 'Awesome!', 'You Did It!'];
    const complimentText = document.getElementById('complimentText');
    complimentText.textContent = compliments[Math.floor(Math.random() * compliments.length)];
    complimentText.classList.remove('hidden');
    // Play the compliment sound if available
    complimentSound.play();
    setTimeout(() => {
        complimentText.classList.add('hidden');
    }, 1500); // Hide after 1.5 seconds
}

// Check if the character is a vowel
function isVowel(char) {
    return ['a', 'e', 'i', 'o', 'u'].includes(char);
}

// Spin the word
function spin() {
    const wordDisplay = document.getElementById('wheel');
    const randomWord = words[Math.floor(Math.random() * words.length)];
    wordDisplay.innerHTML = ''; // Clear previous word
    let delay = 0;

    // Reveal letters one by one
    for (let i = 0; i < randomWord.length; i++) {
        setTimeout(() => {
            const letterSpan = document.createElement('span');
            letterSpan.textContent = randomWord[i];
            // Color vowels in red
            if (isVowel(randomWord[i])) {
                letterSpan.style.color = 'red';
            }
            wordDisplay.appendChild(letterSpan);
            // Play the reveal sound
            revealSound.play();
        }, delay += 300); // Delay for letter reveal
    }

    // After all letters are revealed, give a compliment and update progress
    setTimeout(() => {
        showCompliment();
        updateProgress();
    }, delay + 500); // Compliment after all letters are revealed
}

// Spin button event listener
document.getElementById('spinButton').addEventListener('click', spin);
