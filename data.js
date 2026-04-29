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

    // Placeholder for imported/other class content — replace with real data
    physicsData.otherClass = {
        title: "Intro to Astronomy (Imported)",
        sections: [
            { heading: "Overview", text: "This section contains lecture notes and summaries from the other class. Replace these placeholder entries with your real content (lecture text, images, links)." },
            { heading: "Lecture 1: Scales of the Universe", text: "Key concepts: astronomical units, light years, parsecs. Overview of celestial distances and measurement techniques." },
            { heading: "Lecture 2: Stellar Evolution", text: "Life cycles of stars: protostar → main sequence → red giant → white dwarf / supernova → neutron star / black hole." }
        ]
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

// ENGR 216 — Prof Ball exam prep (user-provided directives included)
physicsData.engr216 = {
    title: 'ENGR 216 — Prof Ball (Exam Prep)',
    note: 'Prof Ball expects non-standard, twisted question styles. Avoid making assumptions; always show full steps and justification.',
    guidelines: 'When solving: WRITE. DRAW. EXPLICITLY STATE ASSUMPTIONS. Eliminate the biggest uncertainties first. Use algebraic solvers and expect to manipulate differential equations ("big diffyq"). Do not rely on a single memorized formula — be ready to rearrange equations and compute components using Pythagorean decomposition where necessary.',
    topics: [
        {
            title: 'Statistics',
            steps: [
                'Identify random variables and their distributions (discrete vs continuous).',
                'Define estimators needed (mean, variance, standard deviation).',
                'Write hypotheses or required statistical quantities explicitly.',
                'Compute intermediate sums/ moments symbolically where possible before numeric substitution.',
                'Carry units and show each algebraic rearrangement; show test statistic derivation step-by-step.'
            ],
            note: 'Prof Ball will expect you to show algebraic derivations, not just a final number.'
        },
        {
            title: 'Centroids',
            steps: [
                'Sketch the region and label axes and dimensions.',
                'Decompose complex shapes into simpler known shapes (rectangles, triangles, semicircles).',
                'For each piece compute area A_i and centroid coordinates (x_i, y_i).',
                'Compute first moments ΣA_i x_i and ΣA_i y_i, then divide by total area ΣA_i.',
                'If using integration, write the integral expression for x̄ = (1/A)∫ x dA and ȳ similarly and evaluate; show substitution and limits.'
            ]
        },
        {
            title: 'UAE',
            steps: [
                'NOTE: "UAE" appears in your notes — confirm meaning with instructor (no assumptions).',
                'If it refers to a method/abbreviation, list definitions and required knowns before applying any formula.'
            ],
            note: 'Do not assume meaning for acronyms — explicitly define them on your solution sheet.'
        },
        {
            title: 'Collisions & Momentum',
            steps: [
                'Draw a diagram with all object velocities and directions; choose a positive coordinate axis.',
                'Decide if collision is elastic, perfectly inelastic, or partially elastic.',
                'Write momentum conservation vector equations: Σp_initial = Σp_final (resolve into components).',
                'If energy conservation applies (elastic), write KE equations and solve the simultaneous system; eliminate variables algebraically.',
                'If components are needed, use Pythagorean decomposition to find perpendicular components explicitly.'
            ]
        },
        {
            title: 'Rigid Body & Statics',
            steps: [
                'Draw a detailed free-body diagram labeling forces, points of application, dimensions.',
                'Choose convenient axes and locate centers of mass/pressure as required.',
                'Write equilibrium equations ΣF_x=0, ΣF_y=0, ΣM_about_point=0. State which moments you take and why.',
                'For distributed loads or bodies, replace with equivalent resultant forces and moments (compute centroids).',
                'Solve algebraically, showing each substitution and algebra step; check units and sign conventions.'
            ]
        },
        {
            title: 'Parallel Axis Theorem',
            steps: [
                'Identify the moment of inertia about the centroidal axis I_cm (use known formula or integrate).',
                'Find distance d between centroidal axis and the desired axis.',
                'Apply I = I_cm + m d^2. Use mass (not weight); treat inertia as geometric — do not fold in gravity.',
                'If multiple pieces, compute each I_i about the same reference axis using parallel-axis then sum.'
            ],
            note: 'Important: treat the centroidal inertia as independent of weight. Use mass m in the m d^2 term.'
        }
    ],
    problems: [
        { title: 'Centroid of Composite Shape', statement: 'Find the centroid (x̄, ȳ) of an L-shaped region composed of two rectangles: rectangle A (width 4 m, height 1 m) attached to rectangle B (width 1 m, height 3 m) as shown. Show full decomposition and algebraic steps.', tags: ['centroids'], solutionSkeleton: ['Draw and label regions, choose origin', 'Compute A_i and centroids x_i,y_i for each rectangle', 'Compute ΣA_i x_i and ΣA_i y_i then divide by ΣA_i', 'Show algebraic substitutions and units'], solution: 'SOLUTION:\n\nStep 1: Draw and label regions, choose origin at bottom-left of rectangle A.\n  Rectangle A: width=4 m, height=1 m (horizontal piece)\n  Rectangle B: width=1 m, height=3 m (vertical piece, sits on top-right of A)\n\n  Diagram:\n    |---B (1x3)\n    |   |\n  --+---+\n  A (4x1)\n\nStep 2: Compute areas and centroids of each rectangle.\n  Rect A: A₁ = 4 × 1 = 4 m²\n    x₁ = 4/2 = 2 m (centered horizontally)\n    y₁ = 1/2 = 0.5 m (centered vertically)\n\n  Rect B: A₂ = 1 × 3 = 3 m²\n    x₂ = 4 - 1/2 = 3.5 m (offset right, starts at x=4-1=3 m)\n    y₂ = 1 + 3/2 = 2.5 m (sits on top of A, then up 3/2)\n\nStep 3: Compute first moments.\n  ΣA_i x_i = A₁x₁ + A₂x₂ = 4(2) + 3(3.5) = 8 + 10.5 = 18.5 m³\n  ΣA_i y_i = A₁y₁ + A₂y₂ = 4(0.5) + 3(2.5) = 2 + 7.5 = 9.5 m³\n  ΣA_i = 4 + 3 = 7 m²\n\nStep 4: Compute centroid.\n  x̄ = ΣA_i x_i / ΣA_i = 18.5 / 7 = 2.64 m\n  ȳ = ΣA_i y_i / ΣA_i = 9.5 / 7 = 1.36 m\n\nFINAL ANSWER: (x̄, ȳ) = (2.64 m, 1.36 m)\nCheck: centroid should lie within the L-shape (yes, 2.64 m is between 0–4, 1.36 m is between 0–3) ✓' },
        { title: 'Collision with Angle (Vector Momentum)', statement: 'Two pucks collide on a frictionless plane: m1 = 2 kg at 4 m/s heading east collides elastically with m2 = 3 kg initially at rest. After collision, m1 moves at 1.2 m/s at 30° north of east. Find m2 velocity vector. Resolve components and show algebra.', tags: ['collisions','momentum','vectors'], solutionSkeleton: ['Draw velocity vectors and axes', 'Write Σp_x and Σp_y conservation equations', 'Solve simultaneous equations for v2_x and v2_y', 'Report magnitude and angle via Pythagorean decomposition'], solution: 'SOLUTION:\n\nStep 1: Draw velocity vectors and set up axes (x=east, y=north).\n  Before collision:\n    m1 = 2 kg, v1_initial = 4 m/s east (4, 0) m/s\n    m2 = 3 kg, v2_initial = 0 m/s at rest (0, 0) m/s\n\n  After collision:\n    m1: 1.2 m/s at 30° north of east\n      v1x_final = 1.2 cos(30°) = 1.2 × 0.866 = 1.039 m/s\n      v1y_final = 1.2 sin(30°) = 1.2 × 0.5 = 0.6 m/s\n    m2: (unknown)\n\nStep 2: Apply momentum conservation in x-direction.\n  p_x_initial = p_x_final\n  m1 v1x_i + m2 v2x_i = m1 v1x_f + m2 v2x_f\n  2(4) + 3(0) = 2(1.039) + 3(v2x_f)\n  8 = 2.078 + 3 v2x_f\n  3 v2x_f = 5.922\n  v2x_f = 1.974 m/s\n\nStep 3: Apply momentum conservation in y-direction.\n  p_y_initial = p_y_final\n  m1 v1y_i + m2 v2y_i = m1 v1y_f + m2 v2y_f\n  2(0) + 3(0) = 2(0.6) + 3(v2y_f)\n  0 = 1.2 + 3 v2y_f\n  v2y_f = -0.4 m/s\n\nStep 4: Compute magnitude and angle.\n  |v2_f| = √(v2x_f² + v2y_f²) = √(1.974² + (-0.4)²) = √(3.896 + 0.16) = √4.056 = 2.014 m/s\n  θ = arctan(v2y_f / v2x_f) = arctan(-0.4 / 1.974) = arctan(-0.203) = -11.45° (south of east)\n\nFINAL ANSWER: v2 = 2.01 m/s at 11.45° south of east, or (1.97, -0.4) m/s in component form.\nVerify energy (elastic): KE_initial = 0.5(2)(4²) = 16 J; KE_final = 0.5(2)(1.039²+0.6²) + 0.5(3)(1.974²+0.4²) ≈ 16 J ✓' },
        { title: 'Rigid Body: Reaction Forces & Moments', statement: 'A uniform beam length 6 m and weight 800 N is supported at left end A (pin) and right end B (roller). A point load 1200 N is applied 2 m from A. Find reaction forces at A and B. Show FBD and moment equation steps.', tags: ['statics','rigid body'], solutionSkeleton: ['Draw FBD with support reactions', 'Write ΣM_about_A = 0 to find reaction at B', 'Write ΣF_y = 0 to find reaction at A', 'Check units and sign conventions'], solution: 'SOLUTION:\n\nStep 1: Draw FBD.\n  Beam: length 6 m, weight 800 N at center (3 m from A)\n  Support A (pin): vertical reaction R_A (unknown)\n  Support B (roller): vertical reaction R_B (unknown)\n  Applied load: 1200 N downward at 2 m from A\n\n  FBD Diagram:\n    ↑ R_A              1200 N ↓       ↑ R_B\n    |__________________|__________________|  \n    A                  2 m            B\n    |← center W=800 N @ 3 m from A →|\n    |←────────── 6 m ────────────→|\n\nStep 2: Sum moments about point A to eliminate R_A.\n  ΣM_A = 0 (taking counterclockwise as positive)\n  -800(3) - 1200(2) + R_B(6) = 0\n  -2400 - 2400 + 6 R_B = 0\n  6 R_B = 4800\n  R_B = 800 N (upward) ✓\n\nStep 3: Sum vertical forces to find R_A.\n  ΣF_y = 0\n  R_A - 800 - 1200 + R_B = 0\n  R_A + 800 = 2000\n  R_A = 1200 N (upward) ✓\n\nStep 4: Verify with moment about B.\n  ΣM_B = 0\n  R_A(6) - 800(3) - 1200(4) = 0\n  1200(6) - 2400 - 4800 = 7200 - 7200 = 0 ✓\n\nFINAL ANSWER: R_A = 1200 N (upward), R_B = 800 N (upward)\nCheck: Sum of reactions 1200 + 800 = 2000 N = sum of loads 800 + 1200 N ✓' },
        { title: 'Parallel Axis Theorem Application', statement: 'Thin rectangular plate (width 0.3 m, height 0.6 m, mass 4 kg) pivoted about an axis through one short edge parallel to centroidal axis. Compute moment of inertia about pivot using parallel-axis theorem. Show each step and clearly use mass (not weight).', tags: ['parallel axis','rigid body'], solutionSkeleton: ['Write I_cm for rectangle about centroidal axis', 'Compute distance d from centroid to pivot', 'Apply I = I_cm + m d^2', 'Show numeric substitution and units'], solution: 'SOLUTION:\n\nStep 1: Identify geometry and masses.\n  Rectangle: width (horizontal) w = 0.3 m, height (vertical) h = 0.6 m\n  Mass: m = 4 kg (use mass, NOT weight in parallel-axis)\n  Pivot axis: through one short edge (width edge), say bottom edge, parallel to centroidal axis\n\nStep 2: Compute I_cm about centroidal axis (perpendicular to plate, through center).\n  For a rectangle about its centroidal axis perpendicular to the plate:\n  I_cm = (1/12) m (w² + h²)\n  I_cm = (1/12)(4)(0.3² + 0.6²)\n  I_cm = (1/3)(0.09 + 0.36)\n  I_cm = (1/3)(0.45) = 0.15 kg·m²\n\nStep 3: Identify distance d from centroid to pivot axis.\n  Centroid is at height h/2 = 0.3 m from the bottom edge.\n  Pivot is at the bottom edge (distance 0).\n  Distance d = 0.3 m\n\nStep 4: Apply parallel-axis theorem.\n  I_pivot = I_cm + m d²\n  I_pivot = 0.15 + 4(0.3)²\n  I_pivot = 0.15 + 4(0.09)\n  I_pivot = 0.15 + 0.36\n  I_pivot = 0.51 kg·m²\n\nFINAL ANSWER: I_pivot = 0.51 kg·m²\nNote: Used mass (4 kg) NOT weight in the m d² term. This is the standard application of parallel-axis theorem for any axis location.' },
        { title: 'Statistics: Propagated Uncertainty', statement: 'A measurement x = 12.5 ± 0.3 m and y = 4.2 ± 0.1 m. Compute area A = x·y and its uncertainty using propagation of uncertainty (assume independent errors). Show symbolic derivation then numeric result.', tags: ['statistics','uncertainty'], solutionSkeleton: ['Write A = xy', 'Compute ∂A/∂x and ∂A/∂y', 'Use σ_A = √((∂A/∂x σ_x)^2 + (∂A/∂y σ_y)^2)', 'Substitute numbers and report with units'], solution: 'SOLUTION:\n\nStep 1: Define the measurement equation.\n  A = x · y (area formula)\n  x = 12.5 ± 0.3 m (σ_x = 0.3 m)\n  y = 4.2 ± 0.1 m (σ_y = 0.1 m)\n  Assume independent, random errors.\n\nStep 2: Compute partial derivatives.\n  ∂A/∂x = y\n  ∂A/∂y = x\n\nStep 3: Apply propagation-of-uncertainty formula (first-order).\n  σ_A² = (∂A/∂x)² σ_x² + (∂A/∂y)² σ_y²\n  σ_A² = y² σ_x² + x² σ_y²\n  σ_A = √(y² σ_x² + x² σ_y²)\n\nStep 4: Substitute numeric values.\n  A_nominal = 12.5 × 4.2 = 52.5 m²\n  σ_A = √((4.2)² (0.3)² + (12.5)² (0.1)²)\n  σ_A = √((17.64)(0.09) + (156.25)(0.01))\n  σ_A = √(1.5876 + 1.5625)\n  σ_A = √3.1501 = 1.775 m²\n\nStep 5: Report result with uncertainty.\n  A = 52.5 ± 1.8 m² (rounded to 1 sig fig in uncertainty)\n\nAlternatively (relative uncertainty):\n  Relative error σ_A/A = 1.775/52.5 ≈ 0.034 or 3.4%\n\nFINAL ANSWER: A = 52.5 ± 1.8 m² or (52.5 ± 3.4%) m²' },
        { title: 'Centroid by Integration (semicircle)', statement: 'Find the x-coordinate of the centroid of a semicircular lamina of radius R (flat side down) using integration. Show setup, limits and evaluation.', tags: ['centroids','integration'], solutionSkeleton: ['Choose coordinate system', 'Set up dA element and x moment integral x̄ = (1/A)∫ x dA', 'Evaluate integrals symbolically, simplify and substitute R'], solution: 'SOLUTION:\n\nStep 1: Choose coordinate system.\n  Semicircular lamina of radius R with flat edge (diameter) on the x-axis, centered at origin.\n  Semicircle extends from x = -R to x = R and y = 0 to y = √(R² - x²).\n  By symmetry, the x-coordinate of the centroid is x̄ = 0.\n\n  Note: If the problem asks for the y-coordinate instead, continue as follows.\n\nStep 2: Set up the y-coordinate integral (alternative form).\n  If finding ȳ, use horizontal strips: y = 0 to y = R.\n  At height y, the strip extends from x = -√(R² - y²) to x = √(R² - y²).\n  Length of strip = 2√(R² - y²).\n  dA = 2√(R² - y²) dy\n\nStep 3: Calculate area.\n  A = ∫₀ᴿ 2√(R² - y²) dy\n  Using substitution y = R sin(θ), dy = R cos(θ) dθ:\n  A = ∫₀^(π/2) 2√(R² - R²sin²(θ)) · R cos(θ) dθ\n  A = 2R² ∫₀^(π/2) cos²(θ) dθ\n  A = 2R² · (π/4) = πR²/2 ✓ (area of semicircle)\n\nStep 4: Set up moment integral for y-coordinate.\n  ȳ = (1/A) ∫ y dA = (2/(πR²)) ∫₀ᴿ y · 2√(R² - y²) dy\n\nStep 5: Evaluate the integral.\n  ∫₀ᴿ 2y√(R² - y²) dy\n  Let u = R² - y², du = -2y dy:\n  = -∫ᴿ²⁰ √u du = ∫₀^(R²) u^(1/2) du = [2u^(3/2)/3]₀^(R²) = (2/3)R³\n\nStep 6: Compute ȳ.\n  ȳ = (2/(πR²)) · (2/3)R³ = (4/3) · R³/(πR²) = 4R/(3π)\n\nFINAL ANSWER: x̄ = 0 (by symmetry); ȳ = 4R/(3π) for a semicircle with flat edge on the x-axis.' },
        { title: 'Inelastic Collision — Two-Dimensional', statement: 'A 1.5 kg cart moving at 3 m/s collides and sticks to a 2 kg cart initially moving at 1 m/s at 60° to the first. Find final velocity vector of combined mass. Show components and work.', tags: ['collisions','momentum'], solutionSkeleton: ['Resolve initial momenta into x,y', 'Sum momenta components, divide by total mass for v_final', 'Compute magnitude and direction'], solution: 'SOLUTION:\n\nStep 1: Set up coordinate system and resolve initial momenta.\n  Cart 1: m₁ = 1.5 kg, v₁_initial = 3 m/s along +x axis\n    p₁ₓ = 1.5 × 3 = 4.5 kg·m/s\n    p₁ᵧ = 0\n\n  Cart 2: m₂ = 2 kg, v₂_initial = 1 m/s at 60° to cart 1 direction\n    p₂ₓ = 2 × 1 × cos(60°) = 2 × 0.5 = 1.0 kg·m/s\n    p₂ᵧ = 2 × 1 × sin(60°) = 2 × 0.866 = 1.732 kg·m/s\n\nStep 2: Sum momentum components (before collision).\n  p_total_x = 4.5 + 1.0 = 5.5 kg·m/s\n  p_total_y = 0 + 1.732 = 1.732 kg·m/s\n\nStep 3: Find final velocity of combined mass.\n  Total mass after collision: M = m₁ + m₂ = 1.5 + 2 = 3.5 kg\n  Momentum is conserved:\n  v_final_x = p_total_x / M = 5.5 / 3.5 = 1.571 m/s\n  v_final_y = p_total_y / M = 1.732 / 3.5 = 0.495 m/s\n\nStep 4: Compute magnitude and direction.\n  |v_final| = √(v_x² + v_y²) = √(1.571² + 0.495²) = √(2.468 + 0.245) = √2.713 = 1.647 m/s\n  θ = arctan(v_y / v_x) = arctan(0.495 / 1.571) = arctan(0.315) = 17.5° above x-axis\n\nFINAL ANSWER: Final velocity = 1.65 m/s at 17.5° from the direction of cart 1\n  or in component form: (1.57, 0.50) m/s\n\nVerification: Initial momentum magnitude = √(5.5² + 1.732²) = √(30.25 + 3.00) = 5.73 kg·m/s\n  Final momentum magnitude = 3.5 × 1.647 = 5.765 kg·m/s ≈ 5.73 ✓' },
        { title: 'Statics with Distributed Load', statement: 'Simply supported beam length 8 m carries a triangular distributed load varying from 0 at left to w0 = 6 kN/m at right. Find support reactions. Use equivalent resultant and centroid of load.', tags: ['statics','centroids'], solutionSkeleton: ['Replace distributed load with resultant force W = (1/2)w0L at centroid (2/3 from left)', 'Take moments about supports to find reactions', 'Show algebra and units'], solution: 'SOLUTION:\n\nStep 1: Replace distributed load with equivalent resultant.\n  Triangular load: w(x) increases linearly from 0 at x=0 to w₀=6 kN/m at x=8 m.\n  Total load (area under triangle): W = (1/2) × base × height = (1/2) × 8 × 6 = 24 kN\n  Centroid location (for triangle, measured from zero end): x_c = (2/3) × L = (2/3) × 8 = 5.33 m from left\n\n  FBD Diagram:\n    ↑ R_A                       W=24 kN ↓ @ x=5.33 m          ↑ R_B\n    |_________________________________|__________________|  \n    A                                               B\n    |←─────────────── 8 m ───────────────→|\n\nStep 2: Sum moments about support A.\n  ΣM_A = 0\n  R_B(8) - W(5.33) = 0\n  R_B(8) - 24(5.33) = 0\n  R_B(8) = 127.92\n  R_B = 15.99 kN ≈ 16 kN\n\nStep 3: Sum vertical forces.\n  ΣF_y = 0\n  R_A + R_B - W = 0\n  R_A + 16 - 24 = 0\n  R_A = 8 kN\n\nStep 4: Verify with moment about B.\n  ΣM_B = 0\n  R_A(8) - W(8 - 5.33) = 0\n  8(8) - 24(2.67) = 0\n  64 - 64 = 0 ✓\n\nFINAL ANSWER: R_A = 8 kN (upward), R_B = 16 kN (upward)\nCheck: R_A + R_B = 8 + 16 = 24 kN = total load ✓' },
        { title: 'Differential Equation: Drag-Limited Ascent', statement: 'A rocket of mass m experiences thrust T and drag proportional to v^2: m dv/dt = T - mg - c v^2. Solve symbolically for v(t) (separable ODE) and identify terminal velocity. Show separation and integration steps.', tags: ['differential equations','dynamics'], solutionSkeleton: ['Rearrange to dv/(T/m - g - (c/m) v^2) = dt', 'Integrate using standard integral for 1/(a - b v^2)', 'Show expression for v(t) and terminal v'], solution: 'SOLUTION:\n\nStep 1: Identify terminal velocity.\n  At terminal velocity, dv/dt = 0:\n  0 = T - mg - c v_terminal²\n  c v_terminal² = T - mg\n  v_terminal = √((T - mg)/c)\n\nStep 2: Rearrange the ODE into separable form.\n  m dv/dt = T - mg - c v²\n  dv/dt = (T - mg)/m - (c/m) v²\n  Let a = (T - mg)/m and b = c/m, so:\n  dv/dt = a - b v²\n  dv/(a - b v²) = dt\n\nStep 3: Decompose using partial fractions.\n  1/(a - b v²) = 1/[√(ab)(√(ab))² - b v²]\n  Using partial fractions for 1/(A² - v²) where A² = a/b:\n  1/(a - b v²) = (1/(2A√(ab))) [1/(A - v) - 1/(A + v)]\n  where A = √(a/b) = √((T - mg)/(c)) / √(m/m) = √((T - mg)/c) = v_terminal\n\nStep 4: Integrate both sides.\n  ∫ dv/(a - b v²) = ∫ dt\n  (1/(2 A √(ab))) ln|(A + v)/(A - v)| = t + C\n  Substitute A = v_terminal and √(ab) = √(c/m) × √((T-mg)/m):\n  (1/(2 v_terminal √(c(T-mg)/m²))) ln|(v_terminal + v)/(v_terminal - v)| = t + C\n\nStep 5: Apply initial condition v(0) = 0.\n  (1/(2 v_terminal √(c(T-mg)/m²))) ln|(v_terminal + 0)/(v_terminal - 0)| = 0 + C\n  (1/(2 v_terminal √(c(T-mg)/m²))) ln(1) = C\n  C = 0\n\nStep 6: Solve for v(t).\n  (1/(2 v_terminal √(c(T-mg)/m²))) ln|(v_terminal + v)/(v_terminal - v)| = t\n  ln|(v_terminal + v)/(v_terminal - v)| = 2 v_terminal √(c(T-mg)/m²) · t\n  (v_terminal + v)/(v_terminal - v) = exp[2 √(c(T-mg)/m²) · t]\n  Let k = 2√(c(T-mg)/m²):\n  (v_terminal + v)/(v_terminal - v) = e^(kt)\n  v_terminal + v = (v_terminal - v) e^(kt)\n  v_terminal + v = v_terminal e^(kt) - v e^(kt)\n  v(1 + e^(kt)) = v_terminal(e^(kt) - 1)\n  v(t) = v_terminal · (e^(kt) - 1)/(e^(kt) + 1) = v_terminal · tanh(kt/2)\n\nFINAL ANSWER:\n  v(t) = √((T - mg)/c) · tanh[√(c(T - mg)/(m²)) · t]\n  Terminal velocity: v_∞ = √((T - mg)/c)\n  Behavior: v increases from 0, approaches v_terminal asymptotically as t → ∞' },
        { title: 'Statistics inside Dynamics — Confidence Interval', statement: 'You measure period T of oscillation 10 times, mean 2.00 s, sample standard deviation 0.04 s. Compute 95% confidence interval for the mean. Show formula and t or z decision.', tags: ['statistics'], solutionSkeleton: ['State formula CI = x̄ ± t_{n-1,α/2} s/√n', 'Lookup t-value (or approximate with z for n>30)', 'Substitute and compute numeric CI'], solution: 'SOLUTION:\n\nStep 1: Identify data and decide on test statistic.\n  Sample size: n = 10 measurements\n  Sample mean: x̄ = 2.00 s\n  Sample standard deviation: s = 0.04 s\n  Confidence level: 95% (α = 0.05, α/2 = 0.025)\n  Population standard deviation σ is unknown → use t-distribution\n  Degrees of freedom: ν = n - 1 = 9\n\nStep 2: Look up t-value from t-distribution table.\n  For ν = 9 and α/2 = 0.025 (two-tailed):\n  t₉,₀.₀₂₅ ≈ 2.262\n  (Note: If n were > 30, could approximate with z ≈ 1.96, but use t for small samples)\n\nStep 3: Calculate standard error of the mean.\n  SE = s / √n = 0.04 / √10 = 0.04 / 3.162 = 0.01265 s\n\nStep 4: Calculate margin of error.\n  ME = t_{n-1,α/2} × SE = 2.262 × 0.01265 = 0.0286 s ≈ 0.029 s\n\nStep 5: Construct confidence interval.\n  CI = x̄ ± ME\n  CI = 2.00 ± 0.029\n  CI = [1.971, 2.029] s\n\nFINAL ANSWER: 95% Confidence Interval = 2.00 ± 0.03 s or (1.97 to 2.03) s\n\nInterpretation: We are 95% confident that the true mean oscillation period lies between 1.97 s and 2.03 s.\n\nAlternative (if σ were known or n > 30): Use z ≈ 1.96, ME = 1.96 × 0.01265 ≈ 0.025 s, CI = 2.00 ± 0.03 s.' },
        { title: 'Parallel Axis — Composite Body', statement: 'Two rods each length L and mass m are arranged perpendicular at midpoint to form a T-shape. Find moment of inertia about an axis through the base of the T parallel to one rod. Use parallel-axis theorem and show all steps.', tags: ['parallel axis','rigid body'], solutionSkeleton: ['Find I_cm for each rod about its centroidal axis', 'Compute distances to the requested axis', 'Apply I = I_cm + m d^2 for each and sum'], solution: 'SOLUTION:\n\nStep 1: Set up geometry.\n  Two identical rods: length = L, mass = m each\n  Rod 1 (base): horizontal, lies along the requested axis\n  Rod 2 (vertical): perpendicular to Rod 1, attached at midpoint\n  Pivot axis: through center of Rod 1, parallel to Rod 1\n\n  Diagram (top view):\n       Rod 2\n         |\n     |---+---|\n       Rod 1\n       ↓ (axis here)\n\nStep 2: Compute I_cm for each rod about its centroidal axis.\n  For a uniform rod of length L and mass m, rotating about its center:\n  I_cm = (1/12) m L²\n  (This is true for both rods)\n\nStep 3: Rod 1 (base rod).\n  Rod 1 lies on the pivot axis, its center coincides with the axis.\n  Distance d₁ = 0\n  I₁ = I_cm,Rod1 + m(0)² = (1/12) m L²\n\nStep 4: Rod 2 (vertical rod).\n  Rod 2 is perpendicular to the pivot axis.\n  Its center is at distance L/2 from Rod 1 (at the midpoint attachment).\n  Rod 2 rotates about an axis parallel to itself through its center (I_cm = (1/12) m L²)\n  but the pivot axis is at distance d₂ = L/2 from Rod 2\'s centroid.\n  I₂ = I_cm,Rod2 + m d₂² = (1/12) m L² + m(L/2)² = (1/12) m L² + (1/4) m L² = (1/3) m L²\n\nStep 5: Total moment of inertia.\n  I_total = I₁ + I₂ = (1/12) m L² + (1/3) m L²\n  I_total = (1/12 + 4/12) m L² = (5/12) m L²\n\nFINAL ANSWER: I = (5/12) m L²\n\nVerification: By symmetry and sum of parallel-axis terms:\n  Rod 1 contributes (1/12) m L² (negligible moment at axis)\n  Rod 2 contributes (1/12) m L² (centroidal) + (1/4) m L² (parallel-axis) = (1/3) m L²\n  Total: (1/12 + 1/3) = (1/12 + 4/12) = (5/12) m L² ✓' },
        { title: 'Momentum Exchange — Elastic Head-on', statement: 'Masses m1=5 kg and m2=3 kg collide elastically head-on. Initial speeds v1=6 m/s toward v2 which is at rest. Find final speeds.', tags: ['collisions','momentum'], solutionSkeleton: ['Use conservation of momentum and kinetic energy', 'Solve two equations for two unknowns', 'Show algebraic elimination and numeric results'], solution: 'SOLUTION:\n\nStep 1: Identify initial conditions.\n  m₁ = 5 kg, v₁ᵢ = 6 m/s (moving right, positive direction)\n  m₂ = 3 kg, v₂ᵢ = 0 m/s (at rest)\n  After collision: v₁f = ?, v₂f = ? (elastic collision)\n\nStep 2: Apply conservation of momentum.\n  m₁ v₁ᵢ + m₂ v₂ᵢ = m₁ v₁f + m₂ v₂f\n  5(6) + 3(0) = 5 v₁f + 3 v₂f\n  30 = 5 v₁f + 3 v₂f  ... (Equation 1)\n\nStep 3: Apply conservation of kinetic energy (elastic collision).\n  (1/2) m₁ v₁ᵢ² + (1/2) m₂ v₂ᵢ² = (1/2) m₁ v₁f² + (1/2) m₂ v₂f²\n  5(6²) + 3(0²) = 5 v₁f² + 3 v₂f²\n  180 = 5 v₁f² + 3 v₂f²  ... (Equation 2)\n\nStep 4: Solve the system algebraically.\n  From Eq. 1: 5 v₁f + 3 v₂f = 30\n  Rearrange: v₁f = (30 - 3 v₂f) / 5 = 6 - 0.6 v₂f\n\n  Substitute into Eq. 2:\n  5(6 - 0.6 v₂f)² + 3 v₂f² = 180\n  5(36 - 7.2 v₂f + 0.36 v₂f²) + 3 v₂f² = 180\n  180 - 36 v₂f + 1.8 v₂f² + 3 v₂f² = 180\n  4.8 v₂f² - 36 v₂f = 0\n  v₂f (4.8 v₂f - 36) = 0\n  v₂f = 0 or v₂f = 36/4.8 = 7.5 m/s\n\nStep 5: Determine which solution is physical.\n  v₂f = 0 corresponds to no collision (initial state) → discard\n  v₂f = 7.5 m/s is the post-collision speed of m₂\n  \n  From Eq. 1: v₁f = 6 - 0.6(7.5) = 6 - 4.5 = 1.5 m/s\n\nStep 6: Verify results.\n  Momentum: 5(1.5) + 3(7.5) = 7.5 + 22.5 = 30 ✓\n  Kinetic energy: 5(1.5)² + 3(7.5)² = 5(2.25) + 3(56.25) = 11.25 + 168.75 = 180 ✓\n\nFINAL ANSWER: v₁f = 1.5 m/s (m₁ slows down), v₂f = 7.5 m/s (m₂ speeds up)\n  Note: v₁f < v₂f, as expected for elastic collision where lighter body was initially at rest.' },
        { title: 'Centroid: Composite Arc', statement: 'Find centroid of a thin wire forming a quarter-circle of radius R from θ=0 to θ=π/2. Provide parametric integral and result.', tags: ['centroids','integration'], solutionSkeleton: ['Parametrize arc by θ', 'Compute centroid coordinates using (1/L)∫ x ds and ∫ y ds', 'Evaluate integrals and simplify'], solution: 'SOLUTION:\n\nStep 1: Set up coordinate system and parametrization.\n  Quarter-circle arc: radius R, centered at origin.\n  Parametrization: x = R cos(θ), y = R sin(θ), θ from 0 to π/2\n  Arc length element: ds = √((dx/dθ)² + (dy/dθ)²) dθ = R dθ\n\nStep 2: Compute arc length.\n  L = ∫₀^(π/2) R dθ = R [θ]₀^(π/2) = R(π/2) = πR/2\n\nStep 3: Compute x-moment integral.\n  ∫ x ds = ∫₀^(π/2) R cos(θ) · R dθ = R² ∫₀^(π/2) cos(θ) dθ\n          = R² [sin(θ)]₀^(π/2) = R² (1 - 0) = R²\n\nStep 4: Compute x-coordinate of centroid.\n  x̄ = (1/L) ∫ x ds = (1/(πR/2)) × R² = 2R/π\n\nStep 5: Compute y-moment integral (by symmetry of the arc).\n  ∫ y ds = ∫₀^(π/2) R sin(θ) · R dθ = R² ∫₀^(π/2) sin(θ) dθ\n          = R² [-cos(θ)]₀^(π/2) = R² (0 - (-1)) = R²\n\nStep 6: Compute y-coordinate of centroid.\n  ȳ = (1/L) ∫ y ds = (1/(πR/2)) × R² = 2R/π\n\nStep 7: Observation.\n  By symmetry (quarter-circle in first quadrant), x̄ = ȳ = 2R/π\n  The centroid lies on the line y = x.\n\nFINAL ANSWER: Centroid of quarter-circle arc = (2R/π, 2R/π)\n\nNumerical example: For R = 1 m, centroid = (0.637 m, 0.637 m) ≈ (0.64 m, 0.64 m)' },
        { title: 'Statics: 3-Force Member', statement: 'A pinned member has three coplanar forces; two known forces at given angles. Find the third force magnitude and direction for equilibrium. Show vector resolution.', tags: ['statics','rigid body'], solutionSkeleton: ['Draw FBD and set ΣF_x=0 and ΣF_y=0', 'Solve for unknown force components', 'Compute magnitude and direction'], solution: 'SOLUTION:\n\nStep 1: Set up a specific example with known data.\n  Known Force 1: F₁ = 100 N at 0° (horizontal, to the right)\n  Known Force 2: F₂ = 80 N at 120° (upper left)\n  Unknown Force 3: F₃ = ?, θ₃ = ? (required for equilibrium)\n\nStep 2: Resolve known forces into components.\n  F₁ₓ = 100 cos(0°) = 100 N\n  F₁ᵧ = 100 sin(0°) = 0 N\n\n  F₂ₓ = 80 cos(120°) = 80 × (-0.5) = -40 N\n  F₂ᵧ = 80 sin(120°) = 80 × 0.866 = 69.3 N\n\nStep 3: Apply equilibrium conditions.\n  ΣFₓ = 0: F₁ₓ + F₂ₓ + F₃ₓ = 0\n  100 + (-40) + F₃ₓ = 0\n  F₃ₓ = -60 N\n\n  ΣFᵧ = 0: F₁ᵧ + F₂ᵧ + F₃ᵧ = 0\n  0 + 69.3 + F₃ᵧ = 0\n  F₃ᵧ = -69.3 N\n\nStep 4: Compute magnitude of F₃.\n  |F₃| = √(F₃ₓ² + F₃ᵧ²) = √((-60)² + (-69.3)²)\n       = √(3600 + 4803) = √8403 = 91.7 N\n\nStep 5: Compute direction of F₃.\n  θ₃ = arctan(F₃ᵧ / F₃ₓ) = arctan(-69.3 / -60) = arctan(1.155)\n      = 49.1° below the negative x-axis\n      = 180° + 49.1° = 229.1° (measured counterclockwise from positive x-axis)\n  or simply: 49° below the negative x-axis (pointing toward lower-left)\n\nStep 6: Verify equilibrium.\n  ΣFₓ = 100 - 40 - 60 = 0 ✓\n  ΣFᵧ = 0 + 69.3 - 69.3 = 0 ✓\n\nFINAL ANSWER: F₃ = 91.7 N at 229° (or 49° below the negative x-axis)\n\nGeneral Method: For any 3-force member:\n  1. Resolve two known forces into x and y components\n  2. Use ΣFₓ = 0 and ΣFᵧ = 0 to find third force components\n  3. Compute magnitude and direction from components' },
        { title: 'Statistics: Propagation in Nonlinear Function', statement: 'Given R = x^2 / y where x=2.0±0.05 and y=4.0±0.1, compute R and its uncertainty (first-order propagation). Show symbolic derivative steps.', tags: ['statistics','uncertainty'], solutionSkeleton: ['Write R(x,y)', 'Compute partial derivatives ∂R/∂x and ∂R/∂y', 'Apply σ_R = √((∂R/∂x σ_x)^2 + (∂R/∂y σ_y)^2)', 'Substitute numbers'], solution: 'SOLUTION:\n\nStep 1: Define the measurement function.\n  R = x² / y\n  x = 2.0 ± 0.05 (σ_x = 0.05)\n  y = 4.0 ± 0.1 (σ_y = 0.1)\n  Assume independent errors.\n\nStep 2: Compute nominal value of R.\n  R_nominal = (2.0)² / 4.0 = 4.0 / 4.0 = 1.0\n\nStep 3: Compute partial derivatives.\n  ∂R/∂x = ∂(x²/y)/∂x = 2x/y\n  At nominal values: (∂R/∂x)_nominal = 2(2.0)/4.0 = 1.0\n\n  ∂R/∂y = ∂(x²/y)/∂y = -x²/y²\n  At nominal values: (∂R/∂y)_nominal = -(2.0)²/(4.0)² = -4.0/16 = -0.25\n\nStep 4: Apply propagation-of-uncertainty formula (first-order Taylor expansion).\n  σ_R² = (∂R/∂x)² σ_x² + (∂R/∂y)² σ_y²\n  σ_R² = (1.0)² (0.05)² + (-0.25)² (0.1)²\n  σ_R² = 1.0 × 0.0025 + 0.0625 × 0.01\n  σ_R² = 0.0025 + 0.000625\n  σ_R² = 0.003125\n  σ_R = √0.003125 = 0.0559 ≈ 0.056\n\nStep 5: Report result with uncertainty.\n  R = 1.0 ± 0.056 or R = 1.00 ± 0.06 (rounded to 2 sig figs)\n\nStep 6: Compute relative uncertainty.\n  Relative uncertainty: σ_R / R = 0.056 / 1.0 = 0.056 or 5.6%\n\nStep 7: Contribution analysis.\n  Contribution from x: (∂R/∂x)² σ_x² = (1.0)² (0.05)² = 0.0025 (80% of total variance)\n  Contribution from y: (∂R/∂y)² σ_y² = (0.25)² (0.1)² = 0.000625 (20% of total variance)\n  → Uncertainty in x dominates\n\nFINAL ANSWER: R = 1.0 ± 0.06 or (1.0 ± 5.6%) with dominance from x-uncertainty' },
        { title: 'Collision: Oblique Elastic (Solve for angles)', statement: 'Two identical masses collide elastically in 2D; one is initially at rest. After collision, velocities are at 30° and unknown φ. Use conservation to solve for φ. Show vector algebra.', tags: ['collisions','momentum','vectors'], solutionSkeleton: ['Write vector momentum components', 'Use energy conservation for magnitudes', 'Solve for unknown angle using trig identities'], solution: 'SOLUTION:\n\nStep 1: Set up initial conditions (identical masses: m₁ = m₂ = m).\n  Initial: m₁ moving at speed v₀ along x-axis, m₂ at rest\n  After collision: m₁ at angle 30°, m₂ at unknown angle φ\n  (For elastic collision of equal masses with one at rest, scattering angles sum to 90°)\n\nStep 2: Apply momentum conservation.\n  Before: p_x = m v₀, p_y = 0\n  After: p_x = m v₁ cos(30°) + m v₂ cos(φ)\n         p_y = m v₁ sin(30°) + m v₂ sin(φ)\n\n  x-component: v₀ = v₁ cos(30°) + v₂ cos(φ)\n              v₀ = v₁ (√3/2) + v₂ cos(φ)  ... (Eq. 1)\n\n  y-component: 0 = v₁ sin(30°) + v₂ sin(φ)\n              0 = v₁ (1/2) + v₂ sin(φ)\n              v₂ sin(φ) = -v₁/2  ... (Eq. 2)\n\nStep 3: Apply energy conservation (elastic collision).\n  Before: KE = (1/2) m v₀²\n  After: KE = (1/2) m v₁² + (1/2) m v₂²\n  \n  v₀² = v₁² + v₂²  ... (Eq. 3)\n\nStep 4: Use the special property of equal-mass elastic collisions.\n  For elastic collisions of equal masses where one is at rest, the scattering angles are perpendicular:\n  30° + φ = 90°\n  φ = 60°\n\nStep 5: Verify using conservation equations.\n  From Eq. 2: v₂ sin(60°) = -v₁/2\n  v₂ (√3/2) = -v₁/2\n  v₂ = -v₁/√3  (negative indicates opposite y-direction)\n  |v₂| = |v₁|/√3\n\n  From Eq. 1: v₀ = v₁(√3/2) + (v₁/√3) cos(60°)\n  v₀ = v₁(√3/2) + (v₁/√3)(1/2)\n  v₀ = v₁[(√3/2) + 1/(2√3)]\n  v₀ = v₁[(3 + 1)/(2√3)] = v₁[4/(2√3)] = v₁[2/√3]\n  v₁ = v₀√3/2\n\n  From Eq. 3: v₀² = (v₀√3/2)² + (v₀√3/2 / √3)²\n  v₀² = v₀²(3/4) + v₀²(1/4) = v₀² ✓\n\nFINAL ANSWER: φ = 60° (or equivalently, the second particle scatters at 60° from the initial direction)\n\nGeneral Result: For elastic collision of equal masses (one at rest), the two final velocity vectors are perpendicular: 30° + 60° = 90°' },
        { title: 'Rigid Body: Center of Mass Coordinates', statement: 'Composite body formed by a semicircular plate (radius R, mass M1) attached to a rectangle (width 2R, height R, mass M2). Find combined center of mass coordinates. Use decomposition and explicit formulas.', tags: ['centroids','rigid body'], solutionSkeleton: ['Compute individual centroids and masses', 'Compute Σm_i x_i/Σm_i and Σm_i y_i/Σm_i', 'Show algebra and numeric example if numbers provided'], solution: 'SOLUTION:\n\nStep 1: Set up coordinate system and geometry.\n  Coordinate origin: bottom-left corner of the rectangle.\n  Rectangle: width 2R (extends from x=0 to x=2R), height R (from y=0 to y=R)\n  Semicircle: radius R, sits on top of rectangle (flat edge on rectangle\'s top, y=R)\n              Semicircle extends from y=R to y=2R, x from 0 to 2R\n\nStep 2: Compute centroid of rectangle.\n  Rectangle centroid:\n    x₁ = (0 + 2R)/2 = R\n    y₁ = (0 + R)/2 = R/2\n  Area (or mass proxy): A₁ = 2R × R = 2R²\n\nStep 3: Compute centroid of semicircle.\n  Semicircle centroid (from standard formula for y, by symmetry x = R):\n    x₂ = R (centered horizontally)\n    y₂ = R + (4R/(3π)) (above the rectangle\'s top edge by semicircle centroid height)\n  Area (or mass proxy): A₂ = (1/2)πR²\n\nStep 4: Use mass proportional to area for demonstration (or use given M₁, M₂).\n  Assume M₁ ∝ A₁ = 2R², M₂ ∝ A₂ = (π/2)R²\n  For numeric example, let R = 1, M₁ = 2, M₂ = (π/2) ≈ 1.571\n\nStep 5: Compute combined center of mass.\n  x_cm = (M₁ x₁ + M₂ x₂) / (M₁ + M₂)\n       = (2(1) + 1.571(1)) / (2 + 1.571)\n       = (2 + 1.571) / 3.571\n       = 3.571 / 3.571 = 1.0 (by symmetry, x_cm = R)\n\n  y_cm = (M₁ y₁ + M₂ y₂) / (M₁ + M₂)\n       = (2(0.5) + 1.571(1 + 4/(3π))) / (2 + 1.571)\n       = (1.0 + 1.571(1 + 0.4244)) / 3.571\n       = (1.0 + 1.571(1.4244)) / 3.571\n       = (1.0 + 2.238) / 3.571\n       = 3.238 / 3.571 ≈ 0.907 (above rectangle\'s center, closer to rectangle)\n\nStep 6: General symbolic form.\n  x̄ = R (by symmetry)\n  ȳ = (M₁(R/2) + M₂(R + 4R/(3π))) / (M₁ + M₂)\n\nFINAL ANSWER: For equal masses (M₁ = M₂ = M):\n  x̄ = R (by symmetry)\n  ȳ = (M·(R/2) + M·(R + 4R/(3π))) / 2M = R/2 + (1/2)(R + 4R/(3π))\n     = R(1/2 + 1/2 + 2/(3π)) = R(1 + 2/(3π)) ≈ 1.212 R\n\nFor R = 1 m, equal masses: Center of mass at (1.0 m, 1.21 m) (above the midline of the combined shape)' },
        { title: 'Differential Eqn: Small-Angle Pendulum', statement: 'Write and solve the small-angle pendulum ODE θ¨ + (g/L) θ = 0. Provide general solution and determine constants given initial θ(0)=θ0 and θ˙(0)=0.', tags: ['differential equations'], solutionSkeleton: ['Recognize simple harmonic ODE', 'Write general solution θ = A cos(ωt) + B sin(ωt)', 'Apply initial conditions to find A and B'], solution: 'SOLUTION:\n\nStep 1: Identify the differential equation.\n  θ¨ + (g/L) θ = 0\n  This is a second-order linear ODE with constant coefficients.\n  Rearrange: θ¨ = -(g/L) θ\n  This describes simple harmonic motion (SHM).\n\nStep 2: Recognize the standard form.\n  θ¨ + ω² θ = 0, where ω² = g/L\n  ω = √(g/L) is the angular frequency\n  Period T = 2π/ω = 2π√(L/g)\n\nStep 3: Solve using characteristic equation.\n  Assume solution: θ = e^(rt)\n  Substitute: r² e^(rt) + (g/L) e^(rt) = 0\n  e^(rt) [r² + g/L] = 0\n  r² + g/L = 0\n  r² = -g/L\n  r = ±i√(g/L) = ±iω\n\nStep 4: Write the general solution.\n  For complex roots r = ±iω, the real solution is:\n  θ(t) = A cos(ωt) + B sin(ωt)\n  where A and B are constants determined by initial conditions.\n  ω = √(g/L)\n\nStep 5: Apply initial conditions.\n  Given: θ(0) = θ₀ (initial angle)\n  Given: θ̇(0) = 0 (released from rest)\n\n  From θ(0) = θ₀:\n  θ₀ = A cos(0) + B sin(0)\n  θ₀ = A\n  → A = θ₀\n\n  From θ̇(0) = 0:\n  θ̇(t) = -Aω sin(ωt) + Bω cos(ωt)\n  θ̇(0) = -Aω sin(0) + Bω cos(0)\n  0 = Bω\n  → B = 0\n\nStep 6: Write the particular solution.\n  θ(t) = θ₀ cos(ωt) = θ₀ cos(√(g/L) · t)\n\nStep 7: Alternative form using amplitude and phase.\n  θ(t) = θ₀ cos(√(g/L) · t)\n  Amplitude: A_amplitude = θ₀\n  Period: T = 2π/√(g/L) = 2π√(L/g) (Huygens formula)\n  Maximum angular velocity: θ̇_max = θ₀ √(g/L)\n\nFINAL ANSWER: θ(t) = θ₀ cos(√(g/L) · t)\n\nPhysical interpretation:\n  - Pendulum oscillates with fixed amplitude θ₀ (no damping)\n  - Period is independent of amplitude (for small angles only)\n  - Frequency depends only on L and g, not on mass' },
        { title: 'Mixed Topic: Statics + Statistics', statement: 'A beam measurement has manufacturing tolerances modeled as normal distributions in length and load position. Describe how to propagate these uncertainties into the reaction forces and produce a 95% confidence band for reaction at support A (outline steps and compute symbolically).', tags: ['statistics','statics'], solutionSkeleton: ['Write reaction R_A as function of uncertain variables', 'Linearize via first-order Taylor expansion around nominal values', 'Compute variance using Jacobian and covariance matrix', 'Report confidence interval'], solution: 'SOLUTION:\n\nStep 1: Define the problem setup.\n  Beam of nominal length L ± σ_L\n  Load of nominal magnitude W ± σ_W applied at distance d ± σ_d from support A\n  Support B at distance L from A\n  Goal: Find uncertainty in reaction R_A at support A\n\nStep 2: Write R_A as a function of uncertain variables.\n  From moment equilibrium about support B:\n  R_A · L = W · (L - d)\n  R_A(L, W, d) = W(L - d) / L\n\nStep 3: Expand using Taylor series (first-order linear approximation).\n  R_A(L, W, d) ≈ R_A(L₀, W₀, d₀) + (∂R_A/∂L) ΔL + (∂R_A/∂W) ΔW + (∂R_A/∂d) Δd\n\nStep 4: Compute partial derivatives.\n  ∂R_A/∂L = ∂/∂L [W(L - d)/L] = W[(L - d - L)/L²] = -Wd/L²\n\n  ∂R_A/∂W = ∂/∂W [W(L - d)/L] = (L - d)/L\n\n  ∂R_A/∂d = ∂/∂d [W(L - d)/L] = -W/L\n\nStep 5: Evaluate at nominal values.\n  At nominal point (L₀, W₀, d₀):\n  (∂R_A/∂L)₀ = -W₀d₀/L₀²\n  (∂R_A/∂W)₀ = (L₀ - d₀)/L₀\n  (∂R_A/∂d)₀ = -W₀/L₀\n\nStep 6: Compute variance (assuming independent uncertainties).\n  σ²(R_A) = (∂R_A/∂L)₀² σ²_L + (∂R_A/∂W)₀² σ²_W + (∂R_A/∂d)₀² σ²_d\n  σ²(R_A) = (-W₀d₀/L₀²)² σ²_L + ((L₀ - d₀)/L₀)² σ²_W + (-W₀/L₀)² σ²_d\n\nStep 7: Compute standard deviation.\n  σ(R_A) = √[(W₀d₀/L₀²)² σ²_L + ((L₀ - d₀)/L₀)² σ²_W + (W₀/L₀)² σ²_d]\n\nStep 8: Construct 95% confidence interval (using normal distribution).\n  Assuming large sample size or normal distribution:\n  95% CI = R_A ± 1.96 σ(R_A)\n  or equivalently, [-1.96σ, +1.96σ] confidence band around R_A\n\nStep 9: Numeric example.\n  Nominal values: L₀ = 10 m, W₀ = 1000 N, d₀ = 4 m\n  R_A,nominal = 1000(10 - 4)/10 = 600 N\n  Uncertainties: σ_L = 0.1 m, σ_W = 50 N, σ_d = 0.2 m\n\n  (∂R_A/∂L)₀ = -1000 × 4 / 100 = -40 N/m\n  (∂R_A/∂W)₀ = 6/10 = 0.6\n  (∂R_A/∂d)₀ = -1000/10 = -100 N/m\n\n  σ²(R_A) = (40)² (0.1)² + (0.6)² (50)² + (100)² (0.2)²\n          = 1600 × 0.01 + 0.36 × 2500 + 10000 × 0.04\n          = 16 + 900 + 400 = 1316\n  σ(R_A) = √1316 = 36.3 N\n\n  95% CI = 600 ± 1.96(36.3) = 600 ± 71.1 N\n  Range: [529 N, 671 N]\n\nFINAL ANSWER: 95% confidence band for R_A = [529 N, 671 N] (or ±71 N around nominal 600 N)\n\nNote: Sensitivity analysis shows σ_d contributes most to uncertainty in this example.' },
        { title: 'Parallel Axis & Mass Distribution', statement: 'Thin plate of mass m has non-uniform density ρ(x)=ρ0(1+α x/L). Compute I about an axis at x=0 using explicit integral and compare to using equivalent mass times d^2 (show why parallel-axis naive use fails if I_cm not computed), show steps.', tags: ['parallel axis','rigid body','integration'], solutionSkeleton: ['Set up I = ∫ x^2 dm with dm = ρ(x) dA or ρ(x) dx', 'Integrate explicitly for given ρ(x)', 'Compute I_cm and show parallel-axis contributions'], solution: 'SOLUTION:\n\nStep 1: Set up the problem.\n  Thin plate of length L (x from 0 to L), constant width w, non-uniform density ρ(x) = ρ₀(1 + αx/L)\n  Pivot axis: at x = 0 (left edge)\n  Goal: Compute I about x = 0 using direct integration, then verify with parallel-axis theorem\n\nStep 2: Compute total mass.\n  dm = ρ(x) dx = ρ₀(1 + αx/L) w dx\n  m = ∫₀ᴸ ρ₀(1 + αx/L) w dx\n    = ρ₀w ∫₀ᴸ (1 + αx/L) dx\n    = ρ₀w [x + αx²/(2L)]₀ᴸ\n    = ρ₀w [L + αL/2]\n    = ρ₀wL(1 + α/2)\n\nStep 3: Compute moment of inertia about x = 0 (direct integral).\n  I₀ = ∫₀ᴸ x² dm = ∫₀ᴸ x² ρ₀(1 + αx/L) w dx\n      = ρ₀w ∫₀ᴸ (x² + αx³/L) dx\n      = ρ₀w [x³/3 + αx⁴/(4L)]₀ᴸ\n      = ρ₀w [L³/3 + αL³/4]\n      = ρ₀wL³ [1/3 + α/4]\n      = ρ₀wL³ (4 + 3α)/12\n\nStep 4: Compute position of center of mass.\n  x̄ = (1/m) ∫₀ᴸ x dm = (1/m) ∫₀ᴸ x ρ₀(1 + αx/L) w dx\n    = (1/(ρ₀wL(1 + α/2))) ρ₀w ∫₀ᴸ (x + αx²/L) dx\n    = 1/(L(1 + α/2)) [x²/2 + αx³/(3L)]₀ᴸ\n    = 1/(L(1 + α/2)) [L²/2 + αL²/3]\n    = L/(1 + α/2) [1/2 + α/3]\n    = L(3 + 2α)/(6(1 + α/2))\n    = L(3 + 2α)/(6 + 3α)\n\nStep 5: Compute I_cm using parallel-axis theorem.\n  I₀ = I_cm + m x̄²\n  I_cm = I₀ - m x̄²\n\nStep 6: Compute I_cm explicitly (direct integration method).\n  I_cm = ∫₀ᴸ (x - x̄)² dm = ∫₀ᴸ (x - x̄)² ρ₀(1 + αx/L) w dx\n       = ∫₀ᴸ [x² - 2x·x̄ + x̄²] ρ₀(1 + αx/L) w dx\n       = I₀ - 2x̄ ∫₀ᴸ x dm + x̄² m\n       = I₀ - 2x̄(m x̄) + x̄² m\n       = I₀ - m x̄²  ✓ (confirms parallel-axis)\n\nStep 7: Demonstrate why naive \"m d²\" fails.\n  Naive approach (WRONG): I ≈ m d² where d = x̄\n  Result: I_wrong = m x̄²\n  This gives only the d² term and misses I_cm entirely!\n  Correct use: I₀ = I_cm + m x̄² (includes both terms)\n\nStep 8: Numeric example.\n  Let ρ₀ = 1 kg/m, w = 1 m, L = 1 m, α = 1 (density increases linearly from ρ₀ to 2ρ₀)\n  m = 1 × 1 × (1 + 1/2) = 1.5 kg\n  I₀ = 1 × 1 × (4 + 3)/12 = 7/12 ≈ 0.583 kg·m²\n  x̄ = (3 + 2)/(6 + 3) = 5/9 ≈ 0.556 m\n  I_cm = 0.583 - 1.5(0.556)² = 0.583 - 0.464 = 0.119 kg·m² (centroidal part)\n\nFINAL ANSWER:\n  Direct: I₀ = ρ₀wL³(4 + 3α)/12\n  Centroidal: I_cm = I₀ - m x̄²\n  Warning: Never use m d² alone without computing I_cm first. The parallel-axis theorem requires both terms.' },
    ],
    ethicsParts: [
        { title: 'Ethics 1', prompt: 'A design reduces cost but increases minor safety risk. Outline decision, stakeholders, and mitigations.'},
        { title: 'Ethics 2', prompt: 'You discover test data was selectively omitted to meet specs. Describe ethical action and reporting steps.'},
        { title: 'Ethics 3', prompt: 'Time pressure demands skipping one verification step. Explain tradeoffs and recommended choice.'},
        { title: 'Ethics 4', prompt: 'A supplier offers cheaper material with uncertain provenance. Formulate evaluation and acceptance criteria.'}
    ],
    ethics: 'There are 4 ethics parts — be ready to apply engineering judgement, clearly state constraints, and reference safety/standards where applicable.',
    slides: '10 slides are especially important — prioritize lecture slides that explain derivations and example problem setups. Mark slide numbers in your personal notes.'
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
