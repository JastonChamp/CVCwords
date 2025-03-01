document.addEventListener('DOMContentLoaded', () => {
  console.log('DOM fully loaded and parsed');

  const wordGroups = {
    cvc: {
      a: ['bat', 'cat', 'dad', 'fan', 'hat', 'jam', 'mad', 'nap', 'pan', 'rat', 'sad', 'tan', 'wag', 'zap', 'lap'],
      e: ['bed', 'den', 'fed', 'get', 'hen', 'jet', 'leg', 'men', 'net', 'pen', 'red', 'set', 'ten', 'vet', 'web'],
      i: ['big', 'dig', 'fin', 'hit', 'jig', 'kid', 'lip', 'mix', 'nip', 'pig', 'pin', 'sit', 'tin', 'wig', 'zip'],
      o: ['box', 'cot', 'dog', 'fog', 'hop', 'job', 'log', 'mop', 'not', 'pod', 'pop', 'pot', 'rot', 'top', 'sob'],
      u: ['bug', 'cup', 'cut', 'fun', 'gum', 'hug', 'jug', 'mud', 'nut', 'pup', 'run', 'sun', 'tug', 'bud', 'bus']
    },
    ccvc: {
      a: ['brag', 'clap', 'crab', 'drag', 'flag', 'flap', 'glad', 'grab', 'plan', 'slam', 'snap', 'trap', 'flat', 'swat', 'chat'],
      e: ['bled', 'bred', 'fled', 'fret', 'glen', 'pled', 'sled', 'spec', 'stem', 'step', 'trek', 'prep', 'flex', 'dred', 'smell'],
      i: ['brim', 'clip', 'crib', 'drip', 'flip', 'grin', 'grip', 'skip', 'slim', 'snip', 'spin', 'trip', 'twig', 'skin', 'swim'],
      o: ['blot', 'clog', 'crop', 'drop', 'flop', 'frog', 'glob', 'plot', 'prop', 'shop', 'slot', 'stop', 'trot', 'clot', 'spot'],
      u: ['club', 'drum', 'grub', 'plug', 'slug', 'snug', 'spun', 'stub', 'stun', 'trud', 'flub', 'glut', 'plum', 'scum', 'shut']
    },
    cvcc: {
      a: ['band', 'bank', 'damp', 'hand', 'lamp', 'land', 'pant', 'ramp', 'sand', 'tank', 'fast', 'last', 'past', 'cast', 'raft'],
      e: ['bend', 'dent', 'felt', 'lend', 'mend', 'nest', 'rest', 'sent', 'tent', 'vest', 'best', 'jest', 'pest', 'test', 'west'],
      i: ['film', 'hint', 'lift', 'milk', 'mint', 'pink', 'ring', 'silk', 'sink', 'tilt', 'disk', 'fist', 'list', 'mist', 'wish'],
      o: ['bond', 'cost', 'fond', 'host', 'lost', 'most', 'pond', 'post', 'soft', 'bolt', 'colt', 'jolt', 'molt', 'roll', 'told'],
      u: ['bump', 'bunk', 'dust', 'hunt', 'jump', 'just', 'lump', 'must', 'rust', 'dunk', 'cusp', 'fuss', 'gust', 'husk', 'tusk']
    },
    ccvcc: {
      a: ['brand', 'clamp', 'cramp', 'drank', 'flank', 'frank', 'plank', 'prank', 'slant', 'stamp', 'blast', 'craft', 'grant', 'plant', 'stand'],
      e: ['blend', 'fleck', 'flesh', 'spend', 'strep', 'swept', 'trend', 'bless', 'crept', 'dress', 'fresh', 'press', 'slept', 'smelt', 'spent'],
      i: ['blink', 'clink', 'crisp', 'drink', 'flint', 'print', 'slink', 'stink', 'twist', 'brisk', 'cling', 'fling', 'grift', 'shift', 'swift'],
      o: ['blond', 'chomp', 'frost', 'prompt', 'stomp', 'strong', 'throb', 'clonk', 'floss', 'gloss', 'gross', 'prong', 'scoff', 'snort', 'thong'],
      u: ['blunt', 'brunt', 'clump', 'crust', 'drunk', 'flung', 'grunt', 'plump', 'stump', 'trunk', 'brush', 'crush', 'flush', 'shrug', 'slush']
    },
    digraphs: {
      a: ['chat', 'chap', 'than', 'that', 'math', 'path', 'bash', 'cash', 'dash', 'lash', 'rash', 'shag', 'sham', 'thaw', 'wham'],
      e: ['shed', 'them', 'then', 'fetch', 'bench', 'check', 'chess', 'fresh', 'retch', 'sheep', 'sheet', 'shell', 'shred', 'theft', 'wrench'],
      i: ['chip', 'chin', 'thin', 'ship', 'shin', 'chick', 'chill', 'shift', 'shirt', 'thick', 'thing', 'whip', 'wish', 'chime', 'shine'],
      o: ['shop', 'shot', 'chop', 'shock', 'short', 'cloth', 'froth', 'notch', 'shod', 'show', 'sloth', 'thong', 'choke', 'phone', 'shore'],
      u: ['shut', 'thud', 'chug', 'chunk', 'thump', 'brush', 'crush', 'flush', 'shrug', 'blush', 'churn', 'shuck', 'stuck', 'thumb', 'whush']
    },
    extended: {
      a: ['fantastic', 'smashing', 'crashing', 'stamping', 'clapping', 'tracking', 'snapping', 'flashing', 'grabbing', 'slashing'],
      e: ['wrecking', 'spelling', 'pressing', 'dressing', 'fetching', 'stretching', 'checking', 'swelling', 'shedding', 'tempting'],
      i: ['blinking', 'drinking', 'tripping', 'flipping', 'snipping', 'skipping', 'swinging', 'chirping', 'slipping', 'twisting'],
      o: ['blocking', 'rocking', 'crossing', 'stopping', 'chopping', 'dropping', 'flopping', 'locking', 'shocking', 'trotting'],
      u: ['jumping', 'bumping', 'hunting', 'rushing', 'crushing', 'brushing', 'dumping', 'hugging', 'running', 'tugging']
    }
  };

  const digraphs = ['sh', 'th', 'ch', 'ng'];
  const state = {
    score: 0,
    revealedWords: 0,
    totalWords: 0,
    usedWords: new Set(),
    currentWord: '',
    blendingTime: 3000,
    soundsEnabled: true,
    wordType: 'cvc',
    vowelFilter: 'all',
    theme: 'default',
    celebrationMode: false,
    badges: new Map()
  };

  const els = {
    spinButton: document.querySelector('#spinButton'),
    repeatButton: document.querySelector('#repeatButton'),
    hintButton: document.querySelector('#hintButton'),
    wordBox: document.querySelector('#wordBox'),
    scoreValue: document.querySelector('#scoreValue'),
    scoreIncrement: document.querySelector('#scoreIncrement'),
    progressText: document.querySelector('#progressText'),
    progressFill: document.querySelector('#progressFill'),
    progressBar: document.querySelector('#progressBar'),
    progressIcon: document.querySelector('#progressIcon'),
    complimentBox: document.querySelector('#complimentBox'),
    screenReaderAnnounce: document.querySelector('#screenReaderAnnounce'),
    blendingTimerContainer: document.querySelector('#blendingTimerContainer'),
    blendingTimer: document.querySelector('#blendingTimer'),
    wordTypeSelector: document.querySelector('#wordTypeSelector'),
    vowelSelector: document.querySelector('#vowelSelector'),
    themeSelector: document.querySelector('#themeSelector'),
    toggleAudioButton: document.querySelector('#toggleAudioButton'),
    blendingTimeDisplay: document.querySelector('#blendingTimeDisplay'),
    increaseTime: document.querySelector('#increaseBlendingTime'),
    decreaseTime: document.querySelector('#decreaseBlendingTime'),
    celebrationModeCheckbox: document.querySelector('#celebrationMode'),
    confettiContainer: document.querySelector('#confettiContainer'),
    tutorialModal: document.querySelector('#tutorialModal'),
    startTutorial: document.querySelector('#startTutorial'),
    skipTutorial: document.querySelector('#skipTutorial'),
    toggleSettingsButton: document.querySelector('#toggleSettingsButton'),
    advancedSettings: document.querySelector('#advancedSettings'),
    badges: document.querySelector('#badges'),
    fullscreenButton: document.querySelector('#fullscreenButton')
  };

  // Debug: Log elements to ensure they're found
  console.log('Elements:', {
    toggleSettingsButton: els.toggleSettingsButton,
    advancedSettings: els.advancedSettings,
    badges: els.badges
  });

  const compliments = ['Great Job!', 'Awesome!', 'You’re a Star!', 'Well Done!', 'Fantastic!'];
  const badgeNames = {
    cvc: 'CVC Star',
    ccvc: 'CCVC Hero',
    cvcc: 'CVCC Champ',
    ccvcc: 'CCVCC Master',
    digraphs: 'Digraph Ace',
    extended: 'Word Wizard'
  };

  // Audio handling for letter sounds with fallback
  function playSound(sound) {
    if (!state.soundsEnabled) return Promise.resolve();
    return new Promise((resolve) => {
      const audio = new Audio(`${sound}.mp3`); // Files in main folder
      audio.onended = resolve;
      audio.onerror = () => {
        console.warn(`Sound file "${sound}.mp3" not found, skipping`);
        resolve(); // Continue even if a sound fails
      };
      audio.play().catch(e => {
        console.warn('Audio playback failed:', e);
        resolve();
      });
    });
  }

  const delay = ms => new Promise(resolve => setTimeout(resolve, ms));
  const announce = text => {
    els.screenReaderAnnounce.textContent = text;
    setTimeout(() => els.screenReaderAnnounce.textContent = '', 1000);
  };

  function updateScore(points = 10) {
    state.score += points;
    els.scoreValue.textContent = state.score;
    els.scoreIncrement.textContent = `+${points}`;
    els.scoreIncrement.classList.add('show');
    setTimeout(() => els.scoreIncrement.classList.remove('show'), 800);
    // if (state.soundsEnabled) playSound('point'); // Commented out to avoid 404 errors if file is missing
  }

  function updateProgress() {
    state.revealedWords = state.usedWords.size;
    const percent = (state.revealedWords / state.totalWords) * 100 || 0;
    els.progressText.textContent = `${state.revealedWords} / ${state.totalWords} Words`;
    els.progressFill.style.width = `${percent}%`;
    els.progressBar.setAttribute('aria-valuenow', Math.round(percent));
    if (state.revealedWords % 10 === 0 && state.revealedWords > 0) {
      els.progressIcon.classList.add('star-animate');
      setTimeout(() => els.progressIcon.classList.remove('star-animate'), 1000);
      earnBadge(state.wordType);
    }
  }

  function showCompliment() {
    const compliment = compliments[Math.floor(Math.random() * compliments.length)];
    els.complimentBox.textContent = compliment;
    els.complimentBox.classList.add('show');
    // if (state.soundsEnabled) playSound('cheer'); // Commented out to avoid 404 errors if file is missing
    state.celebrationMode ? launchFireworks() : launchConfetti();
    setTimeout(() => els.complimentBox.classList.remove('show'), 2000);
  }

  function launchConfetti() {
    for (let i = 0; i < 20; i++) {
      const confetti = document.createElement('div');
      confetti.className = 'confetti';
      confetti.style.left = `${Math.random() * 100}vw`;
      confetti.style.background = `hsl(${Math.random() * 360}, 100%, 50%)`;
      els.confettiContainer.appendChild(confetti);
      setTimeout(() => confetti.remove(), 3000);
    }
  }

  function launchFireworks() {
    for (let i = 0; i < 15; i++) {
      const firework = document.createElement('div');
      firework.className = 'confetti star';
      firework.style.left = `${Math.random() * 100}vw`;
      firework.style.top = `${Math.random() * 50}vh`;
      firework.style.background = `hsl(${Math.random() * 360}, 100%, 50%)`;
      els.confettiContainer.appendChild(firework);
      setTimeout(() => firework.remove(), 1500);
    }
  }

  function parseWord(word) {
    const units = [];
    let i = 0;
    while (i < word.length) {
      const nextTwo = word.slice(i, i + 2).toLowerCase();
      if (i < word.length - 1 && digraphs.includes(nextTwo)) {
        units.push({ text: nextTwo, isDigraph: true });
        i += 2;
      } else {
        const letter = word[i].toLowerCase();
        units.push({ text: letter, isVowel: /[aeiou]/.test(letter) });
        i++;
      }
    }
    return units;
  }

  function savePreferences() {
    localStorage.setItem('wordSpinnerPrefs', JSON.stringify({
      ...state,
      usedWords: Array.from(state.usedWords),
      badges: Object.fromEntries(state.badges)
    }));
  }

  function loadPreferences() {
    const prefs = JSON.parse(localStorage.getItem('wordSpinnerPrefs')) || {};
    Object.assign(state, {
      wordType: prefs.wordType || 'cvc',
      vowelFilter: prefs.vowelFilter || 'all',
      theme: prefs.theme || 'default',
      blendingTime: prefs.blendingTime || 3000,
      soundsEnabled: prefs.soundsEnabled ?? true,
      celebrationMode: prefs.celebrationMode || false,
      badges: new Map(Object.entries(prefs.badges || {})),
      usedWords: new Set(prefs.usedWords || [])
    });
    document.body.dataset.theme = state.theme;
    els.wordTypeSelector.value = state.wordType;
    els.vowelSelector.value = state.vowelFilter;
    els.themeSelector.value = state.theme;
    els.blendingTimeDisplay.textContent = state.blendingTime / 1000;
    els.toggleAudioButton.textContent = state.soundsEnabled ? '🔇 Sounds Off' : '🔊 Sounds On';
    els.celebrationModeCheckbox.checked = state.celebrationMode;
  }

  function updateBadges() {
    if (!els.badges) {
      console.warn('Badges element not found, skipping update');
      return;
    }
    els.badges.innerHTML = '';
    state.badges.forEach((_, type) => {
      const badge = document.createElement('div');
      badge.className = 'badge';
      badge.textContent = badgeNames[type];
      els.badges.appendChild(badge);
    });
  }

  function earnBadge(wordType) {
    if (!state.badges.has(wordType)) {
      state.badges.set(wordType, true);
      updateBadges();
      if (state.soundsEnabled) playSound('badge'); // Optional: Add a "badge" sound
      launchConfetti();
      savePreferences();
    }
  }

  async function revealWord(word, isRepeat = false) {
    els.wordBox.innerHTML = '';
    const units = parseWord(word);
    units.forEach((unit, i) => {
      const span = document.createElement('span');
      span.textContent = unit.text;
      span.classList.add('letter', unit.isVowel ? 'vowel' : unit.isDigraph ? 'digraph' : 'consonant');
      span.style.animationDelay = `${i * 0.4}s`;
      els.wordBox.appendChild(span);
    });

    for (const unit of units) {
      await delay(400);
      await playSound(unit.text);
    }

    els.blendingTimerContainer.style.display = 'block';
    els.blendingTimer.style.transition = `width ${state.blendingTime / 1000}s linear`;
    els.blendingTimer.style.width = '100%';
    requestAnimationFrame(() => els.blendingTimer.style.width = '0%');
    announce('Blend the letters aloud!');
    await delay(state.blendingTime);
    els.blendingTimerContainer.style.display = 'none';

    if (state.soundsEnabled) await playSound(word); // Play full word sound if available
    announce(`The word is: ${word}`);
    if (!isRepeat) {
      state.usedWords.add(word);
      showCompliment();
      updateScore();
      updateProgress();
      if (state.usedWords.size === state.totalWords) resetGame();
    }
    els.hintButton.hidden = false;
    els.repeatButton.disabled = false;
  }

  function getAvailableWords() {
    const group = wordGroups[state.wordType];
    if (state.vowelFilter === 'all') {
      return Object.values(group).flat();
    }
    return group[state.vowelFilter] || [];
  }

  function getRandomWord() {
    const words = getAvailableWords().filter(w => !state.usedWords.has(w));
    if (!words.length) {
      state.usedWords.clear();
      return getRandomWord();
    }
    return words[Math.floor(Math.random() * words.length)];
  }

  function resetGame() {
    state.usedWords.clear();
    state.revealedWords = 0;
    state.score = 0;
    state.currentWord = '';
    els.scoreValue.textContent = '0';
    els.repeatButton.disabled = true;
    els.hintButton.hidden = true;
    state.totalWords = getAvailableWords().length;
    updateProgress();
    savePreferences();
  }

  async function spin() {
    els.spinButton.disabled = true;
    state.currentWord = getRandomWord();
    await revealWord(state.currentWord);
    els.spinButton.disabled = false;
  }

  async function repeat() {
    if (!state.currentWord) return;
    els.repeatButton.disabled = true;
    await revealWord(state.currentWord, true);
  }

  async function hint() {
    if (!state.currentWord) return;
    await playSound(state.currentWord);
  }

  els.spinButton.addEventListener('click', spin);
  els.repeatButton.addEventListener('click', repeat);
  els.hintButton.addEventListener('click', hint);
  els.wordTypeSelector.addEventListener('change', () => {
    state.wordType = els.wordTypeSelector.value;
    resetGame();
  });
  els.vowelSelector.addEventListener('change', () => {
    state.vowelFilter = els.vowelSelector.value;
    resetGame();
  });
  els.themeSelector.addEventListener('change', () => {
    state.theme = els.themeSelector.value;
    document.body.dataset.theme = state.theme;
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
  els.celebrationModeCheckbox.addEventListener('change', () => {
    state.celebrationMode = els.celebrationModeCheckbox.checked;
    savePreferences();
  });
  els.toggleSettingsButton.addEventListener('click', (event) => {
    console.log('Customize button clicked');
    if (!els.toggleSettingsButton || !els.advancedSettings) {
      console.error('Settings elements not found');
      return;
    }
    event.preventDefault();
    const isVisible = els.advancedSettings.style.display === 'block';
    console.log('Toggling settings visibility. Current display:', isVisible);
    els.advancedSettings.style.display = isVisible ? 'none' : 'block';
    els.toggleSettingsButton.textContent = isVisible ? '⚙️ Customize' : 'Hide Settings';
    els.toggleSettingsButton.setAttribute('aria-expanded', !isVisible);
    els.advancedSettings.setAttribute('aria-hidden', isVisible);
  });
  els.startTutorial.addEventListener('click', () => {
    els.tutorialModal.close();
    localStorage.setItem('hasSeenTutorial', 'true');
    if (state.soundsEnabled) playSound('start'); // Optional: Add a "start" sound
  });
  els.skipTutorial.addEventListener('click', () => {
    els.tutorialModal.close();
    localStorage.setItem('hasSeenTutorial', 'true');
  });
  els.fullscreenButton.addEventListener('click', () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(console.warn);
    } else {
      document.exitFullscreen().catch(console.warn);
    }
  });

  (async () => {
    loadPreferences();
    updateBadges();
    resetGame();
    if (!localStorage.getItem('hasSeenTutorial')) els.tutorialModal.showModal();
  })();
});
