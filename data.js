// Physics study data
const physicsData = {
    notes: {
        kinematics: {
            title: "Kinematics & Motion",
            content: [
                {
                    heading: "Displacement vs Distance",
                    text: "Displacement is the straight-line distance from start to finish with direction. Distance is the total path traveled."
                },
                {
                    heading: "Velocity & Speed",
                    text: "Speed = distance/time (scalar). Velocity = displacement/time (vector, has direction)."
                },
                {
                    heading: "Acceleration",
                    text: "Acceleration = change in velocity / time. Can be positive (speeding up) or negative (slowing down/deceleration)."
                },
                {
                    heading: "Kinematic Equations",
                    text: "v = v₀ + at\ns = v₀t + ½at²\nv² = v₀² + 2as\ns = (v₀ + v)t/2"
                }
            ]
        },
        forces: {
            title: "Forces & Newton's Laws",
            content: [
                {
                    heading: "Newton's First Law",
                    text: "An object at rest stays at rest, and an object in motion stays in motion unless acted upon by an external force."
                },
                {
                    heading: "Newton's Second Law",
                    text: "F = ma. The net force on an object equals its mass times its acceleration."
                },
                {
                    heading: "Newton's Third Law",
                    text: "For every action, there is an equal and opposite reaction."
                },
                {
                    heading: "Types of Forces",
                    text: "• Gravitational Force: F = mg\n• Normal Force: Force perpendicular to surface\n• Friction Force: f = μN\n• Tension: Force in ropes or cables"
                }
            ]
        },
        energy: {
            title: "Energy & Work",
            content: [
                {
                    heading: "Work",
                    text: "W = F·d·cos(θ). Work is the force applied times the distance moved in the direction of the force."
                },
                {
                    heading: "Kinetic Energy",
                    text: "KE = ½mv². The energy of an object due to its motion."
                },
                {
                    heading: "Potential Energy",
                    text: "PE = mgh. The energy of an object due to its position."
                },
                {
                    heading: "Conservation of Energy",
                    text: "Total mechanical energy = KE + PE. Energy is conserved in an isolated system."
                }
            ]
        },
        momentum: {
            title: "Momentum & Collisions",
            content: [
                {
                    heading: "Momentum",
                    text: "p = mv. Momentum is the product of mass and velocity (vector quantity)."
                },
                {
                    heading: "Impulse-Momentum Theorem",
                    text: "Impulse = F·Δt = Δp. A force applied for a time changes momentum."
                },
                {
                    heading: "Conservation of Momentum",
                    text: "In an isolated system, total momentum before collision = total momentum after collision."
                },
                {
                    heading: "Elastic vs Inelastic Collisions",
                    text: "Elastic: Kinetic energy conserved\nInelastic: Kinetic energy not conserved, objects may stick together"
                }
            ]
        },
        waves: {
            title: "Waves & Sound",
            content: [
                {
                    heading: "Wave Properties",
                    text: "• Wavelength (λ): Distance between waves\n• Frequency (f): Number of waves per second\n• Period (T): Time for one wave (T = 1/f)\n• Amplitude: Maximum displacement"
                },
                {
                    heading: "Wave Equation",
                    text: "v = fλ. Velocity equals frequency times wavelength."
                },
                {
                    heading: "Sound Waves",
                    text: "Sound travels at ~343 m/s in air at room temperature. It's a longitudinal wave."
                },
                {
                    heading: "Doppler Effect",
                    text: "Observed frequency changes when source moves toward/away from observer."
                }
            ]
        }
    },

    flashcards: [
        {
            front: "What is the difference between displacement and distance?",
            back: "Displacement is the straight-line distance with direction; distance is the total path traveled."
        },
        {
            front: "What is Newton's Second Law?",
            back: "F = ma (Force equals mass times acceleration)"
        },
        {
            front: "Define velocity",
            back: "Velocity is displacement divided by time; it's a vector with direction."
        },
        {
            front: "What is kinetic energy?",
            back: "KE = ½mv² - the energy due to an object's motion"
        },
        {
            front: "What does conservation of momentum mean?",
            back: "In an isolated system, total momentum before and after collision is equal."
        },
        {
            front: "How are wavelength, frequency, and velocity related?",
            back: "v = fλ (velocity equals frequency times wavelength)"
        },
        {
            front: "What is acceleration?",
            back: "Change in velocity divided by time; a = Δv/Δt"
        },
        {
            front: "Define potential energy",
            back: "PE = mgh - energy due to an object's position in a gravitational field"
        },
        {
            front: "What is the Doppler Effect?",
            back: "Observed frequency of waves changes when source moves relative to observer"
        },
        {
            front: "What is impulse?",
            back: "Impulse = F·Δt - the change in momentum from a force applied over time"
        },
        {
            front: "State Newton's First Law",
            back: "An object at rest stays at rest, and an object in motion stays in motion unless acted upon by an external force."
        },
        {
            front: "What is the SI unit of force?",
            back: "Newton (N), defined as 1 kg·m/s²"
        },
        {
            front: "Define friction force",
            back: "f = μN - resistance to motion between surfaces; μ is coefficient of friction"
        },
        {
            front: "What is work in physics?",
            back: "W = F·d·cos(θ) - force applied times distance moved in direction of force (Joules)"
        },
        {
            front: "Define momentum",
            back: "p = mv - mass times velocity; a vector quantity measured in kg·m/s"
        },
        {
            front: "What is the period of a wave?",
            back: "T = 1/f - the time required for one complete oscillation"
        },
        {
            front: "What is the relationship between period and frequency?",
            back: "T = 1/f or f = 1/T; they are inverse relationships"
        },
        {
            front: "Define amplitude",
            back: "The maximum displacement of a wave from its equilibrium position"
        },
        {
            front: "What is terminal velocity?",
            back: "The maximum velocity reached by a falling object when air resistance equals gravitational force"
        },
        {
            front: "What does elastic collision mean?",
            back: "A collision where both momentum and kinetic energy are conserved"
        }
    ],

    quiz: [
        // Kinematics - Easy
        {
            question: "An object travels 10 m east, then 5 m west. What is its displacement?",
            options: ["5 m east", "15 m", "5 m west", "Cannot be determined"],
            correct: 0,
            difficulty: "easy"
        },
        {
            question: "If a car accelerates uniformly from 0 to 20 m/s in 5 seconds, what is its acceleration?",
            options: ["4 m/s²", "5 m/s²", "100 m/s²", "0.25 m/s²"],
            correct: 0,
            difficulty: "easy"
        },
        {
            question: "What is the difference between speed and velocity?",
            options: [
                "Speed is faster",
                "Velocity has direction, speed does not",
                "There is no difference",
                "Speed is measured in m/s, velocity in km/h"
            ],
            correct: 1,
            difficulty: "easy"
        },
        {
            question: "A runner covers 100 m in 10 seconds at constant speed. What is the speed?",
            options: ["10 m/s", "100 m/s", "1 m/s", "0.1 m/s"],
            correct: 0,
            difficulty: "easy"
        },
        // Kinematics - Medium
        {
            question: "An object starts from rest and accelerates at 3 m/s² for 4 seconds. How far does it travel?",
            options: ["12 m", "24 m", "36 m", "48 m"],
            correct: 2,
            difficulty: "medium"
        },
        {
            question: "What is the final velocity after falling for 3 seconds from rest? (g = 10 m/s²)",
            options: ["30 m/s", "15 m/s", "45 m/s", "90 m/s"],
            correct: 0,
            difficulty: "medium"
        },
        // Forces - Easy
        {
            question: "Newton's Third Law states:",
            options: [
                "Objects at rest stay at rest",
                "F = ma",
                "For every action, there is an equal and opposite reaction",
                "Energy is conserved"
            ],
            correct: 2,
            difficulty: "easy"
        },
        {
            question: "What does F = ma represent?",
            options: [
                "Newton's First Law",
                "Newton's Second Law",
                "Newton's Third Law",
                "Conservation of Energy"
            ],
            correct: 1,
            difficulty: "easy"
        },
        {
            question: "A 10 kg object experiences no net force. What is its acceleration?",
            options: ["10 m/s²", "1 m/s²", "0 m/s²", "100 m/s²"],
            correct: 2,
            difficulty: "easy"
        },
        {
            question: "What is the SI unit of force?",
            options: ["kg", "Newton", "Joule", "Watt"],
            correct: 1,
            difficulty: "easy"
        },
        // Forces - Medium
        {
            question: "A 5 kg object is pushed with a 50 N force. Friction is 10 N. What is the acceleration?",
            options: ["8 m/s²", "10 m/s²", "2 m/s²", "12 m/s²"],
            correct: 0,
            difficulty: "medium"
        },
        {
            question: "A 20 N force acts on an object for 5 seconds, changing its velocity. This demonstrates:",
            options: ["First Law", "Second Law", "Third Law", "Conservation"],
            correct: 1,
            difficulty: "medium"
        },
        // Energy - Easy
        {
            question: "What is the kinetic energy of a 2 kg object moving at 5 m/s?",
            options: ["10 J", "25 J", "50 J", "100 J"],
            correct: 1,
            difficulty: "easy"
        },
        {
            question: "A 3 kg ball is at height 4 m. Find its potential energy. (g = 10 m/s²)",
            options: ["12 J", "30 J", "120 J", "70 J"],
            correct: 2,
            difficulty: "easy"
        },
        {
            question: "Which has more kinetic energy: 1 kg at 10 m/s or 2 kg at 5 m/s?",
            options: [
                "1 kg at 10 m/s",
                "2 kg at 5 m/s",
                "They are equal",
                "Cannot determine"
            ],
            correct: 0,
            difficulty: "easy"
        },
        // Energy - Medium
        {
            question: "An object has 100 J KE and 50 J PE. What is its total mechanical energy?",
            options: ["50 J", "100 J", "150 J", "2 J"],
            correct: 2,
            difficulty: "medium"
        },
        {
            question: "What is the wave equation?",
            options: ["v = f + λ", "v = fλ", "v = f/λ", "v = λ/f"],
            correct: 1,
            difficulty: "medium"
        },
        // Momentum - Easy
        {
            question: "A 2 kg object moving at 6 m/s has momentum of:",
            options: ["3 kg·m/s", "12 kg·m/s", "6 kg·m/s", "8 kg·m/s"],
            correct: 1,
            difficulty: "easy"
        },
        {
            question: "Which has more momentum: 1 kg at 10 m/s or 2 kg at 4 m/s?",
            options: [
                "1 kg at 10 m/s",
                "2 kg at 4 m/s",
                "They are equal",
                "Cannot determine"
            ],
            correct: 0,
            difficulty: "easy"
        },
        // Momentum - Medium
        {
            question: "A 3 kg object moving at 5 m/s collides with a 2 kg object at rest. They stick together. Find final velocity.",
            options: ["3 m/s", "2.5 m/s", "5 m/s", "7.5 m/s"],
            correct: 0,
            difficulty: "medium"
        },
        // Waves - Easy
        {
            question: "A wave has frequency 10 Hz. What is its period?",
            options: ["0.1 s", "1 s", "10 s", "0.01 s"],
            correct: 0,
            difficulty: "easy"
        },
        {
            question: "Sound travels fastest through:",
            options: ["Air", "Water", "Solid", "Vacuum"],
            correct: 2,
            difficulty: "easy"
        },
        // Hard questions across all topics
        {
            question: "A 1500 kg car needs to come to a complete stop in 5 seconds. If it's traveling at 20 m/s, what is the force needed?",
            options: ["6000 N", "7500 N", "-6000 N", "300 N"],
            correct: 2,
            difficulty: "hard"
        },
        {
            question: "Two identical balls collide elastically. If ball A is moving at 5 m/s and ball B is stationary, what happens after collision?",
            options: [
                "Ball A stops, Ball B moves at 5 m/s",
                "Both move at 2.5 m/s",
                "Ball A bounces back at -5 m/s",
                "They stick together"
            ],
            correct: 0,
            difficulty: "hard"
        },
        {
            question: "A sound wave has a frequency of 440 Hz. If the speed of sound is 343 m/s, what is the wavelength?",
            options: ["0.78 m", "1.28 m", "151,120 m", "783 Hz"],
            correct: 0,
            difficulty: "hard"
        },
        {
            question: "What is the gravitational potential energy of a 5 kg object at a height of 100 m? (g = 9.8 m/s²)",
            options: ["490 J", "4900 J", "49,000 J", "980 J"],
            correct: 2,
            difficulty: "hard"
        },
        {
            question: "If an object has zero acceleration, what can we conclude?",
            options: [
                "The object is at rest",
                "The object is moving at constant velocity or at rest",
                "The object is slowing down",
                "No forces act on the object"
            ],
            correct: 1,
            difficulty: "hard"
        },
        {
            question: "A 0.2 kg baseball is hit with an average force of 4000 N over 0.002 seconds. What is its final velocity starting from rest?",
            options: ["10 m/s", "20 m/s", "40 m/s", "400 m/s"],
            correct: 2,
            difficulty: "hard"
        },
        {
            question: "A rotor blade sweeps through an angle of 2π radians in 1 second. What is its angular velocity?",
            options: ["2π rad/s", "π rad/s", "4π rad/s", "1 rad/s"],
            correct: 0,
            difficulty: "hard"
        }
    ],

    problems: {
        kinematics: [
            {
                title: "Problem 1: Constant Acceleration",
                statement: "A car accelerates uniformly from rest to 30 m/s over a distance of 150 m. Find the acceleration and time taken.",
                solution: "Using v² = v₀² + 2as:\n30² = 0² + 2a(150)\n900 = 300a\na = 3 m/s²\n\nUsing v = v₀ + at:\n30 = 0 + 3t\nt = 10 s"
            },
            {
                title: "Problem 2: Free Fall",
                statement: "An object is dropped from a height of 45 m. How long does it take to hit the ground? (g = 10 m/s²)",
                solution: "Using s = v₀t + ½gt²:\n45 = 0 + ½(10)t²\n45 = 5t²\nt² = 9\nt = 3 seconds"
            },
            {
                title: "Problem 3: Projectile Motion",
                statement: "A ball is thrown horizontally from a cliff at 15 m/s. It hits the ground 3 seconds later. Find the height and horizontal distance. (g = 10 m/s²)",
                solution: "Vertical: h = ½gt² = ½(10)(3²) = 45 m\nHorizontal: d = vt = 15 × 3 = 45 m"
            },
            {
                title: "Problem 4: Two-Body Kinematics",
                statement: "Two cars start at the same point. Car A travels at constant 20 m/s. Car B starts from rest and accelerates at 2 m/s². When do they have the same velocity?",
                solution: "Car A: v = 20 m/s (constant)\nCar B: v = 0 + 2t\nWhen equal: 20 = 2t\nt = 10 seconds"
            }
        ],
        forces: [
            {
                title: "Problem 1: Net Force",
                statement: "Two forces act on a 5 kg object: 20 N to the right and 8 N to the left. Find the acceleration.",
                solution: "Net force = 20 - 8 = 12 N (to the right)\nF = ma\n12 = 5a\na = 2.4 m/s² (to the right)"
            },
            {
                title: "Problem 2: Friction",
                statement: "A 10 kg box slides on a surface with friction coefficient 0.2. Find the friction force. (g = 10 m/s²)",
                solution: "Normal force N = mg = 10 × 10 = 100 N\nFriction force f = μN = 0.2 × 100 = 20 N"
            },
            {
                title: "Problem 3: Inclined Plane",
                statement: "A 5 kg block on a 30° incline experiences friction (μ = 0.1). Find the net force down the plane. (g = 10 m/s²)",
                solution: "Weight component: mg sin(30°) = 5 × 10 × 0.5 = 25 N\nNormal force: N = mg cos(30°) = 50 × 0.866 = 43.3 N\nFriction: f = 0.1 × 43.3 = 4.33 N\nNet force = 25 - 4.33 = 20.67 N"
            },
            {
                title: "Problem 4: Tension in Rope",
                statement: "Two boxes (3 kg and 2 kg) are connected by a rope. A 25 N force pulls the 3 kg box. Find the tension in the rope. (no friction)",
                solution: "Total mass = 5 kg, Total acceleration = 25/5 = 5 m/s²\nFor 2 kg box: T = 2 × 5 = 10 N"
            }
        ],
        energy: [
            {
                title: "Problem 1: Kinetic and Potential Energy",
                statement: "A 2 kg ball is thrown upward with velocity 20 m/s. Find its KE and PE at the highest point. (g = 10 m/s²)",
                solution: "At highest point, v = 0, so KE = 0\nMaximum height: v² = v₀² - 2gh → 0 = 400 - 20h → h = 20 m\nPE = mgh = 2 × 10 × 20 = 400 J"
            },
            {
                title: "Problem 2: Work",
                statement: "A 50 N force is applied at 60° angle to move an object 10 m. Calculate work done.",
                solution: "W = F·d·cos(θ)\nW = 50 × 10 × cos(60°)\nW = 500 × 0.5\nW = 250 J"
            },
            {
                title: "Problem 3: Energy Conservation",
                statement: "A 1 kg ball falls from 50 m. Neglecting air resistance, what is its velocity just before hitting the ground? (g = 10 m/s²)",
                solution: "Using energy conservation:\nPE = KE\nmgh = ½mv²\n10 × 50 = ½v²\nv² = 1000\nv ≈ 31.6 m/s"
            },
            {
                title: "Problem 4: Power",
                statement: "A motor does 5000 J of work in 10 seconds. What is its power output?",
                solution: "Power = Work / time\nP = 5000 / 10\nP = 500 W (watts)"
            }
        ],
        momentum: [
            {
                title: "Problem 1: Momentum",
                statement: "A 0.5 kg ball moving at 10 m/s collides with a wall and bounces back at 8 m/s. Find the change in momentum.",
                solution: "Initial momentum = 0.5 × 10 = 5 kg·m/s (forward)\nFinal momentum = 0.5 × (-8) = -4 kg·m/s (backward)\nChange = -4 - 5 = -9 kg·m/s"
            },
            {
                title: "Problem 2: Collision",
                statement: "A 3 kg object moving at 5 m/s collides with a 2 kg object at rest. They stick together. Find final velocity.",
                solution: "Using conservation of momentum:\nm₁v₁ + m₂v₂ = (m₁ + m₂)v_f\n3(5) + 2(0) = (3 + 2)v_f\n15 = 5v_f\nv_f = 3 m/s"
            },
            {
                title: "Problem 3: Impulse",
                statement: "A 0.2 kg baseball is hit by a bat. It goes from 0 to 40 m/s in 0.002 seconds. Find the average force.",
                solution: "Impulse = change in momentum = 0.2 × 40 = 8 kg·m/s\nF·Δt = Δp\nF × 0.002 = 8\nF = 4000 N"
            },
            {
                title: "Problem 4: Two-Body Collision",
                statement: "Ball A (2 kg) at 6 m/s hits Ball B (4 kg) at 2 m/s (same direction). Find velocity after elastic collision.",
                solution: "Before: p = 2(6) + 4(2) = 20 kg·m/s\nUsing elastic collision formulas:\nv_A = ((m_A - m_B)v_A0 + 2m_B·v_B0)/(m_A + m_B)\nv_A = ((2-4)6 + 2(4)2)/(6) = (-12+16)/6 = 2/3 m/s"
            }
        ]
    }
};
