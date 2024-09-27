// Word groups categorized by vowel sounds and word types
const wordGroups = {
    cvc: {
        a: [
            'bat', 'bag', 'bad', 'cab', 'cap', 'cat', 'dad', 'dam', 'fad', 'fan',
            'gap', 'gas', 'had', 'ham', 'hat', 'jam', 'jab', 'lad', 'lag', 'lap',
            'mad', 'man', 'map', 'nap', 'pad', 'pan', 'pat', 'rag', 'ram', 'ran',
            'rat', 'sad', 'sap', 'sat', 'tab', 'tag', 'tan', 'tap', 'van', 'wag',
        ],
        e: [
            'bed', 'beg', 'ben', 'bet', 'den', 'fed', 'gem', 'get', 'hen', 'jet',
            'keg', 'led', 'leg', 'let', 'men', 'met', 'net', 'pen', 'pep', 'pet',
            'red', 'rep', 'set', 'ten', 'vet', 'web', 'wed', 'wet', 'yet', 'zed',
        ],
        i: [
            'bib', 'bid', 'big', 'bin', 'bit', 'dig', 'dip', 'fig', 'fin', 'fit',
            'gig', 'gin', 'hid', 'him', 'hip', 'hit', 'jig', 'kid', 'kin', 'kit',
            'lid', 'lip', 'lit', 'mix', 'nip', 'pin', 'pig', 'pip', 'rib', 'rid',
            'rig', 'rim', 'rip', 'sip', 'sit', 'tin', 'tip', 'wig', 'win', 'zip',
        ],
        o: [
            'bob', 'bog', 'cod', 'cob', 'cop', 'cot', 'dog', 'dot', 'fog', 'god',
            'got', 'hog', 'hot', 'jog', 'job', 'log', 'lob', 'lot', 'mop', 'mob',
            'nod', 'not', 'pod', 'pop', 'pot', 'rod', 'rot', 'sob', 'sod', 'tom',
        ],
        u: [
            'bun', 'bud', 'bug', 'bus', 'but', 'cub', 'cud', 'cup', 'cut', 'dug',
            'fun', 'gum', 'gun', 'gut', 'hum', 'hug', 'hut', 'jug', 'mud', 'mug',
            'nut', 'nun', 'pun', 'pug', 'rug', 'run', 'sun', 'tub', 'tug', 'yum',
        ],
    },
    ccvc: {
        a: [
            'brag', 'clap', 'crab', 'drag', 'flag', 'flap', 'glad', 'grab', 'plan',
            'slam', 'slap', 'snap', 'span', 'stab', 'swam', 'trap', 'tram', 'scan',
            'bran', 'brat', 'clan', 'drab', 'frat', 'gran', 'scat', 'scam', 'slat', 'snag',
        ],
        e: [
            'bled', 'bred', 'fled', 'fret', 'glen', 'grep', 'sped', 'stem', 'trem',
            'dress', 'press', 'smell', 'spell', 'spend', 'spelt', 'dwelt', 'kemp',
            'dwell', 'fled', 'trend', 'tress', 'meld', 'bless', 'blend', 'blent', 'brest', 'drest',
        ],
        i: [
            'brig', 'brim', 'clip', 'crib', 'drip', 'flip', 'glib', 'grim', 'grip',
            'grid', 'grin', 'grit', 'prim', 'skim', 'skin', 'skip', 'slim', 'slip', 'snip',
            'spin', 'spit', 'swim', 'twig', 'twin', 'twit', 'whim', 'whip', 'whiz', 'skid',
        ],
        o: [
            'bloc', 'blob', 'blog', 'clog', 'crop', 'drop', 'frog', 'glob', 'plot',
            'plod', 'prod', 'prop', 'scot', 'slot', 'smog', 'snob', 'spot', 'stop', 'swop',
            'trod', 'trot', 'trop', 'clop', 'plop', 'crop', 'frog', 'clod', 'slog', 'frog',
        ],
        u: [
            'blub', 'club', 'crub', 'drub', 'drum', 'flub', 'glum', 'grub', 'plug',
            'plum', 'slum', 'smug', 'snub', 'snug', 'spud', 'stud', 'stun', 'swum', 'trug',
            'trum', 'trun', 'brum', 'slum', 'drug', 'grub', 'brut', 'drum', 'slub', 'stub',
        ],
    },
    cvcc: {
        a: [
            'band', 'bank', 'damp', 'fang', 'gang', 'hand', 'hang', 'land', 'lamp',
            'mask', 'pant', 'sand', 'sang', 'tank', 'tang', 'task', 'wand', 'want', 'yank',
            'bask', 'last', 'past', 'raft', 'rant', 'rang', 'rash', 'bang', 'clamp', 'stamp',
        ],
        e: [
            'bend', 'desk', 'felt', 'fend', 'help', 'jest', 'kept', 'lend', 'mend',
            'meld', 'melt', 'nest', 'pest', 'rest', 'send', 'tend', 'tent', 'vend', 'vest',
            'went', 'welt', 'west', 'zest', 'pelt', 'kemp', 'rend', 'test', 'fend', 'meld',
        ],
        i: [
            'dink', 'find', 'film', 'gild', 'gimp', 'hind', 'hilt', 'hint', 'jilt',
            'kind', 'king', 'link', 'lint', 'mint', 'milk', 'pink', 'rink', 'ring', 'silt',
            'silk', 'sink', 'sift', 'tint', 'tilt', 'wink', 'wind', 'wilt', 'wild', 'wimp',
        ],
        o: [
            'bond', 'bold', 'colt', 'comb', 'cold', 'fond', 'fold', 'gold', 'gong',
            'hold', 'holt', 'jolt', 'mold', 'most', 'pond', 'post', 'told', 'volt', 'wold',
            'wolf', 'wont', 'cost', 'lost', 'host', 'fond', 'dolt', 'bolt', 'tomb', 'trod',
        ],
        u: [
            'bunk', 'bump', 'bust', 'dump', 'dunk', 'fund', 'funk', 'gust', 'gunk',
            'hulk', 'hunt', 'hung', 'junk', 'just', 'jump', 'lump', 'lunk', 'lung', 'must',
            'musk', 'punk', 'pulp', 'punt', 'rung', 'sunk', 'tusk', 'tump', 'bust', 'cusp',
        ],
    },
    ccvcc: {
        a: [
            'brand', 'blank', 'clamp', 'cramp', 'crank', 'draft', 'drank', 'flank',
            'frank', 'grand', 'grant', 'grasp', 'plant', 'plank', 'prank', 'scamp',
            'slant', 'spank', 'stand', 'stamp', 'stack', 'stank', 'strap', 'track',
            'tramp', 'clamp', 'scalp', 'scant', 'splat', 'clamp',
        ],
        e: [
            'blend', 'blent', 'dreck', 'dress', 'press', 'slept', 'smelt', 'spent',
            'swept', 'trend', 'tress', 'dwell', 'smell', 'spell', 'spend', 'spelt',
            'strep', 'stress', 'stretch', 'fret', 'crest', 'dwelt', 'fled', 'kemp',
            'tremp', 'skelp', 'swept', 'bless', 'blent', 'meld',
        ],
        i: [
            'blink', 'brink', 'clink', 'clint', 'crimp', 'crisp', 'drink', 'drift',
            'flint', 'frisk', 'grind', 'grist', 'print', 'prism', 'skimp', 'skirt',
            'slink', 'split', 'sprint', 'stink', 'sting', 'swift', 'swing', 'twist',
            'twink', 'frisk', 'skink', 'flint', 'blink', 'twist',
        ],
        o: [
            'block', 'clomp', 'clonk', 'croft', 'cross', 'flock', 'front', 'frost',
            'gloss', 'plonk', 'prompt', 'smock', 'smolt', 'stock', 'stomp', 'stork',
            'strong', 'tromp', 'trock', 'clomp', 'clost', 'floss', 'frock', 'prong',
            'plomb', 'brock', 'tromp', 'frost', 'plonk', 'clomp',
        ],
        u: [
            'blunt', 'brunt', 'clump', 'clunk', 'crust', 'drunk', 'flung', 'frump',
            'grunt', 'plump', 'plunk', 'skunk', 'slump', 'slung', 'spunk', 'stuck',
            'stump', 'strut', 'strum', 'stunt', 'swung', 'trunk', 'trust', 'truss',
            'plump', 'grunt', 'strut', 'trump', 'blurb', 'blush',
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
