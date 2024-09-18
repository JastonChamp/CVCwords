const words = [
    'cat', 'dog', 'bat', 'rat', 'hat', 'log', 'jug', 'mop', 'top', 'pan',
    'fan', 'man', 'can', 'hop', 'pop', 'sap', 'tap', 'zip', 'lip', 'rip',
    'sun', 'fun', 'run', 'tin', 'pin', 'win', 'kit', 'bit', 'fit', 'sit',
    'net', 'let', 'bet', 'pet', 'dot', 'lot', 'pot', 'rot', 'cot', 'got',
    'hut', 'but', 'cut', 'nut', 'rug', 'bug', 'jug', 'mud', 'bud', 'rub',
    'bag', 'tag', 'lag', 'rag', 'sip', 'tip', 'lip', 'rip', 'sip', 'zip',
    'mad', 'sad', 'bad', 'lad', 'pad', 'ram', 'bam', 'jam', 'bam', 'ham',
    'dig', 'pig', 'big', 'wig', 'jig', 'tag', 'wag', 'rag', 'bag', 'hag'
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
    wordBox.classList.add('shake'); // Add shake effect
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
            
            // Speak the word 2 seconds after all letters are revealed
            setTimeout(() => {
                speakWord(word); 
                setTimeout(() => {
                    giveCompliment();  // Compliment after word is spoken
                    updateProgress();
                }, 1500); // Delay before compliment
            }, 2000); // Delay before speaking word
        }
    }, 500);  // Reveal a letter every 500ms
}

function isVowel(letter) {
    return 'aeiou'.includes(letter.toLowerCase());
}

function speakWord(word) {
    const utterance = new SpeechSynthesisUtterance(word);
    window.speechSynthesis.speak(utterance);
}

function giveCompliment() {
    const compliments = ['Great job!', 'Fantastic!', 'Well done!', 'You did it!', 'Awesome!'];
    const compliment = compliments[Math.floor(Math.random() * compliments.length)];
    complimentBox.textContent = compliment;
    complimentBox.style.color = 'green';
    complimentBox.style.fontSize = '30px';

    const utterance = new SpeechSynthesisUtterance(compliment); // Speak compliment
    window.speechSynthesis.speak(utterance);
}

function updateProgress() {
    revealedWords++;
    progressText.textContent = `${revealedWords} / ${words.length} Words Revealed`;
    progressBar.value = (revealedWords / words.length) * 100;
}
