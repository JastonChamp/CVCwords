// List of CVC words
const words = [
    // Short 'A' sound
    'cat', 'bat', 'rat', 'hat', 'mat', 'sat', 'pat', 'fat', 'lap', 'tap',
    'pan', 'can', 'man', 'ran', 'fan', 'bad', 'mad', 'sad', 'dad', 'bag',
    'tag', 'lag', 'rag', 'jam', 'ram', 'dam', 'ham', 'cap', 'nap', 'sap',

    // Short 'E' sound
    'bet', 'met', 'let', 'pet', 'net', 'set', 'wet', 'pen', 'den', 'men',
    'red', 'led', 'fed', 'bed', 'beg', 'peg', 'leg', 'ten', 'hen', 'ben',
    'jet', 'vet', 'get',

    // Short 'I' sound
    'bit', 'fit', 'kit', 'sit', 'lit', 'hit', 'pit', 'tip', 'rip', 'zip',
    'win', 'bin', 'pin', 'sin', 'tin', 'fin', 'kid', 'lid', 'rid', 'mid',
    'big', 'dig', 'pig', 'wig', 'jig', 'fig', 'mix', 'fix', 'six', 'nix',

    // Short 'O' sound
    'hot', 'cot', 'dot', 'lot', 'pot', 'not', 'got', 'rot', 'log', 'dog',
    'bog', 'fog', 'hog', 'jog', 'mom', 'pop', 'mop', 'top', 'hop', 'cop',
    'bob', 'rob', 'sob', 'job', 'nod', 'pod', 'rod', 'cod', 'fox', 'box',

    // Short 'U' sound
    'but', 'cut', 'hut', 'nut', 'rug', 'bug', 'jug', 'mug', 'hug', 'bun',
    'fun', 'run', 'sun', 'gun', 'pun', 'cub', 'tub', 'sub', 'rub',
    'mud', 'bud', 'dug', 'lug', 'pug', 'gum'
];

const audioPath = './audio/'; // Path to folder containing letter sound audio files

let revealedWords = 0;
let usedWords = [];

const spinButton = document.getElementById('spinButton');
const wordBox = document.getElementById('wordBox');
const progressText = document.getElementById('progressText');
const progressBar = document.getElementById('progressBar');
const complimentBox = document.getElementById('complimentBox');

const spinSound = new Audio('spin-sound.mp3');

// Preload letter sounds
const letterSounds = {};
'abcdefghijklmnopqrstuvwxyz'.split('').forEach(letter => {
    letterSounds[letter] = new Audio(`${audioPath}${letter}.mp3`);
});

// Preload compliments
const compliments = ['Great job!', 'Fantastic!', 'Well done!', 'You did it!', 'Awesome!'];

// Voice selection
let selectedVoice = null;

function loadVoices() {
    return new Promise((resolve) => {
        let voices = speechSynthesis.getVoices();
        if (voices.length) {
            resolve(voices);
            return;
        }
        speechSynthesis.onvoiceschanged = () => {
            voices = speechSynthesis.getVoices();
            resolve(voices);
        };
    });
}

async function setVoice() {
    if ('speechSynthesis' in window) {
        const voices = await loadVoices();
        // Try to find a female voice
        selectedVoice = voices.find(voice => /female/i.test(voice.name));
        // If no female voice, fallback to default voice
        if (!selectedVoice) {
            selectedVoice = voices[0];
        }
    } else {
        alert('Speech Synthesis API is not supported on this browser.');
    }
}

function speak(text) {
    return new Promise((resolve) => {
        if (selectedVoice) {
            const utterance = new SpeechSynthesisUtterance(text);
            utterance.voice = selectedVoice;
            utterance.rate = 0.8;
            utterance.pitch = 1.1;
            utterance.volume = 0.9;
            utterance.onend = resolve;
            speechSynthesis.speak(utterance);
        } else {
            resolve();
        }
    });
}

function isVowel(letter) {
    return 'aeiou'.includes(letter.toLowerCase());
}

function updateProgress() {
    revealedWords = usedWords.length;
    progressText.textContent = `${revealedWords} / ${words.length} Words Revealed`;
    progressBar.value = (revealedWords / words.length) * 100;
}

function giveCompliment() {
    const compliment = compliments[Math.floor(Math.random() * compliments.length)];
    complimentBox.textContent = compliment;
    complimentBox.style.color = 'green';
    complimentBox.style.fontSize = '30px';
    return speak(compliment);
}

async function revealWord(word) {
    wordBox.innerHTML = ''; // Clear previous word
    for (const letter of word) {
        const span = document.createElement('span');
        span.textContent = letter;
        if (isVowel(letter)) {
            span.style.color = 'red';
        }
        wordBox.appendChild(span);
        // Play letter sound
        const letterSound = letterSounds[letter.toLowerCase()];
        if (letterSound) {
            letterSound.currentTime = 0;
            letterSound.play();
        }
        await new Promise(resolve => setTimeout(resolve, 1000)); // Wait before next letter
    }
    await new Promise(resolve => setTimeout(resolve, 1000)); // Wait before speaking the word
    await speak(word);
    await giveCompliment();
    updateProgress();
}

function getRandomWord() {
    if (usedWords.length === words.length) {
        usedWords = []; // Reset if all words have been used
    }
    let word;
    do {
        word = words[Math.floor(Math.random() * words.length)];
    } while (usedWords.includes(word));
    usedWords.push(word);
    return word;
}

async function spin() {
    spinButton.disabled = true; // Prevent multiple clicks
    spinSound.currentTime = 0;
    spinSound.play();
    wordBox.classList.add('shake');
    setTimeout(() => {
        wordBox.classList.remove('shake');
    }, 500);
    complimentBox.textContent = ''; // Clear compliment
    const word = getRandomWord();
    await revealWord(word);
    spinButton.disabled = false;
}

// Initialize
setVoice();
spinButton.addEventListener('click', spin);
