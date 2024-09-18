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
const revealSound = new Audio('reveal-sound.mp3');  // Added reveal sound
const feedbackMessages = ['Well Done!', 'Great Job!', 'Excellent!', 'You Got It!', 'Awesome!'];

// Function to speak text
function speakText(text) {
    const utterance = new SpeechSynthesisUtterance(text);
    window.speechSynthesis.speak(utterance);
}

// Function to reveal letters with correct vowel color
async function revealLetters(slot, word) {
    slot.textContent = '';  // Clear existing content

    for (let i = 0; i < word.length; i++) {
        const letter = word[i];
        
        // Check if it's a vowel and color accordingly
        const letterSpan = document.createElement('span');
        if (['a', 'e', 'i', 'o', 'u'].includes(letter.toLowerCase())) {
            letterSpan.style.color = 'red';  // Color vowels red
        } else {
            letterSpan.style.color = 'black';
        }

        letterSpan.textContent = letter;
        slot.appendChild(letterSpan);  // Append each letter

        revealSound.play();  // Play reveal sound for each letter
        await new Promise(resolve => setTimeout(resolve, 500));  // Pause between letters
    }

    // Play the word audio after all letters are revealed
    setTimeout(() => {
        speakText(word);  // Speak the full word
        setTimeout(() => showFeedback(), 2000);  // Show feedback after word is spoken
    }, 1000);  // Small delay before speaking the word
}

// Function to update the progress bar
function updateProgressBar() {
    revealedWords++;
    const progressBar = document.getElementById('progressFill');
    const wordCountText = document.getElementById('wordCount');
    
    const progressPercentage = (revealedWords / cvcWords.length) * 100;
    progressBar.style.width = `${progressPercentage}%`;  // Update progress bar width
    wordCountText.textContent = `${revealedWords} / ${cvcWords.length} Words Revealed`;  // Update word count
}

// Function to show feedback message
async function showFeedback() {
    const feedback = document.createElement('div');
    feedback.className = 'feedback';

    const randomMessage = feedbackMessages[Math.floor(Math.random() * feedbackMessages.length)];
    feedback.textContent = randomMessage;

    const spinner = document.querySelector('.spinner');
    document.body.insertBefore(feedback, spinner);

    speakText(randomMessage);  // Speak the feedback message

    setTimeout(() => feedback.remove(), 2000);  // Remove feedback after 2 seconds
}

// Event listener for spin button
document.getElementById('spinButton').addEventListener('click', async () => {
    spinSound.play();  // Play spin sound
    const randomWord = cvcWords[Math.floor(Math.random() * cvcWords.length)];

    renderSlots();  // Re-render all slots
    const slots = document.querySelectorAll('.slot');
    const randomSlot = slots[Math.floor(Math.random() * slots.length)];

    randomSlot.style.display = 'block';  // Show the slot
    await revealLetters(randomSlot, randomWord);  // Reveal letters with correct colors
    updateProgressBar();  // Update the progress bar
});

// Function to render word slots
function renderSlots() {
    const wheel = document.querySelector('.wheel');
    wheel.innerHTML = '';  // Clear existing slots

    for (let i = 0; i < cvcWords.length; i++) {
        const slot = document.createElement('div');
        slot.className = 'slot';
        slot.style.display = 'none';  // Hide slots initially
        wheel.appendChild(slot);  // Append each slot to the wheel
    }
}

// Initial setup
renderSlots();
