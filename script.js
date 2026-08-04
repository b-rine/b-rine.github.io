// ThreeJS Scene Setup
let scene, camera, renderer, cube;
let mouseX = 0, mouseY = 0;
let targetX = 0, targetY = 0;

// Initialize ThreeJS
function initThreeJS() {
    const container = document.getElementById('threejs-container');
    
    // Create scene
    scene = new THREE.Scene();
    
    // Create camera
    camera = new THREE.PerspectiveCamera(75, container.offsetWidth / container.offsetHeight, 0.1, 1000);
    camera.position.z = 5;
    
    // Create renderer with mobile optimizations
    renderer = new THREE.WebGLRenderer({ 
        alpha: true, 
        antialias: true,
        powerPreference: "high-performance",
        stencil: false,
        depth: false
    });
    renderer.setSize(container.offsetWidth, container.offsetHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2)); // Limit pixel ratio for performance
    renderer.setClearColor(0x000000, 0); // Transparent background
    container.appendChild(renderer.domElement);
    
    // Create cube geometry and material
    const geometry = new THREE.BoxGeometry(2, 2, 2);
    const material = new THREE.MeshBasicMaterial({ 
        color: 0x71717a,
        wireframe: true,
        transparent: true,
        opacity: 0.9
    });
    
    cube = new THREE.Mesh(geometry, material);
    scene.add(cube);
    
    // Add some lighting for better visual effect
    const ambientLight = new THREE.AmbientLight(0x404040, 0.6);
    scene.add(ambientLight);
    
    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
    directionalLight.position.set(1, 1, 1);
    scene.add(directionalLight);
}

// Handle mouse movement
function onMouseMove(event) {
    updateCubeTarget(event.clientX, event.clientY);
}

// Handle touch movement (only for desktop/tablet)
function onTouchMove(event) {
    event.preventDefault(); // Prevent scrolling
    if (event.touches.length > 0) {
        updateCubeTarget(event.touches[0].clientX, event.touches[0].clientY);
    }
}

// Update cube target position (shared by mouse and touch)
function updateCubeTarget(clientX, clientY) {
    // Get mouse/touch position relative to the container
    const container = document.getElementById('threejs-container');
    const rect = container.getBoundingClientRect();
    
    // Normalize coordinates to -1 to 1 range
    mouseX = ((clientX - rect.left) / container.offsetWidth) * 2 - 1;
    mouseY = -((clientY - rect.top) / container.offsetHeight) * 2 + 1;
    
    // Set target positions for smooth movement
    targetX = mouseX * 0.5;
    targetY = mouseY * 0.5;
}

// Animation loop
function animate() {
    requestAnimationFrame(animate);
    
    // Smooth interpolation towards target position
    cube.rotation.x += (targetY - cube.rotation.x) * 0.05;
    cube.rotation.y += (targetX - cube.rotation.y) * 0.05;
    
    // Add continuous rotation for visual interest
    cube.rotation.z += 0.01;
    
    // Slight pulsing effect
    const scale = 1 + Math.sin(Date.now() * 0.001) * 0.1;
    cube.scale.set(scale, scale, scale);
    
    // Color shifting effect
    const time = Date.now() * 0.001;
    cube.material.color.setHSL((time * 0.1) % 1, 0.3, 0.6);
    
    renderer.render(scene, camera);
}

// Handle window resize
function onWindowResize() {
    const container = document.getElementById('threejs-container');
    camera.aspect = container.offsetWidth / container.offsetHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(container.offsetWidth, container.offsetHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
}

// Smooth scrolling for navigation (if you add navigation later)
function smoothScroll(target) {
    document.querySelector(target).scrollIntoView({
        behavior: 'smooth'
    });
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initThreeJS();
    animate();
    
    // Add event listeners
    document.addEventListener('mousemove', onMouseMove);
    
    // Only add touch events on larger screens (desktop/tablet)
    if (window.innerWidth >= 768) {
        document.addEventListener('touchmove', onTouchMove, { passive: false });
    }
    
    window.addEventListener('resize', onWindowResize);
    
    initSectionFadeIn();
});

// Fade sections in as they scroll into view. The hidden state is added here
// rather than in the stylesheet so the page stays readable if this never runs.
function initSectionFadeIn() {
    const sections = document.querySelectorAll('main > section');
    if (!sections.length) return;

    sections.forEach(section => section.classList.add('pre-fade'));

    // Let the browser paint the hidden state before transitions are enabled,
    // otherwise the first sections animate from nothing on load.
    requestAnimationFrame(() => {
        sections.forEach(section => section.classList.add('fade-ready'));
    });

    const observer = new IntersectionObserver(function (entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0,
        // The huge top margin extends the root far above the viewport so a
        // section jumped past (End key, fast scroll, deep link) still counts as
        // intersecting. Without it, such a section never fires and stays hidden.
        rootMargin: '9999px 0px -50px 0px'
    });

    sections.forEach(section => observer.observe(section));
}

// Add some console art for fun (optional)
console.log(`
    ╔══════════════════════════════════════╗
    ║          Welcome to my Portfolio!     ║
    ║                                      ║
    ║    Built with ❤️ and ThreeJS         ║
    ╚══════════════════════════════════════╝
`);

// Performance monitoring (optional)
if (typeof performance !== 'undefined') {
    window.addEventListener('load', function() {
        setTimeout(function() {
            const loadTime = performance.timing.loadEventEnd - performance.timing.navigationStart;
            console.log(`Portfolio loaded in ${loadTime}ms`);
        }, 0);
    });
}
