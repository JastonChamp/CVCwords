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

const audioPath = './audio/'; // Path to folder containing letter sound audio files

let revealedWords = 0;
let usedWords = [];

const spinButton = document.getElementById('spinButton');
const wordBox = document.getElementById('wordBox');
const progressText = document.getElementById('progressText');
const progressBar = document.getElementById('progressBar');
const complimentBox = document.getElementById('complimentBox');
const vowelSelector = document.getElementById('vowelSelector');

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
    const totalWords = getAvailableWords().length;
    progressText.textContent = `${revealedWords} / ${totalWords} Words Revealed`;
    progressBar.value = (revealedWords / totalWords) * 100;
}

function giveCompliment() {
    const compliment = compliments[Math.floor(Math.random() * compliments.length)];
    complimentBox.textContent = compliment;
    complimentBox.style.color = 'green';
    complimentBox.style.fontSize = '30px';
    complimentBox.style.opacity = '1'; // Fade in
    return speak(compliment).then(() => {
        // Fade out after a delay
        setTimeout(() => {
            complimentBox.style.opacity = '0';
        }, 2000);
    });
}

async function revealWord(word) {
    wordBox.innerHTML = ''; // Clear previous word
    const letterSpans = [];

    for (const letter of word) {
        const span = document.createElement('span');
        span.textContent = letter;
        if (isVowel(letter)) {
            span.style.color = 'red';
        }
        span.style.opacity = '0'; // Start hidden
        wordBox.appendChild(span);
        letterSpans.push(span);
    }

    // Reveal letters one by one with highlighting and play individual letter sounds
    for (let i = 0; i < letterSpans.length; i++) {
        const span = letterSpans[i];

        // Reveal the letter with a fade-in effect
        span.style.opacity = '1';

        // Highlight the letter
        span.classList.add('highlight');

        // Play the sound for the current letter
        const letter = span.textContent.toLowerCase();
        const letterSound = letterSounds[letter];
        if (letterSound) {
            letterSound.currentTime = 0;
            letterSound.play();
        }

        // Wait for the letter sound to finish before proceeding
        await new Promise(resolve => {
            letterSound.onended = resolve;
        });

        // Remove highlight after sound plays
        span.classList.remove('highlight');

        // Short delay before revealing the next letter
        await new Promise(resolve => setTimeout(resolve, 500));
    }

    // Wait before speaking the whole word
    await new Promise(resolve => setTimeout(resolve, 1000));

    // Speak the whole word
    await speak(word);

    // Give a compliment
    await giveCompliment();

    // Update progress
    updateProgress();
}

function getAvailableWords() {
    const selectedVowel = vowelSelector.value;
    if (selectedVowel === 'all') {
        return allWords;
    }
    return wordGroups[selectedVowel];
}

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

async function spin() {
    spinButton.disabled = true; // Prevent multiple clicks
    spinSound.currentTime = 0;
    spinSound.play();
    wordBox.classList.add('shake');
    setTimeout(() => {
        wordBox.classList.remove('shake');
    }, 500);
    complimentBox.textContent = ''; // Clear compliment
    complimentBox.style.opacity = '0'; // Reset opacity
    const word = getRandomWord();
    await revealWord(word);
    spinButton.disabled = false;
}

// Event listener for vowel selection change
vowelSelector.addEventListener('change', () => {
    usedWords = [];
    revealedWords = 0;
    updateProgress();
});

// Initialize
setVoice();
spinButton.addEventListener('click', spin);
