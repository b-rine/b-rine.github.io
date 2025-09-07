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
    
    // Create renderer
    renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(container.offsetWidth, container.offsetHeight);
    renderer.setClearColor(0x000000, 0); // Transparent background
    container.appendChild(renderer.domElement);
    
    // Create cube geometry and material
    const geometry = new THREE.BoxGeometry(2, 2, 2);
    const material = new THREE.MeshBasicMaterial({ 
        color: 0xffffff,
        wireframe: true,
        transparent: true,
        opacity: 0.8
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
    // Get mouse position relative to the container
    const container = document.getElementById('threejs-container');
    const rect = container.getBoundingClientRect();
    
    // Normalize mouse coordinates to -1 to 1 range
    mouseX = ((event.clientX - rect.left) / container.offsetWidth) * 2 - 1;
    mouseY = -((event.clientY - rect.top) / container.offsetHeight) * 2 + 1;
    
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
    cube.material.color.setHSL((time * 0.1) % 1, 0.7, 0.8);
    
    renderer.render(scene, camera);
}

// Handle window resize
function onWindowResize() {
    const container = document.getElementById('threejs-container');
    camera.aspect = container.offsetWidth / container.offsetHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(container.offsetWidth, container.offsetHeight);
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
    window.addEventListener('resize', onWindowResize);
    
    // Add some interactive effects to sections
    const sections = document.querySelectorAll('.section');
    
    // Intersection Observer for fade-in animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);
    
    // Apply initial styles and observe sections
    sections.forEach(section => {
        observer.observe(section);
    });
    
    // Add subtle hover effects to project items
    const projectItems = document.querySelectorAll('.project-item');
    projectItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'translateX(5px)';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.transform = 'translateX(0)';
        });
    });
});

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
