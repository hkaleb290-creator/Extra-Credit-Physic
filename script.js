/**
 * Physics Study Hu
    generateRandomExam() {
        const qCount = parseInt(document.getElementById('examQCount')?.value || 25);
        const questions = physicsData.quiz.slice().sort(() => Math.random() - 0.5).slice(0, Math.min(qCount, physicsData.quiz.length));
        
        AppState.examQuestions = questions;
        AppState.examAnswers = new Array(questions.length).fill(-1);
        
        UI.showSection('exams');
        this.start();
    },b - Refactored Script
 * Modular architecture with better separation of concerns
 * 12 Topics | 85+ Flashcards | 130+ Quizzes | 30+ Problems
 */

// ============================================
// STATE MANAGEMENT MODULE
// ============================================

const AppState = {
    // UI State
    currentSection: 'notes',
    currentNoteSection: 'kinematics',
    currentFlashcardIndex: 0,
    currentQuizIndex: 0,
    currentProblemSection: 'kinematics',
    quizDifficulty: 'all',
    isDarkMode: false,
    
    // Quiz/Exam State
    quizAnswers: [],
    quizStartTime: 0,
    quizTimer: null,
    quizDuration: 0,
    filteredQuestions: [],
    examQuestions: [],
    examAnswers: [],
    cardDifficulty: {},
    
    // Study Progress
    progress: {
        notesReviewed: 0,
        cardsStudied: 0,
        quizScores: [],
        examScores: [],
        problemsSolved: 0,
        totalQuizTime: 0,
        todayFocus: 0,
        streak: 0,
        lastStudyDate: null,
        achievements: []
    },
    
    // Utility functions
    save() {
        localStorage.setItem('physicsProgress', JSON.stringify(this.progress));
        localStorage.setItem('darkMode', this.isDarkMode);
    },
    
    load() {
        const saved = localStorage.getItem('physicsProgress');
        if (saved) {
            this.progress = JSON.parse(saved);
            if (!Array.isArray(this.progress.examScores)) this.progress.examScores = [];
            if (!Array.isArray(this.progress.quizScores)) this.progress.quizScores = [];
        }
        const darkMode = localStorage.getItem('darkMode') === 'true';
        if (darkMode) this.toggleDarkMode();
    },
    
    toggleDarkMode() {
        this.isDarkMode = !this.isDarkMode;
        document.body.classList.toggle('dark-mode', this.isDarkMode);
        this.save();
        UI.updateDarkModeButton();
    },
    
    incrementProgress(field) {
        if (this.progress.hasOwnProperty(field)) {
            this.progress[field]++;
            this.save();
        }
    }
};

// ============================================
// UI MODULE
// ============================================

const UI = {
    showSection(sectionId) {
        // Hide all sections
        document.querySelectorAll('.section').forEach(s => {
            s.style.display = 'none';
            s.classList.remove('active');
        });
        
        // Show target section
        const section = document.getElementById(sectionId);
        if (section) {
            section.style.display = 'block';
            section.classList.add('active');
        }
        
        AppState.currentSection = sectionId;
        this.updateActiveNav(sectionId);
        
        // Initialize section content
        this.initSection(sectionId);
    },
    
    initSection(sectionId) {
        const handlers = {
            'notes': () => ContentManager.loadNotes('kinematics'),
            'flashcards': () => ContentManager.loadFlashcards(),
            'timer': () => TimerManager.init(),
            'quiz': () => QuizManager.init(),
            'problems': () => ContentManager.loadProblems('kinematics'),
            'exams': () => ExamManager.init(),
            'dashboard': () => this.updateDashboard(),
            'resources': () => this.loadResources(),
            'team': () => this.loadTeam(),
            'progress': () => this.updateProgressDisplay()
              'formulas': () => this.loadFormulas(),
              'apps': () => this.loadApplications(),
              'tools': () => this.loadTools()
        };
        
        if (handlers[sectionId]) handlers[sectionId]();
    },
    
    updateActiveNav(sectionId) {
        document.querySelectorAll('.nav-link').forEach(link => {
            const isActive = link.getAttribute('onclick')?.includes(`'${sectionId}'`);
            link.classList.toggle('active', isActive);
            link.style.background = isActive ? 'rgba(255, 255, 255, 0.18)' : 'transparent';
        });
    },
    
    updateDarkModeButton() {
        const btn = document.getElementById('dark-mode-toggle');
        if (btn) btn.textContent = AppState.isDarkMode ? '☀️' : '🌙';
    },
    
    updateDashboard() {
        const content = document.getElementById('dashboard-content');
        if (!content) return;
        
        const p = AppState.progress;
        const quizAvg = p.quizScores.length ? (p.quizScores.reduce((a, b) => a + b) / p.quizScores.length).toFixed(1) : '0';
        
        content.innerHTML = `
            <div class="dashboard-grid">
                <div class="dashboard-card">
                    <h3>Flashcards Studied</h3>
                    <div class="dashboard-value">${p.cardsStudied}</div>
                </div>
                <div class="dashboard-card">
                    <h3>Quizzes Taken</h3>
                    <div class="dashboard-value">${p.quizScores.length}</div>
                </div>
                <div class="dashboard-card">
                    <h3>Average Score</h3>
                    <div class="dashboard-value">${quizAvg}%</div>
                </div>
                <div class="dashboard-card">
                    <h3>Problems Solved</h3>
                    <div class="dashboard-value">${p.problemsSolved}</div>
                </div>
                <div class="dashboard-card">
                    <h3>Study Streak</h3>
                    <div class="dashboard-value">${p.streak} days</div>
                </div>
                <div class="dashboard-card">
                    <h3>Total Study Time</h3>
                    <div class="dashboard-value">${Math.round(p.totalQuizTime / 60)}m</div>
                </div>
            </div>
            <div style="margin-top: 2rem;">
                <h3>Achievements 🏆</h3>
                <div class="achievements-list" id="achievements-list"></div>
                <button onclick="AppState.progress.quizScores = []; AppState.progress.cardsStudied = 0; AppState.progress.problemsSolved = 0; AppState.save(); UI.updateDashboard();" class="reset-btn">
                    Reset Progress
                </button>
            </div>
        `;
        
        this.updateAchievements();
    },
    
    updateProgressDisplay() {
        this.updateDashboard();
    },
    
    updateAchievements() {
        const p = AppState.progress;
        const list = document.getElementById('achievements-list');
        if (!list) return;
        
        const achievements = [];
        if (p.cardsStudied >= 10) achievements.push('🎯 Flash Master (10 cards)');
        if (p.quizScores.length >= 5) achievements.push('📝 Quiz Champion (5 quizzes)');
        if (p.cardsStudied >= 50) achievements.push('⭐ Knowledge Seeker (50 cards)');
        if (p.quizScores.length >= 20) achievements.push('🔥 Study Legend (20 quizzes)');
        if (p.streak >= 7) achievements.push('🌟 Week Warrior (7 day streak)');
        
        list.innerHTML = achievements.length ? achievements.map(a => `<div class="achievement">${a}</div>`).join('') : '<p style="color: var(--muted);">Complete more to earn achievements!</p>';
    },
    
    loadResources() {
        const content = document.getElementById('resources-content');
        if (!content) return;
        content.innerHTML = `
            <div class="resources-grid">
                <div class="resource-card">
                    <h3>📚 Physics Textbook</h3>
                    <p>OpenStax College Physics - Free comprehensive resource</p>
                </div>
                <div class="resource-card">
                    <h3>🎥 Video Tutorials</h3>
                    <p>Khan Academy - Excellent video explanations for all topics</p>
                </div>
                <div class="resource-card">
                    <h3>🔬 Interactive Simulations</h3>
                    <p>PhET Simulations - Hands-on learning with interactive demos</p>
                </div>
                <div class="resource-card">
                    <h3>📊 Physics Formulas</h3>
                    <p>Complete reference sheet with all major equations</p>
                </div>
                <div class="resource-card">
                    <h3>📱 Mobile Apps</h3>
                    <p>Physics Toolbox, Wolfram Alpha, iPhysics</p>
                </div>
                <div class="resource-card">
                    <h3>🌐 Online Communities</h3>
                    <p>Reddit r/learnphysics, Physics forums, Stack Exchange</p>
                </div>
            </div>
        `;
    },
    
    loadTeam() {
        const content = document.getElementById('team-content');
        if (!content) return;
        content.innerHTML = `
            <div class="team-container">
                <h2>About This Study Hub</h2>
                <p>Created to help students master physics through interactive learning tools:</p>
                <ul>
                    <li>📚 Comprehensive study notes for 12 physics topics</li>
                    <li>🃏 85+ interactive flashcards for quick review</li>
                    <li>❓ 130+ quiz questions with difficulty levels</li>
                    <li>📝 30+ solved practice problems</li>
                    <li>⏱️ Built-in Pomodoro timer for focused study</li>
                    <li>📊 Progress tracking and achievement system</li>
                </ul>
                <h3>Version: 2.0 - Comprehensive Edition</h3>
                <p style="color: var(--muted); font-size: 0.9rem;">Last updated: April 2026</p>
            </div>
        `;
    }

    loadFormulas() {
        const content = document.getElementById('formulas-content');
        if (!content) return;
        let html = '<div class="formulas-grid">';
        
        for (const [topic, formulas] of Object.entries(physicsData.formulas || {})) {
            const topicTitle = physicsData.notes[topic]?.title || topic.charAt(0).toUpperCase() + topic.slice(1);
            html += '<div class="formula-card"><h3>' + topicTitle + '</h3>';
            html += formulas.map(f => '<div class="formula-item">' + f + '</div>').join('');
            html += '</div>';
        }
        html += '</div>';
        content.innerHTML = html;
        AppState.incrementProgress('notesReviewed');
    },

    loadApplications() {
        const content = document.getElementById('apps-content');
        if (!content) return;
        let html = '<div class="apps-grid">';
        
        for (const [topic, apps] of Object.entries(physicsData.applications || {})) {
            const topicTitle = physicsData.notes[topic]?.title || topic;
            html += '<div class="app-card"><h3>' + topicTitle + '</h3>';
            html += apps.map(app => '<div class="app-item">' + app + '</div>').join('');
            html += '</div>';
        }
        html += '</div>';
        content.innerHTML = html;
    },

    loadTools() {
        const content = document.getElementById('tools-content');
        if (!content) return;
        let html = '<div class="tools-container">';
        
        // Video recommendations
        html += '<div class="tools-section"><h3>📺 Video Tutorials</h3>';
        html += '<div class="videos-grid">';
        for (const [topic, videos] of Object.entries(physicsData.videos || {})) {
            const topicTitle = physicsData.notes[topic]?.title || topic;
            videos.forEach(v => {
                html += '<a class="video-card" href="' + v.url + '" target="_blank">';
                html += '<strong>' + topicTitle + '</strong><br>';
                html += v.title + ' 🎥</a>';
            });
        }
        html += '</div></div>';
        
        // PhET Simulations
        html += '<div class="tools-section"><h3>⚗️ Interactive Simulations (PhET)</h3>';
        html += '<div class="sims-grid">';
        for (const [topic, url] of Object.entries(physicsData.simulations || {})) {
            if (topic !== 'all') {
                const topicTitle = physicsData.notes[topic]?.title || topic;
                html += '<a class="sim-card" href="' + url + '" target="_blank">';
                html += topicTitle + ' 🧪</a>';
            }
        }
        html += '<a class="sim-card" href="' + (physicsData.simulations.all || 'https://phet.colorado.edu') + '" target="_blank">All PhET Labs 🔗</a>';
        html += '</div></div>';
        
        // Practice Exam Generator
        html += '<div class="tools-section"><h3>📝 Practice Exam Generator</h3>';
        html += '<p>Generate randomized practice exams with custom question count:</p>';
        html += '<div class="exam-gen"><input type="number" id="examQCount" min="5" max="170" value="25" style="width:60px; padding:8px;"> Questions ';
        html += '<button class="btn btn-primary" onclick="ExamManager.generateRandomExam()">Generate Exam</button></div></div>';
        
        content.innerHTML = html;
    }
};

// ============================================
// CONTENT MANAGER MODULE
// ============================================


    loadFormulas() {
        const content = document.getElementById('formulas-content');
        if (!content) return;
        let html = '<div class="formulas-grid">';
        
        for (const [topic, formulas] of Object.entries(physicsData.formulas || {})) {
            const topicTitle = physicsData.notes[topic]?.title || topic.charAt(0).toUpperCase() + topic.slice(1);
            html += '<div class="formula-card"><h3>' + topicTitle + '</h3>';
            html += formulas.map(f => '<div class="formula-item">' + f + '</div>').join('');
            html += '</div>';
        }
        html += '</div>';
        content.innerHTML = html;
        AppState.incrementProgress('notesReviewed');
    },

    loadApplications() {
        const content = document.getElementById('apps-content');
        if (!content) return;
        let html = '<div class="apps-grid">';
        
        for (const [topic, apps] of Object.entries(physicsData.applications || {})) {
            const topicTitle = physicsData.notes[topic]?.title || topic;
            html += '<div class="app-card"><h3>' + topicTitle + '</h3>';
            html += apps.map(app => '<div class="app-item">' + app + '</div>').join('');
            html += '</div>';
        }
        html += '</div>';
        content.innerHTML = html;
    },

    loadTools() {
        const content = document.getElementById('tools-content');
        if (!content) return;
        let html = '<div class="tools-container">';
        
        // Video recommendations
        html += '<div class="tools-section"><h3>?? Video Tutorials</h3>';
        html += '<div class="videos-grid">';
        for (const [topic, videos] of Object.entries(physicsData.videos || {})) {
            const topicTitle = physicsData.notes[topic]?.title || topic;
            videos.forEach(v => {
                html += '<a class="video-card" href="' + v.url + '" target="_blank">';
                html += '<strong>' + topicTitle + '</strong><br>';
                html += v.title + ' ??</a>';
            });
        }
        html += '</div></div>';
        
        // PhET Simulations
        html += '<div class="tools-section"><h3>?? Interactive Simulations (PhET)</h3>';
        html += '<div class="sims-grid">';
        for (const [topic, url] of Object.entries(physicsData.simulations || {})) {
            if (topic !== 'all') {
                const topicTitle = physicsData.notes[topic]?.title || topic;
                html += '<a class="sim-card" href="' + url + '" target="_blank">';
                html += topicTitle + ' ??</a>';
            }
        }
        html += '<a class="sim-card" href="' + (physicsData.simulations.all || 'https://phet.colorado.edu') + '" target="_blank">All PhET Labs ??</a>';
        html += '</div></div>';
        
        // Practice Exam Generator
        html += '<div class="tools-section"><h3>?? Practice Exam Generator</h3>';
        html += '<p>Generate randomized practice exams with custom question count:</p>';
        html += '<div class="exam-gen"><input type="number" id="examQCount" min="5" max="170" value="25" style="width:60px; padding:8px;"> Questions ';
        html += '<button class="btn btn-primary" onclick="ExamManager.generateRandomExam()">Generate Exam</button></div></div>';
        
        content.innerHTML = html;
    }

// ============================================
// CONTENT MANAGER MODULE  
// ============================================

const ContentManager = {
    getTopics() {
        return Object.keys(physicsData.notes);
    },
    
    getTopic(topicId) {
        return physicsData.notes[topicId];
    },
    
    loadNotes(topicId = 'kinematics') {
        AppState.currentNoteSection = topicId;
        const content = document.getElementById('notes-content');
        const menu = document.getElementById('notes-menu');
        
        if (!content) return;
        
        const topic = this.getTopic(topicId);
        if (!topic) return;
        
        // Update menu
        if (menu) {
            menu.innerHTML = this.getTopics()
                .map(id => `<button class="note-btn ${id === topicId ? 'active' : ''}" onclick="ContentManager.loadNotes('${id}')">${physicsData.notes[id].title}</button>`)
                .join('');
        }
        
        // Render content
        const html = topic.content.map(item => `
            <div class="note-item">
                <h4>${item.heading}</h4>
                <p>${item.text.replace(/\n/g, '<br>')}</p>
            </div>
        `).join('');
        
        content.innerHTML = `<h2>${topic.title}</h2>${html}`;
        AppState.incrementProgress('notesReviewed');
    },
    
    loadProblems(sectionId = 'kinematics') {
        AppState.currentProblemSection = sectionId;
        const content = document.getElementById('problems-content');
        const menu = document.getElementById('problems-menu');
        
        if (!content || !physicsData.problems[sectionId]) return;
        
        // Update menu
        if (menu) {
            menu.innerHTML = Object.keys(physicsData.problems)
                .map(id => `<button class="problem-btn ${id === sectionId ? 'active' : ''}" onclick="ContentManager.loadProblems('${id}')">${physicsData.notes[id].title}</button>`)
                .join('');
        }
        
        // Render problems
        const problems = physicsData.problems[sectionId];
        const html = problems.map((prob, idx) => `
            <div class="problem-item">
                <h4>${prob.title}</h4>
                <p><strong>Problem:</strong> ${prob.statement}</p>
                <button class="solution-btn" onclick="this.nextElementSibling.style.display = this.nextElementSibling.style.display === 'none' ? 'block' : 'none'">Show Solution</button>
                <div class="solution" style="display: none;"><strong>Solution:</strong><p>${prob.solution.replace(/\n/g, '<br>')}</p></div>
            </div>
        `).join('');
        
        content.innerHTML = `<h2>${physicsData.notes[sectionId].title} - Problems</h2>${html}`;
        AppState.incrementProgress('problemsSolved');
    },
    
    loadFlashcards() {
        const container = document.getElementById('flashcard-container');
        if (!container) return;
        
        const card = physicsData.flashcards[AppState.currentFlashcardIndex];
        if (!card) return;
        
        container.innerHTML = `
            <div class="flashcard-inner" onclick="Flashcard.toggle()">
                <div class="flashcard-front">
                    <p>${card.front}</p>
                </div>
                <div class="flashcard-back" style="display:none;">
                    <p>${card.back}</p>
                </div>
            </div>
        `;
        
        document.getElementById('card-counter').textContent = `${AppState.currentFlashcardIndex + 1} / ${physicsData.flashcards.length}`;
        AppState.incrementProgress('cardsStudied');
    }
};

// ============================================
// FLASHCARD MODULE
// ============================================

const Flashcard = {
    next() {
        if (AppState.currentFlashcardIndex < physicsData.flashcards.length - 1) {
            AppState.currentFlashcardIndex++;
            ContentManager.loadFlashcards();
        }
    },
    
    prev() {
        if (AppState.currentFlashcardIndex > 0) {
            AppState.currentFlashcardIndex--;
            ContentManager.loadFlashcards();
        }
    },
    
    toggle() {
        const front = document.querySelector('.flashcard-front');
        const back = document.querySelector('.flashcard-back');
        if (front && back) {
            const isFront = front.style.display !== 'none';
            front.style.display = isFront ? 'none' : 'block';
            back.style.display = isFront ? 'block' : 'none';
        }
    },
    
    shuffle() {
        const shuffled = [...physicsData.flashcards].sort(() => Math.random() - 0.5);
        window.physicsData.flashcards = shuffled;
        AppState.currentFlashcardIndex = 0;
        ContentManager.loadFlashcards();
    }
};

// ============================================
// QUIZ MODULE
// ============================================

const QuizManager = {
    init() {
        const content = document.getElementById('quiz-content');
        if (!content) return;
        
        const topics = ContentManager.getTopics();
        content.innerHTML = `
            <div class="quiz-intro">
                <h3>Quiz Settings</h3>
                <label>Difficulty Level:
                    <select id="difficulty-select" onchange="QuizManager.updateDifficulty(this.value)">
                        <option value="all">All</option>
                        <option value="easy">Easy</option>
                        <option value="medium">Medium</option>
                        <option value="hard">Hard</option>
                    </select>
                </label>
                <button onclick="QuizManager.start()" class="start-btn">Start Quiz</button>
            </div>
        `;
    },
    
    updateDifficulty(level) {
        AppState.quizDifficulty = level;
    },
    
    start() {
        AppState.quizAnswers = [];
        const pool = physicsData.quiz;
        AppState.filteredQuestions = AppState.quizDifficulty === 'all' 
            ? pool.slice()
            : pool.filter(q => q.difficulty === AppState.quizDifficulty);
        
        if (AppState.filteredQuestions.length === 0) {
            alert('No questions available for this difficulty level.');
            return;
        }
        
        AppState.filteredQuestions.sort(() => Math.random() - 0.5);
        AppState.currentQuizIndex = 0;
        AppState.quizStartTime = Date.now();
        this.renderQuestion();
    },
    
    renderQuestion() {
        const content = document.getElementById('quiz-content');
        const q = AppState.filteredQuestions[AppState.currentQuizIndex];
        
        if (!q) {
            this.finish();
            return;
        }
        
        const html = `
            <div class="quiz-question-container">
                <div class="quiz-progress">Question ${AppState.currentQuizIndex + 1} / ${AppState.filteredQuestions.length}</div>
                <h3>${q.question}</h3>
                <div class="quiz-options">
                    ${q.options.map((opt, idx) => `
                        <label class="quiz-option">
                            <input type="radio" name="answer" value="${idx}" onchange="QuizManager.selectAnswer(${idx})">
                            ${opt}
                        </label>
                    `).join('')}
                </div>
                <div class="quiz-controls">
                    <button onclick="QuizManager.prev()" ${AppState.currentQuizIndex === 0 ? 'disabled' : ''}>← Previous</button>
                    <button onclick="QuizManager.next()" ${AppState.currentQuizIndex === AppState.filteredQuestions.length - 1 ? 'disabled' : ''}>Next →</button>
                    <button onclick="QuizManager.finish()" class="finish-btn">Finish Quiz</button>
                </div>
            </div>
        `;
        
        content.innerHTML = html;
    },
    
    selectAnswer(index) {
        AppState.quizAnswers[AppState.currentQuizIndex] = index;
    },
    
    next() {
        if (AppState.currentQuizIndex < AppState.filteredQuestions.length - 1) {
            AppState.currentQuizIndex++;
            this.renderQuestion();
        }
    },
    
    prev() {
        if (AppState.currentQuizIndex > 0) {
            AppState.currentQuizIndex--;
            this.renderQuestion();
        }
    },
    
    finish() {
        const correct = AppState.quizAnswers.filter((ans, idx) => 
            ans === AppState.filteredQuestions[idx].correct
        ).length;
        
        const score = Math.round((correct / AppState.filteredQuestions.length) * 100);
        const duration = Math.round((Date.now() - AppState.quizStartTime) / 1000);
        
        AppState.progress.quizScores.push(score);
        AppState.progress.totalQuizTime += duration;
        AppState.save();
        
        const content = document.getElementById('quiz-content');
        content.innerHTML = `
            <div class="quiz-results">
                <h2>Quiz Complete! 🎉</h2>
                <div class="result-card">
                    <p>Score: <span class="score">${score}%</span></p>
                    <p>Correct: ${correct} / ${AppState.filteredQuestions.length}</p>
                    <p>Time: ${duration}s</p>
                </div>
                <button onclick="QuizManager.init()">Take Another Quiz</button>
            </div>
        `;
    }
};

// ============================================
// TIMER MODULE (POMODORO)
// ============================================

const TimerManager = {
    init() {
        const content = document.getElementById('timer-content');
        if (!content) return;
        
        content.innerHTML = `
            <div class="timer-container">
                <h2>Study Timer (Pomodoro)</h2>
                <div class="timer-display" id="timer-display">25:00</div>
                <div class="timer-options">
                    <button onclick="TimerManager.setDuration(1500)">25 min</button>
                    <button onclick="TimerManager.setDuration(900)">15 min</button>
                    <button onclick="TimerManager.setDuration(2700)">45 min</button>
                </div>
                <div class="timer-controls">
                    <button onclick="TimerManager.start()" class="start-btn">Start</button>
                    <button onclick="TimerManager.pause()" class="pause-btn">Pause</button>
                    <button onclick="TimerManager.reset()" class="reset-btn">Reset</button>
                </div>
            </div>
        `;
    },
    
    setDuration(seconds) {
        AppState.quizTimer = seconds;
        this.updateDisplay();
    },
    
    updateDisplay() {
        const display = document.getElementById('timer-display');
        if (display) {
            const mins = Math.floor(AppState.quizTimer / 60);
            const secs = AppState.quizTimer % 60;
            display.textContent = `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
        }
    },
    
    start() {
        if (AppState.timerInterval) return;
        
        AppState.timerInterval = setInterval(() => {
            if (AppState.quizTimer > 0) {
                AppState.quizTimer--;
                this.updateDisplay();
            } else {
                this.pause();
                alert('Time\'s up! ⏰');
            }
        }, 1000);
    },
    
    pause() {
        if (AppState.timerInterval) {
            clearInterval(AppState.timerInterval);
            AppState.timerInterval = null;
        }
    },
    
    reset() {
        this.pause();
        AppState.quizTimer = 1500;
        this.updateDisplay();
    }
};

// ============================================
// EXAM MODULE
// ============================================

const ExamManager = {
    init() {
        const content = document.getElementById('exam-content');
        if (!content) return;
        
        content.innerHTML = `
            <div class="exam-intro">
                <h2>Practice Final Exam</h2>
                <p>25 random questions from all topics and difficulties</p>
                <button onclick="ExamManager.start()" class="start-btn">Start Exam</button>
            </div>
        `;
    },
    
    start() {
        AppState.examAnswers = [];
        const pool = physicsData.quiz.slice().sort(() => Math.random() - 0.5);
        AppState.examQuestions = pool.slice(0, 25);
        AppState.currentQuizIndex = 0;
        AppState.quizStartTime = Date.now();
        this.renderQuestion(0);
    },
    
    renderQuestion(index) {
        const content = document.getElementById('exam-content');
        if (!content) return;
        
        if (index >= AppState.examQuestions.length) {
            this.finish();
            return;
        }
        
        const q = AppState.examQuestions[index];
        const html = `
            <div class="exam-question-container">
                <div class="exam-meta">Question ${index + 1} / 25</div>
                <h3>${q.question}</h3>
                <div class="exam-options">
                    ${q.options.map((opt, idx) => `
                        <label class="exam-option">
                            <input type="radio" name="exam-answer" value="${idx}" onchange="ExamManager.selectAnswer(${idx})">
                            ${opt}
                        </label>
                    `).join('')}
                </div>
                <div class="exam-nav">
                    <button onclick="ExamManager.renderQuestion(${index - 1})" ${index === 0 ? 'disabled' : ''}>← Back</button>
                    <button onclick="ExamManager.renderQuestion(${index + 1})" ${index === 24 ? 'disabled' : ''}>Next →</button>
                    <button onclick="ExamManager.finish()" class="submit-btn">Submit Exam</button>
                </div>
            </div>
        `;
        
        content.innerHTML = html;
    },
    
    selectAnswer(index) {
        AppState.examAnswers[AppState.currentQuizIndex] = index;
    },
    
    finish() {
        const correct = AppState.examAnswers.filter((ans, idx) => 
            ans === AppState.examQuestions[idx].correct
        ).length;
        
        const score = Math.round((correct / 25) * 100);
        const duration = Math.round((Date.now() - AppState.quizStartTime) / 1000);
        
        AppState.progress.examScores.push(score);
        AppState.progress.totalQuizTime += duration;
        AppState.save();
        
        const content = document.getElementById('exam-content');
        content.innerHTML = `
            <div class="exam-results">
                <h2>Exam Results 📋</h2>
                <div class="results-card">
                    <p>Final Score: <span class="big-score">${score}%</span></p>
                    <p>Correct: ${correct} / 25</p>
                    <p>Time: ${Math.round(duration / 60)} minutes</p>
                    <p style="color: ${score >= 80 ? 'var(--ok)' : score >= 60 ? 'var(--warn)' : 'var(--danger)'}; font-weight: bold;">
                        ${score >= 90 ? '🌟 Outstanding!' : score >= 80 ? '✅ Great!' : score >= 70 ? '👍 Good' : 'Keep practicing!'}
                    </p>
                </div>
                <button onclick="ExamManager.init()">Take Another Exam</button>
            </div>
        `;
    }
};

// ============================================
// INITIALIZATION
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    AppState.load();
    UI.updateDarkModeButton();
    UI.showSection('notes');
    
    // Event listeners
    document.getElementById('dark-mode-toggle')?.addEventListener('click', () => AppState.toggleDarkMode());
});

// Global function for nav links
function showSection(sectionId) {
    UI.showSection(sectionId);
}

// Maintain backward compatibility with existing HTML onclick handlers
function toggleDarkMode() {
    AppState.toggleDarkMode();
}



