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

// Sound effects
const spinSound = new Audio('spin-sound.mp3'); // Spin sound file
const revealSound = new Audio('reveal-sound.mp3'); // Reveal sound file

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

// Asynchronous function to reveal letters one by one with sound effects and a delay before word audio
async function revealLetters(slot, word) {
    const letters = slot.querySelectorAll('.letter'); // Get all letter spans
    console.log(`Revealing word: ${word}`); // Log the word for debugging

    for (let i = 0; i < letters.length; i++) {
        const letter = letters[i];
        console.log(`Revealing letter: ${letter.textContent} of word: ${word}`); // Log each letter with the word for debugging
        await new Promise(resolve => setTimeout(resolve, 700)); // Wait 700ms between each letter reveal
        letter.style.opacity = '1'; // Reveal the letter
        revealSound.play(); // Play reveal sound
    }

    // Add a delay before saying the full word (e.g., 2000ms = 2 seconds)
    await new Promise(resolve => setTimeout(resolve, 2000));

    // After the delay, say the full word
    console.log(`Finished revealing word: ${word}`); // Log word completion for debugging
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

// Event listener for Spin button
document.getElementById('spinButton').addEventListener('click', async () => {
    spinSound.play(); // Play spin sound
    const randomWord = cvcWords[Math.floor(Math.random() * cvcWords.length)];
    renderSlots(); // Re-render all slots with words

    const slots = wheel.querySelectorAll('.slot');
    const randomSlot = slots[Math.floor(Math.random() * slots.length)];

    randomSlot.style.display = 'block'; // Show the random slot
    await revealLetters(randomSlot, randomWord); // Reveal letters one by one
    showFeedback(); // Show feedback after revealing the word
    updateProgressBar(); // Update progress bar after each spin
});
