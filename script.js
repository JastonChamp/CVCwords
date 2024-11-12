// script.js

// =====================
// Word Groups Configuration
// =====================
const wordGroups = {
    cvc: {
        a: [
            'bat', 'bag', 'bad', 'cab', 'cap', 'cat', 'dad', 'dam', 'fad', 'fan',
            'mad', 'jam', 'van', 'rag', 'tan', 'man', 'lap', 'mat', 'rat', 'can',
            'gas', 'wag', 'had', 'lad', 'yam', 'wax', 'pad', 'ram', 'ham', 'pan'
        ],
        e: [
            'bed', 'beg', 'ben', 'bet', 'den', 'fed', 'get', 'hen', 'jet', 'leg',
            'met', 'net', 'pet', 'men', 'pen', 'red', 'set', 'ten', 'wet', 'web',
            'yet', 'vet', 'hem', 'peg', 'let', 'keg', 'pep', 'ned', 'ted', 'ken'
        ],
        i: [
            'bib', 'bid', 'big', 'bin', 'bit', 'dig', 'dip', 'fig', 'fin', 'fit',
            'him', 'hit', 'kid', 'lid', 'lip', 'mid', 'pin', 'pig', 'pit', 'rid',
            'rim', 'sip', 'sit', 'tin', 'tip', 'wig', 'win', 'zip', 'fix', 'mix'
        ],
        o: [
            'bob', 'bog', 'cod', 'cob', 'cop', 'cot', 'dog', 'dot', 'fog', 'god',
            'box', 'fox', 'got', 'hop', 'hot', 'jog', 'job', 'log', 'lot', 'mob',
            'mop', 'nod', 'not', 'pod', 'pop', 'pot', 'rod', 'rot', 'sod', 'top'
        ],
        u: [
            'bun', 'bud', 'bug', 'bus', 'but', 'cub', 'cud', 'cup', 'cut', 'dug',
            'fun', 'gun', 'gum', 'hut', 'hum', 'hug', 'jug', 'mud', 'mug', 'nut',
            'nun', 'pug', 'pun', 'pup', 'rub', 'rug', 'run', 'sum', 'sun', 'tug'
        ]
    },
    ccvc: {
        a: [
            'brag', 'clap', 'crab', 'drag', 'flag', 'flap', 'glad', 'grab', 'plan', 'slam',
            'snap', 'snag', 'span', 'stab', 'trap', 'scab', 'scam', 'scan', 'scat', 'swam',
            'chap', 'that', 'drab', 'gran', 'plat', 'pram', 'slap', 'clan', 'slab'
        ],
        e: [
            'bled', 'bred', 'fled', 'fret', 'glen', 'sped', 'stem', 'step', 'trek', 'clef',
            'sled'
        ],
        i: [
            'brim', 'brig', 'clip', 'crib', 'drip', 'flip', 'grin', 'grid', 'grip', 'skip',
            'slim', 'slip', 'spin', 'spit', 'swim', 'twin', 'trip', 'trim', 'twig', 'skid'
        ],
        o: [
            'blot', 'blog', 'clog', 'crop', 'drop', 'frog', 'flop', 'glob', 'glop', 'plod',
            'plot', 'prod', 'prop', 'slot', 'smog', 'snob', 'spot', 'stop', 'swop', 'trod'
        ],
        u: [
            'drum', 'grub', 'plug', 'slug', 'slum', 'spun', 'stub', 'stud', 'stun',
        ]
    },
    cvcc: {
        a: [
            'band', 'bank', 'damp', 'hand', 'land', 'lamp', 'ramp', 'sand',
            'pant', 'tank', 'camp'
        ],
        e: [
            'bent', 'dent', 'felt', 'fend', 'help', 'kept', 'lend', 'mend', 'nest', 'rest',
            'sent', 'tent', 'vest', 'vent', 'wept', 'weld', 'text', 'next', 'heft', 'jest',
            'best', 'pest', 'test', 'west', 'zest', 'desk', 'self', 'meld', 'held', 'belt'
        ],
        i: [
            'dink', 'find', 'film', 'gild', 'gimp', 'hind', 'hilt', 'hint', 'jilt', 'mint',
            'milk', 'silk', 'fist', 'list', 'risk', 'sink', 'link', 'pink', 'kink',
            'rink', 'tint', 'tilt', 'skimp', 'wilt'
        ],
        o: [
            'bond', 'colt', 'comb', 'fond', 'cost', 'lost', 'loft', 'soft', 'post',
            'pond'
        ],
        u: [
            'bunk', 'bump', 'bust', 'dump', 'dunk', 'fund', 'funk', 'gust', 'gunk', 'hunt',
            'junk', 'just', 'lump', 'must', 'pump', 'rust', 'runt', 'sunk', 'tuft',
            'tusk', 'husk', 'dust', 'dusk'
        ]
    },
    ccvcc: {
        a: [
            'brand', 'blank', 'clamp', 'cramp', 'crank', 'drank', 'flank', 'frank', 'plank',
            'prank', 'stamp', 'stand', 'strand', 'tract', 'scrap',
            'swank'
        ],
        e: [
            'blend', 'blent', 'strep', 'trend', 'swept', 'stent'
        ],
        i: [
            'blink', 'brink', 'clink', 'clint', 'crimp', 'drink', 'drift', 'print', 'sprint',
            'strip', 'strict', 'shrink', 'script', 'twist', 'flint',
            'shrimp', 'splint', 'swift'
        ],
        o: [
            'frost', 'stomp', 'strong', 'throb', 'throng', 'swamp', 'prong', 'prompt',
            'clomp', 'chomp', 'clonk'
        ],
        u: [
            'blunt', 'brunt', 'clump', 'clunk', 'crust', 'drunk', 'flung', 'frump', 'grunt', 'plump',
            'plunk', 'skunk', 'stump', 'strut', 'trunk', 'trust', 'strum', 'stunt',
            'skulk', 'spunk', 'slump'
        ]
    },
    digraphs: {
        a: [
            'chat', 'chap', 'than', 'that', 'math', 'hang', 'bang', 'rang', 'cash',
            'dash', 'stash', 'trash', 'patch', 'catch', 'match', 'batch', 'rash', 'sash'
        ],
        e: [
            'shed', 'them', 'then', 'fetch', 'bench', 'retch', 'ketch',
            'stretch', 'sketch', 'drench', 'flesh', 'fresh'
        ],
        i: [
            'chip', 'chin', 'thin', 'thing', 'king', 'ring', 'sing', 'wing', 'sting', 'bring',
            'cling', 'string', 'swing', 'ditch', 'pitch', 'switch', 'twitch'
        ],
        o: [
            'shop', 'shot', 'chop',
            'strong', 'throb', 'cloth', 'crotch', 'notch', 'botch'
        ],
        u: [
            'shut', 'thud', 'chug', 'chunk', 'thump', 'shrug', 'brush', 'crush',
            'blush', 'flush', 'crutch', 'clutch'
        ]
    }
};

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

// Load UI sounds
const clickSound = new Audio(`${audioPath}click.mp3`);
const successSound = new Audio(`${audioPath}success.mp3`);

// =====================
// Application State Variables
// =====================
let revealedWords = 0;
let usedWords = [];
let score = 0;
let letterSoundsEnabled = true; // Letter sounds enabled by default
let blendingTime = 3000; // Default to 3000ms
let totalWords = 0; // Total words initialized
let currentWord = ''; // Store the current word for repeat functionality

// =====================
// DOM Elements
// =====================
const spinButton = document.getElementById('spinButton');
const repeatButton = document.getElementById('repeatButton');
const wordBox = document.getElementById('wordBox');
const progressText = document.getElementById('progressText');
const progressFill = document.getElementById('progressFill');
const progressIcon = document.getElementById('progressIcon');
const complimentBox = document.getElementById('complimentBox');
const vowelSelector = document.getElementById('vowelSelector');
const vowelSelection = document.getElementById('vowelSelection');
const wordTypeSelector = document.getElementById('wordTypeSelector');
const scoreText = document.getElementById('scoreText');
const scoreIncrement = document.getElementById('scoreIncrement');
const toggleAudioButton = document.getElementById('toggleAudioButton');
const increaseBlendingTimeButton = document.getElementById('increaseBlendingTime');
const decreaseBlendingTimeButton = document.getElementById('decreaseBlendingTime');
const blendingTimeDisplay = document.getElementById('blendingTimeDisplay');
const blendingTimerContainer = document.getElementById('blendingTimerContainer');
const blendingTimer = document.getElementById('blendingTimer');
const fullscreenButton = document.getElementById('fullscreenButton');

// =====================
// Predefined Compliments
// =====================
const compliments = [
    'Great job!', 'Fantastic!', 'Well done!', 'You did it!', 'Awesome!', 'Keep it up!', 'Excellent!'
];

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
        loadVoices();

        if (speechSynthesis.onvoiceschanged !== undefined) {
            speechSynthesis.onvoiceschanged = loadVoices;
        }
    } else {
        console.warn('Speech Synthesis API is not supported on this browser.');
    }
}

// Function to speak text
function speak(text) {
    return new Promise((resolve) => {
        if ('speechSynthesis' in window && selectedVoice) {
            const utterance = new SpeechSynthesisUtterance(text);
            utterance.voice = selectedVoice;
            utterance.rate = 0.8;
            utterance.pitch = 1.1;
            utterance.volume = 0.9;
            utterance.onend = resolve;
            utterance.onerror = (event) => {
                console.error('Speech synthesis error:', event.error);
                resolve(); // Resolve the promise to prevent freezing
            };
            speechSynthesis.speak(utterance);
        } else {
            console.warn(`Speech synthesis not available. Text: ${text}`);
            resolve(); // Resolve the promise to prevent freezing
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

    // Show score increment animation
    scoreIncrement.textContent = '+10';
    scoreIncrement.classList.add('show');

    // Remove the animation after it's done
    setTimeout(() => {
        scoreIncrement.classList.remove('show');
    }, 1000); // Duration matches the CSS transition
}

// Function to update progress indicators
function updateProgress() {
    revealedWords = usedWords.length;
    const progressPercentage = totalWords > 0 ? (revealedWords / totalWords) * 100 : 0;
    progressText.textContent = `${revealedWords} / ${totalWords} Words Revealed`;
    progressFill.style.width = `${progressPercentage}%`;

    // Animate the progress star
    progressIcon.classList.add('star-animate');
    setTimeout(() => {
        progressIcon.classList.remove('star-animate');
    }, 1000); // Duration matches the CSS animation duration
}

// Function to give a random compliment
function giveCompliment() {
    const compliment = compliments[Math.floor(Math.random() * compliments.length)];
    complimentBox.textContent = compliment;
    complimentBox.style.color = 'green';
    complimentBox.style.opacity = '1';
    speak(compliment);
    successSound.play();
    setTimeout(() => {
        complimentBox.style.opacity = '0';
    }, 2000);
}

// Function to play audio for a letter or digraph
function playLetterSound(unit) {
    return new Promise((resolve) => {
        if (!letterSoundsEnabled) {
            resolve(); // Skip playing sound if letter sounds are disabled
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
async function revealWord(word, isRepeat = false) {
    wordBox.innerHTML = '';
    const units = parseWord(word);

    units.forEach((unit, index) => {
        const span = document.createElement('span');
        span.textContent = unit.text;
        span.classList.add('letter');
        if (unit.isVowel && !unit.isDigraph) {
            span.classList.add('vowel');
        }
        if (unit.isDigraph) {
            span.classList.add('digraph');
        }
        wordBox.appendChild(span);
        // Set animation delay
        span.style.animationDelay = `${(index + 1) * 0.5}s`;
    });

    // Play each letter or digraph sound
    for (let i = 0; i < units.length; i++) {
        await new Promise(resolve => setTimeout(resolve, 500));
        await playLetterSound(units[i].text);
    }

    // Start blending timer
    startBlendingTimer(blendingTime / 1000);

    // Wait for blending time
    await new Promise(resolve => setTimeout(resolve, blendingTime));

    // Pronounce the whole word
    try {
        await speak(word);
    } catch (error) {
        console.error('Error during speech synthesis:', error);
        // Optionally, display a message to the user
        // alert('Speech synthesis is not available on your browser.');
    }

    if (!isRepeat) {
        giveCompliment();
        updateScore();
        updateProgress();
    }
}

// Function to get available words based on selected word type and vowel
function getAvailableWords() {
    const selectedWordType = wordTypeSelector.value;
    const selectedVowel = vowelSelector.value;
    let words = [];

    const group = wordGroups[selectedWordType];
    if (selectedVowel === 'all') {
        words = Object.values(group).flat();
    } else {
        words = group[selectedVowel] || [];
    }
    return words;
}

// Function to get a random word from available words
function getRandomWord() {
    const availableWords = getAvailableWords();
    const remainingWords = availableWords.filter(word => !usedWords.includes(word));
    if (remainingWords.length === 0) {
        alert('You have gone through all the words! The list will reset.');
        resetGame(false); // Reset without resetting totalWords
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
    repeatButton.disabled = true; // Disable repeat button during spin
    spinButton.innerHTML = '<span class="spin-icon-animate">🎡</span>';

    // Play click sound
    clickSound.play();

    // Remove spinning animation after it's done
    setTimeout(() => {
        spinButton.innerHTML = '🎡 Spin';
    }, 1000); // Duration matches the icon animation

    complimentBox.textContent = '';
    complimentBox.style.opacity = '0';
    const word = getRandomWord();
    currentWord = word; // Store the current word

    try {
        await revealWord(word);
    } catch (error) {
        console.error('Error during word reveal:', error);
    } finally {
        spinButton.disabled = false;
        repeatButton.disabled = false; // Enable repeat button after spin
    }
}

// Function to handle the Repeat button click
async function repeat() {
    if (currentWord) {
        repeatButton.disabled = true; // Prevent multiple clicks
        try {
            await revealWord(currentWord, true);
        } catch (error) {
            console.error('Error during word repeat:', error);
        } finally {
            repeatButton.disabled = false;
        }
    } else {
        alert('No word to repeat. Please spin first.');
    }
}

// Event listener for vowel selection change
vowelSelector.addEventListener('change', () => {
    resetGame(true);
});

// Event listener for word type selection change
wordTypeSelector.addEventListener('change', () => {
    resetGame(true);
    // Always display the vowel selection
    vowelSelection.style.display = 'flex';
});

// Function to reset the game state
function resetGame(resetTotalWords = true) {
    usedWords = [];
    revealedWords = 0;
    score = 0;
    scoreText.textContent = `Score: ${score}`;
    currentWord = ''; // Reset current word
    repeatButton.disabled = true; // Disable repeat button

    if (resetTotalWords) {
        totalWords = getAvailableWords().length;
    }
    updateProgress();
}

// Function to toggle letter sounds on or off
function toggleLetterSounds() {
    letterSoundsEnabled = !letterSoundsEnabled;
    toggleAudioButton.textContent = letterSoundsEnabled ? '🔇 Disable Letter Sounds' : '🔊 Enable Letter Sounds';
}

// Add event listener to the toggle audio button
toggleAudioButton.addEventListener('click', toggleLetterSounds);

// Blending Time Control Event Listeners
increaseBlendingTimeButton.addEventListener('click', () => {
    if (blendingTime < 7000) {
        blendingTime += 1000;
        updateBlendingTimeDisplay();
    }
});

decreaseBlendingTimeButton.addEventListener('click', () => {
    if (blendingTime > 1000) {
        blendingTime -= 1000;
        updateBlendingTimeDisplay();
    }
});

function updateBlendingTimeDisplay() {
    blendingTimeDisplay.textContent = blendingTime / 1000;
}

// Initialize blending time display on load
updateBlendingTimeDisplay();

// Function to start the blending timer
function startBlendingTimer(seconds) {
    blendingTimerContainer.style.display = 'block';
    blendingTimer.style.width = '100%';
    blendingTimer.style.transition = `width ${seconds}s linear`;
    setTimeout(() => {
        blendingTimer.style.width = '0%';
    }, 50); // Slight delay to ensure transition works
    // Hide blending timer after it's done
    setTimeout(() => {
        blendingTimerContainer.style.display = 'none';
    }, seconds * 1000);
}

// Fullscreen Functionality
function toggleFullscreen() {
    if (!document.fullscreenElement) {
        // Enter fullscreen
        document.documentElement.requestFullscreen().catch(err => {
            alert(`Error attempting to enable fullscreen mode: ${err.message} (${err.name})`);
        });
        fullscreenButton.textContent = '⛶ Exit Fullscreen';
    } else {
        // Exit fullscreen
        document.exitFullscreen();
        fullscreenButton.textContent = '⛶ Fullscreen';
    }
}

// Event listener for the fullscreen button
fullscreenButton.addEventListener('click', toggleFullscreen);

// Update the button text when exiting fullscreen using keyboard (Esc key)
document.addEventListener('fullscreenchange', () => {
    if (!document.fullscreenElement) {
        fullscreenButton.textContent = '⛶ Fullscreen';
    } else {
        fullscreenButton.textContent = '⛶ Exit Fullscreen';
    }
});

// =====================
// Initialization
// =====================

// Add event listeners to buttons
spinButton.addEventListener('click', spin);
repeatButton.addEventListener('click', repeat);

// Initialize speech synthesis voice
setVoice();

// Update totalWords and progress on initial load
resetGame(true);

// Preload all audio files
function preloadAudio() {
    for (const key in letterSounds) {
        letterSounds[key].load();
    }
    clickSound.load();
    successSound.load();
}

// Preload audio on window load
window.addEventListener('load', preloadAudio);
