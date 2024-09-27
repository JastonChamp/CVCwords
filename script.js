// =====================
// Word Spinner Script
// =====================

// =====================
// Word Groups Configuration
// =====================

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
    digraphs: {
        sh: [
            'ship', 'fish', 'shop', 'wish', 'bash', 'dash', 'gush', 'mash', 'rash'
        ],
        th: [
            'this', 'that', 'math', 'with', 'then', 'both'
        ],
        ch: [
            'chip', 'chat', 'chop'
        ],
        ng: [
            'sing', 'ring', 'king', 'long', 'song', 'hung', 'strong', 'bang', 'wing', 'swing'
        ],
    },
};

// =====================
// Preload All Digraph Words
// =====================

const allDigraphWords = Object.values(wordGroups.digraphs).flat();

// =====================
// Audio Configuration
// =====================

// Path to audio files in the root folder
const audioPath = './'; // './' refers to the root directory

// Object to hold all letter and digraph sounds
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

// =====================
// Predefined Compliments
// =====================

const compliments = ['Great job!', 'Fantastic!', 'Well done!', 'You did it!', 'Awesome!'];

// =====================
// Speech Synthesis Configuration
// =====================

let selectedVoice = null;

// Function to load voices and select a female voice
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
            // Fallback: Log to console if speech synthesis isn't available
            console.warn(`Speech synthesis not available. Text: ${text}`);
            resolve();
        }
    });
}

// =====================
// Utility Functions
// =====================

// Function to check if a letter is a vowel
function isVowel(letter) {
    return 'aeiou'.includes(letter.toLowerCase());
}

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

    // Ensure totalWords is not zero to avoid division by zero
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
    complimentBox.style.opacity = '1'; // Fade in

    // Speak the compliment
    speak(compliment);

    // Fade out after a delay
    setTimeout(() => {
        complimentBox.style.opacity = '0';
    }, 2000);
}

// Function to play audio for a letter or digraph
function playLetterSound(unit) {
    return new Promise((resolve) => {
        const sound = letterSounds[unit.toLowerCase()];
        if (sound) {
            sound.currentTime = 0;
            sound.play().then(() => {
                sound.onended = resolve;
            }).catch((error) => {
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
        // Check for digraphs
        if (i < word.length - 1) {
            const twoLetters = word.substring(i, i + 2).toLowerCase();
            if (digraphs.includes(twoLetters)) {
                units.push({
                    text: twoLetters,
                    isVowel: false,
                    isDigraph: true,
                    isSilent: false // Adjust if you have silent digraphs
                });
                i += 2;
                continue;
            }
        }

        // Single letter
        const singleLetter = word[i].toLowerCase();
        units.push({
            text: singleLetter,
            isVowel: isVowel(singleLetter),
            isDigraph: false,
            isSilent: false // Adjust if you have silent letters
        });
        i += 1;
    }

    return units;
}

// =====================
// Core Functions
// =====================

// Function to reveal the word with animations and audio
async function revealWord(word) {
    wordBox.innerHTML = ''; // Clear previous word
    const units = parseWord(word);
    const letterSpans = [];

    // Create span elements for each unit
    for (let i = 0; i < units.length; i++) {
        const unit = units[i];
        const span = document.createElement('span');
        span.textContent = unit.text;

        // Apply CSS classes based on unit type
        if (unit.isVowel && !unit.isDigraph) {
            span.classList.add('vowel');
        }

        if (unit.isDigraph) {
            span.classList.add('digraph');
        }

        // Append the span to the word box
        wordBox.appendChild(span);
        letterSpans.push(unit.text);

        // Set animation order for CSS
        span.style.setProperty('--animation-order', i + 1);
    }

    // Play sounds for each unit with delays matching the CSS animation
    for (let i = 0; i < units.length; i++) {
        const unit = units[i];
        await new Promise(resolve => setTimeout(resolve, 500)); // Initial delay
        if (!unit.isSilent) { // Play sound only if the unit is not silent
            await playLetterSound(unit.text);
        }
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

// Function to get available words based on selected word type and vowel
function getAvailableWords() {
    const selectedWordType = wordTypeSelector.value;
    const selectedVowel = vowelSelector.value;

    switch (selectedWordType) {
        case 'cvc':
            return selectedVowel === 'all' ? 
                wordGroups.cvc.a.concat(wordGroups.cvc.e, wordGroups.cvc.i, wordGroups.cvc.o, wordGroups.cvc.u) : 
                wordGroups.cvc[selectedVowel] || [];
        case 'ccvc':
            return selectedVowel === 'all' ? 
                wordGroups.ccvc.a.concat(wordGroups.ccvc.e, wordGroups.ccvc.i, wordGroups.ccvc.o, wordGroups.ccvc.u) : 
                wordGroups.ccvc[selectedVowel] || [];
        case 'cvcc':
            return selectedVowel === 'all' ? 
                wordGroups.cvcc.a.concat(wordGroups.cvcc.e, wordGroups.cvcc.i, wordGroups.cvcc.o, wordGroups.cvcc.u) : 
                wordGroups.cvcc[selectedVowel] || [];
        case 'ccvcc':
            return selectedVowel === 'all' ? 
                wordGroups.ccvcc.a.concat(wordGroups.ccvcc.e, wordGroups.ccvcc.i, wordGroups.ccvcc.o, wordGroups.ccvcc.u) : 
                wordGroups.ccvcc[selectedVowel] || [];
        case 'digraphs':
            return allDigraphWords;
        default:
            return [];
    }
}

// Function to get a random word from available words
function getRandomWord() {
    const selectedWordType = wordTypeSelector.value;
    let availableWords = [];

    if (selectedWordType === 'digraphs') {
        availableWords = allDigraphWords;
    } else {
        availableWords = getAvailableWords();
    }

    // Filter out used words to get the list of remaining words
    const remainingWords = availableWords.filter(word => !usedWords.includes(word));

    // If all words have been used, inform the user and reset the usedWords array and score
    if (remainingWords.length === 0) {
        alert('You have gone through all the words! The list will reset.');
        usedWords = [];
        revealedWords = 0;
        score = 0;
        scoreText.textContent = `Score: ${score}`;
        updateProgress();
        return getRandomWord();
    }

    // Select a random word from the remaining words
    const word = remainingWords[Math.floor(Math.random() * remainingWords.length)];
    usedWords.push(word);
    return word;
}

// =====================
// Event Handlers
// =====================

// Function to handle the Spin button click
async function spin() {
    spinButton.disabled = true; // Prevent multiple clicks
    wordBox.classList.add('shake'); // Add shake animation
    setTimeout(() => {
        wordBox.classList.remove('shake'); // Remove shake animation after delay
    }, 500);
    complimentBox.textContent = ''; // Clear previous compliment
    complimentBox.style.opacity = '0'; // Reset compliment opacity
    const word = getRandomWord(); // Get a random word based on current selections
    try {
        await revealWord(word); // Reveal the word with animations and audio
    } catch (error) {
        console.error('Error during word reveal:', error);
    }
    spinButton.disabled = false; // Re-enable the Spin button
}

// Event listener for vowel selection change
vowelSelector.addEventListener('change', () => {
    usedWords = [];
    revealedWords = 0;
    score = 0;
    scoreText.textContent = `Score: ${score}`;
    updateProgress();
});

// Event listener for word type selection change
wordTypeSelector.addEventListener('change', () => {
    usedWords = [];
    revealedWords = 0;
    score = 0;
    scoreText.textContent = `Score: ${score}`;
    updateProgress();

    if (wordTypeSelector.value === 'digraphs') {
        vowelSelection.style.display = 'none'; // Hide vowel selector for digraphs
    } else {
        vowelSelection.style.display = 'block'; // Show vowel selector for other word types
    }
});

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

// Function to preload all audio files for better performance
function preloadAudio() {
    for (let key in letterSounds) {
        letterSounds[key].load();
    }
}

// Call preloadAudio on window load
window.onload = preloadAudio;
