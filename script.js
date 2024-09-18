const words = [
    // Short 'A' sound
    'cat', 'bat', 'rat', 'hat', 'mat', 'sat', 'pat', 'fat', 'lap', 'tap',
    'pan', 'can', 'man', 'ran', 'fan', 'bad', 'mad', 'sad', 'dad', 'bag',
    'tag', 'lag', 'rag', 'jam', 'ram', 'dam', 'ham', 'cap', 'nap', 'sap',

    // Short 'E' sound
    'bet', 'met', 'let', 'pet', 'net', 'set', 'wet', 'pen', 'den', 'men',
    'red', 'led', 'fed', 'bed', 'beg', 'peg', 'leg', 'ten', 'hen', 'ben',
    'jet', 'vet', 'wet', 'get', 'net',

    // Short 'I' sound
    'bit', 'fit', 'kit', 'sit', 'lit', 'hit', 'pit', 'tip', 'rip', 'zip',
    'win', 'bin', 'pin', 'sin', 'tin', 'fin', 'kid', 'lid', 'rid', 'mid',
    'big', 'dig', 'pig', 'wig', 'jig', 'fig', 'mix', 'fix', 'six', 'nix',

    // Short 'O' sound
    'hot', 'cot', 'dot', 'lot', 'pot', 'not', 'got', 'rot', 'log', 'dog',
    'bog', 'fog', 'hog', 'jog', 'mom', 'pop', 'mop', 'top', 'hop', 'cop',
    'bob', 'rob', 'sob', 'job', 'nod', 'pod', 'rod', 'cod', 'fox', 'box',

    // Short 'U' sound
    'but', 'cut', 'hut', 'nut', 'put', 'rug', 'bug', 'jug', 'mug', 'hug',
    'bun', 'fun', 'run', 'sun', 'gun', 'pun', 'cub', 'tub', 'sub', 'rub',
    'mud', 'bud', 'rud', 'dug', 'lug', 'pug', 'mug', 'hug', 'bud', 'gum'
];


let revealedWords = 0;

const spinButton = document.getElementById('spinButton');
const wordBox = document.querySelector('.wheel');
const progressText = document.getElementById('progressText');
const progressBar = document.getElementById('progressBar');
const complimentBox = document.getElementById('complimentBox');

const spinSound = new Audio('spin-sound.mp3');
let revealSound = new Audio('reveal-sound.mp3');

spinButton.addEventListener('click', spin);

function spin() {
    spinSound.play();  // Play spin sound

    // Add shake effect
    wordBox.classList.add('shake');
    setTimeout(() => {
        wordBox.classList.remove('shake'); // Remove shake effect after animation
    }, 500);

    wordBox.innerHTML = ''; // Clear previous word
    complimentBox.innerHTML = ''; // Clear previous compliment
    const word = words[Math.floor(Math.random() * words.length)];
    revealWord(word);
}

function revealWord(word) {
    let index = 0;
    let revealInterval = setInterval(() => {
        if (index < word.length) {
            let span = document.createElement('span');
            span.textContent = word[index];
            
            // Color vowels red
            if (isVowel(word[index])) {
                span.style.color = 'red';
            }
            
            wordBox.appendChild(span);
            revealSound.play();  // Play reveal sound for each letter
            
            index++;
        } else {
            clearInterval(revealInterval);

            // Speak the word 1.5 seconds after all letters are revealed
            setTimeout(() => {
                speakWord(word); 
                setTimeout(() => {
                    giveCompliment();  // Compliment after word is spoken
                    updateProgress();
                }, 1000); // Delay before compliment (adjusted for smoother experience)
            }, 1500); // Delay before speaking word
        }
    }, 400);  // Reveal a letter every 400ms (adjusted for faster reveal)
}

function isVowel(letter) {
    return 'aeiou'.includes(letter.toLowerCase());
}

function speakWord(word) {
    const utterance = new SpeechSynthesisUtterance(word);
    utterance.rate = 0.9; // Slightly slower for child-friendly pace
    utterance.pitch = 1.5; // Higher pitch for child-friendly tone
    utterance.volume = 1; // Full volume
    window.speechSynthesis.speak(utterance);
}

function giveCompliment() {
    const compliments = ['Great job!', 'Fantastic!', 'Well done!', 'You did it!', 'Awesome!'];
    const compliment = compliments[Math.floor(Math.random() * compliments.length)];
    complimentBox.textContent = compliment;
    complimentBox.style.color = 'green';
    complimentBox.style.fontSize = '30px';

    const utterance = new SpeechSynthesisUtterance(compliment);
    utterance.rate = 0.9; // Child-friendly rate
    utterance.pitch = 1.5; // Child-friendly pitch
    utterance.volume = 1; // Full volume
    window.speechSynthesis.speak(utterance);
}

function updateProgress() {
    revealedWords++;
    progressText.textContent = `${revealedWords} / ${words.length} Words Revealed`;
    progressBar.value = (revealedWords / words.length) * 100;
}

// Initialize progress bar width (if needed)
progressBar.value = 0;
