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
            'chap', 'that', 'drab', 'frap', 'gran', 'plat', 'pram', 'slap', 'clan', 'slab'
        ],
        e: [
            'bled', 'bred', 'fled', 'fret', 'glen', 'sped', 'stem', 'step', 'trek', 'clef',
            'sled', 'smell', 'spell', 'spend', 'swept', 'shelf', 'spend', 'swept', 'bless', 'blend'
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
            'drum', 'grub', 'plug', 'slug', 'slum', 'spun', 'stub', 'stud', 'stun', 'truck',
            'trust', 'trump', 'trunk', 'shrug', 'shrub', 'stuck', 'strut', 'bluff', 'brush', 'clump'
        ]
    },
    cvcc: {
        a: [
            'band', 'bank', 'damp', 'fang', 'hand', 'hang', 'land', 'lamp', 'ramp', 'sand',
            'pant', 'tank', 'cast', 'last', 'fast', 'vast', 'past', 'mast', 'camp', 'gasp',
            'mask', 'task', 'clamp', 'stand', 'plant', 'stamp', 'grant', 'brand', 'cramp', 'track'
        ],
        e: [
            'bent', 'dent', 'felt', 'fend', 'help', 'kept', 'lend', 'mend', 'nest', 'rest',
            'sent', 'tent', 'vest', 'vent', 'wept', 'weld', 'text', 'next', 'heft', 'jest',
            'best', 'pest', 'test', 'west', 'zest', 'desk', 'self', 'meld', 'held', 'belt'
        ],
        i: [
            'dink', 'find', 'film', 'gild', 'gimp', 'hind', 'hilt', 'hint', 'jilt', 'mint',
            'milk', 'silk', 'fist', 'list', 'risk', 'sink', 'link', 'pink', 'kink', 'wing',
            'king', 'sing', 'ring', 'zing', 'bing', 'rink', 'tint', 'tilt', 'skimp', 'wilt'
        ],
        o: [
            'bond', 'colt', 'comb', 'cold', 'fond', 'fold', 'gold', 'gong', 'holt', 'cost',
            'lost', 'loft', 'soft', 'post', 'most', 'moth', 'moss', 'boss', 'toss', 'dock',
            'rock', 'sock', 'mock', 'flock', 'pond', 'song', 'long', 'tomb', 'toss', 'tomb'
        ],
        u: [
            'bunk', 'bump', 'bust', 'dump', 'dunk', 'fund', 'funk', 'gust', 'gunk', 'hunt',
            'junk', 'just', 'lump', 'must', 'punch', 'pump', 'rust', 'runt', 'sunk', 'tuft',
            'hush', 'lush', 'mush', 'tusk', 'husk', 'bust', 'dust', 'cusp', 'dusk', 'tusk'
        ]
    },
    ccvcc: {
        a: [
            'brand', 'blank', 'clamp', 'cramp', 'crank', 'draft', 'drank', 'flank', 'frank', 'plank',
            'prank', 'stamp', 'stand', 'strand', 'track', 'tract', 'clasp', 'grasp', 'scrap', 'graft',
            'stack', 'slant', 'stalk', 'swamp', 'swank', 'thrash', 'thatch', 'snatch', 'scratch', 'scram'
        ],
        e: [
            'blend', 'blent', 'dreck', 'dress', 'press', 'slept', 'smelt', 'spent', 'trend', 'crest',
            'fresh', 'swept', 'trench', 'stretch', 'thresh', 'stress', 'strep', 'spend', 'shelf', 'wrest',
            'stent', 'flesh', 'french', 'stretch', 'strength', 'drench', 'sketch', 'wrench', 'bless', 'fret'
        ],
        i: [
            'blink', 'brink', 'clink', 'clint', 'crimp', 'crisp', 'drink', 'drift', 'print', 'sprint',
            'strip', 'strict', 'shrink', 'script', 'squint', 'twist', 'flint', 'sting', 'swing', 'string',
            'shrimp', 'spring', 'splint', 'swift', 'switch', 'whisk', 'twist', 'thrift', 'shrill', 'squish'
        ],
        o: [
            'block', 'clock', 'cloth', 'cross', 'froth', 'frost', 'front', 'smock', 'stock', 'stomp',
            'strong', 'throb', 'throng', 'swamp', 'swath', 'prong', 'prompt', 'splotch', 'scorch', 'stork',
            'storm', 'squash', 'squad', 'squawk', 'twonk', 'whomp', 'clomp', 'chomp', 'clonk', 'throb'
        ],
        u: [
            'blunt', 'brunt', 'clump', 'clunk', 'crust', 'drunk', 'flung', 'frump', 'grunt', 'plump',
            'plunk', 'skunk', 'stump', 'strut', 'trunk', 'trust', 'strum', 'stunt', 'slush', 'brush',
            'shrug', 'shrunk', 'struck', 'thrush', 'thrust', 'skulk', 'spunk', 'slump', 'fluff', 'crush'
        ]
    },
    digraphs: {
        sh: ['ship', 'fish', 'shop', 'wish', 'bash', 'dash', 'gush', 'mash', 'rash', 'cash', 'lash', 'mesh', 'dish', 'push', 'rush', 'shed', 'shin', 'shut', 'shun', 'shop'],
        th: ['this', 'that', 'math', 'with', 'then', 'thin', 'thick', 'than', 'them', 'thus', 'thank', 'think', 'thump', 'thrust', 'thrift', 'thrush', 'throb', 'throng', 'thumb', 'theme'],
        ch: ['chip', 'chat', 'chop', 'much', 'such', 'rich', 'chin', 'inch', 'lunch', 'bench', 'punch', 'march', 'match', 'patch', 'catch', 'fetch', 'hatch', 'pitch', 'switch', 'ditch'],
        ng: ['sing', 'ring', 'king', 'long', 'song', 'hung', 'bang', 'wing', 'swing', 'thing', 'bring', 'fling', 'cling', 'sting', 'sling', 'strong', 'string', 'spring', 'wring', 'young']
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
const blendingDelayInput = document.getElementById('blendingDelayInput'); // Added blending delay input

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

    // Play each letter or digraph sound
    for (let i = 0; i < units.length; i++) {
        await new Promise(resolve => setTimeout(resolve, 500));
        await playLetterSound(units[i].text);
    }

    // Get blending delay from input
    let blendingDelay = parseInt(blendingDelayInput.value, 10) * 1000; // Convert seconds to milliseconds
    if (isNaN(blendingDelay) || blendingDelay < 1000) {
        blendingDelay = 3000; // Default to 3 seconds if invalid input
    }

    // Add delay before pronouncing the whole word
    await new Promise(resolve => setTimeout(resolve, blendingDelay));

    // Pronounce the whole word
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
