// Word groups categorized by vowel sounds
const wordGroups = {
    a: [
        'cat', 'bat', 'rat', 'hat', 'mat', 'sat', 'pat', 'fat', 'lap', 'tap',
        'pan', 'can', 'man', 'ran', 'fan', 'bad', 'mad', 'sad', 'dad', 'bag',
        'tag', 'lag', 'rag', 'jam', 'ram', 'dam', 'ham', 'cap', 'nap', 'sap',
    ],
    e: [
        'bet', 'met', 'let', 'pet', 'net', 'set', 'wet', 'pen', 'den', 'men',
        'red', 'led', 'fed', 'bed', 'beg', 'peg', 'leg', 'ten', 'hen', 'ben',
        'jet', 'vet', 'get',
    ],
    i: [
        'bit', 'fit', 'kit', 'sit', 'lit', 'hit', 'pit', 'tip', 'rip', 'zip',
        'win', 'bin', 'pin', 'sin', 'tin', 'fin', 'kid', 'lid', 'rid', 'mid',
        'big', 'dig', 'pig', 'wig', 'jig', 'fig', 'mix', 'fix', 'six', 'nix',
    ],
    o: [
        'hot', 'cot', 'dot', 'lot', 'pot', 'not', 'got', 'rot', 'log', 'dog',
        'bog', 'fog', 'hog', 'jog', 'mom', 'pop', 'mop', 'top', 'hop', 'cop',
        'bob', 'rob', 'sob', 'job', 'nod', 'pod', 'rod', 'cod', 'fox', 'box',
    ],
    u: [
        'but', 'cut', 'hut', 'nut', 'rug', 'bug', 'jug', 'mug', 'hug', 'bun',
        'fun', 'run', 'sun', 'gun', 'pun', 'cub', 'tub', 'sub', 'rub',
        'mud', 'bud', 'dug', 'lug', 'pug', 'gum',
    ],
};

// Merge all words into one array for 'all' selection
const allWords = Object.values(wordGroups).flat();

let revealedWords = 0;
let usedWords = [];
let score = 0;

const spinButton = document.getElementById('spinButton');
const wordBox = document.getElementById('wordBox');
const progressText = document.getElementById('progressText');
const progressFill = document.getElementById('progressFill');
const complimentBox = document.getElementById('complimentBox');
const vowelSelector = document.getElementById('vowelSelector');
const scoreText = document.getElementById('scoreText');

// Compliments
const compliments = ['Great job!', 'Fantastic!', 'Well done!', 'You did it!', 'Awesome!'];

// Function to check if a letter is a vowel
function isVowel(letter) {
    return 'aeiou'.includes(letter.toLowerCase());
}

// Update the score
function updateScore() {
    score += 10; // Add points per word
    scoreText.textContent = `Score: ${score}`;
}

// Update progress indicators
function updateProgress() {
    revealedWords = usedWords.length;
    const totalWords = getAvailableWords().length;
    const progressPercentage = (revealedWords / totalWords) * 100;
    progressText.textContent = `${revealedWords} / ${totalWords} Words Revealed`;

    progressFill.style.width = `${progressPercentage}%`;
}

// Give a compliment (visual only)
function giveCompliment() {
    const compliment = compliments[Math.floor(Math.random() * compliments.length)];
    complimentBox.textContent = compliment;
    complimentBox.style.color = 'green';
    complimentBox.style.fontSize = '30px';
    complimentBox.style.opacity = '1'; // Fade in

    // Fade out after a delay
    setTimeout(() => {
        complimentBox.style.opacity = '0';
    }, 2000);
}

// Reveal the word with animations
async function revealWord(word) {
    wordBox.innerHTML = ''; // Clear previous word

    for (const letter of word) {
        const span = document.createElement('span');
        span.textContent = letter;
        if (isVowel(letter)) {
            span.style.color = 'red';
        }
        wordBox.appendChild(span);
    }

    // Wait for letter animations to complete
    await new Promise(resolve => setTimeout(resolve, 2500));

    // Give a compliment
    giveCompliment();

    // Update score
    updateScore();

    // Update progress
    updateProgress();
}

// Get available words based on selected vowel
function getAvailableWords() {
    const selectedVowel = vowelSelector.value;
    if (selectedVowel === 'all') {
        return allWords;
    }
    return wordGroups[selectedVowel];
}

// Get a random word from available words
function getRandomWord() {
    const availableWords = getAvailableWords();

    if (usedWords.length >= availableWords.length) {
        usedWords = [];
    }

    let word;
    do {
        word = availableWords[Math.floor(Math.random() * availableWords.length)];
    } while (usedWords.includes(word));
    usedWords.push(word);
    return word;
}

// Spin function to start the word reveal process
async function spin() {
    spinButton.disabled = true; // Prevent multiple clicks
    wordBox.classList.add('shake');
    setTimeout(() => {
        wordBox.classList.remove('shake');
    }, 500);
    complimentBox.textContent = ''; // Clear compliment
    complimentBox.style.opacity = '0'; // Reset opacity
    const word = getRandomWord();
    try {
        await revealWord(word);
    } catch (error) {
        console.error('Error during word reveal:', error);
    }
    spinButton.disabled = false;
}

// Event listener for vowel selection change
vowelSelector.addEventListener('change', () => {
    usedWords = [];
    revealedWords = 0;
    updateProgress();
});

// Initialize
spinButton.addEventListener('click', spin);

// Initial progress update
updateProgress();

// Initial score update
scoreText.textContent = `Score: ${score}`;
