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
                        'progress': () => this.updateProgressDisplay(),
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
        const p = AppState.progress;
        const quizAvg = p.quizScores.length ? (p.quizScores.reduce((a, b) => a + b) / p.quizScores.length).toFixed(1) : '0';
        const content = document.getElementById('dashboard-content');
        if (!content) return;
        
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
                <div class="achievements-list" id="dashboard-achievements-list"></div>
                <button onclick="AppState.progress.quizScores = []; AppState.progress.cardsStudied = 0; AppState.progress.problemsSolved = 0; AppState.save(); UI.refreshProgressViews();" class="reset-btn">
                    Reset Progress
                </button>
            </div>
        `;
        
        this.updateAchievements('dashboard-achievements-list');
    },
    
    updateProgressDisplay() {
        const content = document.getElementById('progress-content');
        if (!content) return;

        const p = AppState.progress;
        const quizAvg = p.quizScores.length ? (p.quizScores.reduce((a, b) => a + b) / p.quizScores.length).toFixed(1) : '0';
        const notesRatio = Math.min(p.notesReviewed, 20);
        const cardsRatio = Math.min(p.cardsStudied, 50);
        const quizRatio = Math.min(p.quizScores.length, 10);
        const problemsRatio = Math.min(p.problemsSolved, 10);
        const streakRatio = Math.min(p.streak, 7);
        const focusRatio = Math.min(p.todayFocus, 100);
        const lastStudy = p.lastStudyDate ? new Date(p.lastStudyDate).toLocaleDateString() : 'Not yet recorded';

        content.innerHTML = `
            <div class="progress-hero">
                <div>
                    <h3>Study Momentum</h3>
                    <p>Your current pace, streak, and recent activity at a glance.</p>
                </div>
                <div class="progress-hero-stats">
                    <div><strong>${p.streak}</strong><span>day streak</span></div>
                    <div><strong>${Math.round(p.totalQuizTime / 60)}m</strong><span>study time</span></div>
                    <div><strong>${quizAvg}%</strong><span>quiz average</span></div>
                </div>
            </div>
            <div class="progress-tracks">
                <div class="progress-track">
                    <div class="progress-track-head">
                        <h4>Notes reviewed</h4>
                        <span>${p.notesReviewed}/20</span>
                    </div>
                    <div class="progress-bar"><div class="progress-fill" style="width: ${notesRatio * 5}%"></div></div>
                </div>
                <div class="progress-track">
                    <div class="progress-track-head">
                        <h4>Flashcards studied</h4>
                        <span>${p.cardsStudied}/50</span>
                    </div>
                    <div class="progress-bar"><div class="progress-fill" style="width: ${cardsRatio * 2}%"></div></div>
                </div>
                <div class="progress-track">
                    <div class="progress-track-head">
                        <h4>Quizzes completed</h4>
                        <span>${p.quizScores.length}/10</span>
                    </div>
                    <div class="progress-bar"><div class="progress-fill" style="width: ${quizRatio * 10}%"></div></div>
                </div>
                <div class="progress-track">
                    <div class="progress-track-head">
                        <h4>Problems solved</h4>
                        <span>${p.problemsSolved}/10</span>
                    </div>
                    <div class="progress-bar"><div class="progress-fill" style="width: ${problemsRatio * 10}%"></div></div>
                </div>
                <div class="progress-track">
                    <div class="progress-track-head">
                        <h4>Study streak</h4>
                        <span>${p.streak}/7</span>
                    </div>
                    <div class="progress-bar"><div class="progress-fill" style="width: ${streakRatio * 14.2857}%"></div></div>
                </div>
                <div class="progress-track">
                    <div class="progress-track-head">
                        <h4>Today focus</h4>
                        <span>${p.todayFocus}/100</span>
                    </div>
                    <div class="progress-bar"><div class="progress-fill" style="width: ${focusRatio}%"></div></div>
                </div>
            </div>
            <div class="progress-details">
                <div class="progress-card progress-note">
                    <h3>Recent activity</h3>
                    <p>Last study session: <strong>${lastStudy}</strong></p>
                    <p>Completed exams: <strong>${p.examScores.length}</strong></p>
                    <p>Total quiz time: <strong>${Math.round(p.totalQuizTime / 60)} minutes</strong></p>
                </div>
                <div class="progress-card">
                    <h3>Next milestones</h3>
                    <ul class="progress-milestones">
                        <li>${p.notesReviewed < 20 ? `${20 - p.notesReviewed} more notes reviews` : 'Notes milestone complete'}</li>
                        <li>${p.cardsStudied < 50 ? `${50 - p.cardsStudied} more flashcards` : 'Flashcard milestone complete'}</li>
                        <li>${p.quizScores.length < 5 ? `${5 - p.quizScores.length} more quizzes for your first badge` : 'Quiz badge unlocked'}</li>
                        <li>${p.streak < 7 ? `${7 - p.streak} more day(s) for a week streak` : 'Week streak unlocked'}</li>
                    </ul>
                </div>
                <div class="progress-card">
                    <h3>Achievements 🏆</h3>
                    <div class="achievements-list" id="progress-achievements-list"></div>
                    <button onclick="AppState.progress.quizScores = []; AppState.progress.cardsStudied = 0; AppState.progress.problemsSolved = 0; AppState.progress.notesReviewed = 0; AppState.progress.totalQuizTime = 0; AppState.progress.todayFocus = 0; AppState.progress.streak = 0; AppState.save(); UI.refreshProgressViews();" class="reset-btn">
                        Reset Progress
                    </button>
                </div>
            </div>
        `;

        this.updateAchievements('progress-achievements-list');
    },

    refreshProgressViews() {
        this.updateDashboard();
        this.updateProgressDisplay();
    },
    
    updateAchievements(listId = 'dashboard-achievements-list') {
        const p = AppState.progress;
        const list = document.getElementById(listId);
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
    },

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
/*
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
*/

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
        container.classList.remove('flipped');
        
        const card = physicsData.flashcards[AppState.currentFlashcardIndex];
        if (!card) return;
        
        container.innerHTML = `
            <div class="flashcard-inner">
                <div class="flashcard-front">
                    <p>${card.front}</p>
                </div>
                <div class="flashcard-back">
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
        const container = document.getElementById('flashcard-container');
        if (container) {
            container.classList.toggle('flipped');
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
    // Initialize rocket launch simulation
    initRocketLaunchSim();
    
    AppState.load();
    UI.updateDarkModeButton();
    UI.showSection('notes');
    
    // Event listeners
    document.getElementById('dark-mode-toggle')?.addEventListener('click', () => AppState.toggleDarkMode());
});

// ============================================
// ROCKET LAUNCH SIMULATION
// ============================================

const RocketLaunchSim = {
    time: 0,
    countdown: 14,
    altitude: 0,
    velocity: 0,
    acceleration: 0,
    thrust: 0,
    mass: 18000,
    maxThrust: 1800000,
    launchAt: 14,
    moonAt: 42,
    stage: 1,

    calculateThrust() {
        if (this.time < this.launchAt) {
            return 0;
        }

        const launchElapsed = this.time - this.launchAt;

        if (launchElapsed < 2.1) {
            const ramp = Math.min(1, launchElapsed / 2.1);
            return this.maxThrust * (0.24 + 0.76 * ramp);
        }

        const altitudeFalloff = Math.max(0.55, 1 - this.altitude / 14000);
        return this.maxThrust * altitudeFalloff;
    },

    update(deltaTime) {
        const dt = deltaTime / 1000;
        this.thrust = this.calculateThrust();
        this.countdown = Math.max(0, this.launchAt - this.time);

        if (this.time < this.launchAt) {
            this.stage = 1;
        } else if (this.time < this.launchAt + 8) {
            this.stage = 2;
        } else if (this.time < this.moonAt) {
            this.stage = 3;
        } else {
            this.stage = 4;
        }

        if (this.time < this.launchAt) {
            this.altitude = 0;
            this.velocity = 0;
            this.acceleration = 0;
        } else {
            const gravity = 9.81;
            const drag = 0.00002 * this.velocity * this.velocity;
            this.acceleration = (this.thrust / this.mass) - gravity - drag;
            this.velocity = Math.max(0, this.velocity + this.acceleration * dt);
            this.altitude += this.velocity * dt;
        }

        this.time += dt;
    }
};

function initRocketLaunchSim() {
    const canvas = document.getElementById('railgun-canvas');
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    const dpr = window.devicePixelRatio || 1;
    
    // Set canvas size
    function resizeCanvas() {
        const rect = canvas.getBoundingClientRect();
        canvas.width = rect.width * dpr;
        canvas.height = rect.height * dpr;
        ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    
    const intro = document.getElementById('railgun-intro');
    const navbar = document.querySelector('nav.navbar');
    const main = document.querySelector('main');
    
    let lastTime = Date.now();

    function drawStars(w, h) {
        const stars = [
            [0.12, 0.18, 1.5], [0.22, 0.1, 1], [0.33, 0.26, 1.2], [0.5, 0.16, 1],
            [0.72, 0.12, 1.4], [0.82, 0.22, 1], [0.91, 0.18, 1.2], [0.65, 0.32, 1]
        ];

        ctx.fillStyle = 'rgba(255,255,255,0.9)';
        for (const [sx, sy, size] of stars) {
            const twinkle = 0.65 + Math.sin(RocketLaunchSim.time * 3 + sx * 10) * 0.25;
            ctx.globalAlpha = twinkle;
            ctx.beginPath();
            ctx.arc(w * sx, h * sy, size, 0, Math.PI * 2);
            ctx.fill();
        }
        ctx.globalAlpha = 1;
    }

    function drawRocketScene() {
        const w = canvas.width / dpr;
        const h = canvas.height / dpr;
        const skyGlow = Math.min(1, RocketLaunchSim.time / 7.5);
        const moonProgress = RocketLaunchSim.time <= RocketLaunchSim.launchAt
            ? 0
            : Math.min(1, (RocketLaunchSim.time - RocketLaunchSim.launchAt) / (RocketLaunchSim.moonAt - RocketLaunchSim.launchAt));
        const moonX = w * 0.78;
        const moonY = h * 0.18;
        const moonRadius = Math.min(w, h) * 0.08;

        ctx.fillStyle = '#08111d';
        ctx.fillRect(0, 0, w, h);

        const gradient = ctx.createLinearGradient(0, 0, 0, h);
        gradient.addColorStop(0, 'rgba(15, 34, 60, 0.9)');
        gradient.addColorStop(0.55, 'rgba(11, 22, 37, 0.95)');
        gradient.addColorStop(1, 'rgba(4, 8, 13, 1)');
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, w, h);

        ctx.fillStyle = `rgba(105, 172, 255, ${0.08 + skyGlow * 0.08})`;
        ctx.fillRect(0, 0, w, h * 0.5);

        drawStars(w, h);

        // Moon target and trajectory guidance
        const moonGlow = ctx.createRadialGradient(moonX, moonY, moonRadius * 0.2, moonX, moonY, moonRadius * 1.8);
        moonGlow.addColorStop(0, 'rgba(245, 241, 214, 0.95)');
        moonGlow.addColorStop(0.45, 'rgba(214, 220, 228, 0.5)');
        moonGlow.addColorStop(1, 'rgba(214, 220, 228, 0)');
        ctx.fillStyle = moonGlow;
        ctx.beginPath();
        ctx.arc(moonX, moonY, moonRadius * 1.35, 0, Math.PI * 2);
        ctx.fill();

        ctx.fillStyle = '#dfe4e8';
        ctx.beginPath();
        ctx.arc(moonX, moonY, moonRadius, 0, Math.PI * 2);
        ctx.fill();

        ctx.fillStyle = 'rgba(170, 176, 183, 0.42)';
        for (let i = 0; i < 6; i++) {
            const craterAngle = i * 1.12;
            const craterX = moonX + Math.cos(craterAngle) * moonRadius * 0.32;
            const craterY = moonY + Math.sin(craterAngle * 1.3) * moonRadius * 0.26;
            ctx.beginPath();
            ctx.arc(craterX, craterY, moonRadius * (0.08 + i * 0.008), 0, Math.PI * 2);
            ctx.fill();
        }

        const horizonY = h * 0.8;
        const padX = w * 0.5;
        const padY = h * 0.8;
        const launchRise = RocketLaunchSim.time < RocketLaunchSim.launchAt
            ? 0
            : Math.min(h * 0.72, RocketLaunchSim.altitude * 0.11);
        const rocketBaseY = padY + 12 - launchRise;
        const rocketY = rocketBaseY - 250;

        let rocketScreenX = padX;
        let rocketScreenY = rocketBaseY;
        let rocketTilt = 0;

        if (RocketLaunchSim.time >= RocketLaunchSim.moonAt) {
            const cruiseProgress = Math.min(1, (RocketLaunchSim.time - RocketLaunchSim.moonAt) / 7.5);
            rocketScreenX = padX + (moonX - padX) * 0.55 + cruiseProgress * (moonX - padX) * 0.2;
            rocketScreenY = h * 0.32 + (moonY - h * 0.32) * 0.22;
            rocketTilt = -0.18;
        } else if (RocketLaunchSim.time >= RocketLaunchSim.launchAt) {
            rocketScreenX = padX + Math.sin((RocketLaunchSim.time - RocketLaunchSim.launchAt) * 0.75) * 16;
            rocketScreenY = rocketBaseY;
            rocketTilt = -Math.min(0.22, (RocketLaunchSim.time - RocketLaunchSim.launchAt) * 0.02);
        }

        const rocketWidth = 64;
        const bodyHeight = 176 + 20;
        const capsuleHeight = 40;

        // Distant haze and ground
        const horizon = ctx.createLinearGradient(0, horizonY - 80, 0, h);
        horizon.addColorStop(0, 'rgba(65, 97, 135, 0)');
        horizon.addColorStop(0.4, 'rgba(65, 97, 135, 0.18)');
        horizon.addColorStop(1, 'rgba(7, 11, 19, 1)');
        ctx.fillStyle = horizon;
        ctx.fillRect(0, horizonY - 60, w, h - horizonY + 60);

        // Ground pad
        ctx.fillStyle = 'rgba(8, 12, 20, 0.9)';
        ctx.fillRect(0, horizonY, w, h - horizonY);
        ctx.strokeStyle = 'rgba(160, 194, 255, 0.18)';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(0, horizonY + 1);
        ctx.lineTo(w, horizonY + 1);
        ctx.stroke();

        // Launch tower
        const towerHeight = 310;
        const towerX = padX - 130;
        const towerTop = padY - towerHeight;
        ctx.strokeStyle = 'rgba(159, 187, 219, 0.55)';
        ctx.lineWidth = 4;
        ctx.beginPath();
        ctx.moveTo(towerX, padY);
        ctx.lineTo(towerX, towerTop);
        ctx.moveTo(towerX + 34, padY);
        ctx.lineTo(towerX + 34, towerTop + 28);
        ctx.stroke();

        ctx.strokeStyle = 'rgba(159, 187, 219, 0.24)';
        ctx.lineWidth = 2;
        for (let i = 0; i < 6; i++) {
            const y = padY - i * 39;
            ctx.beginPath();
            ctx.moveTo(towerX, y);
            ctx.lineTo(towerX + 34, y - 18);
            ctx.stroke();
        }

        // Service arm and pad lighting
        const armRetract = RocketLaunchSim.time < RocketLaunchSim.launchAt - 2
            ? 0
            : Math.min(1, (RocketLaunchSim.time - (RocketLaunchSim.launchAt - 2)) / 1.8);

        ctx.strokeStyle = 'rgba(164, 196, 225, 0.28)';
        ctx.lineWidth = 5;
        ctx.beginPath();
        ctx.moveTo(towerX + 34, towerTop + 68);
        ctx.lineTo(padX - 54 + armRetract * 70, towerTop + 92 - armRetract * 30);
        ctx.stroke();

        const padGlow = ctx.createRadialGradient(padX, padY + 18, 10, padX, padY + 18, 260);
        padGlow.addColorStop(0, 'rgba(255, 183, 92, 0.44)');
        padGlow.addColorStop(0.35, 'rgba(255, 114, 46, 0.2)');
        padGlow.addColorStop(1, 'rgba(255, 114, 46, 0)');
        ctx.fillStyle = padGlow;
        ctx.beginPath();
        ctx.arc(padX, padY + 18, 260, 0, Math.PI * 2);
        ctx.fill();

        if (RocketLaunchSim.time >= RocketLaunchSim.launchAt) {
            ctx.setLineDash([12, 10]);
            ctx.strokeStyle = 'rgba(159, 187, 219, 0.18)';
            ctx.lineWidth = 2;
            ctx.beginPath();
            ctx.moveTo(padX, padY + 12);
            ctx.quadraticCurveTo(w * 0.62, h * 0.48, moonX - moonRadius * 0.95, moonY + moonRadius * 0.2);
            ctx.stroke();
            ctx.setLineDash([]);
        }

        // Rocket exhaust and smoke
        const launchProgress = Math.max(0, RocketLaunchSim.time - RocketLaunchSim.launchAt);
        const padVibration = RocketLaunchSim.time < RocketLaunchSim.launchAt
            ? 0.5 + Math.sin(RocketLaunchSim.time * 11) * 0.12
            : 1;
        const exhaustStrength = RocketLaunchSim.time < RocketLaunchSim.launchAt
            ? 0.08 + RocketLaunchSim.time * 0.08
            : Math.min(1, 0.55 + launchProgress * 0.3);
        const flameLength = RocketLaunchSim.time < RocketLaunchSim.launchAt
            ? 28 + RocketLaunchSim.time * 2.2
            : 150 + Math.min(260, RocketLaunchSim.velocity * 0.62);
        const plumeWidth = RocketLaunchSim.time < RocketLaunchSim.launchAt ? 30 : 38;

        ctx.save();
        ctx.translate(padX, rocketBaseY + 8);
        ctx.globalAlpha = 0.95;
        const exhaust = ctx.createLinearGradient(0, 8, 0, flameLength);
        exhaust.addColorStop(0, `rgba(255, 250, 214, ${0.98 * exhaustStrength})`);
        exhaust.addColorStop(0.16, `rgba(255, 230, 150, ${0.9 * exhaustStrength})`);
        exhaust.addColorStop(0.42, `rgba(255, 156, 72, ${0.82 * exhaustStrength})`);
        exhaust.addColorStop(0.7, `rgba(255, 106, 38, ${0.45 * exhaustStrength})`);
        exhaust.addColorStop(1, 'rgba(255, 85, 34, 0)');
        ctx.fillStyle = exhaust;
        ctx.beginPath();
        ctx.moveTo(-plumeWidth, 12);
        ctx.lineTo(plumeWidth, 12);
        ctx.lineTo(0, 12 + flameLength);
        ctx.closePath();
        ctx.fill();
        ctx.restore();

        if (RocketLaunchSim.time < RocketLaunchSim.launchAt + 2.2) {
            for (let i = 0; i < 12; i++) {
                const drift = RocketLaunchSim.time * 28 + i * 22;
                const smokeX = padX + Math.sin(i * 1.7) * 26;
                const smokeY = padY + 10 + drift * 0.18 - launchProgress * 28;
                const smokeSize = 10 + i * 1.4 + launchProgress * 2.4;
                ctx.fillStyle = `rgba(182, 196, 210, ${Math.max(0, 0.18 - i * 0.012)})`;
                ctx.beginPath();
                ctx.arc(smokeX, smokeY, smokeSize, 0, Math.PI * 2);
                ctx.fill();
            }
        }

        // Artemis II stack: Orion crew module on top of the SLS core and boosters
        const bodyY = rocketY + 26;
        const coreHeight = 176;
        const coreWidth = 64;
        const boosterHeight = 214;
        const boosterWidth = 22;
        const boosterGap = 18;
        const capsuleY = rocketY + 6;

        ctx.save();
        ctx.translate(rocketScreenX, rocketScreenY);
        ctx.rotate(rocketTilt);
        ctx.shadowColor = 'rgba(255, 255, 255, 0.28)';
        ctx.shadowBlur = 28;

        const coreGradient = ctx.createLinearGradient(0, 0, coreWidth, 0);
        coreGradient.addColorStop(0, '#fbaf4a');
        coreGradient.addColorStop(0.5, '#f0962f');
        coreGradient.addColorStop(1, '#c66012');

        const boosterGradient = ctx.createLinearGradient(0, 0, boosterWidth, 0);
        boosterGradient.addColorStop(0, '#eef5ff');
        boosterGradient.addColorStop(0.55, '#d9e7f6');
        boosterGradient.addColorStop(1, '#b0bfd0');

        // Twin solid boosters
        ctx.fillStyle = boosterGradient;
        ctx.beginPath();
        ctx.roundRect(-coreWidth / 2 - boosterGap - boosterWidth, 8, boosterWidth, boosterHeight, 10);
        ctx.roundRect(coreWidth / 2 + boosterGap, 8, boosterWidth, boosterHeight, 10);
        ctx.fill();

        // Core stage
        ctx.fillStyle = coreGradient;
        ctx.beginPath();
        ctx.roundRect(-coreWidth / 2, 0, coreWidth, coreHeight + 20, 18);
        ctx.fill();

        // Upper adapter / interstage
        ctx.fillStyle = 'rgba(245, 245, 245, 0.95)';
        ctx.beginPath();
        ctx.roundRect(-34, -12, 68, 34, 14);
        ctx.fill();

        // Orion service module
        ctx.fillStyle = '#e7edf5';
        ctx.beginPath();
        ctx.roundRect(-28, -12, 56, 40, 16);
        ctx.fill();

        // Orion crew module cap
        ctx.beginPath();
        ctx.moveTo(0, -26);
        ctx.lineTo(28, 8);
        ctx.lineTo(-28, 8);
        ctx.closePath();
        ctx.fillStyle = '#f6fbff';
        ctx.fill();

        // Orion windows
        ctx.fillStyle = 'rgba(20, 48, 84, 0.96)';
        ctx.beginPath();
        ctx.arc(0, 10, 7, 0, Math.PI * 2);
        ctx.fill();
        ctx.fillStyle = 'rgba(80, 146, 255, 0.95)';
        ctx.fillRect(-28, 44, 56, 8);

        // Booster smoke collars
        ctx.fillStyle = 'rgba(219, 232, 246, 0.92)';
        ctx.beginPath();
        ctx.roundRect(-coreWidth / 2 - boosterGap - boosterWidth, 0, boosterWidth, 26, 10);
        ctx.roundRect(coreWidth / 2 + boosterGap, 0, boosterWidth, 26, 10);
        ctx.fill();

        // Engine nozzle
        ctx.fillStyle = '#6f7d8f';
        ctx.beginPath();
        ctx.moveTo(-18, coreHeight + 22);
        ctx.lineTo(18, coreHeight + 22);
        ctx.lineTo(10, coreHeight + 52);
        ctx.lineTo(-10, coreHeight + 52);
        ctx.closePath();
        ctx.fill();

        // Small lower fins / structural detail
        ctx.fillStyle = '#9aaabc';
        ctx.beginPath();
        ctx.moveTo(-20, coreHeight + 2);
        ctx.lineTo(-44, coreHeight + 34);
        ctx.lineTo(-10, coreHeight + 18);
        ctx.closePath();
        ctx.fill();

        ctx.beginPath();
        ctx.moveTo(20, coreHeight + 2);
        ctx.lineTo(44, coreHeight + 34);
        ctx.lineTo(10, coreHeight + 18);
        ctx.closePath();
        ctx.fill();

        ctx.restore();

        // Motion trail
        if (RocketLaunchSim.time >= RocketLaunchSim.launchAt) {
            ctx.fillStyle = 'rgba(255, 191, 117, 0.18)';
            ctx.beginPath();
            ctx.arc(rocketScreenX, rocketScreenY + 18, 170 + Math.min(160, RocketLaunchSim.velocity * 0.18), 0, Math.PI * 2);
            ctx.fill();

            ctx.strokeStyle = 'rgba(255, 191, 117, 0.4)';
            ctx.lineWidth = 3;
            ctx.beginPath();
            ctx.moveTo(padX, padY + 12);
            ctx.lineTo(rocketScreenX, rocketScreenY + 26);
            ctx.stroke();
        }

        // Flame particles
        if (RocketLaunchSim.time >= RocketLaunchSim.launchAt - 0.1) {
            const particleCount = RocketLaunchSim.time < RocketLaunchSim.launchAt ? 8 : 18;
            for (let i = 0; i < particleCount; i++) {
                const spread = (i / particleCount - 0.5) * 36;
                const particleY = (RocketLaunchSim.time < RocketLaunchSim.launchAt ? padY + 12 : rocketScreenY + 54) + Math.sin(RocketLaunchSim.time * 20 + i) * 8;
                const particleSize = 2 + (i % 3);
                ctx.fillStyle = `rgba(255, ${180 - i * 6}, ${90 - i * 3}, ${0.75 - i * 0.02})`;
                ctx.beginPath();
                ctx.arc((RocketLaunchSim.time < RocketLaunchSim.launchAt ? padX : rocketScreenX) + spread, particleY + i * 5, particleSize, 0, Math.PI * 2);
                ctx.fill();
            }
        }

        ctx.shadowColor = 'transparent';
    }
    
    function updateHUD() {
        const chargeDisplay = document.getElementById('charge-display');
        const statusDisplay = document.getElementById('status-display');
        const velocityDisplay = document.getElementById('velocity-display');
        const fieldDisplay = document.getElementById('field-display');
        
        if (chargeDisplay) {
            chargeDisplay.textContent = RocketLaunchSim.time < RocketLaunchSim.launchAt
                ? `T-${Math.ceil(RocketLaunchSim.countdown)}`
                : `T+${Math.floor(RocketLaunchSim.time - RocketLaunchSim.launchAt)}`;
        }
        
        if (velocityDisplay) {
            velocityDisplay.textContent = `${Math.floor(RocketLaunchSim.altitude).toLocaleString()} m`;
        }
        
        if (fieldDisplay) {
            fieldDisplay.textContent = `${Math.round(RocketLaunchSim.thrust / 1000).toLocaleString()} kN`;
        }

        const speedDisplay = document.getElementById('speed-display');
        const apogeeDisplay = document.getElementById('apogee-display');
        const gforceDisplay = document.getElementById('gforce-display');
        const fuelDisplay = document.getElementById('fuel-display');
        const stage1 = document.getElementById('stage-1');
        const stage2 = document.getElementById('stage-2');
        const stage3 = document.getElementById('stage-3');

        if (speedDisplay) {
            speedDisplay.textContent = `${Math.floor(RocketLaunchSim.velocity).toLocaleString()} m/s`;
        }

        if (apogeeDisplay) {
            apogeeDisplay.textContent = `${(RocketLaunchSim.altitude / 1000).toFixed(1)} km`;
        }

        if (gforceDisplay) {
            const gForce = 1 + Math.max(0, RocketLaunchSim.acceleration) / 9.81;
            gforceDisplay.textContent = `${gForce.toFixed(1)} G`;
        }

        if (fuelDisplay) {
            const fuelElapsed = Math.max(0, RocketLaunchSim.time - RocketLaunchSim.launchAt);
            const fuelRemaining = RocketLaunchSim.time < RocketLaunchSim.launchAt
                ? 100
                : Math.max(0, 100 - fuelElapsed * 4.8);
            fuelDisplay.textContent = `${Math.round(fuelRemaining)}%`;
        }

        if (stage1 && stage2 && stage3) {
            stage1.classList.toggle('active', RocketLaunchSim.stage === 1);
            stage2.classList.toggle('active', RocketLaunchSim.stage === 2);
            stage3.classList.toggle('active', RocketLaunchSim.stage === 3);
        }
        
        if (statusDisplay) {
            if (RocketLaunchSim.time < RocketLaunchSim.launchAt - 6) {
                statusDisplay.textContent = 'LAUNCH HOLD';
            } else if (RocketLaunchSim.time < RocketLaunchSim.launchAt - 1.5) {
                statusDisplay.textContent = 'FINAL COUNTDOWN';
            } else if (RocketLaunchSim.time < RocketLaunchSim.launchAt) {
                statusDisplay.textContent = 'FUELLING SYSTEMS';
            } else if (RocketLaunchSim.time < RocketLaunchSim.launchAt + 2.5) {
                statusDisplay.textContent = 'IGNITION SEQUENCE';
            } else if (RocketLaunchSim.time < RocketLaunchSim.launchAt + 8) {
                statusDisplay.textContent = 'LIFTOFF';
            } else {
                statusDisplay.textContent = 'TRANSLUNAR INJECTION';
            }
        }
    }
    
    function animate() {
        const now = Date.now();
        const deltaTime = now - lastTime;
        lastTime = now;
        
        RocketLaunchSim.update(deltaTime);
        drawRocketScene();
        updateHUD();
        
        requestAnimationFrame(animate);
    }
    
    animate();
}

function skipLaunchIntro() {
    const intro = document.getElementById('railgun-intro');
    const navbar = document.querySelector('nav.navbar');
    const main = document.querySelector('main');

    if (intro) {
        intro.style.display = 'none';
        intro.classList.remove('active');
        intro.classList.add('hidden');
    }

    if (navbar) navbar.style.display = '';
    if (main) main.style.display = '';
}

// Global function for nav links
function showSection(sectionId) {
    UI.showSection(sectionId);
}

// Maintain backward compatibility with existing HTML onclick handlers
function toggleDarkMode() {
    AppState.toggleDarkMode();
}

window.AppState = AppState;
window.UI = UI;
window.ContentManager = ContentManager;
window.Flashcard = Flashcard;
window.QuizManager = QuizManager;
window.TimerManager = TimerManager;
window.ExamManager = ExamManager;
window.showSection = showSection;
window.toggleDarkMode = toggleDarkMode;
window.skipLaunchIntro = skipLaunchIntro;



