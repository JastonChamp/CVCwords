const cvcWords = [
    'tap', 'cat', 'bat', 'rat', 'fat', 'hat', 'pat', 'sat', 'mat', 'fan', 
    'fun', 'map', 'man', 'gap', 'cap', 'bag', 'tag', 'big', 'pig', 'wig', 
    'red', 'bed', 'led', 'pen', 'ten', 'hen', 'net', 'pet', 'wet', 'bet', 
    'pot', 'dot', 'hot', 'cot', 'lot', 'top', 'hop', 'dog', 'log', 'fog',
    'run', 'sun', 'bun', 'gun', 'mug', 'jug', 'tub', 'rub', 'sub', 'nut',
    'cut', 'but', 'put', 'jug', 'bud', 'mud', 'fun', 'dud'
];

let revealedWords = 0;

// Preload sounds
const spinSound = new Audio('spin-sound.mp3');
const feedbackMessages = ['Well Done!', 'Great Job!', 'Excellent!', 'You Got It!', 'Awesome!'];

function speakText(text) {
    const utterance = new SpeechSynthesisUtterance(text);
    window.speechSynthesis.speak(utterance);
}

async function revealLetters(slot, word) {
    slot.textContent = ''; // Clear existing content

    for (let i = 0; i < word.length; i++) {
        const letter = word[i];
        await new Promise(resolve => setTimeout(resolve, 500)); // Pause between each letter
        slot.textContent += letter;
    }

    // Play the word audio after all letters are revealed
    setTimeout(() => speakText(word), 1000); // 1-second delay to give time for blending
}

function updateProgressBar() {
    revealedWords++;
    const progressBar = document.getElementById('progressFill');
    const wordCountText = document.getElementById('wordCount');
    
    // Update the width of the progress bar
    const progressPercentage = (revealedWords / cvcWords.length) * 100;
    progressBar.style.width = `${progressPercentage}%`;
    
    // Update word count text
    wordCountText.textContent = `${revealedWords} / ${cvcWords.length} Words Revealed`;
}

async function showFeedback() {
    const feedback = document.createElement('div');
    feedback.className = 'feedback';

    // Randomly select a message from the feedbackMessages array
    const randomMessage = feedbackMessages[Math.floor(Math.random() * feedbackMessages.length)];
    feedback.textContent = randomMessage;

    // Insert the feedback message before the spinner
    document.body.insertBefore(feedback, document.querySelector('.spinner'));

    // Trigger the voiceover for the compliment
    speakText(randomMessage);

    setTimeout(() => feedback.remove(), 2000); // Display feedback for 2 seconds
}

// Spin button event listener
document.getElementById('spinButton').addEventListener('click', async () => {
    spinSound.play(); // Play spin sound
    const randomWord = cvcWords[Math.floor(Math.random() * cvcWords.length)];

    renderSlots(); // Re-render all slots with words
    const slots = document.querySelectorAll('.slot');
    const randomSlot = slots[Math.floor(Math.random() * slots.length)];

    randomSlot.style.display = 'block'; // Show the random slot
    await revealLetters(randomSlot, randomWord); // Reveal letters one by one
    showFeedback(); // Show feedback after revealing the word
    updateProgressBar(); // Update progress bar after each spin
});

// Function to render slots
function renderSlots() {
    const wheel = document.querySelector('.wheel');
    wheel.innerHTML = ''; // Clear existing slots

    // Create slots for each word
    for (let i = 0; i < cvcWords.length; i++) {
        const slot = document.createElement('div');
        slot.className = 'slot';
        wheel.appendChild(slot); // Append each slot to the wheel
    }
}
