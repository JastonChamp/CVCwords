document.addEventListener('DOMContentLoaded', () => {
  console.log('Word Spinner initialized.');

  /* === Configuration === */
  const wordGroups = {
    cvc: {
      a: ['bat', 'cat', 'dad', 'fan', 'jam', 'mad', 'pan', 'rat', 'tan', 'wag'],
      e: ['bed', 'den', 'get', 'hen', 'jet', 'net', 'pet', 'red', 'ten', 'wet'],
      i: ['big', 'dig', 'fin', 'hit', 'kid', 'lip', 'pin', 'sit', 'tin', 'wig'],
      o: ['box', 'cot', 'dog', 'fog', 'hop', 'log', 'mop', 'not', 'pot', 'top'],
      u: ['bug', 'cup', 'fun', 'gum', 'hug', 'mud', 'nut', 'run', 'sun', 'tug']
    },
    ccvc: {
      a: ['brag', 'clap', 'crab', 'drag', 'flag', 'flap', 'glad', 'grab', 'plan', 'slam'],
      e: ['bled', 'bred', 'fled', 'fret', 'glen', 'sped', 'stem', 'step', 'trek', 'sled'],
      i: ['brim', 'brig', 'clip', 'crib', 'drip', 'flip', 'grin', 'grip', 'skip', 'slim'],
      o: ['blot', 'blog', 'clog', 'crop', 'drop', 'frog', 'flop', 'glob', 'plod', 'plot'],
      u: ['drum', 'grub', 'plug', 'slug', 'slum', 'spun', 'stub', 'stud', 'stun']
    },
    cvcc: {
      a: ['band', 'bank', 'damp', 'hand', 'land', 'lamp', 'ramp', 'sand', 'pant', 'tank'],
      e: ['bent', 'dent', 'felt', 'fend', 'help', 'kept', 'lend', 'mend', 'nest', 'rest'],
      i: ['dink', 'film', 'gild', 'gimp', 'hilt', 'hint', 'jilt', 'mint', 'milk', 'silk'],
      o: ['bond', 'colt', 'comb', 'fond', 'cost', 'lost', 'loft', 'soft', 'post', 'pond'],
      u: ['bunk', 'bump', 'bust', 'dump', 'dunk', 'fund', 'funk', 'gust', 'hunt', 'junk']
    },
    ccvcc: {
      a: ['brand', 'blank', 'clamp', 'cramp', 'crank', 'drank', 'flank', 'frank', 'plank', 'prank'],
      e: ['blend', 'blent', 'strep', 'trend', 'swept', 'stent'],
      i: ['blink', 'brink', 'clink', 'clint', 'crimp', 'drink', 'drift', 'print', 'sprint', 'strip'],
      o: ['frost', 'stomp', 'strong', 'throb', 'throng', 'prong', 'prompt', 'clomp', 'chomp', 'clonk'],
      u: ['blunt', 'brunt', 'clump', 'clunk', 'crust', 'drunk', 'flung', 'frump', 'grunt', 'plump']
    },
    digraphs: {
      a: ['chat', 'chap', 'than', 'that', 'math', 'hang', 'bang', 'rang', 'cash', 'dash'],
      e: ['shed', 'them', 'then', 'fetch', 'bench', 'retch', 'ketch', 'stretch', 'sketch', 'drench'],
      i: ['chip', 'chin', 'thin', 'thing', 'king', 'ring', 'sing', 'wing', 'sting', 'bring'],
      o: ['shop', 'shot', 'chop', 'strong', 'throb', 'cloth', 'crotch', 'notch', 'botch'],
      u: ['shut', 'thud', 'chug', 'chunk', 'thump', 'shrug', 'brush', 'crush', 'blush', 'flush']
    },
    extended: {
      a: ['fantastic', 'smashing', 'crashing', 'stamping', 'clapping'],
      e: ['wrecking'],
      i: ['blinking', 'drinking', 'tripping', 'flipping', 'snipping'],
      o: ['blocking', 'rocking'],
      u: ['jumping']
    }
  };

  const audioPath = './';
  const letterSounds = {};
  const digraphs = ['sh', 'th', 'ch', 'ng'];
  'abcdefghijklmnopqrstuvwxyz'.split('').concat(digraphs).forEach(sound => {
    letterSounds[sound] = new Audio(`${audioPath}${sound}.mp3`);
  });
  const uiSounds = {
    click: new Audio(`${audioPath}click.mp3`),
    success: new Audio(`${audioPath}success.mp3`)
  };

  /* === State === */
  let state = {
    score: 0,
    revealedWords: 0,
    totalWords: 0,
    usedWords: [],
    currentWord: '',
    blendingTime: 3000, // Default to 3 seconds
    soundsEnabled: true,
    wordPerformance: JSON.parse(localStorage.getItem('wordPerformance')) || {}
  };

  /* === DOM Elements === */
  const els = {
    spinButton: document.getElementById('spinButton'),
    repeatButton: document.getElementById('repeatButton'),
    wordBox: document.getElementById('wordBox'),
    scoreText: document.getElementById('scoreValue'),
    scoreIncrement: document.getElementById('scoreIncrement'),
    progressText: document.getElementById('progressText'),
    progressFill: document.getElementById('progressFill'),
    progressBar: document.getElementById('progressBar'),
    progressIcon: document.getElementById('progressIcon'),
    complimentBox: document.getElementById('complimentBox'),
    screenReaderAnnounce: document.getElementById('screenReaderAnnounce'),
    vowelSelector: document.getElementById('vowelSelector'),
    wordTypeSelector: document.getElementById('wordTypeSelector'),
    fontSizeSelector: document.getElementById('fontSizeSelector'),
    fontSelector: document.getElementById('fontSelector'),
    themeSelector: document.getElementById('themeSelector'),
    toggleAudioButton: document.getElementById('toggleAudioButton'),
    blendingTimeDisplay: document.getElementById('blendingTimeDisplay'),
    increaseTime: document.getElementById('increaseBlendingTime'),
    decreaseTime: document.getElementById('decreaseBlendingTime'),
    blendingTimerContainer: document.getElementById('blendingTimerContainer'),
    blendingTimer: document.getElementById('blendingTimer'),
    fullscreenButton: document.getElementById('fullscreenButton'),
    toggleSettingsButton: document.getElementById('toggleSettingsButton'),
    advancedSettings: document.getElementById('advancedSettings'),
    confettiContainer: document.getElementById('confettiContainer')
  };

  const compliments = ['Superb!', 'Brilliant!', 'You’re Amazing!', 'Fantastic!', 'Well Done!'];

  /* === Speech Synthesis === */
  let voice = null;
  async function initSpeech() {
    const voices = await new Promise(resolve => {
      const loadVoices = () => {
        const v = speechSynthesis.getVoices();
        if (v.length) resolve(v);
      };
      if (speechSynthesis.getVoices().length) loadVoices();
      else speechSynthesis.onvoiceschanged = loadVoices;
    });
    voice = voices.find(v => v.lang.startsWith('en') && v.name.toLowerCase().includes('female')) || voices[0];
  }

  function speak(text) {
    if (!voice || speechSynthesis.speaking) return Promise.resolve();
    return new Promise(resolve => {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.voice = voice;
      utterance.rate = 0.9;
      utterance.pitch = 1.2;
      utterance.onend = resolve;
      utterance.onerror = resolve;
      speechSynthesis.speak(utterance);
    });
  }

  /* === Utilities === */
  const isVowel = letter => /[aeiou]/.test(letter);
  const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

  function announce(text) {
    els.screenReaderAnnounce.textContent = text;
    setTimeout(() => els.screenReaderAnnounce.textContent = '', 1000);
  }

  function updateScore() {
    state.score += 10;
    els.scoreText.textContent = state.score;
    els.scoreIncrement.textContent = '+10';
    els.scoreIncrement.classList.add('show');
    setTimeout(() => els.scoreIncrement.classList.remove('show'), 800);
  }

  function updateProgress() {
    state.revealedWords = state.usedWords.length;
    const percent = (state.revealedWords / state.totalWords) * 100 || 0;
    els.progressText.textContent = `${state.revealedWords} / ${state.totalWords} Words`;
    els.progressFill.style.width = `${percent}%`;
    els.progressBar.setAttribute('aria-valuenow', Math.round(percent));
    els.progressBar.setAttribute('data-tooltip', `${state.revealedWords} words completed out of ${state.totalWords}`);
    els.progressFill.classList.add('progress-update');
    els.progressIcon.classList.add('star-animate');
    setTimeout(() => {
      els.progressFill.classList.remove('progress-update');
      els.progressIcon.classList.remove('star-animate');
    }, 1000);
  }

  function showCompliment() {
    const compliment = compliments[Math.floor(Math.random() * compliments.length)];
    els.complimentBox.textContent = compliment;
    els.complimentBox.style.opacity = '1';
    speak(compliment);
    uiSounds.success.play();
    launchConfetti();
    setTimeout(() => els.complimentBox.style.opacity = '0', 2000);
  }

  function launchConfetti() {
    for (let i = 0; i < 50; i++) {
      const confetti = document.createElement('div');
      confetti.className = 'confetti';
      confetti.style.left = `${Math.random() * 100}vw`;
      confetti.style.background = `hsl(${Math.random() * 360}, 100%, 50%)`;
      els.confettiContainer.appendChild(confetti);
      setTimeout(() => confetti.remove(), 3000);
    }
  }

  async function playSound(sound) {
    if (!state.soundsEnabled || !letterSounds[sound]) {
      console.warn(`Sound not found or disabled for: ${sound}`);
      return;
    }
    const audio = letterSounds[sound];
    audio.currentTime = 0; // Reset to start
    try {
      await audio.play();
    } catch (error) {
      console.error(`Failed to play sound ${sound}:`, error);
      alert(`Audio for "${sound}" is not available. Please ensure audio files are in the main folder.`);
    }
  }

  function parseWord(word) {
    const units = [];
    let i = 0;
    while (i < word.length) {
      const nextTwo = word.slice(i, i + 2).toLowerCase();
      if (i < word.length - 1 && digraphs.includes(nextTwo)) {
        units.push({ text: nextTwo, isVowel: false, isDigraph: true });
        i += 2;
      } else {
        const letter = word[i].toLowerCase();
        units.push({ text: letter, isVowel: isVowel(letter), isDigraph: false });
        i++;
      }
    }
    return units;
  }

  function savePreferences() {
    const prefs = {
      wordType: els.wordTypeSelector.value,
      vowel: els.vowelSelector.value,
      blendingTime: state.blendingTime,
      soundsEnabled: state.soundsEnabled,
      fontSize: els.fontSizeSelector.value,
      font: els.fontSelector.value,
      theme: els.themeSelector.value
    };
    localStorage.setItem('wordSpinnerPrefs', JSON.stringify(prefs));
  }

  function loadPreferences() {
    const prefs = JSON.parse(localStorage.getItem('wordSpinnerPrefs')) || {};
    els.wordTypeSelector.value = prefs.wordType || 'cvc'; // Default to CVC
    els.vowelSelector.value = prefs.vowel || 'all';
    state.blendingTime = prefs.blendingTime || 3000; // Default to 3 seconds
    state.soundsEnabled = prefs.soundsEnabled !== false;
    els.fontSizeSelector.value = prefs.fontSize || 'medium';
    els.fontSelector.value = prefs.font || 'fredoka'; // Default to Fredoka
    els.themeSelector.value = prefs.theme || 'default';
    document.body.setAttribute('data-theme', els.themeSelector.value);
    document.body.setAttribute('data-font', els.fontSelector.value);
    els.blendingTimeDisplay.textContent = state.blendingTime / 1000;
    els.toggleAudioButton.textContent = state.soundsEnabled ? '🔇 Sounds Off' : '🔊 Sounds On';
    els.wordBox.className = `word-display ${prefs.fontSize || 'medium'}`;
  }

  /* === Core Logic === */
  async function revealWord(word, isRepeat = false) {
    els.wordBox.innerHTML = '';
    const units = parseWord(word);
    const spans = units.map((unit, i) => {
      const span = document.createElement('span');
      span.textContent = unit.text;
      span.classList.add('letter');
      if (unit.isVowel) span.classList.add('vowel');
      if (unit.isDigraph) span.classList.add('digraph');
      span.style.animationDelay = `${i * 0.4}s`;
      return span;
    });
    els.wordBox.append(...spans);

    for (const unit of units) {
      await delay(400);
      await playSound(unit.text);
    }

    announce('Now, blend the letters to say the word');
    els.blendingTimerContainer.style.display = 'block';
    els.blendingTimer.style.width = '100%';
    els.blendingTimer.style.transition = `width ${state.blendingTime / 1000}s linear`;
    requestAnimationFrame(() => els.blendingTimer.style.width = '0%');
    await delay(state.blendingTime);
    els.blendingTimerContainer.style.display = 'none';

    await speak(word);
    announce(`The word is: ${word}`);
    if (!isRepeat) {
      showCompliment();
      updateScore();
      updateProgress();
      state.wordPerformance[word] = state.wordPerformance[word] || { seenCount: 0 };
      state.wordPerformance[word].seenCount++;
      localStorage.setItem('wordPerformance', JSON.stringify(state.wordPerformance));
    }
  }

  function getWords() {
    const type = els.wordTypeSelector.value;
    const vowel = els.vowelSelector.value;
    const group = wordGroups[type];
    return vowel === 'all' ? Object.values(group).flat() : group[vowel] || [];
  }

  function getRandomWord() {
    const words = getWords().filter(w => !state.usedWords.includes(w));
    if (!words.length) {
      alert('All words completed! Starting over.');
      resetGame(false);
      return getRandomWord();
    }
    return words[Math.floor(Math.random() * words.length)];
  }

  /* === Event Handlers === */
  async function spin() {
    els.spinButton.disabled = true;
    els.repeatButton.disabled = true;
    els.spinButton.innerHTML = '<span class="button-icon spin-icon-animate">🎡</span> Spin';
    uiSounds.click.play();
    await delay(1000);
    els.spinButton.innerHTML = '<span class="button-icon">🎡</span> Spin';

    state.currentWord = getRandomWord();
    state.usedWords.push(state.currentWord);
    await revealWord(state.currentWord);
    els.spinButton.disabled = false;
    els.repeatButton.disabled = false;
  }

  async function repeat() {
    if (!state.currentWord) return alert('Spin first!');
    els.repeatButton.disabled = true;
    await revealWord(state.currentWord, true);
    els.repeatButton.disabled = false;
  }

  function resetGame(updateTotal = true) {
    state.usedWords = [];
    state.revealedWords = 0;
    state.score = 0;
    state.currentWord = '';
    els.scoreText.textContent = '0';
    els.repeatButton.disabled = true;
    if (updateTotal) state.totalWords = getWords().length;
    updateProgress();
  }

  els.vowelSelector.addEventListener('change', () => { resetGame(true); savePreferences(); });
  els.wordTypeSelector.addEventListener('change', () => { resetGame(true); savePreferences(); });
  els.fontSizeSelector.addEventListener('change', () => {
    els.wordBox.className = `word-display ${els.fontSizeSelector.value}`;
    savePreferences();
  });
  els.fontSelector.addEventListener('change', () => {
    document.body.setAttribute('data-font', els.fontSelector.value);
    savePreferences();
  });
  els.themeSelector.addEventListener('change', () => {
    document.body.setAttribute('data-theme', els.themeSelector.value);
    savePreferences();
  });

  els.toggleAudioButton.addEventListener('click', () => {
    state.soundsEnabled = !state.soundsEnabled;
    els.toggleAudioButton.textContent = state.soundsEnabled ? '🔇 Sounds Off' : '🔊 Sounds On';
    savePreferences();
  });

  els.increaseTime.addEventListener('click', () => {
    if (state.blendingTime < 7000) {
      state.blendingTime += 1000;
      els.blendingTimeDisplay.textContent = state.blendingTime / 1000;
      savePreferences();
    }
  });

  els.decreaseTime.addEventListener('click', () => {
    if (state.blendingTime > 1000) {
      state.blendingTime -= 1000;
      els.blendingTimeDisplay.textContent = state.blendingTime / 1000;
      savePreferences();
    }
  });

  els.fullscreenButton.addEventListener('click', () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
      els.fullscreenButton.textContent = '⛶ Exit';
    } else {
      document.exitFullscreen();
      els.fullscreenButton.textContent = '⛶ Fullscreen';
    }
  });

  els.toggleSettingsButton.addEventListener('click', () => {
    const isVisible = els.advancedSettings.style.display === 'block';
    els.advancedSettings.style.display = isVisible ? 'none' : 'block';
    els.toggleSettingsButton.textContent = isVisible ? '⚙️ Customize' : 'Hide Settings';
    els.toggleSettingsButton.setAttribute('aria-expanded', !isVisible);
    els.advancedSettings.setAttribute('aria-hidden', isVisible);
  });

  /* === Initialization === */
  (async () => {
    await initSpeech();
    loadPreferences();
    resetGame(true);

    // Ensure audio files are loaded and trigger a user interaction check
    const checkAudio = () => {
      Object.values(letterSounds).concat(Object.values(uiSounds)).forEach(audio => {
        audio.load();
        audio.onerror = () => console.error(`Error loading audio: ${audio.src}`);
      });
    };

    // Trigger audio check on user interaction to bypass autoplay restrictions
    els.spinButton.addEventListener('click', checkAudio, { once: true });
    els.toggleSettingsButton.addEventListener('click', checkAudio, { once: true });

    // Add welcome animation for buttons and progress
    setTimeout(() => {
      els.spinButton.classList.add('fadeIn');
      els.repeatButton.classList.add('fadeIn');
      els.progressContainer.classList.add('fadeIn');
    }, 100);

    els.spinButton.addEventListener('click', spin);
    els.repeatButton.addEventListener('click', repeat);
  })();
});
