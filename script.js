document.addEventListener('DOMContentLoaded', () => {
  console.log('Word Spinner initialized.');

  /* === Configuration === */
  const audioPath = './'; // Ensure this matches your audio file location
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

  const letterSounds = {};
  const digraphs = ['sh', 'th', 'ch', 'ng'];
  'abcdefghijklmnopqrstuvwxyz'.split('').concat(digraphs).forEach(sound => {
    letterSounds[sound] = new Audio(`${audioPath}${sound}.mp3`);
  });
  const uiSounds = {
    click: new Audio(`${audioPath}click.mp3`),
    success: new Audio(`${audioPath}success.mp3`),
    chime: new Audio(`${audioPath}chime.mp3`) // New chime sound for feedback
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
    wordPerformance: JSON.parse(localStorage.getItem('wordPerformance')) || {},
    badges: JSON.parse(localStorage.getItem('badges')) || {},
    quickStart: JSON.parse(localStorage.getItem('quickStart')) || true,
    celebrationMode: JSON.parse(localStorage.getItem('celebrationMode')) || false,
    hasSeenTutorial: JSON.parse(localStorage.getItem('hasSeenTutorial')) || false
  };

  /* === DOM Elements === */
  const els = {
    spinButton: document.getElementById('spinButton'),
    repeatButton: document.getElementById('repeatButton'),
    hintButton: document.getElementById('hintButton'),
    wordBox: document.getElementById('wordBox'),
    scoreText: document.getElementById('scoreValue'),
    scoreIncrement: document.getElementById('scoreIncrement'),
    progressText: document.getElementById('progressText'),
    progressFill: document.getElementById('progressFill'),
    progressBar: document.getElementById('progressBar'),
    progressIcon: document.getElementById('progressIcon'),
    progressContainer: document.getElementById('progressContainer'), // Added to fix TypeError
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
    quickStartCheckbox: document.getElementById('quickStart'),
    celebrationModeCheckbox: document.getElementById('celebrationMode'),
    confettiContainer: document.getElementById('confettiContainer'),
    badges: document.getElementById('badges'),
    tutorialModal: document.getElementById('tutorialModal'),
    startTutorial: document.getElementById('startTutorial'),
    skipTutorial: document.getElementById('skipTutorial')
  };

  const compliments = ['Superb!', 'Brilliant!', 'You’re Amazing!', 'Fantastic!', 'Well Done!'];
  const badges = {
    cvc: 'CVC Star',
    ccvc: 'CCVC Explorer',
    cvcc: 'CVCC Champion',
    ccvcc: 'CCVCC Master',
    digraphs: 'Digraph Pro',
    extended: 'Extended Wizard'
  };

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
    if (state.celebrationMode) launchFireworks();
    else launchConfetti();
    setTimeout(() => els.complimentBox.style.opacity = '0', 2000);
  }

  function launchConfetti() {
    for (let i = 0; i < 25; i++) { // Reduced for performance
      const type = Math.random() > 0.5 ? 'star' : 'rocket';
      const confetti = document.createElement('div');
      confetti.className = `confetti ${type}`;
      confetti.style.left = `${Math.random() * 100}vw`;
      confetti.style.background = `hsl(${Math.random() * 360}, 100%, 50%)`;
      const duration = 2000 + Math.random() * 2000; // Random duration 2–4s
      confetti.style.animationDuration = `${duration}ms`;
      els.confettiContainer.appendChild(confetti);
      setTimeout(() => confetti.remove(), duration);
    }
  }

  function launchFireworks() {
    for (let i = 0; i < 20; i++) {
      const firework = document.createElement('div');
      firework.className = 'firework';
      firework.style.left = `${Math.random() * 100}vw`;
      firework.style.top = `${Math.random() * 50}vh`;
      firework.style.background = `hsl(${Math.random() * 360}, 100%, 50%)`;
      els.confettiContainer.appendChild(firework);
      setTimeout(() => firework.remove(), 1500);
    }
  }

  async function playSound(sound) {
    if (!state.soundsEnabled) {
      console.warn(`Sounds are disabled for: ${sound}`);
      return;
    }
    if (!letterSounds[sound]) {
      console.error(`Sound not found for: ${sound}. Checking path: ${audioPath}${sound}.mp3`);
      alert(`Audio for "${sound}" is missing. Please ensure files like "${sound}.mp3" are in the ${audioPath} folder.`);
      return;
    }
    const audio = letterSounds[sound];
    console.log(`Attempting to play ${audio.src}`);
    audio.currentTime = 0; // Reset to start
    try {
      await audio.play();
      console.log(`Successfully played ${sound}`);
      uiSounds.chime.play(); // Play chime after each letter sound
    } catch (error) {
      console.error(`Failed to play sound ${sound}:`, error);
      alert(`Audio for "${sound}" failed to play. Check browser console for details and ensure files are web-compatible (.mp3, 64–128 kbps).`);
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
      theme: els.themeSelector.value,
      quickStart: state.quickStart,
      celebrationMode: state.celebrationMode
    };
    localStorage.setItem('wordSpinnerPrefs', JSON.stringify(prefs));
    localStorage.setItem('badges', JSON.stringify(state.badges));
    localStorage.setItem('hasSeenTutorial', JSON.stringify(state.hasSeenTutorial));
  }

  function loadPreferences() {
    const prefs = JSON.parse(localStorage.getItem('wordSpinnerPrefs')) || {};
    els.wordTypeSelector.value = prefs.wordType || 'cvc'; // Default to CVC
    els.vowelSelector.value = prefs.vowel || 'all';
    state.blendingTime = prefs.blendingTime || 3000; // Default to 3 seconds
    state.soundsEnabled = prefs.soundsEnabled !== false; // Default to true
    console.log('Sounds Enabled:', state.soundsEnabled);
    if (!state.soundsEnabled) {
      state.soundsEnabled = true; // Force enable if testing
      els.toggleAudioButton.textContent = '🔇 Sounds Off';
      savePreferences();
    }
    els.fontSizeSelector.value = prefs.fontSize || 'large'; // Default to Large for accessibility
    els.fontSelector.value = prefs.font || 'fredoka'; // Default to Fredoka
    els.themeSelector.value = prefs.theme || 'default';
    state.quickStart = prefs.quickStart !== false;
    state.celebrationMode = prefs.celebrationMode || false;
    state.badges = JSON.parse(localStorage.getItem('badges')) || {};
    state.hasSeenTutorial = JSON.parse(localStorage.getItem('hasSeenTutorial')) || false;
    document.body.setAttribute('data-theme', els.themeSelector.value);
    document.body.setAttribute('data-font', els.fontSelector.value);
    els.blendingTimeDisplay.textContent = state.blendingTime / 1000;
    els.toggleAudioButton.textContent = state.soundsEnabled ? '🔇 Sounds Off' : '🔊 Sounds On';
    els.wordBox.className = `word-display ${prefs.fontSize || 'large'}`;
    els.quickStartCheckbox.checked = state.quickStart;
    els.celebrationModeCheckbox.checked = state.celebrationMode;
    updateBadges();
    if (!state.hasSeenTutorial) showTutorialModal();
  }

  function updateBadges() {
    els.badges.innerHTML = '';
    Object.entries(state.badges).forEach(([type, earned]) => {
      if (earned) {
        const badge = document.createElement('div');
        badge.className = 'badge';
        badge.textContent = badges[type];
        els.badges.appendChild(badge);
      }
    });
    els.badges.setAttribute('aria-hidden', els.badges.children.length === 0);
  }

  function earnBadge(wordType) {
    if (!state.badges[wordType]) {
      state.badges[wordType] = true;
      updateBadges();
      speak(`Congratulations! You earned the ${badges[wordType]} badge!`);
      uiSounds.success.play();
      launchConfetti();
    }
  }

  function showTutorialModal() {
    els.tutorialModal.style.display = 'flex';
    els.startTutorial.focus();
  }

  function hideTutorialModal() {
    els.tutorialModal.style.display = 'none';
    state.hasSeenTutorial = true;
    savePreferences();
  }

  async function startTutorial() {
    hideTutorialModal();
    await speak('Welcome to Word Spinner! I’ll guide you through the app.');
    await delay(2000);
    announce('Click the Spin button to start blending words.');
    els.spinButton.classList.add('highlight');
    await delay(3000);
    els.spinButton.classList.remove('highlight');
    announce('After spinning, blend the letters aloud as they appear.');
    els.wordBox.classList.add('highlight');
    await delay(3000);
    els.wordBox.classList.remove('highlight');
    announce('Use Repeat to hear the word again, or Customize to adjust settings.');
    els.repeatButton.classList.add('highlight');
    els.toggleSettingsButton.classList.add('highlight');
    await delay(3000);
    els.repeatButton.classList.remove('highlight');
    els.toggleSettingsButton.classList.remove('highlight');
    await speak('You’re ready to play! Have fun blending words.');
  }

  /* === Core Logic === */
  async function revealWord(word, isRepeat = false) {
    els.wordBox.innerHTML = '';
    const units = parseWord(word);
    els.wordBox.setAttribute('data-tooltip', `Phonics: /${units.map(u => u.text).join('/ ')}/`);
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
    if ('vibrate' in navigator) navigator.vibrate([200]); // Start vibration
    uiSounds.click.play(); // Optional start sound
    els.blendingTimer.setAttribute('aria-valuenow', 100); // Start at 100%
    els.blendingTimerContainer.setAttribute('data-time-remaining', `Blending Time: ${Math.ceil(state.blendingTime / 1000)} seconds remaining`);
    requestAnimationFrame(() => {
      els.blendingTimer.style.width = '0%';
      let progress = 100;
      const interval = setInterval(() => {
        progress -= 10; // Update every 300ms for 3s total
        if (progress >= 0) {
          els.blendingTimer.setAttribute('aria-valuenow', progress);
          els.blendingTimerContainer.setAttribute('data-time-remaining', `Blending Time: ${Math.ceil((progress / 100) * (state.blendingTime / 1000))} seconds remaining`);
        } else clearInterval(interval);
      }, 300);
    });
    await delay(state.blendingTime);
    if ('vibrate' in navigator) navigator.vibrate([200]); // End vibration
    uiSounds.success.play(); // Optional end sound
    els.blendingTimerContainer.style.display = 'none';
    els.blendingTimer.setAttribute('aria-valuenow', 0); // Reset to 0%

    await speak(word);
    announce(`The word is: ${word}`);
    if (!isRepeat) {
      showCompliment();
      updateScore();
      updateProgress();
      state.wordPerformance[word] = state.wordPerformance[word] || { seenCount: 0 };
      state.wordPerformance[word].seenCount++;
      const wordType = els.wordTypeSelector.value;
      if (state.usedWords.length === state.totalWords) earnBadge(wordType);
      localStorage.setItem('wordPerformance', JSON.stringify(state.wordPerformance));
    }
    els.hintButton.hidden = false;
  }

  function showHint() {
    if (!state.currentWord) return alert('Spin first!');
    const units = parseWord(state.currentWord);
    const hint = `Try blending: /${units.map(u => u.text).join('/ ')}/. Example: ${state.currentWord} means ${getWordMeaning(state.currentWord)}.`;
    speak(hint);
    announce(hint);
    els.hintButton.blur();
  }

  function getWordMeaning(word) {
    const meanings = {
      bat: 'a flying mammal',
      cat: 'a small furry pet',
      dad: 'a father',
      fan: 'a device for cooling',
      jam: 'a sweet fruit spread',
      mad: 'angry',
      pan: 'a cooking utensil',
      rat: 'a small rodent',
      tan: 'a light brown color',
      wag: 'to move a tail side to side',
      // Add more meanings for other words as needed
    };
    return meanings[word.toLowerCase()] || 'a word to practice blending';
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
    if (state.quickStart) {
      els.wordTypeSelector.value = 'cvc';
      state.blendingTime = 3000;
      els.blendingTimeDisplay.textContent = '3';
      els.fontSizeSelector.value = 'large';
      els.fontSelector.value = 'fredoka';
      els.themeSelector.value = 'default';
      document.body.setAttribute('data-theme', 'default');
      document.body.setAttribute('data-font', 'fredoka');
      els.wordBox.className = 'word-display large';
      savePreferences();
    }
    els.spinButton.disabled = true;
    els.repeatButton.disabled = true;
    els.hintButton.hidden = true;
    if ('vibrate' in navigator) navigator.vibrate([200]); // Haptic feedback for touch
    els.spinButton.innerHTML = '<svg class="button-icon spin-icon-animate" aria-hidden="true" width="24" height="24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2V7zm0 8h2v2h-2v-2z" fill="#e94560"/></svg> Spin';
    uiSounds.click.play();
    await delay(1000);
    els.spinButton.innerHTML = '<svg class="button-icon" aria-hidden="true" width="24" height="24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2V7zm0 8h2v2h-2v-2z" fill="#e94560"/></svg> Spin';

    state.currentWord = getRandomWord();
    state.usedWords.push(state.currentWord);
    await revealWord(state.currentWord);
    els.spinButton.disabled = false;
    els.repeatButton.disabled = false;
  }

  async function repeat() {
    if (!state.currentWord) return alert('Spin first!');
    els.repeatButton.disabled = true;
    if ('vibrate' in navigator) navigator.vibrate([200]); // Haptic feedback
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
    els.hintButton.hidden = true;
    if (updateTotal) state.totalWords = getWords().length;
    updateProgress();
    updateBadges();
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

  els.quickStartCheckbox.addEventListener('change', () => {
    state.quickStart = els.quickStartCheckbox.checked;
    if (state.quickStart) spin(); // Reset to defaults
    savePreferences();
  });

  els.celebrationModeCheckbox.addEventListener('change', () => {
    state.celebrationMode = els.celebrationModeCheckbox.checked;
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

  els.hintButton.addEventListener('click', showHint);

  els.startTutorial.addEventListener('click', startTutorial);
  els.skipTutorial.addEventListener('click', hideTutorialModal);

  /* === Initialization === */
  (async () => {
    await initSpeech();
    loadPreferences();
    resetGame(true);

    // Ensure audio files are loaded and trigger a user interaction check
    const checkAudio = () => {
      Object.values(letterSounds).concat(Object.values(uiSounds)).forEach(audio => {
        audio.load();
        audio.onerror = (e) => console.error(`Error loading audio ${audio.src}:`, e);
        console.log(`Preloading audio: ${audio.src}`);
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
