/* ============================================================
   Physics 1 Study Guide — JavaScript
   ============================================================ */

// ── Accordion (topic cards) ──────────────────────────────────
function toggleTopic(bodyId) {
  const body = document.getElementById(bodyId);
  if (!body) return;

  const card   = body.closest('.topic-card');
  const icon   = card ? card.querySelector('.toggle-icon') : null;
  const isOpen = body.classList.contains('open');

  // Close all open bodies
  document.querySelectorAll('.topic-body.open').forEach(el => {
    el.classList.remove('open');
    const ic = el.closest('.topic-card')?.querySelector('.toggle-icon');
    if (ic) ic.style.transform = 'rotate(0deg)';
  });

  // Open clicked one (unless it was already open)
  if (!isOpen) {
    body.classList.add('open');
    if (icon) icon.style.transform = 'rotate(180deg)';
  }
}

// Open the first topic by default
document.addEventListener('DOMContentLoaded', () => {
  const first = document.querySelector('.topic-body');
  if (first) {
    first.classList.add('open');
    const icon = first.closest('.topic-card')?.querySelector('.toggle-icon');
    if (icon) icon.style.transform = 'rotate(180deg)';
  }
  initQuiz();
});


// ── Quiz ─────────────────────────────────────────────────────
const questions = [
  {
    q: 'A car accelerates from rest at 3 m/s² for 4 seconds. What is its final velocity?',
    options: ['7 m/s', '12 m/s', '16 m/s', '10 m/s'],
    answer: 1,
    explanation: 'v = v₀ + at = 0 + 3 × 4 = 12 m/s'
  },
  {
    q: 'Which of Newton\'s Laws states that F = ma?',
    options: ['First Law', 'Second Law', 'Third Law', 'Law of Gravitation'],
    answer: 1,
    explanation: 'Newton\'s Second Law: the net force on an object equals its mass times acceleration.'
  },
  {
    q: 'A 5 kg object is lifted 3 m above the ground. What is its gravitational PE? (g = 10 m/s²)',
    options: ['15 J', '150 J', '50 J', '300 J'],
    answer: 1,
    explanation: 'PE = mgh = 5 × 10 × 3 = 150 J'
  },
  {
    q: 'What is the momentum of a 2 kg ball moving at 6 m/s?',
    options: ['3 kg·m/s', '4 kg·m/s', '12 kg·m/s', '8 kg·m/s'],
    answer: 2,
    explanation: 'p = mv = 2 × 6 = 12 kg·m/s'
  },
  {
    q: 'In a perfectly inelastic collision, which quantity is conserved?',
    options: ['Kinetic Energy only', 'Both KE and Momentum', 'Momentum only', 'Neither'],
    answer: 2,
    explanation: 'In perfectly inelastic collisions, momentum is conserved but kinetic energy is not (some is converted to heat/deformation).'
  },
  {
    q: 'A wave has a frequency of 5 Hz and a wavelength of 4 m. What is its speed?',
    options: ['1.25 m/s', '9 m/s', '20 m/s', '0.8 m/s'],
    answer: 2,
    explanation: 'v = fλ = 5 × 4 = 20 m/s'
  },
  {
    q: 'An object moves in a circle of radius 2 m at 4 m/s. What is its centripetal acceleration?',
    options: ['2 m/s²', '4 m/s²', '8 m/s²', '16 m/s²'],
    answer: 2,
    explanation: 'ac = v²/r = 16/2 = 8 m/s²'
  },
  {
    q: 'How much work is done by a 10 N force moving an object 5 m at 60° to the direction of motion?',
    options: ['50 J', '43.3 J', '25 J', '86.6 J'],
    answer: 2,
    explanation: 'W = Fd cosθ = 10 × 5 × cos(60°) = 50 × 0.5 = 25 J'
  },
  {
    q: 'A 10 kg object is in free fall. Ignoring air resistance, what is its acceleration?',
    options: ['0 m/s²', '9.8 m/s²', '98 m/s²', 'Depends on height'],
    answer: 1,
    explanation: 'All objects in free fall accelerate at g = 9.8 m/s² regardless of mass (ignoring air resistance).'
  },
  {
    q: 'Which type of wave requires a medium to travel through?',
    options: ['Electromagnetic waves', 'Light waves', 'Mechanical waves', 'Radio waves'],
    answer: 2,
    explanation: 'Mechanical waves (like sound) require a medium. Electromagnetic waves (light, radio) can travel through a vacuum.'
  }
];

let currentQuestion = 0;
let score = 0;
let answered = new Array(questions.length).fill(null); // null | 'correct' | 'wrong'
let selectedOption = null;

function initQuiz() {
  renderQuestion(0);
  updateProgress();
}

function renderQuestion(index) {
  const container = document.getElementById('quiz-container');
  if (!container) return;

  const q = questions[index];
  const wasAnswered = answered[index] !== null;
  const savedSel    = wasAnswered ? getStoredSelection(index) : null;

  container.innerHTML = `
    <div class="quiz-card">
      <div class="quiz-question">Q${index + 1}. ${q.q}</div>
      <div class="quiz-options">
        ${q.options.map((opt, i) => {
          let cls = 'quiz-option';
          if (wasAnswered) {
            if (i === q.answer) cls += ' correct';
            else if (i === savedSel && savedSel !== q.answer) cls += ' wrong';
          }
          const checked = savedSel === i ? 'checked' : '';
          const disabled = wasAnswered ? 'disabled' : '';
          return `
            <label class="${cls}" onclick="selectOption(this, ${i})">
              <input type="radio" name="q${index}" value="${i}" ${checked} ${disabled} />
              ${opt}
            </label>`;
        }).join('')}
      </div>
      ${wasAnswered ? `
        <div class="feedback ${answered[index] === 'correct' ? 'correct-fb' : 'wrong-fb'}">
          ${answered[index] === 'correct' ? '✅ Correct! ' : '❌ Not quite. '}${q.explanation}
        </div>` : `
        <button class="btn check-btn" onclick="checkAnswer(${index})">Check Answer</button>`
      }
    </div>`;

  selectedOption = savedSel;
  updateProgress();

  const prevBtn = document.getElementById('prev-btn');
  const nextBtn = document.getElementById('next-btn');
  if (prevBtn) prevBtn.disabled = index === 0;
  if (nextBtn) {
    if (index === questions.length - 1) {
      nextBtn.textContent = 'Finish 🎉';
      nextBtn.onclick = showResult;
    } else {
      nextBtn.textContent = 'Next →';
      nextBtn.onclick = nextQuestion;
    }
  }
}

// Store selections per question index so we can re-render correctly
const storedSelections = {};
function getStoredSelection(index) { return storedSelections[index] ?? null; }

function selectOption(label, optionIndex) {
  if (answered[currentQuestion] !== null) return;
  document.querySelectorAll('.quiz-option').forEach(l => l.classList.remove('selected'));
  label.classList.add('selected');
  selectedOption = optionIndex;
}

function checkAnswer(index) {
  if (selectedOption === null) {
    alert('Please select an answer first!');
    return;
  }
  const q = questions[index];
  storedSelections[index] = selectedOption;
  if (selectedOption === q.answer) {
    answered[index] = 'correct';
    score++;
  } else {
    answered[index] = 'wrong';
  }
  renderQuestion(index);
}

function nextQuestion() {
  if (currentQuestion < questions.length - 1) {
    currentQuestion++;
    renderQuestion(currentQuestion);
  }
}

function prevQuestion() {
  if (currentQuestion > 0) {
    currentQuestion--;
    renderQuestion(currentQuestion);
  }
}

function updateProgress() {
  const el = document.getElementById('quiz-progress');
  if (el) el.textContent = `Question ${currentQuestion + 1} / ${questions.length}`;
}

function showResult() {
  document.getElementById('quiz-container').classList.add('hidden');
  document.querySelector('.quiz-controls').classList.add('hidden');

  const result = document.getElementById('quiz-result');
  const scoreText = document.getElementById('score-text');

  const pct = Math.round((score / questions.length) * 100);
  let msg = '';
  if (pct === 100) msg = '🏆 Perfect score! Outstanding work!';
  else if (pct >= 80) msg = '😊 Great job! You have a solid understanding of Physics 1.';
  else if (pct >= 60) msg = '📖 Good effort! Review the topics you missed and try again.';
  else msg = '💪 Keep studying! Go over the topic cards and formulas above.';

  scoreText.textContent = `You scored ${score} out of ${questions.length} (${pct}%). ${msg}`;
  result.classList.remove('hidden');
}

function restartQuiz() {
  score = 0;
  currentQuestion = 0;
  answered = new Array(questions.length).fill(null);
  selectedOption = null;
  Object.keys(storedSelections).forEach(k => delete storedSelections[k]);

  document.getElementById('quiz-container').classList.remove('hidden');
  document.querySelector('.quiz-controls').classList.remove('hidden');
  document.getElementById('quiz-result').classList.add('hidden');

  renderQuestion(0);
  updateProgress();
}
