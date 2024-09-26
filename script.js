// Word groups categorized by vowel sounds and word types
const wordGroups = {
    cvc: {
        a: [
            'bat', 'cat', 'dad', 'fan', 'fat', 'gap', 'gas', 'ham', 'hat', 'jam',
            'lap', 'mad', 'man', 'map', 'nap', 'pan', 'pat', 'rag', 'ram', 'ran',
            'rat', 'sap', 'sat', 'tap', 'van', 'wag', 'yam', 'zap', 'bag', 'cap',
        ],
        e: [
            'bed', 'beg', 'bet', 'den', 'fed', 'gel', 'gem', 'get', 'hem', 'hen',
            'jet', 'keg', 'led', 'leg', 'let', 'men', 'met', 'net', 'pen', 'pet',
            'red', 'set', 'ten', 'vet', 'wed', 'wet', 'web', 'yes', 'zep', 'pep',
        ],
        i: [
            'bib', 'bid', 'big', 'bin', 'bit', 'dip', 'dig', 'fin', 'fig', 'fit',
            'gig', 'him', 'hip', 'hit', 'jib', 'kid', 'kit', 'lip', 'lit', 'mix',
            'nip', 'pit', 'pin', 'pig', 'rim', 'rip', 'sit', 'tin', 'tip', 'win',
        ],
        o: [
            'bob', 'bog', 'box', 'cob', 'cod', 'con', 'cop', 'cot', 'dog', 'dot',
            'fog', 'got', 'hog', 'hot', 'job', 'jot', 'log', 'lot', 'mob', 'mop',
            'nod', 'not', 'pod', 'pot', 'rod', 'rob', 'rot', 'sob', 'tom', 'top',
        ],
        u: [
            'bud', 'bun', 'bus', 'but', 'cub', 'cup', 'cut', 'dug', 'fun', 'gum',
            'gun', 'gut', 'hug', 'hum', 'hut', 'jug', 'mud', 'mug', 'nun', 'nut',
            'pup', 'pun', 'rug', 'run', 'sun', 'tub', 'tug', 'yum', 'yup', 'sum',
        ],
    },
    ccvc: {
        a: [
            'brag', 'bran', 'clad', 'clam', 'clap', 'crab', 'cram', 'drag', 'drab', 'flag',
            'flat', 'glad', 'grab', 'gram', 'gran', 'plan', 'pram', 'scam', 'scan', 'scat',
            'slam', 'slap', 'slat', 'span', 'stab', 'stag', 'strap', 'swam', 'swab', 'trap',
        ],
        e: [
            'bled', 'bred', 'drek', 'fret', 'glen', 'grep', 'spend', 'speck', 'spell', 'step',
            'stem', 'trem', 'tress', 'bless', 'smell', 'spelt', 'swept', 'swell', 'fret', 'fled',
            'dwell', 'dress', 'press', 'slept', 'stent', 'swept', 'swept', 'swept', 'meld', 'kemp',
        ],
        i: [
            'blip', 'brim', 'clip', 'crim', 'crip', 'drip', 'flip', 'glim', 'grin', 'grim',
            'grip', 'grid', 'grit', 'skim', 'skip', 'slim', 'slip', 'slit', 'spin', 'spit',
            'swim', 'twin', 'twig', 'twit', 'whip', 'whim', 'whiz', 'grit', 'skid', 'slid',
        ],
        o: [
            'bloc', 'blog', 'blot', 'clog', 'crop', 'cron', 'drop', 'flog', 'flop', 'frog',
            'glob', 'plot', 'plod', 'prod', 'prom', 'prop', 'scot', 'scop', 'slot', 'smog',
            'snob', 'spot', 'stop', 'swop', 'trod', 'trom', 'trop', 'trot', 'clop', 'plop',
        ],
        u: [
            'blub', 'brut', 'club', 'crub', 'drub', 'drug', 'drum', 'flub', 'glum', 'glut',
            'grub', 'grum', 'plug', 'plum', 'pluck', 'slum', 'smug', 'snub', 'snug', 'spud',
            'stud', 'stun', 'stum', 'swum', 'truck', 'crux', 'blunt', 'brunt', 'grunt', 'slump',
        ],
    },
    cvcc: {
        a: [
            'band', 'bank', 'bask', 'camp', 'damp', 'fast', 'gasp', 'hand', 'land', 'lamp',
            'last', 'mask', 'pant', 'past', 'rant', 'rank', 'sand', 'task', 'vast', 'wand',
            'want', 'wasp', 'yank', 'bang', 'sang', 'fang', 'gang', 'sank', 'sand', 'sank',
        ],
        e: [
            'bent', 'desk', 'felt', 'help', 'kept', 'lend', 'meld', 'melt', 'nest',
            'pest', 'rest', 'send', 'self', 'tend', 'tent', 'test', 'vest', 'went', 'west',
            'welt', 'wept', 'zest', 'kemp', 'pelt', 'delt', 'kelt', 'lent', 'pest', 'belt',
        ],
        i: [
            'belt', 'dint', 'film', 'fist', 'gild', 'gimp', 'hilt', 'hint', 'kilt', 'lint',
            'list', 'mint', 'mist', 'mild', 'pink', 'pint', 'sift', 'silk', 'silt', 'tilt',
            'tint', 'wilt', 'wind', 'milk', 'king', 'ring', 'wing', 'wink', 'link', 'sink',
        ],
        o: [
            'bond', 'fond', 'font', 'gong', 'golf', 'holt', 'jolt', 'long', 'lost',
            'most', 'mold', 'pond', 'post', 'soft', 'sold', 'told', 'tomb', 'volt',
            'wold', 'wolf', 'wont', 'colt', 'dolt', 'fold', 'holt', 'molt', 'bolt', 'cost',
        ],
        u: [
            'bump', 'bunt', 'bunk', 'bust', 'dunk', 'dump', 'fund', 'funk', 'gust', 'gush',
            'husk', 'just', 'junk', 'lump', 'must', 'musk', 'pulp', 'punk', 'punt', 'rusk',
            'sunk', 'tusk', 'bunk', 'cusp', 'dusk', 'hump', 'hunt', 'hunk', 'lung', 'bust',
        ],
    },
    ccvcc: {
        a: [
            'brand', 'bland', 'clamp', 'clank', 'cramp', 'crank', 'draft', 'drank', 'flank', 'frank',
            'grand', 'grant', 'grass', 'grasp', 'plant', 'plank', 'prank', 'scamp', 'slant', 'spank',
            'stand', 'stank', 'stamp', 'strap', 'swamp', 'track', 'tramp', 'bland', 'clasp', 'clast',
        ],
        e: [
            'blend', 'bless', 'dreck', 'dress', 'fret', 'press', 'sketch', 'slept', 'smelt', 'spent',
            'swept', 'trend', 'tress', 'blent', 'dwell', 'smell', 'spell', 'strep', 'stend', 'svelt',
            'trest', 'twelf', 'crest', 'fled', 'swept', 'stress', 'swept', 'swept', 'flesh', 'fresh',
        ],
        i: [
            'blink', 'brink', 'clink', 'crisp', 'drink', 'drift', 'flint', 'frisk', 'grind', 'grist',
            'print', 'prism', 'skimp', 'skirt', 'slink', 'split', 'sprint', 'stick', 'sting', 'stink',
            'swift', 'swing', 'twist', 'twink', 'wrist', 'wring', 'frisk', 'skink', 'grind', 'blink',
        ],
        o: [
            'block', 'clock', 'clomp', 'clonk', 'croft', 'cross', 'flock', 'front', 'frost', 'gloss',
            'plonk', 'prompt', 'scold', 'scoff', 'scoot', 'sloth', 'smock', 'smolt', 'snort', 'spock',
            'stock', 'stomp', 'stork', 'strong', 'tromp', 'clost', 'plump', 'plunk', 'prong', 'clomp',
        ],
        u: [
            'blunt', 'brunt', 'clump', 'clunk', 'crust', 'crump', 'drunk', 'flung', 'frump', 'grunt',
            'plump', 'plunk', 'skunk', 'slump', 'slung', 'spunk', 'stuck', 'stump', 'stung', 'strut',
            'strum', 'stunt', 'swung', 'trunk', 'trust', 'truss', 'clump', 'plush', 'crust', 'grunt',
        ],
    },
};

// Merge all words into one array for 'all' selection
const allCvcWords = Object.values(wordGroups.cvc).flat();
const allCcvcWords = Object.values(wordGroups.ccvc).flat();
const allCvccWords = Object.values(wordGroups.cvcc).flat();
const allCcvccWords = Object.values(wordGroups.ccvcc).flat();

const audioPath = './'; // Audio files are in the main directory

let revealedWords = 0;
let usedWords = [];
let score = 0;

const spinButton = document.getElementById('spinButton');
const wordBox = document.getElementById('wordBox');
const progressText = document.getElementById('progressText');
const progressFill = document.getElementById('progressFill');
const complimentBox = document.getElementById('complimentBox');
const vowelSelector = document.getElementById('vowelSelector');
const vowelSelection = document.getElementById('vowelSelection');
const wordTypeSelector = document.getElementById('wordTypeSelector');
const scoreText = document.getElementById('scoreText');

// Preload letter sounds
const letterSounds = {};
'abcdefghijklmnopqrstuvwxyz'.split('').forEach(letter => {
    const audio = new Audio(`${audioPath}${letter}.mp3`);
    letterSounds[letter] = audio;
});

// Preload compliments
const compliments = ['Great job!', 'Fantastic!', 'Well done!', 'You did it!', 'Awesome!'];

// Voice selection for word pronunciation
let selectedVoice = null;

function loadVoices() {
    return new Promise((resolve) => {
        let voices = speechSynthesis.getVoices();
        if (voices.length) {
            resolve(voices);
            return;
        }
        let voicesChanged = false;
        speechSynthesis.onvoiceschanged = () => {
            if (!voicesChanged) {
                voicesChanged = true;
                voices = speechSynthesis.getVoices();
                resolve(voices);
            }
        };
        // Fallback if onvoiceschanged doesn't fire
        setTimeout(() => {
            if (!voicesChanged) {
                voices = speechSynthesis.getVoices();
                resolve(voices);
            }
        }, 1000);
    });
}

async function setVoice() {
    if ('speechSynthesis' in window) {
        let voices = await loadVoices();
        if (voices.length === 0) {
            // Retry loading voices after a delay
            await new Promise(resolve => setTimeout(resolve, 1000));
            voices = speechSynthesis.getVoices();
        }
        if (voices.length > 0) {
            // Try to find a female voice speaking English
            selectedVoice = voices.find(voice => voice.lang.startsWith('en') && voice.name.toLowerCase().includes('female'));
            // If no female voice, use any English voice
            if (!selectedVoice) {
                selectedVoice = voices.find(voice => voice.lang.startsWith('en'));
            }
            // If no English voice, use the first available voice
            if (!selectedVoice) {
                selectedVoice = voices[0];
            }
        } else {
            console.warn('No speech synthesis voices available.');
        }
    } else {
        console.warn('Speech Synthesis API is not supported on this browser.');
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
            // Fallback: Do nothing or log to console
            console.warn(`Speech synthesis not available. Text: ${text}`);
            resolve();
        }
    });
}

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
    const availableWords = getAvailableWords();
    const totalWords = availableWords.length;

    // Ensure totalWords is not zero to avoid division by zero
    const progressPercentage = totalWords > 0 ? (revealedWords / totalWords) * 100 : 0;
    progressText.textContent = `${revealedWords} / ${totalWords} Words Revealed`;

    progressFill.style.width = `${progressPercentage}%`;
}

// Give a compliment
function giveCompliment() {
    const compliment = compliments[Math.floor(Math.random() * compliments.length)];
    complimentBox.textContent = compliment;
    complimentBox.style.color = 'green';
    complimentBox.style.fontSize = '30px';
    complimentBox.style.opacity = '1'; // Fade in

    // Speak the compliment
    speak(compliment);

    // Fade out after a delay
    setTimeout(() => {
        complimentBox.style.opacity = '0';
    }, 2000);
}

// Play audio for a letter
function playLetterSound(letter) {
    return new Promise((resolve) => {
        const letterSound = letterSounds[letter.toLowerCase()];
        if (letterSound) {
            letterSound.currentTime = 0;
            letterSound.play().then(() => {
                letterSound.onended = resolve;
            }).catch((error) => {
                console.error(`Error playing sound for letter "${letter}":`, error);
                resolve();
            });
        } else {
            resolve();
        }
    });
}

// Reveal the word with animations and audio
async function revealWord(word) {
    wordBox.innerHTML = ''; // Clear previous word
    const letterSpans = [];

    let delay = 500; // Initial delay

    for (let i = 0; i < word.length; i++) {
        const letter = word[i];
        const span = document.createElement('span');
        span.textContent = letter;
        if (isVowel(letter)) {
            span.classList.add('vowel');
        }
        wordBox.appendChild(span);
        letterSpans.push(span);

        // Set animation order for CSS
        span.style.setProperty('--animation-order', i + 1);
    }

    // Play letter sounds with delays matching the CSS animation
    for (let i = 0; i < letterSpans.length; i++) {
        await new Promise(resolve => setTimeout(resolve, delay));
        await playLetterSound(letterSpans[i].textContent);
        delay = 500; // Set delay between letters
    }

    // Wait for the last letter animation to complete
    await new Promise(resolve => setTimeout(resolve, 1000));

    // Speak the whole word
    await speak(word);

    // Give a compliment
    giveCompliment();

    // Update score
    updateScore();

    // Update progress
    updateProgress();
}

// Get available words based on selected word type and vowel
function getAvailableWords() {
    const selectedWordType = wordTypeSelector.value;
    const selectedVowel = vowelSelector.value;

    switch (selectedWordType) {
        case 'cvc':
            return selectedVowel === 'all' ? allCvcWords : wordGroups.cvc[selectedVowel] || [];
        case 'ccvc':
            return selectedVowel === 'all' ? allCcvcWords : wordGroups.ccvc[selectedVowel] || [];
        case 'cvcc':
            return selectedVowel === 'all' ? allCvccWords : wordGroups.cvcc[selectedVowel] || [];
        case 'ccvcc':
            return selectedVowel === 'all' ? allCcvccWords : wordGroups.ccvcc[selectedVowel] || [];
        default:
            return [];
    }
}

// Get a random word from available words
function getRandomWord() {
    const availableWords = getAvailableWords();

    // Filter out used words to get the list of remaining words
    const remainingWords = availableWords.filter(word => !usedWords.includes(word));

    // If all words have been used, inform the user and reset the usedWords array
    if (remainingWords.length === 0) {
        alert('You have gone through all the words! The list will reset.');
        usedWords = [];
        revealedWords = 0;
        updateProgress();
        return getRandomWord();
    }

    // Select a random word from the remaining words
    const word = remainingWords[Math.floor(Math.random() * remainingWords.length)];
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

// Event listener for word type selection change
wordTypeSelector.addEventListener('change', () => {
    usedWords = [];
    revealedWords = 0;
    updateProgress();

    // Always show the vowel selector
    vowelSelection.style.display = 'block';
});

// Initialize
spinButton.addEventListener('click', spin);
setVoice();

// Initial progress update
updateProgress();

// Initial score update
scoreText.textContent = `Score: ${score}`;
