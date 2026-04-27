// Physics Study Hub - Comprehensive Expanded Edition
// 12 Topics | 85+ Flashcards | 130+ Quiz Questions | 30+ Problems

const physicsData = {
    notes: {
        kinematics: {
            title: "Kinematics & Motion",
            content: [
                { heading: "Displacement vs Distance", text: "Displacement is the straight-line distance from start to finish with direction. Distance is the total path traveled." },
                { heading: "Velocity & Speed", text: "Speed = distance/time (scalar). Velocity = displacement/time (vector, has direction)." },
                { heading: "Acceleration", text: "Acceleration = change in velocity / time. Can be positive (speeding up) or negative (slowing down/deceleration)." },
                { heading: "Kinematic Equations", text: "v = v₀ + at\ns = v₀t + ½at²\nv² = v₀² + 2as\ns = (v₀ + v)t/2" }
            ]
        },
        forces: {
            title: "Forces & Newton's Laws",
            content: [
                { heading: "Newton's First Law", text: "An object at rest stays at rest, and an object in motion stays in motion unless acted upon by an external force." },
                { heading: "Newton's Second Law", text: "F = ma. The net force on an object equals its mass times its acceleration." },
                { heading: "Newton's Third Law", text: "For every action, there is an equal and opposite reaction." },
                { heading: "Types of Forces", text: "• Gravitational Force: F = mg\n• Normal Force: Force perpendicular to surface\n• Friction Force: f = μN\n• Tension: Force in ropes or cables" }
            ]
        },
        energy: {
            title: "Energy & Work",
            content: [
                { heading: "Work", text: "W = F·d·cos(θ). Work is the force applied times the distance moved in the direction of the force." },
                { heading: "Kinetic Energy", text: "KE = ½mv². The energy of an object due to its motion." },
                { heading: "Potential Energy", text: "PE = mgh. The energy of an object due to its position." },
                { heading: "Conservation of Energy", text: "Total mechanical energy = KE + PE. Energy is conserved in an isolated system." }
            ]
        },
        momentum: {
            title: "Momentum & Collisions",
            content: [
                { heading: "Momentum", text: "p = mv. Momentum is the product of mass and velocity (vector quantity)." },
                { heading: "Impulse-Momentum Theorem", text: "Impulse = F·Δt = Δp. A force applied for a time changes momentum." },
                { heading: "Conservation of Momentum", text: "In an isolated system, total momentum before collision = total momentum after collision." },
                { heading: "Elastic vs Inelastic Collisions", text: "Elastic: Kinetic energy conserved\nInelastic: Kinetic energy not conserved, objects may stick together" }
            ]
        },
        waves: {
            title: "Waves & Sound",
            content: [
                { heading: "Wave Properties", text: "• Wavelength (λ): Distance between waves\n• Frequency (f): Number of waves per second\n• Period (T): Time for one wave (T = 1/f)\n• Amplitude: Maximum displacement" },
                { heading: "Wave Equation", text: "v = fλ. Velocity equals frequency times wavelength." },
                { heading: "Sound Waves", text: "Sound travels at ~343 m/s in air at room temperature. It's a longitudinal wave." },
                { heading: "Doppler Effect", text: "Observed frequency changes when source moves toward/away from observer." }
            ]
        },
        circular: {
            title: "Circular Motion & Gravity",
            content: [
                { heading: "Centripetal Acceleration", text: "a_c = v²/r = ω²r. The acceleration toward the center in circular motion." },
                { heading: "Centripetal Force", text: "F_c = mv²/r = mω²r. The net force directed toward the center of a circle." },
                { heading: "Angular Velocity", text: "ω = v/r = 2π/T. Rate of angular displacement, measured in rad/s" },
                { heading: "Universal Gravitation", text: "F = G(m₁m₂)/r². Gravitational force between two masses; G = 6.674 × 10⁻¹¹ N·m²/kg²" },
                { heading: "Orbital Motion", text: "For circular orbits: v = √(GM/r). Escape velocity: v_e = √(2GM/r)" }
            ]
        },
        fluids: {
            title: "Fluids & Pressure",
            content: [
                { heading: "Pressure", text: "P = F/A. Pressure is force per unit area, measured in Pascals (Pa)." },
                { heading: "Hydrostatic Pressure", text: "P = ρgh. Pressure at depth h in a fluid; ρ is density." },
                { heading: "Pascal's Principle", text: "Pressure applied to a confined fluid is transmitted undiminished throughout." },
                { heading: "Archimedes' Principle", text: "Buoyant force = weight of displaced fluid = ρ_fluid·V·g" },
                { heading: "Bernoulli's Principle", text: "P + ½ρv² + ρgh = constant. Relates pressure, velocity, and height in flowing fluid." },
                { heading: "Continuity Equation", text: "A₁v₁ = A₂v₂. For incompressible flow, volume flow rate is constant." }
            ]
        },
        thermodynamics: {
            title: "Thermodynamics & Heat",
            content: [
                { heading: "Temperature & Heat", text: "Temperature measures average kinetic energy of particles. Heat is energy transfer between bodies." },
                { heading: "First Law", text: "ΔU = Q - W. Change in internal energy equals heat added minus work done by system." },
                { heading: "Second Law", text: "Entropy increases in isolated systems. Heat flows from hot to cold, never spontaneously reversed." },
                { heading: "Heat Transfer", text: "Q = mcΔT. Heat required equals mass × specific heat capacity × temperature change." },
                { heading: "Ideal Gas Law", text: "PV = nRT. Relates pressure, volume, temperature, and amount of gas." },
                { heading: "Thermal Conductivity", text: "Heat conduction rate depends on material properties and temperature gradient: Q/t = kA(ΔT/d)" }
            ]
        },
        electrostatics: {
            title: "Electrostatics & Charge",
            content: [
                { heading: "Electric Charge", text: "Charge comes in two types: positive and negative. Measured in Coulombs (C)." },
                { heading: "Coulomb's Law", text: "F = k(q₁q₂)/r². Force between charges; k = 8.99 × 10⁹ N·m²/C²" },
                { heading: "Electric Field", text: "E = F/q = kQ/r². Electric field is force per unit charge created by source charge." },
                { heading: "Electric Potential", text: "V = kQ/r. Measured in Volts (V). Potential energy per unit charge." },
                { heading: "Capacitance", text: "C = Q/V. Capacitance is the ability to store charge per unit voltage. Measured in Farads (F)." },
                { heading: "Electric Potential Energy", text: "U = kq₁q₂/r. Energy stored in electric field configuration." }
            ]
        },
        magnetism: {
            title: "Magnetism & EM Effects",
            content: [
                { heading: "Magnetic Force", text: "F = qvB sin(θ). Force on charged particle moving in magnetic field." },
                { heading: "Lorentz Force", text: "F = q(E + v × B). Total electromagnetic force on a charge." },
                { heading: "Magnetic Field", text: "B = μ₀I/(2πr) for wire. Magnetic field strength from current; μ₀ = 4π × 10⁻⁷ T·m/A" },
                { heading: "Electromagnetic Induction", text: "ε = -dΦ/dt (Faraday's Law). Induced EMF from changing magnetic flux." },
                { heading: "Magnetic Flux", text: "Φ = BA cos(θ). Measure of magnetic field through area." },
                { heading: "Right-Hand Rule", text: "Determines direction of magnetic force: point fingers along v, curl toward B, thumb points to F." }
            ]
        },
        optics: {
            title: "Optics & Light",
            content: [
                { heading: "Speed of Light", text: "c = 3.0 × 10⁸ m/s. Fundamental constant; light travels in straight lines in uniform medium." },
                { heading: "Reflection & Refraction", text: "Law of Reflection: θᵢ = θᵣ. Snell's Law: n₁sin(θ₁) = n₂sin(θ₂)" },
                { heading: "Lens Equation", text: "1/f = 1/sₒ + 1/sᵢ. Relates focal length, object distance, and image distance." },
                { heading: "Magnification", text: "M = -sᵢ/sₒ = hᵢ/hₒ. Ratio of image height to object height." },
                { heading: "Diffraction & Interference", text: "Light bends around obstacles (diffraction). Superposition creates constructive/destructive interference." },
                { heading: "Thin Film Interference", text: "Colors from thin films due to path difference: 2nt = mλ for constructive, (m+1/2)λ for destructive." }
            ]
        },
        modern: {
            title: "Modern Physics & Quantum",
            content: [
                { heading: "Photon Energy", text: "E = hf = hc/λ. Energy of photon; h = 6.626 × 10⁻³⁴ J·s (Planck constant)" },
                { heading: "Photoelectric Effect", text: "E = hf = KE + Φ. Photon ejects electron if energy exceeds work function." },
                { heading: "De Broglie Wavelength", text: "λ = h/p = h/(mv). Particle-wave duality; particles have wavelike properties." },
                { heading: "Bohr Model", text: "Electrons in discrete energy levels. Energy: E = -13.6 eV/n²" },
                { heading: "Mass-Energy Equivalence", text: "E = mc². Mass and energy are equivalent; basis of nuclear reactions." },
                { heading: "Radioactive Decay", text: "N(t) = N₀e^(-λt). Half-life: t₁/₂ = ln(2)/λ. Spontaneous emission of radiation." }
            ]
        },
        relativity: {
            title: "Relativity & Space-Time",
            content: [
                { heading: "Time Dilation", text: "t = t₀/√(1 - v²/c²). Moving clocks run slow relative to observer." },
                { heading: "Length Contraction", text: "L = L₀√(1 - v²/c²). Moving objects contract in direction of motion." },
                { heading: "Relativistic Mass", text: "m = m₀/√(1 - v²/c²). Effective mass increases with velocity." },
                { heading: "Relativistic Momentum", text: "p = γm₀v where γ = 1/√(1 - v²/c²). Momentum conserved in all frames." },
                { heading: "Spacetime Intervals", text: "Δs² = (cΔt)² - (Δx)². Invariant in all reference frames." },
                { heading: "Relativistic Doppler", text: "f' = f√((1 - β)/(1 + β)) where β = v/c. Frequency change for moving sources." }
            ]
        },
        shm: {
            title: "Simple Harmonic Motion & Oscillations",
            content: [
                { heading: "Periodic Motion", text: "Motion that repeats in equal time intervals. Period T = time for one complete oscillation; Frequency f = 1/T." },
                { heading: "Simple Harmonic Motion Definition", text: "Oscillatory motion where acceleration is proportional to displacement and opposite in direction: a = -ω²x" },
                { heading: "SHM Displacement Equation", text: "x(t) = A cos(ωt + φ) where A = amplitude, ω = angular frequency, φ = phase constant" },
                { heading: "Angular Frequency & Period", text: "ω = 2πf = 2π/T. Higher ω means faster oscillations; ω = √(k/m) for spring." },
                { heading: "Velocity & Acceleration in SHM", text: "v(t) = -Aω sin(ωt + φ); v_max = Aω\na(t) = -Aω² cos(ωt + φ); a_max = Aω²" },
                { heading: "Energy in SHM", text: "Total energy E = ½kA² (constant). Energy oscillates between kinetic and potential: E = KE + PE" },
                { heading: "Spring Oscillator", text: "Period T = 2π√(m/k) where m = mass, k = spring constant. Independent of amplitude." },
                { heading: "Pendulum Motion", text: "Simple pendulum period T = 2π√(L/g) for small angles. Independent of mass but dependent on length." },
                { heading: "Damped Oscillations", text: "When friction/resistance present: amplitude decreases exponentially A(t) = A₀e^(-γt). Eventually stops." },
                { heading: "Forced Oscillations & Resonance", text: "Driving force at natural frequency causes resonance - maximum amplitude. Amplitude grows unbounded without damping." }
            ]
        }
    },

    flashcards: [
        // KINEMATICS (8)
        { front: "Displacement vs Distance?", back: "Displacement is straight-line with direction; distance is total path traveled." },
        { front: "Velocity formula?", back: "v = displacement/time (vector with direction)" },
        { front: "Acceleration?", back: "a = Δv/Δt - change in velocity over time" },
        { front: "Kinematic equation for displacement?", back: "s = v₀t + ½at²" },
        { front: "Velocity-displacement relation?", back: "v² = v₀² + 2as" },
        { front: "Free fall?", back: "Motion under gravity alone; all objects accelerate at g ≈ 9.8 m/s²" },
        { front: "Terminal velocity?", back: "Maximum velocity when air resistance equals gravitational force" },
        { front: "Relative velocity?", back: "v_rel = v₁ - v₂ (velocity in different reference frame)" },

        // FORCES (8)
        { front: "Newton's Second Law?", back: "F = ma (Force equals mass times acceleration)" },
        { front: "Newton's First Law?", back: "Object at rest/motion stays unless external force acts" },
        { front: "Newton's Third Law?", back: "For every action, equal and opposite reaction" },
        { front: "SI unit of force?", back: "Newton (N) = 1 kg·m/s²" },
        { front: "Friction force formula?", back: "f = μN (coefficient × normal force)" },
        { front: "Normal force?", back: "Force perpendicular to surface, always pointing away" },
        { front: "Tension?", back: "Force exerted by rope/cable when pulled tight" },
        { front: "Static vs kinetic friction?", back: "Static prevents motion; kinetic during motion. Static ≥ kinetic." },

        // ENERGY (8)
        { front: "Kinetic energy?", back: "KE = ½mv² - energy due to motion" },
        { front: "Potential energy?", back: "PE = mgh - energy due to position" },
        { front: "Work formula?", back: "W = F·d·cos(θ) - force × distance × angle cosine" },
        { front: "Conservation of energy?", back: "Total mechanical energy (KE + PE) conserved in isolated system" },
        { front: "Power?", back: "P = W/t = F·v - rate of energy transfer (Watts)" },
        { front: "Elastic potential energy?", back: "PE = ½kx² (spring constant × compression squared)" },
        { front: "Work-energy theorem?", back: "W_net = ½m(v_f² - v_i²)" },
        { front: "Mechanical advantage?", back: "MA = F_out/F_in - ratio of output to input force" },

        // MOMENTUM (7)
        { front: "Momentum?", back: "p = mv - mass × velocity (kg·m/s)" },
        { front: "Conservation of momentum?", back: "Total momentum before = after collision in isolated system" },
        { front: "Impulse?", back: "J = F·Δt - change in momentum" },
        { front: "Elastic collision?", back: "Both momentum and kinetic energy conserved" },
        { front: "Inelastic collision?", back: "Momentum conserved but kinetic energy not. Objects may stick." },
        { front: "Impulse-momentum theorem?", back: "F·Δt = Δp" },
        { front: "Center of mass?", back: "x_cm = Σ(m_i·x_i)/Σm_i - point where total mass concentrates" },

        // WAVES (8)
        { front: "Wave equation?", back: "v = fλ - velocity = frequency × wavelength" },
        { front: "Period of wave?", back: "T = 1/f - time for one complete oscillation" },
        { front: "Period-frequency relation?", back: "T = 1/f or f = 1/T - inverse relationship" },
        { front: "Amplitude?", back: "Maximum displacement from equilibrium position" },
        { front: "Doppler Effect?", back: "Observed frequency changes when source moves relative to observer" },
        { front: "Resonance?", back: "Driving frequency = natural frequency → maximum amplitude" },
        { front: "Transverse vs longitudinal?", back: "Transverse: perpendicular to wave direction; Longitudinal: parallel" },
        { front: "Sound speed in air?", back: "≈ 343 m/s at 20°C. Faster in solids and liquids." },

        // CIRCULAR MOTION (7)
        { front: "Centripetal acceleration?", back: "a_c = v²/r = ω²r - toward center" },
        { front: "Centripetal force?", back: "F_c = mv²/r - net force toward center" },
        { front: "Angular velocity?", back: "ω = v/r = 2π/T (rad/s)" },
        { front: "Universal gravitation?", back: "F = G(m₁m₂)/r² (G = 6.674 × 10⁻¹¹)" },
        { front: "Orbital velocity?", back: "v = √(GM/r) - speed for stable orbit" },
        { front: "Escape velocity?", back: "v_e = √(2GM/r) - minimum to escape gravity" },
        { front: "Kepler's third law?", back: "T² ∝ r³ - orbital period relates to radius" },

        // FLUIDS (7)
        { front: "Pressure?", back: "P = F/A - force per unit area (Pascals)" },
        { front: "Hydrostatic pressure?", back: "P = ρgh - pressure at depth in fluid" },
        { front: "Pascal's Principle?", back: "Pressure in confined fluid transmitted undiminished" },
        { front: "Archimedes' Principle?", back: "Buoyant force = weight of displaced fluid" },
        { front: "Bernoulli's Principle?", back: "P + ½ρv² + ρgh = constant" },
        { front: "Continuity equation?", back: "A₁v₁ = A₂v₂ - volume flow rate constant" },
        { front: "Object floats if?", back: "Density of object < density of fluid" },

        // THERMODYNAMICS (7)
        { front: "First law of thermo?", back: "ΔU = Q - W - internal energy change" },
        { front: "Second law of thermo?", back: "Entropy increases in isolated systems" },
        { front: "Heat capacity?", back: "C = Q/ΔT - heat per temperature increase" },
        { front: "Specific heat capacity?", back: "c = Q/(m·ΔT); Q = mcΔT" },
        { front: "Ideal gas law?", back: "PV = nRT - pressure-volume-temperature relation" },
        { front: "Thermal conductivity?", back: "Measure of how well material conducts heat" },
        { front: "Latent heat?", back: "Energy for phase change without temperature change" },

        // ELECTROSTATICS (6)
        { front: "Electric charge?", back: "Fundamental property, two types (±), measured in Coulombs" },
        { front: "Coulomb's Law?", back: "F = k(q₁q₂)/r² (k = 8.99 × 10⁹)" },
        { front: "Electric field?", back: "E = kQ/r² - force per unit charge" },
        { front: "Electric potential?", back: "V = kQ/r - measured in Volts" },
        { front: "Capacitance?", back: "C = Q/V - charge storage per voltage (Farads)" },
        { front: "Parallel plate capacitor?", back: "C = ε₀εᵣA/d" },

        // MAGNETISM (5)
        { front: "Magnetic force on charge?", back: "F = qvB sin(θ) - moving charge in B field" },
        { front: "Lorentz force?", back: "F = q(E + v × B) - total EM force" },
        { front: "Right-hand rule?", back: "Fingers→v, curl→B, thumb→F direction" },
        { front: "Magnetic flux?", back: "Φ = BA cos(θ) - field through area" },
        { front: "Faraday's Law?", back: "ε = -dΦ/dt - induced EMF from flux change" },

        // OPTICS (5)
        { front: "Speed of light?", back: "c = 3.0 × 10⁸ m/s" },
        { front: "Law of reflection?", back: "θᵢ = θᵣ" },
        { front: "Snell's Law?", back: "n₁sin(θ₁) = n₂sin(θ₂)" },
        { front: "Lens equation?", back: "1/f = 1/s_o + 1/s_i" },
        { front: "Magnification?", back: "M = -s_i/s_o = h_i/h_o" },

        // MODERN PHYSICS (5)
        { front: "Photon energy?", back: "E = hf = hc/λ (h = 6.626 × 10⁻³⁴)" },
        { front: "Photoelectric effect?", back: "hf = KE + Φ - photon ejects electron" },
        { front: "De Broglie wavelength?", back: "λ = h/p = h/(mv)" },
        { front: "Bohr model?", back: "Electrons in discrete levels; E = -13.6 eV/n²" },
        { front: "Mass-energy?", back: "E = mc²" },

        // RELATIVITY (4)
        { front: "Time dilation?", back: "t = t₀/√(1 - v²/c²) - moving clocks slow" },
        { front: "Length contraction?", back: "L = L₀√(1 - v²/c²)" },
        { front: "Relativistic momentum?", back: "p = γm₀v where γ = 1/√(1 - v²/c²)" },
        { front: "Spacetime interval?", back: "Δs² = (cΔt)² - (Δx)² - invariant" },

        // SIMPLE HARMONIC MOTION (8)
        { front: "Period vs Frequency?", back: "Period T = time for one oscillation; Frequency f = 1/T (oscillations per second)" },
        { front: "SHM acceleration formula?", back: "a = -ω²x (proportional to displacement, opposite direction)" },
        { front: "SHM displacement equation?", back: "x(t) = A cos(ωt + φ) where A = amplitude, ω = angular frequency" },
        { front: "Max velocity in SHM?", back: "v_max = Aω = A(2πf)" },
        { front: "Max acceleration in SHM?", back: "a_max = Aω² = A(2πf)²" },
        { front: "Spring oscillator period?", back: "T = 2π√(m/k) - depends on mass and spring constant" },
        { front: "Simple pendulum period?", back: "T = 2π√(L/g) - depends on length only (small angles)" },
        { front: "Total energy in SHM?", back: "E = ½kA² (constant) - oscillates between kinetic and potential energy" }
    ],

    quiz: [
        // KINEMATICS (12 questions)
        { question: "An object travels 10 m east, then 5 m west. What is its displacement?", options: ["5 m east", "15 m", "5 m west", "Cannot determine"], correct: 0, difficulty: "easy" },
        { question: "A car accelerates from 0 to 20 m/s in 5 seconds. What is its acceleration?", options: ["4 m/s²", "5 m/s²", "100 m/s²", "0.25 m/s²"], correct: 0, difficulty: "easy" },
        { question: "What is the difference between speed and velocity?", options: ["Speed is faster", "Velocity has direction, speed does not", "No difference", "Different units"], correct: 1, difficulty: "easy" },
        { question: "A runner covers 100 m in 10 seconds at constant speed. What is the speed?", options: ["10 m/s", "100 m/s", "1 m/s", "0.1 m/s"], correct: 0, difficulty: "easy" },
        { question: "Object starts from rest, accelerates at 3 m/s² for 4 seconds. Distance traveled?", options: ["12 m", "24 m", "36 m", "48 m"], correct: 2, difficulty: "medium" },
        { question: "Final velocity after falling 3 seconds from rest? (g = 10 m/s²)", options: ["30 m/s", "15 m/s", "45 m/s", "90 m/s"], correct: 0, difficulty: "medium" },
        { question: "A ball thrown upward at 20 m/s. Time to reach max height? (g = 10 m/s²)", options: ["1 s", "2 s", "4 s", "20 s"], correct: 1, difficulty: "medium" },
        { question: "Max height of ball thrown upward at 20 m/s? (g = 10 m/s²)", options: ["10 m", "20 m", "40 m", "100 m"], correct: 2, difficulty: "medium" },
        { question: "Car traveling at 25 m/s brakes with acceleration -5 m/s². Stopping distance?", options: ["5 m", "25 m", "62.5 m", "125 m"], correct: 2, difficulty: "hard" },
        { question: "Two objects: A at 10 m/s, B at 5 m/s starting 50 m away. When do they collide?", options: ["5 s", "10 s", "Never", "2 s"], correct: 0, difficulty: "hard" },
        { question: "Projectile launched at 45° with 20 m/s. Maximum height? (g = 10 m/s²)", options: ["10 m", "20 m", "40 m", "2 m"], correct: 0, difficulty: "hard" },
        { question: "Projectile from cliff at 20 m height, horizontal 15 m/s. Flight time? (g = 10 m/s²)", options: ["1 s", "2 s", "4 s", "5 s"], correct: 1, difficulty: "hard" },

        // FORCES (12 questions)
        { question: "Newton's Third Law states:", options: ["Objects at rest stay at rest", "F = ma", "For every action, equal opposite reaction", "Energy conserved"], correct: 2, difficulty: "easy" },
        { question: "F = ma represents:", options: ["First Law", "Second Law", "Third Law", "Conservation"], correct: 1, difficulty: "easy" },
        { question: "10 kg object with no net force. Acceleration?", options: ["10 m/s²", "1 m/s²", "0 m/s²", "100 m/s²"], correct: 2, difficulty: "easy" },
        { question: "SI unit of force?", options: ["kg", "Newton", "Joule", "Watt"], correct: 1, difficulty: "easy" },
        { question: "5 kg object pushed with 50 N, friction 10 N. Acceleration?", options: ["8 m/s²", "10 m/s²", "2 m/s²", "12 m/s²"], correct: 0, difficulty: "medium" },
        { question: "20 N force acts 5 seconds. This demonstrates:", options: ["First Law", "Second Law", "Third Law", "Conservation"], correct: 1, difficulty: "medium" },
        { question: "On incline 30°, normal force equals:", options: ["mg", "mg sin(30°)", "mg cos(30°)", "0"], correct: 2, difficulty: "medium" },
        { question: "Two boxes (3kg, 2kg) connected. 25 N pulls. Tension in rope?", options: ["25 N", "10 N", "15 N", "5 N"], correct: 1, difficulty: "medium" },
        { question: "1500 kg car stops in 5 s from 20 m/s. Force needed?", options: ["6000 N", "7500 N", "-6000 N", "300 N"], correct: 2, difficulty: "hard" },
        { question: "Friction coefficient 0.3, 50 kg mass. Friction force? (g = 10)", options: ["150 N", "500 N", "50 N", "15 N"], correct: 0, difficulty: "hard" },
        { question: "Block on incline (45°) slides. Min friction coefficient?", options: ["0.5", "1.0", "0.707", "0.1"], correct: 2, difficulty: "hard" },
        { question: "Three forces on object: 10N east, 6N west, 8N north. Net force?", options: ["4 N", "8.94 N", "24 N", "10 N"], correct: 1, difficulty: "hard" },

        // ENERGY (12 questions)
        { question: "Kinetic energy of 2 kg at 5 m/s?", options: ["10 J", "25 J", "50 J", "100 J"], correct: 1, difficulty: "easy" },
        { question: "3 kg ball at height 4 m. Potential energy? (g = 10 m/s²)", options: ["12 J", "30 J", "120 J", "70 J"], correct: 2, difficulty: "easy" },
        { question: "Which has more KE: 1 kg at 10 m/s or 2 kg at 5 m/s?", options: ["1 kg at 10 m/s", "2 kg at 5 m/s", "Equal", "Cannot determine"], correct: 0, difficulty: "easy" },
        { question: "Work done by 50 N over 10 m at 60°?", options: ["500 J", "250 J", "433 J", "866 J"], correct: 1, difficulty: "easy" },
        { question: "Object with 100 J KE and 50 J PE. Total mechanical energy?", options: ["50 J", "100 J", "150 J", "2 J"], correct: 2, difficulty: "medium" },
        { question: "Power = 500 W over 10 seconds. Work done?", options: ["50 J", "500 J", "5000 J", "50 kJ"], correct: 2, difficulty: "medium" },
        { question: "1 kg ball falls 50 m. Velocity before hitting ground? (g = 10)", options: ["22 m/s", "31.6 m/s", "25 m/s", "50 m/s"], correct: 1, difficulty: "medium" },
        { question: "Spring constant 100 N/m compressed 0.5 m. Elastic PE?", options: ["12.5 J", "25 J", "50 J", "100 J"], correct: 1, difficulty: "medium" },
        { question: "Gravitational PE of 5 kg at 100 m? (g = 9.8 m/s²)", options: ["490 J", "4900 J", "49000 J", "980 J"], correct: 2, difficulty: "hard" },
        { question: "Motor outputs 5000 J in 10 seconds. Power?", options: ["500 W", "5000 W", "50 W", "50 kW"], correct: 0, difficulty: "hard" },
        { question: "Object gains 1000 J KE starting from rest. Final velocity at 2 kg?", options: ["22.4 m/s", "31.6 m/s", "10 m/s", "44.7 m/s"], correct: 0, difficulty: "hard" },
        { question: "Roller coaster at 20 m height, 10 m/s speed. Total energy? (m = 100 kg, g = 10)", options: ["25000 J", "20000 J", "5000 J", "25 kJ"], correct: 0, difficulty: "hard" },

        // MOMENTUM (12 questions)
        { question: "2 kg object at 6 m/s has momentum of:", options: ["3 kg·m/s", "12 kg·m/s", "6 kg·m/s", "8 kg·m/s"], correct: 1, difficulty: "easy" },
        { question: "Which has more momentum: 1 kg at 10 m/s or 2 kg at 4 m/s?", options: ["1 kg at 10 m/s", "2 kg at 4 m/s", "Equal", "Cannot determine"], correct: 0, difficulty: "easy" },
        { question: "3 kg at 5 m/s collides 2 kg at rest, stick together. Final velocity?", options: ["3 m/s", "2.5 m/s", "5 m/s", "7.5 m/s"], correct: 0, difficulty: "medium" },
        { question: "0.5 kg ball hits wall at 10 m/s, bounces at 8 m/s. Change in momentum?", options: ["-9 kg·m/s", "9 kg·m/s", "-1 kg·m/s", "2 kg·m/s"], correct: 0, difficulty: "medium" },
        { question: "Conservation of momentum applies to:", options: ["All collisions", "Only elastic", "Only inelastic", "Never"], correct: 0, difficulty: "medium" },
        { question: "0.2 kg baseball, 0 to 40 m/s in 0.002 s. Average force?", options: ["4000 N", "8000 N", "400 N", "100 N"], correct: 0, difficulty: "medium" },
        { question: "Two identical balls collide elastically. A: 5 m/s, B: rest. After?", options: ["A stops, B at 5 m/s", "Both at 2.5 m/s", "A at -5 m/s", "Both at 5 m/s"], correct: 0, difficulty: "hard" },
        { question: "Impulse with 20 N force for 3 seconds?", options: ["6.67 kg·m/s", "60 kg·m/s", "17 kg·m/s", "20 kg·m/s"], correct: 1, difficulty: "hard" },
        { question: "Cart 4 kg at 6 m/s hits 2 kg at 1 m/s (same direction). Stick. Final velocity?", options: ["2.67 m/s", "3.5 m/s", "4.33 m/s", "5 m/s"], correct: 2, difficulty: "hard" },
        { question: "Before collision: 3 kg at 4 m/s, 2 kg at 0 m/s. Elastic collision. After?", options: ["1.6 m/s, 2.4 m/s", "2 m/s, 2 m/s", "3 m/s, 1 m/s", "4 m/s, 0 m/s"], correct: 0, difficulty: "hard" },
        { question: "Explosive: 10 kg splits into 4 kg and 6 kg. 4 kg at 5 m/s. 6 kg velocity?", options: ["1.67 m/s", "-3.33 m/s", "3.33 m/s", "5 m/s"], correct: 1, difficulty: "hard" },
        { question: "Two moving objects collide. What is always conserved?", options: ["KE", "PE", "Momentum", "All energy"], correct: 2, difficulty: "hard" },

        // WAVES (12 questions)
        { question: "Wave equation?", options: ["v = f + λ", "v = fλ", "v = f/λ", "v = λ/f"], correct: 1, difficulty: "easy" },
        { question: "Wave frequency 10 Hz. Period?", options: ["0.1 s", "1 s", "10 s", "0.01 s"], correct: 0, difficulty: "easy" },
        { question: "Sound travels fastest through:", options: ["Air", "Water", "Solid", "Vacuum"], correct: 2, difficulty: "easy" },
        { question: "Period-frequency relation:", options: ["T = 2f", "T = f/2", "T = 1/f", "T = f"], correct: 2, difficulty: "easy" },
        { question: "Wavelength at 5 Hz, speed 10 m/s?", options: ["0.5 m", "2 m", "50 m", "5 m"], correct: 1, difficulty: "medium" },
        { question: "Sound 343 m/s frequency 440 Hz. Wavelength?", options: ["0.78 m", "1.28 m", "151 m", "783 Hz"], correct: 0, difficulty: "medium" },
        { question: "Doppler effect occurs when:", options: ["Always", "Source and observer move", "Only source moves", "Only observer moves"], correct: 1, difficulty: "medium" },
        { question: "Transverse wave:", options: ["Parallel to direction", "Perpendicular to direction", "At 45°", "All directions"], correct: 1, difficulty: "medium" },
        { question: "Longitudinal wave example:", options: ["Light", "Water waves", "Sound", "Radio"], correct: 2, difficulty: "hard" },
        { question: "Resonance occurs at:", options: ["Any frequency", "Natural frequency", "High frequency", "Low frequency"], correct: 1, difficulty: "hard" },
        { question: "Two waves destructive interference:", options: ["In phase", "90° out of phase", "180° out of phase", "Random"], correct: 2, difficulty: "hard" },
        { question: "Amplitude change affects:", options: ["Pitch", "Frequency", "Loudness", "Wavelength"], correct: 2, difficulty: "hard" },

        // CIRCULAR MOTION (10 questions)
        { question: "Centripetal acceleration formula?", options: ["v²r", "v²/r", "vr", "v/r²"], correct: 1, difficulty: "easy" },
        { question: "Centripetal force directed:", options: ["Outward", "Tangent", "Toward center", "Downward"], correct: 2, difficulty: "easy" },
        { question: "Angular velocity units?", options: ["m/s", "rad/s", "Hz", "rpm"], correct: 1, difficulty: "easy" },
        { question: "2 m radius, 5 m/s speed. Centripetal accel?", options: ["2.5 m/s²", "10 m/s²", "12.5 m/s²", "5 m/s²"], correct: 2, difficulty: "medium" },
        { question: "Universal gravitation: G value?", options: ["6.674 × 10⁻¹¹", "9.8 × 10⁻³", "3 × 10⁸", "6.626 × 10⁻³⁴"], correct: 0, difficulty: "medium" },
        { question: "Escape velocity from Earth ≈:", options: ["1 km/s", "11.2 km/s", "100 km/s", "343 m/s"], correct: 1, difficulty: "medium" },
        { question: "Kepler's third law: T² ∝", options: ["r", "r²", "r³", "r⁴"], correct: 2, difficulty: "hard" },
        { question: "Orbital velocity at Earth's surface (R ≈ 6.37 × 10⁶ m)?", options: ["7.9 km/s", "11.2 km/s", "1 km/s", "343 m/s"], correct: 0, difficulty: "hard" },
        { question: "Geostationary orbit period:", options: ["12 hours", "24 hours", "1 year", "1 month"], correct: 1, difficulty: "hard" },
        { question: "Moon orbital radius ≈ 384,000 km. Period ≈:", options: ["7 days", "14 days", "27.3 days", "30 days"], correct: 2, difficulty: "hard" },

        // FLUIDS (10 questions)
        { question: "Pressure formula?", options: ["P = A/F", "P = F/A", "P = FA", "P = F + A"], correct: 1, difficulty: "easy" },
        { question: "Hydrostatic pressure formula?", options: ["P = ρg", "P = ρh", "P = ρgh", "P = ρgv"], correct: 2, difficulty: "easy" },
        { question: "Pascal's Principle means:", options: ["Pressure varies with area", "Pressure transmitted equally", "Pressure decreases with depth", "Pressure increases with volume"], correct: 1, difficulty: "easy" },
        { question: "Archimedes Buoyant force equals:", options: ["Weight of object", "Volume × g", "Weight of displaced fluid", "Object density × volume"], correct: 2, difficulty: "medium" },
        { question: "Object floats if density:", options: ["Greater than fluid", "Less than fluid", "Equal to fluid", "Twice fluid"], correct: 1, difficulty: "medium" },
        { question: "Bernoulli equation:", options: ["P = ½ρv²", "P + ½ρv² + ρgh = constant", "P = ρgh", "P = F/A"], correct: 1, difficulty: "medium" },
        { question: "Continuity A₁v₁ = A₂v₂ means:", options: ["Force conserved", "Volume flow conserved", "Velocity same", "Area same"], correct: 1, difficulty: "hard" },
        { question: "Pressure at 10 m depth in water? (ρ = 1000 kg/m³, g = 10)", options: ["100 kPa", "100 Pa", "200 kPa", "10 kPa"], correct: 0, difficulty: "hard" },
        { question: "Lift on airplane wing from:", options: ["Bernoulli effect", "Pressure difference", "Velocity difference", "All above"], correct: 3, difficulty: "hard" },
        { question: "Viscosity affects:", options: ["Pressure only", "Flow resistance", "Temperature", "Density"], correct: 1, difficulty: "hard" },

        // THERMODYNAMICS (10 questions)
        { question: "Heat vs Temperature:", options: ["Same thing", "Heat = energy transfer", "Temperature = average KE", "B and C"], correct: 3, difficulty: "easy" },
        { question: "First Law ΔU = Q - W. W is:", options: ["Heat input", "Work by system", "Work on system", "Change in PE"], correct: 1, difficulty: "easy" },
        { question: "Second Law:", options: ["Entropy decreases", "Entropy constant", "Entropy increases", "Entropy optional"], correct: 2, difficulty: "easy" },
        { question: "Heat capacity formula:", options: ["C = Q/m", "C = Q/T", "C = mT", "C = Q·T"], correct: 1, difficulty: "medium" },
        { question: "Specific heat water ≈:", options: ["100 J/kg·K", "1000 J/kg·K", "4200 J/kg·K", "42000 J/kg·K"], correct: 2, difficulty: "medium" },
        { question: "Ideal gas law:", options: ["P = nRT", "PV = nRT", "PV/T = constant", "B and C"], correct: 3, difficulty: "medium" },
        { question: "Heat required to raise 2 kg water 10°C? (c = 4200)", options: ["84 J", "8400 J", "84000 J", "840000 J"], correct: 2, difficulty: "hard" },
        { question: "Latent heat of fusion is:", options: ["Heat to melt", "Heat to evaporate", "Temperature change", "Energy per unit mass"], correct: 0, difficulty: "hard" },
        { question: "At absolute zero (0 K):", options: ["No KE", "Minimal KE", "Maximum PE", "Heat stops"], correct: 1, difficulty: "hard" },
        { question: "Thermal conductivity unit:", options: ["W/m·K", "J/kg·K", "Pa", "m/s"], correct: 0, difficulty: "hard" },

        // ELECTROSTATICS (10 questions)
        { question: "Charge SI unit?", options: ["Volt", "Coulomb", "Ampere", "Ohm"], correct: 1, difficulty: "easy" },
        { question: "Coulomb's Law constant k ≈:", options: ["6.674 × 10⁻¹¹", "3 × 10⁸", "8.99 × 10⁹", "9.8 m/s²"], correct: 2, difficulty: "easy" },
        { question: "Electric field defined as:", options: ["Charge per force", "Force per charge", "Potential per charge", "Charge per voltage"], correct: 1, difficulty: "easy" },
        { question: "Like charges:", options: ["Attract", "Repel", "No force", "Neutral"], correct: 1, difficulty: "easy" },
        { question: "Force between 2 C and 3 C at 1 m? (k ≈ 9 × 10⁹)", options: ["5.4 N", "54 N", "5.4 × 10⁹ N", "54 × 10⁹ N"], correct: 2, difficulty: "medium" },
        { question: "Electric potential unit?", options: ["Coulomb", "Watt", "Volt", "Joule"], correct: 2, difficulty: "medium" },
        { question: "Capacitance formula:", options: ["C = QV", "C = Q/V", "C = V/Q", "C = Q + V"], correct: 1, difficulty: "medium" },
        { question: "Parallel plate capacitor C = ε₀εᵣ(?):", options: ["A/d", "d/A", "Ad", "A + d"], correct: 0, difficulty: "hard" },
        { question: "Electric field between plates (uniform):", options: ["V/d", "Vd", "d/V", "V × d"], correct: 0, difficulty: "hard" },
        { question: "Energy stored in capacitor:", options: ["U = CV", "U = ½CV²", "U = QV", "U = CV/2"], correct: 1, difficulty: "hard" },

        // MAGNETISM (8 questions)
        { question: "Magnetic force on moving charge:", options: ["F = qvB", "F = qvB sin θ", "F = qB/v", "F = qB sin θ"], correct: 1, difficulty: "easy" },
        { question: "Lorentz force:", options: ["F = qE", "F = qvB", "F = q(E + v×B)", "F = qE/v"], correct: 2, difficulty: "medium" },
        { question: "Magnetic field around wire:", options: ["Radial", "Circular", "Tangent", "Random"], correct: 1, difficulty: "medium" },
        { question: "Right-hand rule fingers:", options: ["v direction", "B direction", "F direction", "B and F"], correct: 0, difficulty: "medium" },
        { question: "Magnetic flux:", options: ["Φ = BA", "Φ = BA cos θ", "Φ = B/A", "Φ = A/B"], correct: 1, difficulty: "hard" },
        { question: "Faraday's Law:", options: ["ε = dΦ/dt", "ε = -dΦ/dt", "ε = Φ/dt", "ε = d(Φ/t)"], correct: 1, difficulty: "hard" },
        { question: "Induced EMF opposes:", options: ["Original motion", "Original field", "Flux change", "All above"], correct: 2, difficulty: "hard" },
        { question: "Magnetic force direction (positive q):", options: ["Parallel to v", "Perpendicular to v", "Along B", "Toward B"], correct: 1, difficulty: "hard" },

        // OPTICS (8 questions)
        { question: "Speed of light c ≈:", options: ["3 × 10⁶ m/s", "3 × 10⁸ m/s", "3 × 10¹⁰ m/s", "3 × 10⁵ m/s"], correct: 1, difficulty: "easy" },
        { question: "Law of reflection θᵢ =:", options: ["θᵣ", "90° - θᵣ", "2θᵣ", "θᵣ/2"], correct: 0, difficulty: "easy" },
        { question: "Snell's Law:", options: ["n₁θ₁ = n₂θ₂", "n₁ sin θ₁ = n₂ sin θ₂", "sin θ₁ = sin θ₂", "n₁/n₂ = θ₁/θ₂"], correct: 1, difficulty: "medium" },
        { question: "Lens equation 1/f =:", options: ["1/s_o + 1/s_i", "1/s_o - 1/s_i", "s_o + s_i", "s_o/s_i"], correct: 0, difficulty: "medium" },
        { question: "Magnification M =:", options: ["s_o/s_i", "-s_i/s_o", "s_i/s_o", "f/s_o"], correct: 1, difficulty: "medium" },
        { question: "Diffraction occurs when light:", options: ["Reflects", "Refracts", "Bends around objects", "Travels straight"], correct: 2, difficulty: "hard" },
        { question: "Double slit interference bright:", options: ["Path diff = (m+½)λ", "Path diff = mλ", "Path diff = 2λ", "No phase diff"], correct: 1, difficulty: "hard" },
        { question: "Critical angle for total internal reflection:", options: ["sin θc = n₁/n₂", "sin θc = n₂/n₁", "θc = n₁/n₂", "θc = n₂/n₁"], correct: 1, difficulty: "hard" },

        // MODERN PHYSICS (8 questions)
        { question: "Photon energy formula:", options: ["E = hf", "E = mc²", "E = ½hf", "E = hf/c"], correct: 0, difficulty: "easy" },
        { question: "Planck constant h ≈:", options: ["6.674 × 10⁻¹¹", "6.626 × 10⁻³⁴", "9.109 × 10⁻³¹", "1.602 × 10⁻¹⁹"], correct: 1, difficulty: "easy" },
        { question: "Photoelectric effect: hf =", options: ["KE", "Φ", "KE + Φ", "KE - Φ"], correct: 2, difficulty: "medium" },
        { question: "De Broglie wavelength λ =:", options: ["h/(mv)", "mv/h", "hv/m", "mh/v"], correct: 0, difficulty: "medium" },
        { question: "Bohr model energy levels:", options: ["Continuous", "Discrete", "Random", "Linear"], correct: 1, difficulty: "medium" },
        { question: "Ground state Bohr hydrogen E₁ =:", options: ["0 eV", "-13.6 eV", "13.6 eV", "-27.2 eV"], correct: 1, difficulty: "hard" },
        { question: "Mass-energy equivalence:", options: ["E = mc", "E = mc²", "E = mc³", "E = m/c²"], correct: 1, difficulty: "hard" },
        { question: "Radioactive decay: N(t) =:", options: ["N₀e^(λt)", "N₀e^(-λt)", "N₀/(λt)", "N₀ - λt"], correct: 1, difficulty: "hard" },

        // RELATIVITY (7 questions)
        { question: "Time dilation: t =", options: ["t₀√(1 - v²/c²)", "t₀/√(1 - v²/c²)", "t₀(1 - v²/c²)", "t₀ - v²/c²"], correct: 1, difficulty: "hard" },
        { question: "Length contraction: L =", options: ["L₀√(1 - v²/c²)", "L₀/√(1 - v²/c²)", "L₀(1 - v/c)", "L₀(1 - v²/c²)"], correct: 0, difficulty: "hard" },
        { question: "Lorentz factor γ =", options: ["1 - v²/c²", "√(1 - v²/c²)", "1/√(1 - v²/c²)", "(1 - v²/c²)²"], correct: 2, difficulty: "hard" },
        { question: "Relativistic momentum p =", options: ["γm₀v", "m₀v", "m₀v²", "γm₀c"], correct: 0, difficulty: "hard" },
        { question: "Spacetime interval Δs² =", options: ["(Δx)²", "(cΔt)² + (Δx)²", "(cΔt)² - (Δx)²", "(Δx)² - (cΔt)²"], correct: 2, difficulty: "hard" },
        { question: "At v = 0.9c, time dilation factor γ ≈:", options: ["0.9", "1.5", "2.29", "10"], correct: 2, difficulty: "hard" },
        { question: "Light always travels at c:", options: ["In all frames", "Relative to observer", "In vacuum only", "On average"], correct: 0, difficulty: "hard" },

        // SIMPLE HARMONIC MOTION (12 questions) - NEW!
        { question: "In SHM, acceleration a =:", options: ["-ωx", "-ω²x", "ωx²", "ω²x"], correct: 1, difficulty: "easy" },
        { question: "Period of oscillation T relates to frequency f as:", options: ["T = f", "T = 2πf", "T = 1/f", "T = f²"], correct: 2, difficulty: "easy" },
        { question: "Mass on spring oscillates. Doubling the mass:", options: ["Halves period", "Doubles period", "Increases by √2", "No effect"], correct: 2, difficulty: "easy" },
        { question: "Simple pendulum with length L. Period is:", options: ["2π√(L/g)", "2π√(m/L)", "2π√(g/L)", "2πL/g"], correct: 0, difficulty: "easy" },
        { question: "SHM: Maximum velocity occurs at:", options: ["Maximum displacement", "Equilibrium position", "Zero acceleration", "Quarter period"], correct: 1, difficulty: "medium" },
        { question: "Spring with k=100 N/m, m=1 kg. Angular frequency ω =:", options: ["10 rad/s", "100 rad/s", "1 rad/s", "√10 rad/s"], correct: 0, difficulty: "medium" },
        { question: "Energy in SHM oscillates between:", options: ["KE and PE", "KE and work", "PE and temperature", "Momentum and KE"], correct: 0, difficulty: "medium" },
        { question: "Damped oscillation: amplitude decreases because of:", options: ["Gravity", "Friction/resistance", "Spring constant", "Mass"], correct: 1, difficulty: "medium" },
        { question: "For pendulum: gravity g increases. Period T:", options: ["Increases", "Decreases", "Stays same", "Becomes zero"], correct: 1, difficulty: "hard" },
        { question: "Resonance occurs when driving frequency =:", options: ["Natural frequency", "Twice natural", "Half natural", "Random"], correct: 0, difficulty: "hard" },
        { question: "Mass on spring: v_max = Aω. If A doubles and ω halves, v_max:", options: ["Doubles", "Halves", "Stays same", "Quadruples"], correct: 2, difficulty: "hard" },
        { question: "Simple pendulum vs spring: Period depends on mass?", options: ["Both", "Pendulum only", "Spring only", "Neither"], correct: 2, difficulty: "hard" },

        // ADDITIONAL EXAM-STYLE QUESTIONS (Mixed Topics)
        { question: "Object slides down frictionless incline. Which is conserved?", options: ["KE only", "PE only", "Momentum only", "Mechanical energy"], correct: 3, difficulty: "medium" },
        { question: "Elastic collision between equal masses, one at rest. Result:", options: ["Both stationary", "First stops, second moves", "Both move together", "First rebounds"], correct: 1, difficulty: "hard" },
        { question: "Standing wave: nodes occur where:", options: ["Amplitude max", "Displacement zero", "Velocity max", "Phase = π"], correct: 1, difficulty: "hard" },
        { question: "Pressure in fluid at depth h: P = P₀ + ρgh. This assumes:", options: ["Constant density", "Constant temperature", "No motion", "Ideal fluid"], correct: 0, difficulty: "medium" },
        { question: "Heat capacity C = Q/(m·ΔT). Units are:", options: ["J/kg·K", "J/K", "kg·K/J", "K/J"], correct: 0, difficulty: "easy" },
        { question: "Entropy increases in:", options: ["Reversible process", "Ideal gas expansion", "Isolated system", "Freezing water"], correct: 2, difficulty: "hard" },
        { question: "Equipotential surfaces are perpendicular to:", options: ["Field lines", "Velocity", "Magnetic field", "Gravity"], correct: 0, difficulty: "medium" },
        { question: "Transformer voltage relation: V₁/V₂ =:", options: ["I₂/I₁", "N₁/N₂", "R₁/R₂", "P₁/P₂"], correct: 1, difficulty: "medium" },
        { question: "Thin lens focal length: 1/f = 1/s_o + 1/s_i. Object at f: Image at:", options: ["f", "∞", "0", "2f"], correct: 1, difficulty: "medium" },
        { question: "Hydrogen atom: electron in n=2. To ionize needs:", options: ["3.4 eV", "6.8 eV", "10.2 eV", "13.6 eV"], correct: 0, difficulty: "hard" },
        { question: "Wave: λ = 0.5 m, v = 20 m/s. Frequency f =:", options: ["10 Hz", "40 Hz", "0.025 Hz", "100 Hz"], correct: 0, difficulty: "easy" },
        { question: "Circular motion: centripetal acceleration a_c =:", options: ["v/r", "v²/r", "vr", "v/r²"], correct: 1, difficulty: "easy" },
        { question: "Escape velocity from Earth: v_e = √(2GM/R). What does it depend on?", options: ["Planet mass only", "Planet radius only", "Both M and R", "Speed at surface"], correct: 2, difficulty: "hard" },
        { question: "Buoyant force equals weight of:", options: ["Object", "Displaced fluid", "Container", "Surrounding air"], correct: 1, difficulty: "easy" },
        { question: "Ideal gas: PV = nRT. At constant T and V, P increases with:", options: ["Temperature", "Number of moles", "Volume", "Pressure"], correct: 1, difficulty: "easy" }
    ],

    problems: {
        kinematics: [
            { title: "Constant Acceleration", statement: "Car accelerates from rest to 30 m/s over 150 m. Find acceleration and time.", solution: "v² = v₀² + 2as: 900 = 0 + 2a(150) → a = 3 m/s²\nv = v₀ + at: 30 = 0 + 3t → t = 10 s" },
            { title: "Free Fall", statement: "Object dropped from 45 m height. Time to hit ground? (g = 10 m/s²)", solution: "s = v₀t + ½gt²\n45 = 0 + ½(10)t²\nt = 3 seconds" },
            { title: "Projectile Motion", statement: "Ball thrown horizontally at 15 m/s from cliff. Hits ground in 3 s. Height and horizontal distance? (g = 10)", solution: "Vertical: h = ½gt² = ½(10)(9) = 45 m\nHorizontal: d = vt = 15 × 3 = 45 m" },
            { title: "Two-Body Kinematics", statement: "Car A at constant 20 m/s, Car B starts from rest at 2 m/s². When same velocity?", solution: "v_A = 20 m/s constant\nv_B = 2t\n20 = 2t → t = 10 seconds" },
            { title: "Relative Velocity", statement: "Train 60 m/s, ball 5 m/s inside. Velocity relative to ground?", solution: "Same direction: v_total = 60 + 5 = 65 m/s\nOpposite direction: v_total = |60 - 5| = 55 m/s" }
        ],
        forces: [
            { title: "Net Force", statement: "Forces on 5 kg: 20 N right, 8 N left. Find acceleration.", solution: "F_net = 20 - 8 = 12 N\na = F/m = 12/5 = 2.4 m/s²" },
            { title: "Friction", statement: "10 kg box, friction coefficient 0.2. Friction force? (g = 10)", solution: "N = mg = 100 N\nf = μN = 0.2 × 100 = 20 N" },
            { title: "Inclined Plane", statement: "5 kg on 30° incline, μ = 0.1. Net force down? (g = 10)", solution: "Component: mg sin(30°) = 50 × 0.5 = 25 N\nNormal: N = mg cos(30°) = 50 × 0.866 = 43.3 N\nFriction: f = 4.33 N\nNet = 25 - 4.33 = 20.67 N" },
            { title: "Connected Masses", statement: "3 kg and 2 kg connected by rope. 25 N pulls 3 kg. Tension? (no friction)", solution: "Total mass = 5 kg, a = 25/5 = 5 m/s²\nTension = 2 × 5 = 10 N" },
            { title: "Atwood Machine", statement: "Masses 5 kg and 3 kg hanging. Find acceleration. (g = 10)", solution: "Net force = (5-3)g = 20 N\nTotal mass = 8 kg\na = 20/8 = 2.5 m/s²" }
        ],
        energy: [
            { title: "KE and PE", statement: "2 kg ball thrown up at 20 m/s. KE and PE at max height? (g = 10)", solution: "At max: v = 0, KE = 0\nh_max = v²/(2g) = 400/20 = 20 m\nPE = mgh = 2 × 10 × 20 = 400 J" },
            { title: "Work", statement: "50 N force at 60° moves object 10 m. Work done?", solution: "W = F·d·cos(θ) = 50 × 10 × cos(60°)\nW = 500 × 0.5 = 250 J" },
            { title: "Energy Conservation", statement: "1 kg ball falls 50 m. Velocity before impact? (g = 10)", solution: "PE = KE\nmgh = ½mv²\n10 × 50 = ½v²\nv² = 1000 → v ≈ 31.6 m/s" },
            { title: "Power", statement: "Motor does 5000 J in 10 seconds. Power output?", solution: "P = W/t = 5000/10 = 500 W" },
            { title: "Spring Energy", statement: "Spring constant 200 N/m compressed 0.5 m. Elastic PE?", solution: "PE = ½kx² = ½ × 200 × (0.5)²\nPE = 100 × 0.25 = 25 J" }
        ],
        momentum: [
            { title: "Momentum", statement: "0.5 kg ball hits wall at 10 m/s, bounces at 8 m/s. Change in momentum?", solution: "p_i = 0.5 × 10 = 5 kg·m/s (forward)\np_f = 0.5 × (-8) = -4 kg·m/s (backward)\nΔp = -4 - 5 = -9 kg·m/s" },
            { title: "Inelastic Collision", statement: "3 kg at 5 m/s hits 2 kg at rest, stick together. Final velocity?", solution: "m₁v₁ = (m₁ + m₂)v_f\n3(5) = 5v_f\nv_f = 3 m/s" },
            { title: "Impulse", statement: "0.2 kg baseball 0→40 m/s in 0.002 s. Average force?", solution: "Δp = 0.2 × 40 = 8 kg·m/s\nF = Δp/Δt = 8/0.002 = 4000 N" },
            { title: "Elastic Collision", statement: "Ball A (2 kg) at 6 m/s hits Ball B (4 kg) at 2 m/s. Velocities after?", solution: "Using elastic formulas:\nv_A = ((2-4)6 + 2(4)2)/(6) = (-12+16)/6 ≈ 0.67 m/s\nv_B ≈ 3.33 m/s" },
            { title: "Explosion", statement: "10 kg object explodes into 4 kg and 6 kg. 4 kg at 5 m/s. Speed of 6 kg?", solution: "Initial p = 0\n4(5) + 6(v) = 0\nv = -20/6 ≈ -3.33 m/s" }
        ],
        waves: [
            { title: "Wave Properties", statement: "Sound wave frequency 440 Hz, speed 343 m/s. Wavelength?", solution: "v = fλ\nλ = v/f = 343/440 ≈ 0.78 m" },
            { title: "Period and Frequency", statement: "Wave oscillates 100 times in 5 seconds. Period and frequency?", solution: "f = 100/5 = 20 Hz\nT = 1/f = 1/20 = 0.05 s" },
            { title: "Doppler Effect", statement: "Ambulance 340 m/s approaches you, 1000 Hz siren. Frequency heard?", solution: "f' = f(v + v_observer)/(v - v_source)\nf' ≈ 1000 × (343 + 0)/(343 - 34) ≈ 1109 Hz" },
            { title: "String Resonance", statement: "String length 1 m, fundamental frequency 256 Hz. Wave speed?", solution: "λ = 2L = 2 m (fundamental)\nv = fλ = 256 × 2 = 512 m/s" },
            { title: "Interference", statement: "Two speakers 2 m apart, sound 340 m/s, 1700 Hz. Where constructive?", solution: "λ = 340/1700 = 0.2 m\nPath difference = nλ for bright\nAt certain distances: 0.2, 0.4, 0.6... m" }
        ],
        circular: [
            { title: "Centripetal Force", statement: "2 kg object, 3 m radius, 6 m/s speed. Centripetal force?", solution: "F_c = mv²/r = 2 × (6)²/3\nF_c = 2 × 36/3 = 24 N" },
            { title: "Angular Velocity", statement: "Wheel rotates 120 times per minute. Angular velocity?", solution: "ω = 2πf = 2π(120/60) = 4π rad/s ≈ 12.57 rad/s" },
            { title: "Orbital Motion", statement: "Planet mass 6 × 10²⁴ kg, orbital radius 1.5 × 10¹¹ m. Orbital velocity?", solution: "v = √(GM/r) = √((6.67×10⁻¹¹ × 6×10²⁴)/(1.5×10¹¹))\nv ≈ 29.8 km/s" },
            { title: "Escape Velocity", statement: "Moon: M = 7.3 × 10²², R = 1.7 × 10⁶ m. Escape velocity?", solution: "v_e = √(2GM/R) = √((2 × 6.67×10⁻¹¹ × 7.3×10²²)/(1.7×10⁶))\nv_e ≈ 2.38 km/s" },
            { title: "Conical Pendulum", statement: "Mass 1 kg, string 1 m, 45° angle. Required speed?", solution: "T cos(45°) = mg\nT sin(45°) = mv²/r\nr = L sin(45°) = 0.707 m\nv = √(gr tan(45°)) ≈ 3.13 m/s" }
        ],
        fluids: [
            { title: "Pressure at Depth", statement: "Pressure at 20 m depth in water? (ρ = 1000 kg/m³, g = 10)", solution: "P = ρgh = 1000 × 10 × 20\nP = 200,000 Pa = 200 kPa" },
            { title: "Buoyant Force", statement: "1 m³ cube submerged in water. Buoyant force? (ρ_water = 1000)", solution: "F_b = ρVg = 1000 × 1 × 10\nF_b = 10,000 N" },
            { title: "Floating Object", statement: "Boat density 400 kg/m³. What fraction submerged?", solution: "ρ_object/ρ_fluid = fraction submerged\n400/1000 = 0.4 = 40%" },
            { title: "Continuity", statement: "Pipe: A₁ = 0.1 m², v₁ = 2 m/s; A₂ = 0.05 m². Find v₂?", solution: "A₁v₁ = A₂v₂\n0.1 × 2 = 0.05 × v₂\nv₂ = 4 m/s" },
            { title: "Bernoulli's Equation", statement: "Large tank open, hole at bottom 1 m down. Exit velocity?", solution: "P_top + ½ρv_top² + ρgh_top = P_hole + ½ρv_hole² + ρgh_hole\nNeglecting heights: v ≈ √(2gh) = √(2 × 10 × 1) ≈ 4.47 m/s" }
        ],
        thermodynamics: [
            { title: "Heat Transfer", statement: "Heat needed to raise 2 kg water 10°C? (c = 4200 J/kg·K)", solution: "Q = mcΔT = 2 × 4200 × 10\nQ = 84,000 J = 84 kJ" },
            { title: "Ideal Gas", statement: "1 mol gas at 300 K, 100,000 Pa. Volume? (R = 8.314)", solution: "PV = nRT\nV = nRT/P = 1 × 8.314 × 300 / 100,000\nV ≈ 0.0249 m³ = 24.9 L" },
            { title: "First Law", statement: "System absorbs 5000 J heat, does 2000 J work. ΔU?", solution: "ΔU = Q - W = 5000 - 2000\nΔU = 3000 J" },
            { title: "Specific Heat", statement: "100 g metal, 50°C→20°C, releases 1500 J. Specific heat?", solution: "Q = mcΔT\n1500 = 0.1 × c × (-30)\nc = 1500 / (-3) = 500 J/kg·K" },
            { title: "Thermal Conductivity", statement: "Rod 1 m, cross-section 0.01 m², k = 50, ΔT = 100°C. Heat flow rate?", solution: "Q/t = kA(ΔT/L) = 50 × 0.01 × (100/1)\nQ/t = 50 W" }
        ],
        electrostatics: [
            { title: "Coulomb Force", statement: "Charges 2 C and 3 C at 1 m distance. Force? (k ≈ 9 × 10⁹)", solution: "F = k(q₁q₂)/r² = 9×10⁹ × (2 × 3) / 1²\nF = 54 × 10⁹ N" },
            { title: "Electric Field", statement: "Charge 10 C creates field. Field at 2 m? (k = 9 × 10⁹)", solution: "E = kQ/r² = 9×10⁹ × 10 / 4\nE = 22.5 × 10⁹ N/C" },
            { title: "Electric Potential", statement: "Charge 5 C at origin. Potential at 0.5 m? (k = 9 × 10⁹)", solution: "V = kQ/r = 9×10⁹ × 5 / 0.5\nV = 90 × 10⁹ V = 90 GV" },
            { title: "Capacitor", statement: "C = 10 μF, V = 100 V. Charge and energy?", solution: "Q = CV = 10×10⁻⁶ × 100 = 10⁻³ C = 1 mC\nU = ½CV² = ½ × 10×10⁻⁶ × 10,000 = 0.05 J" },
            { title: "Parallel Plate", statement: "ε₀ = 8.85×10⁻¹², A = 0.01 m², d = 1 mm. Capacitance?", solution: "C = ε₀A/d = 8.85×10⁻¹² × 0.01 / 0.001\nC = 88.5 × 10⁻¹² = 88.5 pF" }
        ],
        magnetism: [
            { title: "Magnetic Force", statement: "Charge 2 C, 5 m/s, B = 3 T. Force?", solution: "F = qvB sin(90°) = 2 × 5 × 3 × 1\nF = 30 N" },
            { title: "Magnetic Field", statement: "Current 10 A in wire. B at 0.1 m? (μ₀ = 4π×10⁻⁷)", solution: "B = μ₀I/(2πr) = 4π×10⁻⁷ × 10 / (2π × 0.1)\nB = 2 × 10⁻⁵ T = 20 μT" },
            { title: "Magnetic Flux", statement: "Area 0.5 m², B = 2 T, angle 30°. Flux?", solution: "Φ = BA cos(θ) = 0.5 × 2 × cos(30°)\nΦ = 1 × 0.866 = 0.866 Wb" },
            { title: "Induced EMF", statement: "Flux changes from 1 Wb to 0 Wb in 0.1 s. EMF?", solution: "ε = -dΦ/dt = -ΔΦ/Δt = -(0-1)/0.1\nε = 10 V" },
            { title: "Motional EMF", statement: "Rod 0.5 m, v = 10 m/s, B = 2 T. EMF?", solution: "ε = BLv = 2 × 0.5 × 10\nε = 10 V" }
        ],
        optics: [
            { title: "Refraction", statement: "Light 30° to normal in air, 20° in medium. Refractive index?", solution: "n₁ sin(θ₁) = n₂ sin(θ₂)\n1 × sin(30°) = n × sin(20°)\nn = 0.5 / 0.342 ≈ 1.46" },
            { title: "Lens", statement: "f = 10 cm, s_o = 20 cm. Find s_i and magnification?", solution: "1/f = 1/s_o + 1/s_i: 1/10 = 1/20 + 1/s_i\ns_i = 20 cm\nM = -s_i/s_o = -1 (inverted, same size)" },
            { title: "Critical Angle", statement: "n₁ = 1.5, n₂ = 1. Critical angle?", solution: "sin(θ_c) = n₂/n₁ = 1/1.5\nθ_c = sin⁻¹(0.667) ≈ 41.8°" },
            { title: "Diffraction", statement: "Single slit λ = 500 nm, a = 1 mm. First minimum angle?", solution: "sin(θ) = λ/a = 500×10⁻⁹ / 0.001\nsin(θ) = 5×10⁻⁴ → θ ≈ 0.03°" },
            { title: "Double Slit", statement: "λ = 600 nm, d = 2 mm. Fringe spacing (L = 1 m)?", solution: "Δy = λL/d = 600×10⁻⁹ × 1 / 0.002\nΔy = 3×10⁻⁴ m = 0.3 mm" }
        ],
        modern: [
            { title: "Photon", statement: "Light frequency 6 × 10¹⁴ Hz. Energy? (h = 6.626×10⁻³⁴)", solution: "E = hf = 6.626×10⁻³⁴ × 6×10¹⁴\nE = 3.976 × 10⁻¹⁹ J" },
            { title: "Photoelectric", statement: "Work function 2 eV, photon 3 eV. Electron KE?", solution: "KE = hf - Φ = 3 - 2 = 1 eV" },
            { title: "De Broglie", statement: "Electron mass 9.1×10⁻³¹ kg, v = 10⁶ m/s. Wavelength?", solution: "λ = h/(mv) = 6.626×10⁻³⁴ / (9.1×10⁻³¹ × 10⁶)\nλ ≈ 7.3 × 10⁻¹⁰ m" },
            { title: "Bohr Atom", statement: "Electron n=1→n=2. Energy difference?", solution: "ΔE = 13.6(1/1² - 1/2²) = 13.6 × (1 - 0.25) = 10.2 eV" },
            { title: "Half-life", statement: "N₀ = 1000, λ = 0.1 s⁻¹. After 10 seconds?", solution: "N = N₀e^(-λt) = 1000 × e^(-0.1 × 10)\nN = 1000 × e⁻¹ ≈ 368" }
        ],
        relativity: [
            { title: "Time Dilation", statement: "Spaceship v = 0.8c. Onboard 1 hour. Time on Earth?", solution: "t = t₀/√(1 - v²/c²) = 1/√(1 - 0.64) = 1/0.6\nt ≈ 1.67 hours" },
            { title: "Length Contraction", statement: "Spaceship 100 m at rest. At 0.6c, length?", solution: "L = L₀√(1 - v²/c²) = 100 × √(1 - 0.36)\nL = 100 × 0.8 = 80 m" },
            { title: "Lorentz Factor", statement: "v = 0.9c. What is γ?", solution: "γ = 1/√(1 - 0.81) = 1/√0.19 ≈ 2.29" },
            { title: "Relativistic Momentum", statement: "m = 1 kg, v = 0.9c. Momentum?", solution: "p = γm₀v = 2.29 × 1 × 0.9c\np ≈ 2.06 × (3×10⁸) ≈ 6.18 × 10⁸ kg·m/s" },
            { title: "Mass-Energy", statement: "1 kg mass converts to energy. Energy?", solution: "E = mc² = 1 × (3×10⁸)²\nE = 9 × 10¹⁶ J" }
        ],
        shm: [
            { title: "Spring Period", statement: "Mass 500 g on spring k=100 N/m. Period?", solution: "T = 2π√(m/k) = 2π√(0.5/100)\nT = 2π√(0.005) = 2π(0.0707)\nT ≈ 0.444 seconds" },
            { title: "Pendulum Period", statement: "Pendulum length 1 m. Period? (g = 10)", solution: "T = 2π√(L/g) = 2π√(1/10)\nT = 2π(0.316) ≈ 2.0 seconds" },
            { title: "SHM Maximum Velocity", statement: "Spring: A = 0.1 m, ω = 10 rad/s. v_max?", solution: "v_max = Aω = 0.1 × 10 = 1.0 m/s" },
            { title: "SHM Energy", statement: "Spring k=200 N/m, A = 0.2 m. Total energy?", solution: "E = ½kA² = ½ × 200 × (0.2)²\nE = 100 × 0.04 = 4 J" }
        ]
    }
};
// FORMULA SHEET - All key equations by topic
physicsData.formulas = {
    kinematics: ["v = v0 + at", "s = v0t + �at�", "v� = v0� + 2as", "s = (v0 + v)t/2"],
    forces: ["F = ma", "f = �N", "F_g = mg"],
    energy: ["W = F�d", "KE = �mv�", "PE = mgh", "E = KE + PE"],
    momentum: ["p = mv", "Impulse = F�?t"],
    waves: ["v = f?", "T = 1/f"],
    circular: ["a_c = v�/r", "F_c = mv�/r", "F_g = G(m1m2)/r�"],
    fluids: ["P = F/A", "P = ?gh", "F_b = ?Vg"],
    thermodynamics: ["Q = mc?T", "PV = nRT"],
    electrostatics: ["F = kq1q2/r�", "E = kQ/r�", "V = kQ/r"],
    magnetism: ["F = qvB", "e = -dF/dt"],
    optics: ["n1 sin ?1 = n2 sin ?2", "1/f = 1/s_o + 1/s_i"],
    shm: ["T = 2pv(m/k)", "x = A cos(?t)", "E = �kA�"]
};

// VIDEO RECOMMENDATIONS
physicsData.videos = {
    kinematics: [{ title: "Kinematics", url: "https://www.youtube.com/results?search_query=kinematics+khan+academy" }],
    forces: [{ title: "Newton's Laws", url: "https://www.youtube.com/results?search_query=newtons+laws+khan+academy" }],
    energy: [{ title: "Energy Conservation", url: "https://www.youtube.com/results?search_query=energy+conservation" }],
    momentum: [{ title: "Momentum & Collisions", url: "https://www.youtube.com/results?search_query=momentum+collisions" }],
    waves: [{ title: "Waves & Sound", url: "https://www.youtube.com/results?search_query=waves+sound+physics" }],
    shm: [{ title: "Simple Harmonic Motion", url: "https://www.youtube.com/results?search_query=simple+harmonic+motion" }]
};

// REAL-WORLD APPLICATIONS
physicsData.applications = {
    kinematics: ["?? Car Braking: Stopping distance calculations", "?? Basketball: Projectile motion", "?? Airplane: Takeoff acceleration"],
    forces: ["?? Elevators: Normal force changes", "?? Rock Climbing: Tension in ropes", "?? Skiing: Friction on slopes"],
    energy: ["? Hydroelectric Dams", "??? Car Engines", "?? LED Lights"],
    momentum: ["?? Football Tackles", "?? Rocket Propulsion", "?? Billiards"],
    waves: ["?? Music & Sound", "?? Cell Phones", "?? Ultrasound"],
    circular: ["?? Ferris Wheel", "?? Planetary Orbits", "?? CDs/DVDs"],
    fluids: ["?? Water Pressure", "?? Airplane Wings", "?? Hydraulic Systems"],
    thermodynamics: ["?? Refrigerators", "?? Solar Panels", "?? Cooking"],
    electrostatics: ["? Lightning", "?? MRI Machines", "?? Chips"],
    magnetism: ["?? Compass", "?? Motors", "?? Transformers"],
    optics: ["?? Microscopes", "?? Telescopes", "?? Eyeglasses"],
    shm: ["??? Buildings", "?? Guitars", "? Clocks"]
};

// PhET SIMULATION LINKS
physicsData.simulations = {
    all: "https://phet.colorado.edu/en/simulations?subjects=physics",
    kinematics: "https://phet.colorado.edu/en/simulations/filter?subjects=physics&topics=motion",
    forces: "https://phet.colorado.edu/en/simulations/filter?subjects=physics&topics=forces-and-motion",
    waves: "https://phet.colorado.edu/en/simulations/filter?subjects=physics&topics=waves",
    energy: "https://phet.colorado.edu/en/simulations/filter?subjects=physics&topics=energy"
};

// PRACTICE EXAM GENERATOR
function generateRandomExam(questionCount = 25) {
    let exam = [];
    for (let i = 0; i < questionCount && i < physicsData.quiz.length; i++) {
        const randomIndex = Math.floor(Math.random() * physicsData.quiz.length);
        if (!exam.find(q => q === physicsData.quiz[randomIndex])) {
            exam.push(physicsData.quiz[randomIndex]);
        }
    }
    return exam;
}
