// =====================
// Word Groups Configuration
// =====================
const wordGroups = {
    cvc: {
        a: ['bat', 'bag', 'bad', 'cab', 'cap', 'cat', 'dad', 'dam', 'fad', 'fan'],
        e: ['bed', 'beg', 'ben', 'bet', 'den', 'fed', 'get', 'hen', 'jet'],
        i: ['bib', 'bid', 'big', 'bin', 'bit', 'dig', 'dip', 'fig', 'fin', 'fit'],
        o: ['bob', 'bog', 'cod', 'cob', 'cop', 'cot', 'dog', 'dot', 'fog', 'god'],
        u: ['bun', 'bud', 'bug', 'bus', 'but', 'cub', 'cud', 'cup', 'cut', 'dug']
    },
    ccvc: {
        a: ['brag', 'clap', 'crab', 'drag', 'flag', 'flap', 'glad', 'grab', 'plan', 'slam'],
        e: ['bled', 'bred', 'fled', 'fret', 'glen', 'grep', 'sped', 'stem', 'trem'],
        i: ['brig', 'brim', 'clip', 'crib', 'drip', 'flip', 'glib', 'grim', 'grip'],
        o: ['bloc', 'blob', 'blog', 'clog', 'crop', 'drop', 'frog', 'glob', 'plot'],
        u: ['blub', 'club', 'crub', 'drub', 'drum', 'flub', 'glum', 'grub', 'plug']
    },
    cvcc: {
        a: ['band', 'bank', 'damp', 'fang', 'gang', 'hand', 'hang', 'land', 'lamp'],
        e: ['bend', 'desk', 'felt', 'fend', 'help', 'jest', 'kept', 'lend', 'mend'],
        i: ['dink', 'find', 'film', 'gild', 'gimp', 'hind', 'hilt', 'hint', 'jilt'],
        o: ['bond', 'colt', 'comb', 'cold', 'fond', 'fold', 'gold', 'gong', 'holt'],
        u: ['bunk', 'bump', 'bust', 'dump', 'dunk', 'fund', 'funk', 'gust', 'gunk']
    },
    ccvcc: {
        a: ['brand', 'blank', 'clamp', 'cramp', 'crank', 'draft', 'drank', 'flank'],
        e: ['blend', 'blent', 'dreck', 'dress', 'press', 'slept', 'smelt', 'spent'],
        i: ['blink', 'brink', 'clink', 'clint', 'crimp', 'crisp', 'drink', 'drift'],
        o: ['block', 'clomp', 'clonk', 'croft', 'cross', 'flock', 'front', 'frost'],
        u: ['blunt', 'brunt', 'clump', 'clunk', 'crust', 'drunk', 'flung', 'frump']
    },
    digraphs: {
        sh: ['ship', 'fish', 'shop', 'wish', 'bash', 'dash', 'gush', 'mash', 'rash'],
        th: ['this', 'that', 'math', 'with', 'then'],
        ch: ['chip', 'chat', 'chop'],
        ng: ['sing', 'ring', 'king', 'long', 'song', 'hung', 'bang', 'wing', 'swing']
    }
};

// =====================
// Preload All Digraph Words
// =====================
const allDigraphWords = Object.values(wordGroups.digraphs).flat();

// =====================
// Audio Configuration
// =====================
const audioPath = './'; // Path to audio files
const letterSounds = {};

// Load individual letter sounds
'abcdefghijklmnopqrstuvwxyz'.split('').forEach(letter => {
    const audio = new Audio(`${audioPath}${letter}.mp3`);
    letterSounds[letter] = audio;
});

// Load digraph sounds
['sh', 'th', 'ch', 'ng'].forEach(digraph => {
    const audio = new Audio(`${audioPath}${digraph}.mp3`);
    letterSounds[digraph] = audio;
});

// =====================
// Application State Variables
// =====================
let revealedWords = 0;
let usedWords = [];
let score = 0;
let audioEnabled = true; // Audio enabled by default

// =====================
// DOM Elements
// =====================
const spinButton = document.getElementById('spinButton');
const wordBox = document.getElementById('wordBox');
const progressText = document.getElementById('progressText');
const progressFill = document.getElementById('progressFill');
const complimentBox = document.getElementById('complimentBox');
const vowelSelector = document.getElementById('vowelSelector');
const vowelSelection = document.getElementById('vowelSelection');
const wordTypeSelector = document.getElementById('wordTypeSelector');
const scoreText = document.getElementById('scoreText');
const toggleAudioButton = document.getElementById('toggleAudioButton');

// =====================
// Predefined Compliments
// =====================
const compliments = ['Great job!', 'Fantastic!', 'Well done!', 'You did it!', 'Awesome!'];

// =====================
// Speech Synthesis Configuration
// =====================
let selectedVoice = null;

function setVoice() {
    if ('speechSynthesis' in window) {
        function loadVoices() {
            const voices = speechSynthesis.getVoices();
            if (voices.length > 0) {
                selectedVoice =
                    voices.find(voice => voice.lang.startsWith('en') && voice.name.toLowerCase().includes('female')) ||
                    voices.find(voice => voice.lang.startsWith('en')) ||
                    voices[0];
            } else {
                console.warn('No speech synthesis voices available.');
            }
        }
        speechSynthesis.onvoiceschanged = loadVoices;
        loadVoices();
    } else {
        console.warn('Speech Synthesis API is not supported on this browser.');
    }
}

// Function to speak text
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
            console.warn(`Speech synthesis not available. Text: ${text}`);
            resolve();
        }
    });
}

// =====================
// Utility Functions
// =====================

// Function to check if a letter is a vowel
const isVowel = (letter) => 'aeiou'.includes(letter.toLowerCase());

// Function to update the score
function updateScore() {
    score += 10; // Add points per word
    scoreText.textContent = `Score: ${score}`;
}

// Function to update progress indicators
function updateProgress() {
    revealedWords = usedWords.length;
    const availableWords = getAvailableWords();
    const totalWords = availableWords.length;
    const progressPercentage = totalWords > 0 ? (revealedWords / totalWords) * 100 : 0;
    progressText.textContent = `${revealedWords} / ${totalWords} Words Revealed`;
    progressFill.style.width = `${progressPercentage}%`;
}

// Function to give a random compliment
function giveCompliment() {
    const compliment = compliments[Math.floor(Math.random() * compliments.length)];
    complimentBox.textContent = compliment;
    complimentBox.style.color = 'green';
    complimentBox.style.fontSize = '30px';
    complimentBox.style.opacity = '1';
    speak(compliment);
    setTimeout(() => {
        complimentBox.style.opacity = '0';
    }, 2000);
}

// Function to play audio for a letter or digraph
function playLetterSound(unit) {
    return new Promise((resolve) => {
        if (!audioEnabled) {
            resolve(); // Skip playing sound if audio is disabled
            return;
        }
        const sound = letterSounds[unit.toLowerCase()];
        if (sound) {
            sound.currentTime = 0;
            sound.play().then(resolve).catch((error) => {
                console.error(`Error playing sound for "${unit}":`, error);
                resolve();
            });
        } else {
            console.warn(`No sound found for "${unit}"`);
            resolve();
        }
    });
}

// Function to parse word into units (letters or digraphs)
function parseWord(word) {
    const digraphs = ['sh', 'th', 'ch', 'ng'];
    const units = [];
    let i = 0;
    while (i < word.length) {
        if (i < word.length - 1) {
            const twoLetters = word.substring(i, i + 2).toLowerCase();
            if (digraphs.includes(twoLetters)) {
                units.push({ text: twoLetters, isVowel: false, isDigraph: true });
                i += 2;
                continue;
            }
        }
        const singleLetter = word[i].toLowerCase();
        units.push({ text: singleLetter, isVowel: isVowel(singleLetter), isDigraph: false });
        i += 1;
    }
    return units;
}

// =====================
// Core Functions
// =====================

// Function to reveal the word with animations and audio
async function revealWord(word) {
    wordBox.innerHTML = '';
    const units = parseWord(word);
    units.forEach((unit, index) => {
        const span = document.createElement('span');
        span.textContent = unit.text;
        if (unit.isVowel && !unit.isDigraph) {
            span.classList.add('vowel');
        }
        if (unit.isDigraph) {
            span.classList.add('digraph');
        }
        wordBox.appendChild(span);
        span.style.setProperty('--animation-order', index + 1);
    });

    for (let i = 0; i < units.length; i++) {
        await new Promise(resolve => setTimeout(resolve, 500));
        await playLetterSound(units[i].text);
    }

    await new Promise(resolve => setTimeout(resolve, 1000));
    await speak(word);
    giveCompliment();
    updateScore();
    updateProgress();
}

// Function to get available words based on selected word type and vowel
function getAvailableWords() {
    const selectedWordType = wordTypeSelector.value;
    const selectedVowel = vowelSelector.value;
    let words = [];

    if (selectedWordType === 'digraphs') {
        words = allDigraphWords;
    } else {
        const group = wordGroups[selectedWordType];
        if (selectedVowel === 'all') {
            words = Object.values(group).flat();
        } else {
            words = group[selectedVowel] || [];
        }
    }
    return words;
}

// Function to get a random word from available words
function getRandomWord() {
    const availableWords = getAvailableWords();
    const remainingWords = availableWords.filter(word => !usedWords.includes(word));
    if (remainingWords.length === 0) {
        alert('You have gone through all the words! The list will reset.');
        usedWords = [];
        revealedWords = 0;
        score = 0;
        scoreText.textContent = `Score: ${score}`;
        updateProgress();
        return getRandomWord();
    }
    const word = remainingWords[Math.floor(Math.random() * remainingWords.length)];
    usedWords.push(word);
    return word;
}

// =====================
// Event Handlers
// =====================

// Function to handle the Spin button click
async function spin() {
    spinButton.disabled = true;
    wordBox.classList.add('shake');
    setTimeout(() => {
        wordBox.classList.remove('shake');
    }, 500);
    complimentBox.textContent = '';
    complimentBox.style.opacity = '0';
    const word = getRandomWord();
    try {
        await revealWord(word);
    } catch (error) {
        console.error('Error during word reveal:', error);
    } finally {
        spinButton.disabled = false;
    }
}

// Event listener for vowel selection change
vowelSelector.addEventListener('change', () => {
    resetGame();
});

// Event listener for word type selection change
wordTypeSelector.addEventListener('change', () => {
    resetGame();
    vowelSelection.style.display = wordTypeSelector.value === 'digraphs' ? 'none' : 'block';
});

// Function to reset the game state
function resetGame() {
    usedWords = [];
    revealedWords = 0;
    score = 0;
    scoreText.textContent = `Score: ${score}`;
    updateProgress();
}

// Function to toggle audio on or off
function toggleAudio() {
    audioEnabled = !audioEnabled;
    toggleAudioButton.textContent = audioEnabled ? '🔇 Disable Audio' : '🔊 Enable Audio';
}

// Add event listener to the toggle audio button
toggleAudioButton.addEventListener('click', toggleAudio);

// =====================
// Initialization
// =====================

// Add event listener to the Spin button
spinButton.addEventListener('click', spin);

// Initialize speech synthesis voice
setVoice();

// Update progress and score on initial load
updateProgress();
scoreText.textContent = `Score: ${score}`;

// Preload all audio files
function preloadAudio() {
    for (const key in letterSounds) {
        letterSounds[key].load();
    }
}

// Preload audio on window load
window.addEventListener('load', preloadAudio);
