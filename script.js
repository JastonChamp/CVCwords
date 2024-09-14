const wheel = document.querySelector('.wheel');
let cvcWords = [
    // List of words
    'hop', 'nut', 'bed', 'cat', 'dog', 'pen', 'run', 'bug', 'fox', 'hat',
    'jam', 'net', 'map', 'pig', 'tub', 'cup', 'van', 'wax', 'win', 'box',
    // Add more words as required
];

// Function to render slots with word
function renderSlots() {
    wheel.innerHTML = ''; // Clear previous slots
    cvcWords.forEach(word => {
        const slot = document.createElement('div');
        slot.className = 'slot';
        slot.textContent = word; // Set text content to word
        slot.style.display = 'none'; // Initially hide slot
        wheel.appendChild(slot); // Add slot to wheel
    });
}

// Asynchronous function to reveal letters one by one
async function revealLetters(slot) {
    const letters = slot.textContent.split(''); // Split word into letters
    slot.innerHTML = ''; // Clear slot text
    for (let letter of letters) {
        const span = document.createElement('span'); // Create span for each letter
        span.textContent = letter; // Set text content to letter
        span.style.opacity = '0'; // Initially hide letter
        slot.appendChild(span); // Add letter span to slot
        await new Promise(resolve => setTimeout(resolve, 500)); // Wait 500ms
        span.style.opacity = '1'; // Reveal letter
    }
}

// Event listener for spin button
document.getElementById('spinButton').addEventListener('click', async () => {
    const slots = document.querySelectorAll('.slot'); // Get all slots
    const previousSlot = document.querySelector('.slot:not([style*="display: none"])'); // Find visible slot
    if (previousSlot) previousSlot.style.display = 'none'; // Hide previous slot

    const randomIndex = Math.floor(Math.random() * cvcWords.length); // Get random index
    const selectedSlot = slots[randomIndex]; // Select random slot
    selectedSlot.style.display = 'block'; // Show selected slot

    await revealLetters(selectedSlot); // Reveal letters one by one
});

renderSlots(); // Call renderSlots to setup initial slots
