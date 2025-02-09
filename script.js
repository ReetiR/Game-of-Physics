// Initialize hero canvas
const heroCanvas = document.getElementById('hero-canvas');
const heroRenderer = new THREE.WebGLRenderer({ canvas: heroCanvas });
heroRenderer.setSize(heroCanvas.clientWidth, heroCanvas.clientHeight);

// Initialize simulation canvas
const simulationCanvas = document.getElementById('simulation-canvas');
const simulationRenderer = new THREE.WebGLRenderer({ canvas: simulationCanvas });
simulationRenderer.setSize(simulationCanvas.clientWidth, simulationCanvas.clientHeight);

// Load physics and animation logic
import { initHeroPhysics } from './utils/physics.js';
import { initAnimations } from './utils/animations.js';

initHeroPhysics(heroRenderer);
initAnimations();