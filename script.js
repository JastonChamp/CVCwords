const wheel = document.querySelector('.wheel');
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

// Asynchronous function to reveal letters one by one
async function revealLetters(slot) {
    const letters = slot.querySelectorAll('.letter'); // Get all letter spans
    for (let letter of letters) {
        await new Promise(resolve => setTimeout(resolve, 500)); // Wait 500ms
        letter.style.opacity = '1'; // Reveal letter one by one
    }
}

// Function to show positive feedback after the word is revealed
const feedbackMessages = ['Great Job!', 'Well Done!', 'Keep Going!', 'You Did It!'];

async function showFeedback() {
    const feedback = document.createElement('div');
    feedback.className = 'feedback';
    feedback.textContent = feedbackMessages[Math.floor(Math.random() * feedbackMessages.length)];
    wheel.appendChild(feedback);

    setTimeout(() => feedback.remove(), 2000); // Display feedback for 2 seconds
}

// Function to update progress bar
function updateProgressBar() {
    wordsRevealed++;
    const progress = (wordsRevealed / cvcWords.length) * 100;
    document.getElementById('progressFill').style.width = `${progress}%`;
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
    selectedSlot.style.display = 'block'; // Show selected slot

    await revealLetters(selectedSlot); // Reveal letters one by one
    showFeedback(); // Show positive feedback
    updateProgressBar(); // Update the progress bar
});

renderSlots(); // Call renderSlots to setup initial slots
