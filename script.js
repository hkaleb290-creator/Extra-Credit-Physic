// Global variables
let currentNoteSection = 'kinematics';
let currentFlashcardIndex = 0;
let currentQuizIndex = 0;
let currentProblemSection = 'kinematics';
let quizAnswers = [];
let cardDifficulty = {};
let quizTimer = null;
let quizStartTime = 0;
let quizDifficulty = 'all';
let filteredQuestions = [];
let timerInterval = null;
let timerSeconds = 1500; // 25 minutes
let timerIsRunning = false;

// Progress tracking
let progress = {
    notesReviewed: 0,
    cardsStudied: 0,
    quizScores: [],
    problemsSolved: 0,
    totalQuizTime: 0,
    todayFocus: 0,
    streak: 0,
    lastStudyDate: null,
    achievements: [],
    dailyChallengeComplete: false,
    challengeDate: null,
    lastUpdate: new Date().toDateString(),
    // Session history
    sessionHistory: [],
    // Topic mastery tracking
    topicScores: {
        kinematics: [],
        forces: [],
        energy: [],
        momentum: [],
        waves: []
    },
    // Weekly goals
    weeklyGoals: {
        focusHoursTarget: 10,
        quizzesTarget: 5,
        problemsTarget: 20,
        currentWeekStart: new Date().toISOString()
    },
    // Leaderboard
    leaderboardScore: 0,
    // Favorites
    favoriteNotes: [],
    // Study planner
    plannedSessions: [],
    // Theme
    theme: 'default'
    // Spaced repetition tracking
    cardLastReviewed: {},
    cardNextReviewDate: {},
    // Custom quizzes
    customQuizzes: [],
    // Practice exam tracking
    practiceExams: [],
    // Performance data
    performanceHistory: []
};

// Load progress from localStorage
function loadProgress() {
    const saved = localStorage.getItem('physicsProgress');
    if (saved) {
        progress = JSON.parse(saved);
        updateProgressDisplay();
        updateAchievements();
    }
    
    const darkMode = localStorage.getItem('darkMode');
    if (darkMode === 'true') {
        document.body.classList.add('dark-mode');
    }
}

// Save progress to localStorage
function saveProgress() {
    localStorage.setItem('physicsProgress', JSON.stringify(progress));
}

// Dark mode toggle with theme selector
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    const isDark = document.body.classList.contains('dark-mode');
    localStorage.setItem('darkMode', isDark);
    const btn = document.getElementById('dark-mode-toggle');
    if (btn) btn.innerHTML = isDark ? '☀️' : '🌙';
    console.log('Dark mode toggled:', isDark);
}

function setTheme(themeName) {
    document.body.className = themeName === 'light' ? '' : `dark-mode ${themeName}-theme`;
    localStorage.setItem('theme', themeName);
}

function showSection(sectionId) {
    document.querySelectorAll('.section').forEach(s => s.style.display = 'none');
    document.getElementById(sectionId).style.display = 'block';
    setActiveNav(sectionId);

    if (sectionId === 'notes') {
        loadNotes('kinematics');
    } else if (sectionId === 'flashcards') {
        loadFlashcards();
    } else if (sectionId === 'timer') {
        initTimer();
    } else if (sectionId === 'quiz') {
        initQuiz();
    } else if (sectionId === 'problems') {
        loadProblems('kinematics');
    }
}

function setActiveNav(sectionId) {
    document.querySelectorAll('.nav-link').forEach(link => {
        const isActive = link.getAttribute('onclick')?.includes(`'${sectionId}'`);
        link.style.background = isActive ? 'rgba(255, 255, 255, 0.18)' : 'transparent';
    });
}

// ============ TIMER SECTION ============
function initTimer() {
    updateTimerDisplay();
}

function startTimer() {
    if (timerIsRunning) return;
    timerIsRunning = true;
    document.getElementById('btn-start').style.display = 'none';
    document.getElementById('btn-pause').style.display = 'inline-block';
    
    timerInterval = setInterval(() => {
        timerSeconds--;
        updateTimerDisplay();
        
        if (timerSeconds <= 0) {
            clearInterval(timerInterval);
            timerIsRunning = false;
            playTimerAlert();
            progress.todayFocus += Math.floor(1500 / 60);
            saveProgress();
            updateTimerDisplay();
            document.getElementById('btn-start').style.display = 'inline-block';
            document.getElementById('btn-pause').style.display = 'none';
        }
    }, 1000);
}

function pauseTimer() {
    timerIsRunning = false;
    clearInterval(timerInterval);
    document.getElementById('btn-start').style.display = 'inline-block';
    document.getElementById('btn-pause').style.display = 'none';
}

function resetTimer() {
    pauseTimer();
    timerSeconds = 1500;
    updateTimerDisplay();
}

function setTimer(minutes) {
    pauseTimer();
    timerSeconds = minutes * 60;
    updateTimerDisplay();
}

function updateTimerDisplay() {
    const mins = Math.floor(timerSeconds / 60);
    const secs = timerSeconds % 60;
    document.getElementById('timer-time').textContent = 
        `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    document.getElementById('today-focus').textContent = progress.todayFocus;
    document.getElementById('streak-count').textContent = progress.streak;
}

function playTimerAlert() {
    const audio = new AudioContext ? new (window.AudioContext || window.webkitAudioContext)() : null;
    if (audio) {
        const now = audio.currentTime;
        const osc = audio.createOscillator();
        const env = audio.createGain();
        osc.connect(env);
        env.connect(audio.destination);
        osc.frequency.value = 800;
        env.gain.setValueAtTime(0.3, now);
        env.gain.exponentialRampToValueAtTime(0.01, now + 0.5);
        osc.start(now);
        osc.stop(now + 0.5);
    }
    alert('Study session complete! Time for a break. 🎉');
}

// ============ NOTES SECTION ============
function loadNotes(topic) {
    currentNoteSection = topic;

    // Update active button without depending on a global click event.
    document.querySelectorAll('.note-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.topic === topic);
    });

    const noteData = physicsData.notes[topic];
    const container = document.getElementById('notes-content');
    
    container.innerHTML = '<div id="note-search-bar" style="margin-bottom: 1rem;"><input type="text" id="note-filter" placeholder="Search notes..." style="width: 100%; padding: 0.7rem; border: 1px solid #d5e6f0; border-radius: 8px; font-size: 0.95rem;" oninput="filterNotes()"></div>';
    
    const searchBar = container.querySelector('#note-search-bar');
    noteData.content.forEach((note, idx) => {
        const noteDiv = document.createElement('div');
        noteDiv.className = 'note-item';
        noteDiv.dataset.index = idx;
        noteDiv.innerHTML = `
            <h3>${note.heading}</h3>
            <p>${note.text.replace(/\n/g, '<br>')}</p>
        `;
        container.appendChild(noteDiv);
    });

    progress.notesReviewed++;
    saveProgress();
}

function filterNotes() {
    const query = document.getElementById('note-filter').value.toLowerCase();
    document.querySelectorAll('.note-item').forEach(item => {
        const text = item.textContent.toLowerCase();
        item.style.display = text.includes(query) ? 'block' : 'none';
    });
}

// ============ FLASHCARDS SECTION ============
function loadFlashcards() {
    currentFlashcardIndex = 0;
    displayFlashcard();
}

function displayFlashcard() {
    const card = physicsData.flashcards[currentFlashcardIndex];
    const container = document.getElementById('flashcard');
    
    container.classList.remove('flipped');
    container.querySelector('.flashcard-front').textContent = card.front;
    container.querySelector('.flashcard-back').textContent = card.back;
    
    document.getElementById('card-counter').textContent = `${currentFlashcardIndex + 1} / ${physicsData.flashcards.length}`;
}

function flipCard() {
    const card = document.getElementById('flashcard');
    card.classList.toggle('flipped');
}

function nextCard() {
    if (currentFlashcardIndex < physicsData.flashcards.length - 1) {
        currentFlashcardIndex++;
        displayFlashcard();
    }
}

function previousCard() {
    if (currentFlashcardIndex > 0) {
        currentFlashcardIndex--;
        displayFlashcard();
    }
}

function markCard(difficulty) {
    const cardId = currentFlashcardIndex;
    cardDifficulty[cardId] = difficulty;
    
    progress.cardsStudied++;
    saveProgress();
    updateAchievements();
    
    // Move to next card
    if (currentFlashcardIndex < physicsData.flashcards.length - 1) {
        nextCard();
    } else {
        alert('You\'ve reviewed all flashcards! 🎉');
        currentFlashcardIndex = 0;
        displayFlashcard();
    }
}

// ============ QUIZ SECTION ============
function initQuiz() {
    const container = document.getElementById('quiz-content');
    document.getElementById('quiz-difficulty').style.display = 'block';
    container.innerHTML = '';
}

function showDifficultySelect() {
    document.getElementById('quiz-difficulty').style.display = 'block';
}

function startQuizWithDifficulty(difficulty) {
    quizDifficulty = difficulty;
    
    // Filter questions by difficulty
    if (difficulty === 'all') {
        filteredQuestions = physicsData.quiz;
    } else {
        filteredQuestions = physicsData.quiz.filter(q => q.difficulty === difficulty);
    }
    
    if (filteredQuestions.length === 0) {
        alert('No questions available for this difficulty level!');
        return;
    }
    
    currentQuizIndex = 0;
    quizAnswers = [];
    quizStartTime = Date.now();
    
    document.getElementById('quiz-difficulty').style.display = 'none';
    document.getElementById('quiz-timer').style.display = 'block';
    
    startTimer();
    displayQuizQuestion();
}

function startTimer() {
    const timerDisplay = document.getElementById('timer-display');
    
    quizTimer = setInterval(() => {
        const elapsed = Math.floor((Date.now() - quizStartTime) / 1000);
        const minutes = Math.floor(elapsed / 60);
        const seconds = elapsed % 60;
        timerDisplay.textContent = `${minutes}:${seconds.toString().padStart(2, '0')}`;
    }, 100);
}

function stopTimer() {
    if (quizTimer) {
        clearInterval(quizTimer);
        const elapsedSeconds = Math.floor((Date.now() - quizStartTime) / 1000);
        progress.totalQuizTime += elapsedSeconds;
    }
}

function displayQuizQuestion() {
    const question = filteredQuestions[currentQuizIndex];
    const container = document.getElementById('quiz-content');
    
    let html = `
        <div class="quiz-question">
            <h3>Question ${currentQuizIndex + 1} of ${filteredQuestions.length}</h3>
            <p style="font-size: 1.1rem; margin: 1rem 0;">${question.question}</p>
            <div style="background: #f0f0f0; padding: 0.5rem 1rem; border-radius: 5px; margin-bottom: 1rem; display: inline-block;">
                <strong>Difficulty:</strong> <span style="text-transform: capitalize; font-weight: bold; color: ${getDifficultyColor(question.difficulty)}">${question.difficulty}</span>
            </div>
            <div class="quiz-options">
    `;
    
    question.options.forEach((option, index) => {
        html += `
            <div class="quiz-option" onclick="selectAnswer(${index})" data-index="${index}">
                ${option}
            </div>
        `;
    });
    
    html += '</div></div>';
    container.innerHTML = html;
}

function getDifficultyColor(difficulty) {
    if (difficulty === 'easy') return '#2ecc71';
    if (difficulty === 'medium') return '#f39c12';
    if (difficulty === 'hard') return '#e74c3c';
    return '#3498db';
}

function selectAnswer(index) {
    const question = filteredQuestions[currentQuizIndex];
    quizAnswers.push(index);
    
    const options = document.querySelectorAll('.quiz-option');
    options.forEach(opt => opt.style.pointerEvents = 'none');
    
    options[index].classList.add('selected');
    if (index === question.correct) {
        options[index].classList.add('correct');
    } else {
        options[index].classList.add('wrong');
        options[question.correct].classList.add('correct');
    }
    
    setTimeout(() => {
        if (currentQuizIndex < filteredQuestions.length - 1) {
            currentQuizIndex++;
            displayQuizQuestion();
        } else {
            showQuizResults();
        }
    }, 1500);
}

function showQuizResults() {
    stopTimer();
    let correct = 0;
    filteredQuestions.forEach((q, i) => {
        if (quizAnswers[i] === q.correct) correct++;
    });
    
    const percentage = Math.round((correct / filteredQuestions.length) * 100);
    const container = document.getElementById('quiz-content');
    const elapsedSeconds = Math.floor((Date.now() - quizStartTime) / 1000);
    const minutes = Math.floor(elapsedSeconds / 60);
    const seconds = elapsedSeconds % 60;
    
    container.innerHTML = `
        <div style="text-align: center;">
            <h2>Quiz Complete! 🎉</h2>
            <div style="font-size: 3rem; color: #3498db; font-weight: bold; margin: 1rem 0;">${percentage}%</div>
            <p style="font-size: 1.2rem; color: #95a5a6;">You got ${correct} out of ${filteredQuestions.length} correct</p>
            <p style="font-size: 1.1rem; color: #95a5a6;">⏱️ Time taken: ${minutes}:${seconds.toString().padStart(2, '0')}</p>
            <button onclick="initQuiz()" class="btn btn-primary" style="margin-top: 1rem;">Retake Quiz</button>
        </div>
    `;
    
    document.getElementById('quiz-timer').style.display = 'none';
    
    progress.quizScores.push(percentage);
    recordTopicScore(quizDifficulty, percentage);
    recordSession(quizDifficulty || 'general', 'quiz', Math.round((Date.now() - quizStartTime) / 60000), percentage);
    saveProgress();
    updateAchievements();
}

// ============ PROBLEMS SECTION ============
function loadProblems(category) {
    currentProblemSection = category;

    // Update active button without depending on a global click event.
    document.querySelectorAll('.problem-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.category === category);
    });

    const problems = physicsData.problems[category];
    const container = document.getElementById('problems-content');
    
    container.innerHTML = '';
    problems.forEach((problem, index) => {
        const problemDiv = document.createElement('div');
        problemDiv.className = 'problem-item';
        problemDiv.innerHTML = `
            <h4>${problem.title}</h4>
            <div class="problem-statement">${problem.statement}</div>
            <div class="problem-solution" id="solution-${index}">
                <strong>Solution:</strong><br>
                ${problem.solution.replace(/\n/g, '<br>')}
            </div>
            <button class="btn btn-secondary" onclick="toggleSolution(${index})">Show Solution</button>
        `;
        container.appendChild(problemDiv);
    });
}

function toggleSolution(index) {
    const solution = document.getElementById(`solution-${index}`);
    solution.classList.toggle('show');
    
    const button = event.target;
    button.textContent = solution.classList.contains('show') ? 'Hide Solution' : 'Show Solution';
    
    progress.problemsSolved++;
    saveProgress();
}

// ============ PROGRESS SECTION ============
function updateProgressDisplay() {
    document.getElementById('notes-reviewed').textContent = progress.notesReviewed;
    document.getElementById('cards-studied').textContent = progress.cardsStudied;
    
    if (progress.quizScores.length > 0) {
        const avgScore = Math.round(progress.quizScores.reduce((a, b) => a + b, 0) / progress.quizScores.length);
        document.getElementById('quiz-avg').textContent = avgScore + '%';
        document.querySelectorAll('.progress-stat')[2].querySelector('.progress-fill').style.width = avgScore + '%';
        document.getElementById('avg-score').textContent = avgScore + '%';
    }
    
    document.getElementById('problems-solved').textContent = progress.problemsSolved;
    
    // Update progress bars
    const maxNotes = 5;
    const maxCards = 50;
    const maxProblems = 20;
    
    document.querySelectorAll('.progress-stat')[0].querySelector('.progress-fill').style.width = Math.min(100, (progress.notesReviewed / maxNotes) * 100) + '%';
    document.querySelectorAll('.progress-stat')[1].querySelector('.progress-fill').style.width = Math.min(100, (progress.cardsStudied / maxCards) * 100) + '%';
    document.querySelectorAll('.progress-stat')[3].querySelector('.progress-fill').style.width = Math.min(100, (progress.problemsSolved / maxProblems) * 100) + '%';
    
    // Update stats dashboard
    const studyEfficiency = Math.min(100, Math.round(((progress.notesReviewed / 5) + (progress.cardsStudied / 50) + (progress.problemsSolved / 20)) * 33.33));
    document.getElementById('efficiency-score').textContent = studyEfficiency + '%';
    
    const focusHours = Math.round(progress.todayFocus / 60 * 10) / 10;
    document.getElementById('total-focus').textContent = focusHours + 'h';
    
    const masteredCount = Math.min(5, Math.floor((progress.quizScores.filter(s => s >= 80).length) / 2));
    document.getElementById('mastered-topics').textContent = masteredCount + '/5';
}

function resetProgress() {
    if (confirm('Are you sure you want to reset all progress?')) {
        progress = {
            notesReviewed: 0,
            cardsStudied: 0,
            quizScores: [],
            problemsSolved: 0,
            totalQuizTime: 0
        };
        cardDifficulty = {};
        quizAnswers = [];
        saveProgress();
        updateProgressDisplay();
        alert('Progress reset! 🔄');
    }
}

// ============ ACHIEVEMENTS ============
function unlockAchievement(id) {
    if (!progress.achievements.includes(id)) {
        progress.achievements.push(id);
        saveProgress();
        updateAchievements();
        showAchievementToast(id);
    }
}

function updateAchievements() {
    // Check for first quiz
    if (progress.quizScores.length > 0) {
        unlockAchievement('first-quiz');
    }
    
    // Check for perfect score
    if (progress.quizScores.some(s => s === 100)) {
        unlockAchievement('perfect-score');
    }
    
    // Check for study streak
    if (progress.streak >= 3) {
        unlockAchievement('study-streak');
    }
    
    // Check for card master
    if (progress.cardsStudied >= 50) {
        unlockAchievement('card-master');
    }
    
    // Check for problem solver
    if (progress.problemsSolved >= 20) {
        unlockAchievement('problem-solver');
    }
    
    // Check for focus beast
    if (progress.todayFocus >= 300) {
        unlockAchievement('focus-beast');
    }
    
    // Visual update
    document.querySelectorAll('.achievement').forEach(el => {
        const id = el.dataset.achievement;
        if (progress.achievements.includes(id)) {
            el.classList.add('unlocked');
        } else {
            el.classList.remove('unlocked');
        }
    });
    
    // Update daily challenge
    updateDailyChallenge();
}

function showAchievementToast(id) {
    const achievements = {
        'first-quiz': '🎯 Quiz Master - Complete first quiz',
        'perfect-score': '⭐ Perfect Score - Scored 100%',
        'study-streak': '🔥 On Fire - 3 day study streak',
        'card-master': '🃏 Card Master - Studied 50 flashcards',
        'problem-solver': '💡 Problem Solver - Solved 20 problems',
        'focus-beast': '⏱️ Focus Beast - 5 hours focus time'
    };
    
    const msg = achievements[id];
    if (msg) console.log('Achievement Unlocked: ' + msg);
}

function updateDailyChallenge() {
    const today = new Date().toDateString();
    if (progress.challengeDate !== today) {
        progress.dailyChallengeComplete = false;
        progress.challengeDate = today;
        saveProgress();
    }
    
    const challengeContent = document.getElementById('challenge-content');
    if (challengeContent) {
        if (progress.dailyChallengeComplete) {
            document.getElementById('challenge-text').textContent = '✓ Challenge complete! See you tomorrow!';
            document.querySelector('.daily-challenge .btn').style.display = 'none';
        } else {
            document.querySelector('.daily-challenge .btn').style.display = 'inline-block';
        }
    }
}

function completeChallenge() {
    progress.dailyChallengeComplete = true;
    saveProgress();
    updateDailyChallenge();
    alert('Daily challenge complete! Great job! 🎉');
}

// ============ KEYBOARD SHORTCUTS ============
document.addEventListener('keydown', (e) => {
    // Check if we're in a flashcard view
    if (document.getElementById('flashcards').style.display !== 'none') {
        if (e.key === 'ArrowRight') {
            nextCard();
        } else if (e.key === 'ArrowLeft') {
            previousCard();
        } else if (e.key === ' ') {
            e.preventDefault();
            flipCard();
        }
    }
    
    // Quiz answer selection with numbers
    if (document.getElementById('quiz').style.display !== 'none' && 
        document.getElementById('quiz-content').innerHTML !== '' &&
        !document.getElementById('quiz-difficulty').style.display !== 'none') {
        const num = parseInt(e.key);
        if (num >= 1 && num <= 4) {
            const options = document.querySelectorAll('.quiz-option');
            if (options[num - 1]) {
                options[num - 1].click();
            }
        }
    }
});

// Initialize
window.addEventListener('DOMContentLoaded', () => {
    console.log('DOM Content Loaded - initializing app');
    
    loadProgress();
    showSection('notes');
    
    // Set up dark mode toggle with explicit binding
    const darkModeBtn = document.getElementById('dark-mode-toggle');
    console.log('Dark mode button element:', darkModeBtn);
    
    if (darkModeBtn) {
        // Remove any existing listeners
        darkModeBtn.removeEventListener('click', toggleDarkMode);
        // Add fresh listener
        darkModeBtn.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            console.log('Dark mode button clicked');
            toggleDarkMode();
        });
        
        // Set initial icon
        const isDark = localStorage.getItem('darkMode') === 'true';
        darkModeBtn.innerHTML = isDark ? '☀️' : '🌙';
        console.log('Dark mode initialized. isDark:', isDark);
    } else {
        console.warn('Dark mode button not found!');
    }
    
    // Update streak tracking
    updateStudyStreak();
    +    // Initialize all new features
    +    updatePerformanceDashboard();
    +    displayWeakTopics();
    +    updateSpacedRepetition();
    };
    updateAllStats();
});

function updateStudyStreak() {
    const today = new Date().toDateString();
    const lastDate = localStorage.getItem('lastStudyDate');
    
    if (lastDate !== today) {
        localStorage.setItem('lastStudyDate', today);
        if (lastDate) {
            progress.streak++;
        } else {
            progress.streak = 1;
        }
        saveProgress();
    }
}

// ============= NEW FEATURES =============

function updateAllStats() {
    updateProgressDisplay();
    updateTopicMastery();
    updateWeeklyGoals();
    updateLeaderboard();
    updateStudyHistory();
    displayStudyTips();
}

// Session History Tracking
function recordSession(topic, type, duration, score = null) {
    const session = {
        date: new Date().toISOString(),
        topic: topic,
        type: type, // 'quiz', 'flashcard', 'problem', 'notes'
        duration: duration,
        score: score
    };
    if (!progress.sessionHistory) progress.sessionHistory = [];
    progress.sessionHistory.push(session);
    saveProgress();
}

// Topic Mastery Tracking
function recordTopicScore(topic, score) {
    if (!progress.topicScores[topic]) progress.topicScores[topic] = [];
    progress.topicScores[topic].push(score);
    progress.leaderboardScore += score;
    saveProgress();
}

function getTopicMastery(topic) {
    if (!progress.topicScores[topic] || progress.topicScores[topic].length === 0) return 0;
    const scores = progress.topicScores[topic];
    const avgScore = scores.reduce((a, b) => a + b, 0) / scores.length;
    return Math.round(avgScore);
}

function updateTopicMastery() {
    const masteryContainer = document.getElementById('topic-mastery-display');
    if (!masteryContainer) return;
    
    let html = '<div class="mastery-grid">';
    const topics = ['kinematics', 'forces', 'energy', 'momentum', 'waves'];
    
    topics.forEach(topic => {
        const mastery = getTopicMastery(topic);
        const level = mastery >= 80 ? 'expert' : mastery >= 60 ? 'proficient' : mastery >= 40 ? 'learning' : 'beginner';
        html += `
            <div class="mastery-card ${level}">
                <h4>${topic.charAt(0).toUpperCase() + topic.slice(1)}</h4>
                <div class="mastery-bar">
                    <div class="mastery-fill" style="width: ${mastery}%"></div>
                </div>
                <span class="mastery-percent">${mastery}%</span>
            </div>
        `;
    });
    
    html += '</div>';
    masteryContainer.innerHTML = html;
}

// Weekly Goals Tracking
function updateWeeklyGoals() {
    const goalsContainer = document.getElementById('weekly-goals-display');
    if (!goalsContainer) return;
    
    const weekStart = new Date(progress.weeklyGoals.currentWeekStart);
    const weekEnd = new Date(weekStart);
    weekEnd.setDate(weekEnd.getDate() + 7);
    
    let focusHours = 0;
    let quizzesCompleted = 0;
    let problemsCompleted = 0;
    
    progress.sessionHistory.forEach(session => {
        const sessionDate = new Date(session.date);
        if (sessionDate >= weekStart && sessionDate <= weekEnd) {
            if (session.type === 'quiz') quizzesCompleted++;
            if (session.type === 'problem') problemsCompleted++;
            focusHours += session.duration / 60;
        }
    });
    
    const focusPercent = Math.min(100, Math.round((focusHours / progress.weeklyGoals.focusHoursTarget) * 100));
    const quizPercent = Math.min(100, Math.round((quizzesCompleted / progress.weeklyGoals.quizzesTarget) * 100));
    const problemPercent = Math.min(100, Math.round((problemsCompleted / progress.weeklyGoals.problemsTarget) * 100));
    
    goalsContainer.innerHTML = `
        <div class="goals-grid">
            <div class="goal-card">
                <h4>Focus Hours</h4>
                <div class="goal-progress">
                    <div class="progress-bar">
                        <div class="progress-fill" style="width: ${focusPercent}%"></div>
                    </div>
                    <span>${focusHours.toFixed(1)}h / ${progress.weeklyGoals.focusHoursTarget}h</span>
                </div>
            </div>
            <div class="goal-card">
                <h4>Quizzes Completed</h4>
                <div class="goal-progress">
                    <div class="progress-bar">
                        <div class="progress-fill" style="width: ${quizPercent}%"></div>
                    </div>
                    <span>${quizzesCompleted} / ${progress.weeklyGoals.quizzesTarget}</span>
                </div>
            </div>
            <div class="goal-card">
                <h4>Problems Solved</h4>
                <div class="goal-progress">
                    <div class="progress-bar">
                        <div class="progress-fill" style="width: ${problemPercent}%"></div>
                    </div>
                    <span>${problemsCompleted} / ${progress.weeklyGoals.problemsTarget}</span>
                </div>
            </div>
        </div>
    `;
}

// Leaderboard System
function updateLeaderboard() {
    const leaderboardContainer = document.getElementById('leaderboard-display');
    if (!leaderboardContainer) return;
    
    const localScores = JSON.parse(localStorage.getItem('leaderboardScores') || '[]');
    const myScore = {
        name: localStorage.getItem('studentName') || 'You',
        score: progress.leaderboardScore,
        date: new Date().toLocaleDateString()
    };
    
    localScores.push(myScore);
    localScores.sort((a, b) => b.score - a.score);
    const topScores = localScores.slice(0, 5);
    
    let html = '<div class="leaderboard-list">';
    topScores.forEach((entry, i) => {
        const isYou = entry.name === myScore.name;
        html += `
            <div class="leaderboard-entry ${isYou ? 'you' : ''}">
                <span class="rank">#${i + 1}</span>
                <span class="name">${entry.name}</span>
                <span class="score">${entry.score} pts</span>
            </div>
        `;
    });
    html += '</div>';
    leaderboardContainer.innerHTML = html;
}

// Study History
function updateStudyHistory() {
    const historyContainer = document.getElementById('study-history-display');
    if (!historyContainer) return;
    
    const recentSessions = progress.sessionHistory.slice(-10).reverse();
    
    let html = '<div class="history-list">';
    recentSessions.forEach(session => {
        const date = new Date(session.date).toLocaleDateString();
        const icon = session.type === 'quiz' ? '❓' : session.type === 'problem' ? '📝' : session.type === 'flashcard' ? '🃏' : '📚';
        html += `
            <div class="history-item">
                <span class="icon">${icon}</span>
                <span class="details">
                    <strong>${session.type}</strong> - ${session.topic} (${session.duration}min)
                    <br><small>${date}</small>
                </span>
                ${session.score ? `<span class="score">${session.score}%</span>` : ''}
            </div>
        `;
    });
    html += '</div>';
    historyContainer.innerHTML = html;
}

// Study Tips & Spotlight
const studyTips = [
    '💡 Tip: Take breaks every 25 minutes (Pomodoro Technique)',
    '💡 Tip: Review notes within 24 hours for better retention',
    '💡 Tip: Teach the concept to someone else to test your understanding',
    '💡 Tip: Mix different study modes - don\'t just do quizzes',
    '💡 Tip: Study the hardest topics first when you\'re fresh',
    '🎓 Did you know? The average student needs 66 days to form a study habit',
    '🎯 Challenge: Complete all your weekly goals this week!',
    '⚡ Momentum matters: Your current streak is 🔥 ' + progress.streak + ' days!',
    '📊 Track: You\'ve solved ' + progress.problemsSolved + ' problems this session',
    '🏆 Achievement: ' + (progress.achievements.length > 0 ? 'Great job unlocking achievements!' : 'Unlock your first achievement!')
];

function displayStudyTips() {
    const tipContainer = document.getElementById('study-tips-display');
    if (!tipContainer) return;
    
    const randomTip = studyTips[Math.floor(Math.random() * studyTips.length)];
    tipContainer.innerHTML = `<div class="study-tip-card">${randomTip}</div>`;
}

// Favorite Notes System
function toggleFavoriteNote(noteName) {
    if (!progress.favoriteNotes) progress.favoriteNotes = [];
    const index = progress.favoriteNotes.indexOf(noteName);
    if (index > -1) {
        progress.favoriteNotes.splice(index, 1);
    } else {
        progress.favoriteNotes.push(noteName);
    }
    saveProgress();
}

function isFavoriteNote(noteName) {
    return progress.favoriteNotes && progress.favoriteNotes.includes(noteName);
}

// Set Student Name for Leaderboard
function setStudentName() {
    const nameInput = document.getElementById('student-name-input');
    if (nameInput && nameInput.value.trim()) {
        localStorage.setItem('studentName', nameInput.value.trim());
        updateLeaderboard();
    }
}

// ============= PERFORMANCE DASHBOARD =============
function updatePerformanceDashboard() {
    const scoresContainer = document.getElementById('scores-chart');
    const timeContainer = document.getElementById('time-chart');
    const topicsContainer = document.getElementById('topics-chart');
    const summaryContainer = document.getElementById('weekly-summary');
    
    if (!scoresContainer) return;
    
    // Display quiz scores trend
    let scoresHTML = '<div style="padding: 1rem; background: white; border-radius: 8px;">';
    scoresHTML += '<p style="color: var(--muted);">Recent Quiz Scores:</p>';
    const recentScores = progress.quizScores.slice(-10);
    if (recentScores.length === 0) {
        scoresHTML += '<p>Complete quizzes to see trends</p>';
    } else {
        const avgScore = Math.round(recentScores.reduce((a, b) => a + b) / recentScores.length);
        scoresHTML += `<div style="font-size: 2rem; font-weight: 800; color: var(--brand);">${avgScore}%</div>`;
        scoresHTML += `<small>${recentScores.length} quizzes taken</small>`;
    }
    scoresHTML += '</div>';
    scoresContainer.innerHTML = scoresHTML;
    
    // Display study time trends
    let timeHTML = '<div style="padding: 1rem; background: white; border-radius: 8px;">';
    const thisWeekSessions = progress.sessionHistory.filter(s => {
        const sessionDate = new Date(s.date);
        const weekAgo = new Date();
        weekAgo.setDate(weekAgo.getDate() - 7);
        return sessionDate >= weekAgo;
    });
    const totalWeekTime = thisWeekSessions.reduce((sum, s) => sum + (s.duration || 0), 0);
    timeHTML += `<p style="color: var(--muted);">This Week:</p>`;
    timeHTML += `<div style="font-size: 2rem; font-weight: 800; color: var(--brand);">${Math.round(totalWeekTime / 60)}h</div>`;
    timeHTML += `<small>${thisWeekSessions.length} sessions</small></div>`;
    timeContainer.innerHTML = timeHTML;
    
    // Topics performance
    let topicsHTML = '<div style="padding: 1rem; background: white; border-radius: 8px;">';
    const topics = ['kinematics', 'forces', 'energy', 'momentum', 'waves'];
    const topicAvgs = topics.map(t => ({
        name: t,
        avg: getTopicMastery(t)
    })).sort((a, b) => b.avg - a.avg);
    
    topicAvgs.forEach(t => {
        topicsHTML += `<div style="margin-bottom: 0.8rem;">
            <div style="display: flex; justify-content: space-between; margin-bottom: 0.3rem;">
                <strong>${t.name}</strong>
                <span style="color: var(--brand);">${t.avg}%</span>
            </div>
            <div style="background: #f0f0f0; height: 8px; border-radius: 4px; overflow: hidden;">
                <div style="background: var(--brand); height: 100%; width: ${t.avg}%;"></div>
            </div>
        </div>`;
    });
    topicsHTML += '</div>';
    topicsContainer.innerHTML = topicsHTML;
    
    // Weekly summary
    let summaryHTML = '<div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem;">';
    summaryHTML += `<div style="background: #f0f8ff; padding: 1rem; border-radius: 8px;">
        <small style="color: var(--muted);">Total Sessions</small>
        <div style="font-size: 1.5rem; font-weight: 800; color: var(--brand);">${recentScores.length}</div>
    </div>`;
    summaryHTML += `<div style="background: #fffbf0; padding: 1rem; border-radius: 8px;">
        <small style="color: var(--muted);">Avg Score</small>
        <div style="font-size: 1.5rem; font-weight: 800; color: var(--accent);">${recentScores.length > 0 ? Math.round(recentScores.reduce((a, b) => a + b) / recentScores.length) : 0}%</div>
    </div>`;
    summaryHTML += '</div>';
    summaryContainer.innerHTML = summaryHTML;
}

// ============= PRACTICE EXAMS =============
let currentExamType = null;
let examQuestions = [];
let examAnswers = [];

function startPracticeExam(type) {
    currentExamType = type;
    examQuestions = [];
    examAnswers = [];
    
    const counts = { short: 15, standard: 30, full: 50 };
    const questionCount = counts[type];
    
    // Get all available questions
    let allQuestions = [];
    Object.values(physicsData.quizzes).forEach(topicQuestions => {
        allQuestions = allQuestions.concat(topicQuestions);
    });
    
    // Shuffle and select
    examQuestions = allQuestions.sort(() => Math.random() - 0.5).slice(0, questionCount);
    
    displayExamQuestion(0);
}

function displayExamQuestion(index) {
    if (index >= examQuestions.length) {
        submitExam();
        return;
    }
    
    const question = examQuestions[index];
    const content = document.getElementById('exam-content');
    
    let html = `<div style="margin-bottom: 2rem;">
        <h3>Question ${index + 1} of ${examQuestions.length}</h3>
        <p style="font-weight: 600; margin: 1rem 0;">${question.question}</p>
        <div style="display: grid; gap: 0.8rem;">`;
    
    question.options.forEach((opt, i) => {
        const selected = examAnswers[index] === i ? ' checked' : '';
        html += `<label style="padding: 0.8rem; background: #f7fcff; border-radius: 8px; cursor: pointer; border: 2px solid #d5e6f0; display: flex; align-items: center;">
            <input type="radio" name="exam-answer" value="${i}" onclick="examAnswers[${index}] = ${i}"${selected} style="margin-right: 0.8rem;">
            ${opt}
        </label>`;
    });
    
    html += `</div>
        <div style="display: flex; gap: 1rem; margin-top: 1.5rem;">
            <button onclick="displayExamQuestion(${index - 1})" class="btn" ${index === 0 ? 'disabled' : ''}>Previous</button>
            <div style="flex: 1;"></div>
            <button onclick="displayExamQuestion(${index + 1})" class="btn btn-primary">Next</button>
        </div>
    </div>`;
    
    content.innerHTML = html;
}

function submitExam() {
    let correct = 0;
    examQuestions.forEach((q, i) => {
        if (q.options[examAnswers[i]] === q.correct) correct++;
    });
    
    const percentage = Math.round((correct / examQuestions.length) * 100);
    const content = document.getElementById('exam-content');
    
    content.innerHTML = `
        <div style="text-align: center; background: linear-gradient(135deg, #eaf7ff, #f0f5ff); padding: 2rem; border-radius: 14px;">
            <h2>Exam Complete</h2>
            <div style="font-size: 3rem; color: var(--brand); font-weight: bold; margin: 1rem 0;">${percentage}%</div>
            <p style="font-size: 1.1rem; color: var(--muted);">You got ${correct} out of ${examQuestions.length} correct</p>
            <button onclick="startPracticeExam('${currentExamType}')" class="btn btn-primary" style="margin-top: 1rem;">Retake Exam</button>
        </div>
    `;
    
    recordTopicScore('general', percentage);
    recordSession('general', 'exam', Math.round(examQuestions.length * 2), percentage);
    updateAchievements();
}

// ============= WEAK TOPICS DETECTION =============
function displayWeakTopics() {
    const container = document.getElementById('weak-topics-display');
    if (!container) return;
    
    const topics = ['kinematics', 'forces', 'energy', 'momentum', 'waves'];
    const topicData = topics.map(t => ({
        name: t,
        mastery: getTopicMastery(t),
        attempts: (progress.topicScores[t] || []).length
    })).filter(t => t.attempts > 0).sort((a, b) => a.mastery - b.mastery);
    
    let html = topicData.length === 0 ? '<p>Complete some quizzes first to identify focus areas</p>' : '<div class="weak-topics-grid">';
    
    topicData.forEach(topic => {
        const recommendation = topic.mastery < 40 ? '[URGENT] Focus here' : topic.mastery < 60 ? '[IMPROVE] Practice more' : '[MAINTAIN] Keep it up';
        html += `
            <div class="weak-topic-card">
                <h4>${topic.name.toUpperCase()}</h4>
                <div class="score">${topic.mastery}%</div>
                <div class="recommendation">${recommendation}</div>
                <small>${topic.attempts} attempts</small>
            </div>
        `;
    });
    
    html += '</div>';
    container.innerHTML = html;
}

// ============= CUSTOM QUIZ BUILDER =============
let customQuizQuestions = [];

function buildCustomQuiz() {
    const selectedTopics = [];
    const selectedDifficulties = [];
    document.querySelectorAll('input[id^="topic-"]:checked').forEach(cb => {
        selectedTopics.push(cb.value);
    });
    document.querySelectorAll('input[id^="diff-"]:checked').forEach(cb => {
        selectedDifficulties.push(cb.value);
    });
    
    const count = parseInt(document.getElementById('quiz-count').value) || 10;
    
    if (selectedTopics.length === 0 || selectedDifficulties.length === 0) {
        alert('Please select at least one topic and difficulty');
        return;
    }
    
    // Get matching questions
    let allQuestions = [];
    selectedTopics.forEach(topic => {
        if (physicsData.quizzes[topic]) {
            physicsData.quizzes[topic].forEach(q => {
                if (selectedDifficulties.includes(q.difficulty)) {
                    allQuestions.push(q);
                }
            });
        }
    });
    
    customQuizQuestions = allQuestions.sort(() => Math.random() - 0.5).slice(0, count);
    
    if (customQuizQuestions.length === 0) {
        alert('No questions found matching your criteria');
        return;
    }
    
    displayCustomQuizQuestion(0);
}

let customQuizAnswers = [];

function displayCustomQuizQuestion(index) {
    if (index >= customQuizQuestions.length) {
        submitCustomQuiz();
        return;
    }
    
    const question = customQuizQuestions[index];
    const content = document.getElementById('custom-quiz-content');
    
    let html = `<div style="background: linear-gradient(135deg, #f0f8ff, #f5faff); border-radius: 14px; padding: 1.5rem;">
        <h3>Question ${index + 1} of ${customQuizQuestions.length}</h3>
        <p style="font-weight: 600; margin: 1rem 0; font-size: 1.1rem;">${question.question}</p>
        <div style="display: grid; gap: 0.8rem; margin: 1.5rem 0;">`;
    
    question.options.forEach((opt, i) => {
        const selected = customQuizAnswers[index] === i ? ' checked' : '';
        html += `<label style="padding: 0.8rem; background: white; border-radius: 8px; cursor: pointer; border: 2px solid #d5e6f0; display: flex; align-items: center;">
            <input type="radio" name="custom-quiz" value="${i}" onclick="customQuizAnswers[${index}] = ${i}"${selected} style="margin-right: 0.8rem;">
            ${opt}
        </label>`;
    });
    
    html += `</div><div style="display: flex; gap: 1rem;">
        <button onclick="displayCustomQuizQuestion(${index - 1})" class="btn" ${index === 0 ? 'disabled' : ''}>Previous</button>
        <div style="flex: 1;"></div>
        <button onclick="displayCustomQuizQuestion(${index + 1})" class="btn btn-primary">Next</button>
    </div></div>`;
    
    content.innerHTML = html;
}

function submitCustomQuiz() {
    let correct = 0;
    customQuizQuestions.forEach((q, i) => {
        if (q.options[customQuizAnswers[i]] === q.correct) correct++;
    });
    
    const percentage = Math.round((correct / customQuizQuestions.length) * 100);
    const content = document.getElementById('custom-quiz-content');
    
    content.innerHTML = `
        <div style="text-align: center; background: linear-gradient(135deg, #eaf7ff, #f0f5ff); padding: 2rem; border-radius: 14px;">
            <h2>Quiz Complete</h2>
            <div style="font-size: 3rem; color: var(--brand); font-weight: bold; margin: 1rem 0;">${percentage}%</div>
            <p style="font-size: 1.1rem; color: var(--muted);">You got ${correct} out of ${customQuizQuestions.length} correct</p>
            <button onclick="document.getElementById('custom-quiz-content').innerHTML = ''" class="btn btn-primary" style="margin-top: 1rem;">Create Another</button>
        </div>
    `;
    
    recordTopicScore('custom', percentage);
    recordSession('custom', 'quiz', Math.round(customQuizQuestions.length * 1.5), percentage);
    updateAchievements();
}

// ============= SPACED REPETITION =============
function updateSpacedRepetition() {
    const container = document.getElementById('spaced-repetition-display');
    if (!container) return;
    
    const today = new Date();
    const cardsToReview = [];
    
    physicsData.flashcards.forEach((card, idx) => {
        const lastReview = progress.cardLastReviewed[idx];
        const nextReview = progress.cardNextReviewDate[idx];
        
        if (!lastReview || (nextReview && new Date(nextReview) <= today)) {
            cardsToReview.push({...card, index: idx});
        }
    });
    
    if (cardsToReview.length === 0) {
        container.innerHTML = '<p style="text-align: center; padding: 2rem; color: var(--muted);">No cards due for review today. Great job staying on top of spaced repetition!</p>';
        return;
    }
    
    let html = `<p style="margin-bottom: 1rem; color: var(--muted);">${cardsToReview.length} cards due for review</p>`;
    html += '<div class="spaced-cards-list">';
    
    cardsToReview.forEach((card, i) => {
        html += `
            <div class="spaced-card-item">
                <div class="card-text">
                    <strong>${card.front}</strong>
                    <br><small style="color: var(--muted);">${card.back.substring(0, 50)}...</small>
                </div>
                <button onclick="markCardReviewed(${card.index})" class="btn btn-primary" style="margin-left: 1rem;">Review</button>
            </div>
        `;
    });
    
    html += '</div>';
    container.innerHTML = html;
}

function markCardReviewed(cardIndex) {
    progress.cardLastReviewed[cardIndex] = new Date().toISOString();
    
    // Set next review for this card (e.g., 3 days later)
    const nextDate = new Date();
    nextDate.setDate(nextDate.getDate() + 3);
    progress.cardNextReviewDate[cardIndex] = nextDate.toISOString();
    
    saveProgress();
    updateSpacedRepetition();
}

