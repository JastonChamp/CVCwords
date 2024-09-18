const words = [
    'hop', 'nut', 'bed', 'cat', 'dog', 'pen', 'run', 'bug', 'fox', 'hat',
    'jam', 'net', 'map', 'pig', 'tub', 'cup', 'van', 'wax', 'win', 'box',
    'bat', 'bet', 'bit', 'bot', 'but', 'cut', 'dot', 'fit', 'gut', 'hit',
    'hot', 'jet', 'kit', 'lot', 'met', 'not', 'pat', 'pot', 'rat', 'sat',
    'set', 'sit', 'tan', 'tap', 'tin', 'top', 'wet', 'wit', 'yet', 'zoo',
    'dim', 'dip', 'lip', 'lit', 'mix', 'mop', 'nip', 'pan', 'pin', 'pit',
    'pod', 'pop', 'rim', 'rip', 'rot', 'sob', 'sum', 'sun', 'tap', 'ten',
    'tip', 'tug', 'vet', 'wed', 'wig', 'win', 'yam', 'yen', 'yip',
    'bud', 'bun', 'bus', 'cob', 'cod', 'cog', 'con', 'cop', 'cub', 'dud',
    'dug', 'fun', 'gum', 'gun', 'hug', 'hum', 'hut', 'jog', 'jug', 'mud',
];

let currentIndex = 0;
let wordRevealed = 0;
let wordCount = words.length;

const spinButton = document.getElementById('spinButton');
const wheel = document.getElementById('wheel');
const progressBar = document.getElementById('progressBar');
const progressText = document.getElementById('progressText');

// Audio
const revealSound = new Audio('reveal-sound.mp3');
const spinSound = new Audio('spin-sound.mp3');

// Function to spin and reveal the letters of a word
function spin() {
    spinSound.play();
    wheel.classList.add('shake'); // Add the shake effect
    setTimeout(() => {
        wheel.classList.remove('shake');
        let word = words[currentIndex];
        revealWord(word);
        currentIndex = (currentIndex + 1) % wordCount;
    }, 1000); // Spin animation lasts for 1 second
}

// Function to reveal the letters one by one
function revealWord(word) {
    wheel.innerHTML = ''; // Clear the box
    let letters = word.split('');
    let delay = 500; // Delay between each letter reveal

    letters.forEach((letter, index) => {
        setTimeout(() => {
            const span = document.createElement('span');
            span.textContent = letter;

            if ('aeiou'.includes(letter)) {
                span.style.color = 'red'; // Color vowels in red
            } else {
                span.style.color = 'black'; // Consonants stay black
            }

            wheel.appendChild(span);
            revealSound.play();
        }, delay * index);
    });

    // After all letters are revealed, say the word
    setTimeout(() => {
        const speech = new SpeechSynthesisUtterance(word);
        speech.lang = 'en-US';
        speechSynthesis.speak(speech);
        wordRevealed++;
        updateProgress();
        showCompliment();
    }, delay * letters.length);
}

// Function to update the progress bar and text
function updateProgress() {
    const progressPercentage = (wordRevealed / wordCount) * 100;
    progressBar.style.width = progressPercentage + '%';
    progressText.textContent = `${wordRevealed} / ${wordCount} Words Revealed`;
}

// Function to show a compliment after the word is revealed
function showCompliment() {
    const compliments = ['Great Job!', 'Well Done!', 'You Did It!', 'Awesome!'];
    const randomCompliment = compliments[Math.floor(Math.random() * compliments.length)];
    
    setTimeout(() => {
        const compliment = document.createElement('div');
        compliment.textContent = randomCompliment;
        compliment.style.fontSize = '2rem';
        compliment.style.color = '#4caf50';
        compliment.style.position = 'absolute';
        compliment.style.top = '10%';
        compliment.style.left = '50%';
        compliment.style.transform = 'translate(-50%, -50%)';
        document.body.appendChild(compliment);

        setTimeout(() => {
            document.body.removeChild(compliment);
        }, 1500);
    }, 1000); // Compliment appears 1 second after the word reveal
}

spinButton.addEventListener('click', spin);
