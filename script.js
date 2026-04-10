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

// Progress tracking
let progress = {
    notesReviewed: 0,
    cardsStudied: 0,
    quizScores: [],
    problemsSolved: 0,
    totalQuizTime: 0
};

// Load progress from localStorage
function loadProgress() {
    const saved = localStorage.getItem('physicsProgress');
    if (saved) {
        progress = JSON.parse(saved);
        updateProgressDisplay();
    }
}

// Save progress to localStorage
function saveProgress() {
    localStorage.setItem('physicsProgress', JSON.stringify(progress));
}

// Show sections
function showSection(sectionId) {
    document.querySelectorAll('.section').forEach(s => s.style.display = 'none');
    document.getElementById(sectionId).style.display = 'block';
    setActiveNav(sectionId);

    if (sectionId === 'notes') {
        loadNotes('kinematics');
    } else if (sectionId === 'flashcards') {
        loadFlashcards();
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

// ============ NOTES SECTION ============
function loadNotes(topic) {
    currentNoteSection = topic;

    // Update active button without depending on a global click event.
    document.querySelectorAll('.note-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.topic === topic);
    });

    const noteData = physicsData.notes[topic];
    const container = document.getElementById('notes-content');
    
    container.innerHTML = '';
    noteData.content.forEach(note => {
        const noteDiv = document.createElement('div');
        noteDiv.className = 'note-item';
        noteDiv.innerHTML = `
            <h3>${note.heading}</h3>
            <p>${note.text.replace(/\n/g, '<br>')}</p>
        `;
        container.appendChild(noteDiv);
    });

    progress.notesReviewed++;
    saveProgress();
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
    saveProgress();
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
    }
    
    document.getElementById('problems-solved').textContent = progress.problemsSolved;
    
    // Update progress bars
    const maxNotes = 5;
    const maxCards = 50;
    const maxProblems = 20;
    
    document.querySelectorAll('.progress-stat')[0].querySelector('.progress-fill').style.width = Math.min(100, (progress.notesReviewed / maxNotes) * 100) + '%';
    document.querySelectorAll('.progress-stat')[1].querySelector('.progress-fill').style.width = Math.min(100, (progress.cardsStudied / maxCards) * 100) + '%';
    document.querySelectorAll('.progress-stat')[3].querySelector('.progress-fill').style.width = Math.min(100, (progress.problemsSolved / maxProblems) * 100) + '%';
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

// Initialize
window.addEventListener('DOMContentLoaded', () => {
    loadProgress();
    showSection('notes');
});
