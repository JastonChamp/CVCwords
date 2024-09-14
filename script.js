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

function playAudioForWord(word) {
    // This is a placeholder function for potential future audio integration
    console.log(`Audio for ${word} would play here.`);
}

function renderSlots() {
    wheel.innerHTML = '';
    cvcWords.forEach(word => {
        const slot = document.createElement('div');
        slot.className = 'slot';
        slot.textContent = word;
        slot.style.display = 'none';
        wheel.appendChild(slot);
    });
}

function revealLetters(slot) {
    const letters = slot.textContent.split('');
    slot.innerHTML = ''; // Clear the slot
    letters.forEach((letter, index) => {
        const span = document.createElement('span');
        span.textContent = letter;
        span.style.opacity = 0;
        slot.appendChild(span);
        setTimeout(() => {
            span.style.opacity = 1;
        }, index * 500); // Adjust timing for revealing letters
    });
}

renderSlots();

const slots = document.querySelectorAll('.slot');
let currentSlot = 0;
slots[currentSlot].style.display = 'flex';
revealLetters(slots[currentSlot]);

document.getElementById('spinButton').addEventListener('click', () => {
    const currentWord = slots[currentSlot];
    currentWord.style.display = 'none';

    let nextSlot = Math.floor(Math.random() * cvcWords.length);
    while (nextSlot === currentSlot) {
        nextSlot = Math.floor(Math.random() * cvcWords.length); // Ensure the next word is different
    }
    const nextWord = slots[nextSlot];
    nextWord.style.display = 'flex';
    revealLetters(nextWord);
    currentSlot = nextSlot;

    playAudioForWord(cvcWords[currentSlot]);
});

document.getElementById('addWordButton').addEventListener('click', () => {
    const customWord = document.getElementById('customWordInput').value.trim().toLowerCase();
    if (customWord.length === 3 && /^[a-z]+$/.test(customWord)) {
        cvcWords.push(customWord);
        renderSlots();  // Re-render the slots to include the new word
    } else {
        alert('Please enter a valid 3-letter word.');
    }
});
