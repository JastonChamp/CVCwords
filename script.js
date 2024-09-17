const wheel = document.querySelector('.wheel');
const wordCountDisplay = document.getElementById('wordCount');
let cvcWords = [
    'hop', 'nut', 'bed', 'cat', 'dog', 'pen', 'run', 'bug', 'fox', 'hat',
    'jam', 'net', 'map', 'pig', 'tub', 'cup', 'van', 'wax', 'win', 'box',
    'bat', 'bet', 'bit', 'bot', 'but', 'cut', 'dot', 'fit', 'gut', 'hit',
    'hot', 'jet', 'kit', 'lot', 'met', 'not', 'pat', 'pot', 'rat', 'sat',
    'set', 'sit', 'tan', 'tap', 'tin', 'top', 'wet', 'wit', 'yet', 'zoo',
    'dim', 'dip', 'lip', 'lit', 'mix', 'mop', 'nip', 'pan', 'pin', 'pit',
    'pod', 'pop', 'rim', 'rip', 'rot', 'sob', 'sum', 'sun', 'tap', 'ten',
    'tip', 'tug', 'vet', 'wed', 'wig', 'win', 'yam', 'yen', 'yip',
    'bud', 'bun', 'bus', 'cob', 'cod', 'cog', 'con', 'cop', 'cub', 'dud',
    'dug', 'fun', 'gum', 'gun', 'hug', 'hum', 'hut', 'jog', 'jug', 'mud'
];

let wordsRevealed = 0; // Track how many words have been revealed
const totalWords = cvcWords.length;

// Phonetic mapping for letters
const phoneticMap = {
    'a': 'æ',   // short "a" sound
    'b': 'b',   // "buh"
    'c': 'k',   // "kuh"
    'd': 'd',   // "duh"
    'e': 'ɛ',   // short "e" sound (like "eh")
    'f': 'f',   // "fuh"
    'g': 'g',   // "guh"
    'h': 'h',   // "huh"
    'i': 'ɪ',   // short "i" sound (like "ih")
    'j': 'ʤ',   // "juh"
    'k': 'k',   // "kuh"
    'l': 'l',   // "luh"
    'm': 'm',   // "muh"
    'n': 'n',   // "nuh"
    'o': 'ɑ',   // short "o" sound (like "ah")
    'p': 'p',   // "puh"
    'q': 'k',   // "kuh" (same as "c" for simplicity)
    'r': 'r',   // "ruh"
    's': 's',   // "sss"
    't': 't',   // "tuh"
    'u': 'ʌ',   // short "u" sound (like "uh")
    'v': 'v',   // "vuh"
    'w': 'w',   // "wuh"
    'x': 'ks',  // "ks"
    'y': 'j',   // "yuh"
    'z': 'z'    // "zzz"
};

// Function to trigger Text-to-Speech for individual letters and the full word using phonetics
function speakPhoneticLetter(letter) {
    const phonetic = phoneticMap[letter.toLowerCase()] || letter; // Get the phonetic sound, fallback to letter if not found
    speakText(phonetic); // Speak the phonetic sound
}

// Function to trigger Text-to-Speech for the word itself
function speakWord(word) {
    speakText(word); // Speak the full word after all letters are revealed
}

// Function to trigger Text-to-Speech
function speakText(message) {
    const synth = window.speechSynthesis;
    const utterance = new SpeechSynthesisUtterance(message);
    
    utterance.lang = 'en-US'; // Set language (English - US)
    utterance.rate = 1; // Speed of the speech (1 is normal speed)

    synth.speak(utterance); // Speak the message
}

// Function to render slots with word and preserve vowel coloring
function renderSlots() {
    wheel.innerHTML = ''; // Clear previous slots
    cvcWords.forEach(word => {
        const slot = document.createElement('div');
        slot.className = 'slot';
        
        // Render each letter as a span, with red for vowels
        let coloredWord = '';
        for (let letter of word) {
            if ('aeiou'.includes(letter)) {
                coloredWord += `<span class="vowel letter" style="color: red; opacity: 0;">${letter}</span>`;
            } else {
                coloredWord += `<span class="letter" style="opacity: 0;">${letter}</span>`;
            }
        }
        
        slot.innerHTML = coloredWord; // Set inner HTML with colored letters
        slot.style.display = 'none'; // Initially hide slot
        wheel.appendChild(slot); // Add slot to wheel
    });
}

// Asynchronous function to reveal letters one by one and say the phonetic sound
async function revealLetters(slot, word) {
    const letters = slot.querySelectorAll('.letter'); // Get all letter spans
    for (let i = 0; i < letters.length; i++) {
        const letter = letters[i];
        await new Promise(resolve => setTimeout(resolve, 500)); // Wait 500ms
        letter.style.opacity = '1'; // Reveal letter one by one

        // Speak the phonetic sound of the revealed letter
        speakPhoneticLetter(letter.textContent);
    }

    // After revealing all letters, say the full word
    speakWord(word);
}

// Function to show and speak positive feedback
const feedbackMessages = ['Great Job!', 'Well Done!', 'Keep Going!', 'You Did It!'];

async function showFeedback() {
    const feedback = document.createElement('div');
    feedback.className = 'feedback';
    
    // Randomly select a message from the feedbackMessages array
    const randomMessage = feedbackMessages[Math.floor(Math.random() * feedbackMessages.length)];
    feedback.textContent = randomMessage;
    wheel.appendChild(feedback);

    // Trigger the voiceover for the compliment
    speakText(randomMessage); // Speak the compliment aloud

    setTimeout(() => feedback.remove(), 2000); // Display feedback for 2 seconds
}

// Function to update progress bar and word count
function updateProgressBar() {
    wordsRevealed++;
    const progress = (wordsRevealed / totalWords) * 100;
    const progressFill = document.getElementById('progressFill');

    progressFill.style.width = `${progress}%`;

    // RAG color evaluation based on progress
    if (progress < 30) {
        progressFill.style.backgroundColor = 'red'; // Red for < 30%
    } else if (progress < 70) {
        progressFill.style.backgroundColor = 'orange'; // Amber for 30-70%
    } else {
        progressFill.style.backgroundColor = 'green'; // Green for > 70%
    }

    // Update the word count display
    wordCountDisplay.textContent = `${wordsRevealed} / ${totalWords} Words Revealed`;

    // If all words are revealed, show a congratulatory message
    if (wordsRevealed === totalWords) {
        wordCountDisplay.textContent = `Congratulations! You've revealed all ${totalWords} words!`;
    }
}

// Event listener for spin button
document.getElementById('spinButton').addEventListener('click', async () => {
    // Add the spin effect
    wheel.classList.add('spin-effect');
    setTimeout(() => wheel.classList.remove('spin-effect'), 300); // Remove effect after 300ms

    const slots = document.querySelectorAll('.slot'); // Get all slots
    const previousSlot = document.querySelector('.slot:not([style*="display: none"])'); // Find visible slot
    if (previousSlot) previousSlot.style.display = 'none'; // Hide previous slot

    const randomIndex = Math.floor(Math.random() * cvcWords.length); // Get random index
    const selectedSlot = slots[randomIndex]; // Select random slot
    const selectedWord = cvcWords[randomIndex]; // Get the corresponding word

    selectedSlot.style.display = 'block'; // Show selected slot

    await revealLetters(selectedSlot, selectedWord); // Reveal letters and say each letter, then say the word
    showFeedback(); // Display and speak the feedback
    updateProgressBar(); // Update the progress bar and word count
});

renderSlots(); // Call renderSlots to setup initial slots
