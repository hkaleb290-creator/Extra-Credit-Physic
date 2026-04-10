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

