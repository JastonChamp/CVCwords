document.addEventListener('DOMContentLoaded', () => {
  console.log("DOM fully loaded. Initializing Word Spinner.");

  /* =====================
     Word Spinner for All Ages
     (Optimized for both children and elderly)
  ===================== */
  
  /* ---------- Word Groups Configuration ---------- */
  const wordGroups = {
    cvc: {
      a: ['bat', 'bag', 'bad', 'cab', 'cap', 'cat', 'dad', 'dam', 'fad', 'fan', 'mad', 'jam', 'van', 'rag', 'tan', 'man', 'lap', 'mat', 'rat', 'can', 'gas', 'wag', 'had', 'lad', 'yam', 'wax', 'pad', 'ram', 'ham', 'pan'],
      e: ['bed', 'beg', 'ben', 'bet', 'den', 'fed', 'get', 'hen', 'jet', 'leg', 'met', 'net', 'pet', 'men', 'pen', 'red', 'set', 'ten', 'wet', 'web', 'yet', 'vet', 'hem', 'peg', 'let', 'keg', 'pep', 'ned', 'ted', 'ken'],
      i: ['bib', 'bid', 'big', 'bin', 'bit', 'dig', 'dip', 'fig', 'fin', 'fit', 'him', 'hit', 'kid', 'lid', 'lip', 'mid', 'pin', 'pig', 'pit', 'rid', 'rim', 'sip', 'sit', 'tin', 'tip', 'wig', 'win', 'zip', 'fix', 'mix'],
      o: ['bob', 'bog', 'cod', 'cob', 'cop', 'cot', 'dog', 'dot', 'fog', 'god', 'box', 'fox', 'got', 'hop', 'hot', 'jog', 'job', 'log', 'lot', 'mob', 'mop', 'nod', 'not', 'pod', 'pop', 'pot', 'rod', 'rot', 'sod', 'top'],
      u: ['bun', 'bud', 'bug', 'bus', 'but', 'cub', 'cud', 'cup', 'cut', 'dug', 'fun', 'gun', 'gum', 'hut', 'hum', 'hug', 'jug', 'mud', 'mug', 'nut', 'nun', 'pug', 'pun', 'pup', 'rub', 'rug', 'run', 'sum', 'sun', 'tug']
    },
    ccvc: {
      a: ['brag', 'clap', 'crab', 'drag', 'flag', 'flap', 'glad', 'grab', 'plan', 'slam', 'snap', 'snag', 'span', 'stab', 'trap', 'scab', 'scam', 'scan', 'scat', 'swam', 'chap', 'that', 'drab', 'gran', 'plat', 'pram', 'slap', 'clan', 'slab'],
      e: ['bled', 'bred', 'fled', 'fret', 'glen', 'sped', 'stem', 'step', 'trek', 'clef', 'sled'],
      i: ['brim', 'brig', 'clip', 'crib', 'drip', 'flip', 'grin', 'grid', 'grip', 'skip', 'slim', 'slip', 'spin', 'spit', 'swim', 'twin', 'trip', 'trim', 'twig', 'skid'],
      o: ['blot', 'blog', 'clog', 'crop', 'drop', 'frog', 'flop', 'glob', 'glop', 'plod', 'plot', 'prod', 'prop', 'slot', 'smog', 'snob', 'spot', 'stop', 'swop', 'trod'],
      u: ['drum', 'grub', 'plug', 'slug', 'slum', 'spun', 'stub', 'stud', 'stun']
    },
    cvcc: {
      a: ['band', 'bank', 'damp', 'hand', 'land', 'lamp', 'ramp', 'sand', 'pant', 'tank', 'camp'],
      e: ['bent', 'dent', 'felt', 'fend', 'help', 'kept', 'lend', 'mend', 'nest', 'rest', 'sent', 'tent', 'vest', 'vent', 'wept', 'weld', 'text', 'next', 'heft', 'jest', 'best', 'pest', 'test', 'west', 'zest', 'desk', 'self', 'meld', 'held', 'belt'],
      i: ['dink', 'find', 'film', 'gild', 'gimp', 'hind', 'hilt', 'hint', 'jilt', 'mint', 'milk', 'silk', 'fist', 'list', 'risk', 'sink', 'link', 'pink', 'kink', 'rink', 'tint', 'tilt', 'skimp', 'wilt'],
      o: ['bond', 'colt', 'comb', 'fond', 'cost', 'lost', 'loft', 'soft', 'post', 'pond'],
      u: ['bunk', 'bump', 'bust', 'dump', 'dunk', 'fund', 'funk', 'gust', 'gunk', 'hunt', 'junk', 'just', 'lump', 'must', 'pump', 'rust', 'runt', 'sunk', 'tuft', 'tusk', 'husk', 'dust', 'dusk']
    },
    ccvcc: {
      a: ['brand', 'blank', 'clamp', 'cramp', 'crank', 'drank', 'flank', 'frank', 'plank', 'prank', 'stamp', 'stand', 'strand', 'tract', 'scrap', 'swank'],
      e: ['blend', 'blent', 'strep', 'trend', 'swept', 'stent'],
      i: ['blink', 'brink', 'clink', 'clint', 'crimp', 'drink', 'drift', 'print', 'sprint', 'strip', 'strict', 'shrink', 'script', 'twist', 'flint', 'shrimp', 'splint', 'swift'],
      o: ['frost', 'stomp', 'strong', 'throb', 'throng', 'swamp', 'prong', 'prompt', 'clomp', 'chomp', 'clonk'],
      u: ['blunt', 'brunt', 'clump', 'clunk', 'crust', 'drunk', 'flung', 'frump', 'grunt', 'plump', 'plunk', 'skunk', 'stump', 'strut', 'trunk', 'trust', 'strum', 'stunt', 'skulk', 'spunk', 'slump']
    },
    digraphs: {
      a: ['chat', 'chap', 'than', 'that', 'math', 'hang', 'bang', 'rang', 'cash', 'dash', 'stash', 'trash', 'patch', 'catch', 'match', 'batch', 'rash', 'sash'],
      e: ['shed', 'them', 'then', 'fetch', 'bench', 'retch', 'ketch', 'stretch', 'sketch', 'drench', 'flesh', 'fresh'],
      i: ['chip', 'chin', 'thin', 'thing', 'king', 'ring', 'sing', 'wing', 'sting', 'bring', 'cling', 'string', 'swing', 'ditch', 'pitch', 'switch', 'twitch'],
      o: ['shop', 'shot', 'chop', 'strong', 'throb', 'cloth', 'crotch', 'notch', 'botch'],
      u: ['shut', 'thud', 'chug', 'chunk', 'thump', 'shrug', 'brush', 'crush', 'blush', 'flush', 'crutch', 'clutch']
    },
    extended: {
      a: ['fantastic', 'smashing', 'crashing', 'dancing', 'stamping', 'clapping'],
      e: ['wrecking'],
      i: ['blinking', 'drinking', 'tripping', 'flipping', 'snipping'],
      o: ['blocking', 'rocking'],
      u: ['jumping']
    }
  };

  /* ---------- Audio Configuration ---------- */
  const audioPath = './'; // Adjust this path if your audio files are in a subfolder.
  const letterSounds = {};

  // Preload individual letter sounds
  'abcdefghijklmnopqrstuvwxyz'.split('').forEach(letter => {
    const audio = new Audio(`${audioPath}${letter}.mp3`);
    letterSounds[letter] = audio;
  });

  // Preload digraph sounds
  ['sh', 'th', 'ch', 'ng'].forEach(digraph => {
    const audio = new Audio(`${audioPath}${digraph}.mp3`);
    letterSounds[digraph] = audio;
  });

  // UI sounds
  const clickSound = new Audio(`${audioPath}click.mp3`);
  const successSound = new Audio(`${audioPath}success.mp3`);

  /* ---------- Application State ---------- */
  let revealedWords = 0;
  let usedWords = [];
  let score = 0;
  let letterSoundsEnabled = true;
  let blendingTime = 3000; // milliseconds
  let totalWords = 0;
  let currentWord = '';

  /* ---------- DOM Elements ---------- */
  const spinButton = document.getElementById('spinButton');
  const repeatButton = document.getElementById('repeatButton');
  const wordBox = document.getElementById('wordBox');
  const progressText = document.getElementById('progressText');
  const progressFill = document.getElementById('progressFill');
  const progressIcon = document.getElementById('progressIcon');
  const complimentBox = document.getElementById('complimentBox');
  const vowelSelector = document.getElementById('vowelSelector');
  const wordTypeSelector = document.getElementById('wordTypeSelector');
  const scoreText = document.getElementById('scoreText');
  const scoreIncrement = document.getElementById('scoreIncrement');
  const toggleAudioButton = document.getElementById('toggleAudioButton');
  const increaseBlendingTimeButton = document.getElementById('increaseBlendingTime');
  const decreaseBlendingTimeButton = document.getElementById('decreaseBlendingTime');
  const blendingTimeDisplay = document.getElementById('blendingTimeDisplay');
  const blendingTimerContainer = document.getElementById('blendingTimerContainer');
  const blendingTimer = document.getElementById('blendingTimer');
  const fullscreenButton = document.getElementById('fullscreenButton');

  /* ---------- Predefined Compliments ---------- */
  const compliments = [
    'Great job!', 'Fantastic!', 'Well done!', 'You did it!', 'Awesome!', 'Keep it up!', 'Excellent!'
  ];

  /* ---------- Speech Synthesis Setup ---------- */
  let selectedVoice = null;
  let speechSynthesisAvailable = true;
  let speechSynthesisAlertShown = false;

  function setVoice() {
    return new Promise(resolve => {
      if ('speechSynthesis' in window) {
        function loadVoices() {
          const voices = speechSynthesis.getVoices();
          if (voices.length) {
            selectedVoice = voices.find(voice => voice.lang.startsWith('en') && voice.name.toLowerCase().includes('female'))
                           || voices.find(voice => voice.lang.startsWith('en')) || voices[0];
            console.log("Selected voice:", selectedVoice);
            resolve();
          } else {
            speechSynthesisAvailable = false;
            if (!speechSynthesisAlertShown) {
              alert('Speech synthesis is not available. Word pronunciation will be disabled.');
              speechSynthesisAlertShown = true;
            }
            selectedVoice = null;
            resolve();
          }
        }
        if (speechSynthesis.getVoices().length === 0) {
          speechSynthesis.onvoiceschanged = () => {
            loadVoices();
            speechSynthesis.onvoiceschanged = null;
          };
          setTimeout(() => {
            if (!selectedVoice) {
              speechSynthesisAvailable = false;
              if (!speechSynthesisAlertShown) {
                alert('Speech synthesis is not available. Word pronunciation will be disabled.');
                speechSynthesisAlertShown = true;
              }
              selectedVoice = null;
              resolve();
            }
          }, 2000);
        } else {
          loadVoices();
        }
      } else {
        speechSynthesisAvailable = false;
        if (!speechSynthesisAlertShown) {
          alert('Your browser does not support speech synthesis. Word pronunciation will be disabled.');
          speechSynthesisAlertShown = true;
        }
        selectedVoice = null;
        resolve();
      }
    });
  }

  function speak(text) {
    return new Promise(resolve => {
      console.log("Attempting to speak:", text);
      if ('speechSynthesis' in window && selectedVoice) {
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.voice = selectedVoice;
        utterance.rate = 0.8;
        utterance.pitch = 1.1;
        utterance.volume = 0.9;
        const timeoutId = setTimeout(() => {
          speechSynthesis.cancel();
          resolve();
        }, 5000);
        utterance.onend = () => {
          clearTimeout(timeoutId);
          resolve();
        };
        utterance.onerror = () => {
          clearTimeout(timeoutId);
          resolve();
        };
        speechSynthesis.speak(utterance);
      } else {
        console.log("Speech synthesis not available or selectedVoice is null.");
        resolve();
      }
    });
  }

  /* ---------- Utility Functions ---------- */
  const isVowel = letter => 'aeiou'.includes(letter.toLowerCase());

  function updateScore() {
    score += 10;
    document.getElementById('scoreText').textContent = `Score: ${score}`;
    scoreIncrement.textContent = '+10';
    scoreIncrement.classList.add('show');
    setTimeout(() => {
      scoreIncrement.classList.remove('show');
    }, 1000);
  }

  function updateProgress() {
    revealedWords = usedWords.length;
    const progressPercentage = totalWords ? (revealedWords / totalWords) * 100 : 0;
    console.log("Updating progress:", revealedWords, "/", totalWords, "=>", progressPercentage + "%");
    progressText.textContent = `${revealedWords} / ${totalWords} Words Revealed`;
    progressFill.style.width = `${progressPercentage}%`;
    progressIcon.classList.add('star-animate');
    setTimeout(() => {
      progressIcon.classList.remove('star-animate');
    }, 1000);
  }

  function giveCompliment() {
    const compliment = compliments[Math.floor(Math.random() * compliments.length)];
    complimentBox.textContent = compliment;
    complimentBox.style.color = 'green';
    complimentBox.style.opacity = '1';
    speak(compliment);
    successSound.play();
    setTimeout(() => {
      complimentBox.style.opacity = '0';
    }, 2000);
  }

  function playLetterSound(unit) {
    return new Promise(resolve => {
      if (!letterSoundsEnabled) {
        resolve();
        return;
      }
      const sound = letterSounds[unit.toLowerCase()];
      if (sound) {
        sound.currentTime = 0;
        sound.play().then(resolve).catch(() => resolve());
      } else {
        resolve();
      }
    });
  }

  function parseWord(word) {
    const digraphs = ['sh', 'th', 'ch', 'ng'];
    const units = [];
    let i = 0;
    while (i < word.length) {
      if (i < word.length - 1) {
        const twoLetters = word.substring(i, i + 2).toLowerCase();
        if (digraphs.includes(twoLetters)) {
          units.push({ text: twoLetters, isVowel: false, isDigraph: true });
          i += 2;
          continue;
        }
      }
      const singleLetter = word[i].toLowerCase();
      units.push({ text: singleLetter, isVowel: isVowel(singleLetter), isDigraph: false });
      i++;
    }
    return units;
  }

  /* ---------- Core Functions ---------- */
  async function revealWord(word, isRepeat = false) {
    wordBox.innerHTML = '';
    const units = parseWord(word);
    console.log("Parsed units for", word, ":", units);
    units.forEach((unit, index) => {
      const span = document.createElement('span');
      span.textContent = unit.text;
      span.classList.add('letter');
      if (unit.isVowel && !unit.isDigraph) span.classList.add('vowel');
      if (unit.isDigraph) span.classList.add('digraph');
      span.style.animationDelay = `${(index + 1) * 0.5}s`;
      wordBox.appendChild(span);
    });
    for (let i = 0; i < units.length; i++) {
      await new Promise(res => setTimeout(res, 500));
      await playLetterSound(units[i].text);
    }
    startBlendingTimer(blendingTime / 1000);
    await new Promise(res => setTimeout(res, blendingTime));
    await speak(word);
    if (!isRepeat) {
      giveCompliment();
      updateScore();
      updateProgress();
    }
  }

  function getAvailableWords() {
    const selectedWordType = wordTypeSelector.value;
    const selectedVowel = vowelSelector.value;
    let words = [];
    const group = wordGroups[selectedWordType];
    if (selectedVowel === 'all') {
      words = Object.values(group).flat();
    } else {
      words = group[selectedVowel] || [];
    }
    return words;
  }

  function getRandomWord() {
    const availableWords = getAvailableWords();
    const remainingWords = availableWords.filter(word => !usedWords.includes(word));
    if (!remainingWords.length) {
      alert('Great job! You have completed all the words. Let’s start over!');
      resetGame(false);
      return getRandomWord();
    }
    const word = remainingWords[Math.floor(Math.random() * remainingWords.length)];
    usedWords.push(word);
    return word;
  }

  /* ---------- Event Handlers ---------- */
  async function spin() {
    console.log("Spin triggered.");
    spinButton.disabled = true;
    repeatButton.disabled = true;
    spinButton.innerHTML = '<span class="spin-icon-animate">🎡</span>';
    clickSound.play();
    setTimeout(() => {
      spinButton.innerHTML = '🎡 Spin';
    }, 1000);
    complimentBox.style.opacity = '0';
    const word = getRandomWord();
    currentWord = word;
    console.log("Selected word:", word);
    try {
      await setVoice();
      await revealWord(word);
    } catch (error) {
      console.error('Error revealing word:', error);
    } finally {
      spinButton.disabled = false;
      repeatButton.disabled = false;
    }
  }

  async function repeat() {
    if (currentWord) {
      repeatButton.disabled = true;
      try {
        await setVoice();
        await revealWord(currentWord, true);
      } catch (error) {
        console.error('Error repeating word:', error);
      } finally {
        repeatButton.disabled = false;
      }
    } else {
      alert('Please spin to get a word first!');
    }
  }

  vowelSelector.addEventListener('change', () => {
    resetGame(true);
  });

  wordTypeSelector.addEventListener('change', () => {
    resetGame(true);
  });

  function resetGame(resetTotalWords = true) {
    usedWords = [];
    revealedWords = 0;
    score = 0;
    document.getElementById('scoreText').textContent = `Score: ${score}`;
    currentWord = '';
    repeatButton.disabled = true;
    if (resetTotalWords) {
      totalWords = getAvailableWords().length;
    }
    updateProgress();
  }

  function toggleLetterSounds() {
    letterSoundsEnabled = !letterSoundsEnabled;
    toggleAudioButton.textContent = letterSoundsEnabled ? '🔇 Disable Letter Sounds' : '🔊 Enable Letter Sounds';
  }

  toggleAudioButton.addEventListener('click', toggleLetterSounds);

  increaseBlendingTimeButton.addEventListener('click', () => {
    if (blendingTime < 7000) {
      blendingTime += 1000;
      updateBlendingTimeDisplay();
    }
  });

  decreaseBlendingTimeButton.addEventListener('click', () => {
    if (blendingTime > 1000) {
      blendingTime -= 1000;
      updateBlendingTimeDisplay();
    }
  });

  function updateBlendingTimeDisplay() {
    blendingTimeDisplay.textContent = blendingTime / 1000;
  }
  updateBlendingTimeDisplay();

  function startBlendingTimer(seconds) {
    console.log("Starting blending timer for", seconds, "seconds");
    blendingTimerContainer.style.display = 'block';
    blendingTimer.style.width = '100%';
    blendingTimer.style.transition = `width ${seconds}s linear`;
    setTimeout(() => {
      blendingTimer.style.width = '0%';
      console.log("Blending timer is transitioning to 0%");
    }, 50);
    setTimeout(() => {
      blendingTimerContainer.style.display = 'none';
      console.log("Blending timer hidden after", seconds, "seconds");
    }, seconds * 1000);
  }

  function toggleFullscreen() {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(err => {
        alert(`Error enabling fullscreen: ${err.message}`);
      });
      fullscreenButton.textContent = '⛶ Exit Fullscreen';
    } else {
      document.exitFullscreen();
      fullscreenButton.textContent = '⛶ Fullscreen';
    }
  }

  fullscreenButton.addEventListener('click', toggleFullscreen);

  document.addEventListener('fullscreenchange', () => {
    fullscreenButton.textContent = document.fullscreenElement ? '⛶ Exit Fullscreen' : '⛶ Fullscreen';
  });

  spinButton.addEventListener('click', spin);
  repeatButton.addEventListener('click', repeat);

  setVoice().then(() => {
    resetGame(true);
  });

  function preloadAudio() {
    for (const key in letterSounds) {
      letterSounds[key].load();
    }
    clickSound.load();
    successSound.load();
  }
  window.addEventListener('load', preloadAudio);

  /* ---------- Advanced Settings Toggle ---------- */
  const toggleSettingsButton = document.getElementById('toggleSettingsButton');
  const advancedSettingsPanel = document.getElementById('advancedSettings');
  let advancedSettingsVisible = false;

  toggleSettingsButton.addEventListener('click', () => {
    advancedSettingsVisible = !advancedSettingsVisible;
    if (advancedSettingsVisible) {
      advancedSettingsPanel.style.display = 'block';
      toggleSettingsButton.textContent = 'Hide Advanced Settings';
    } else {
      advancedSettingsPanel.style.display = 'none';
      toggleSettingsButton.textContent = 'Show Advanced Settings';
    }
  });
});
