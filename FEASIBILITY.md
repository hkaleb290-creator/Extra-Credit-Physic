Panda3D / Python vs Web (three.js / Babylon.js) — Feasibility Notes

Summary:
- Keep the simulator in-browser for easiest distribution and no installs.

Python + Panda3D:
- Pros: full Python physics stack, desktop-quality 3D, easier if you already have complex Python physics code.
- Cons: Not web-native — requires users to install a desktop app or use heavy ports (Pyodide + Emscripten) which are complex and slow. Packaging for multiple OSes adds maintenance.

Web-native options (recommended):
- Vanilla Canvas (current): fast, zero-deps, works offline, best for 2D visuals and HUD. Good for classroom deliverables.
- three.js / Babylon.js (WebGL): use for true 3D rockets, lighting, camera control, and GPU particles. Runs in-browser, hardware-accelerated, easy to integrate with existing HTML UI.

Recommendation:
- Continue improving the current Canvas implementation for now (lighter, immediate wins implemented).
- If you want full 3D visuals and physics, port the rocket to three.js (or Babylon.js) later — this keeps web deployment simple while enabling realistic lighting and GPU particles.

If you'd like, I can scaffold a minimal three.js scene and port the rocket model next.
