
const menuBtn = document.getElementById('menu-btn');
const sidebar = document.getElementById('sidebar');
const overlay = document.getElementById('sidebar-overlay');

function toggleSidebar() {
    menuBtn.classList.toggle('active');
    sidebar.classList.toggle('active');
    overlay.classList.toggle('active');
}

menuBtn.addEventListener('click', toggleSidebar);
overlay.addEventListener('click', toggleSidebar);


const container = document.getElementById('canvas-container');

if (container) {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.set(0, 0, 15);

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.outputEncoding = THREE.sRGBEncoding; 
    container.appendChild(renderer.domElement);

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.4);
    scene.add(ambientLight);

    const sunLight = new THREE.DirectionalLight(0xffffff, 2.5);
    sunLight.position.set(10, 20, 10);
    scene.add(sunLight);

    const blueRimLight = new THREE.DirectionalLight(0xffffff, 1.0); /* Updated to electric cyan */
    blueRimLight.position.set(-15, -10, -15);
    scene.add(blueRimLight);

    let hubble;
    const loader = new THREE.GLTFLoader();

    loader.load('Hubble-1.glb', function(gltf) {
        hubble = gltf.scene;
        hubble.scale.set(0.8, 0.8, 0.7); 
        hubble.position.set(5, 9, 2);
        
        hubble.traverse((child) => {
            if (child.isMesh) {
                child.material.metalness = 0.9;
                child.material.roughness = 0.3;
            }
        });
        scene.add(hubble);
        
        const loadingScreen = document.getElementById('loader-screen');
        if (loadingScreen) {
            loadingScreen.style.opacity = '0';
            setTimeout(() => { loadingScreen.style.display = 'none'; }, 1000);
        }

    }, undefined, function(error) {
        console.error('Error loading model:', error);
        if (document.getElementById('loader-screen')) {
            document.getElementById('loader-screen').innerText = 'ERROR LOADING MODEL';
        }
    });

    let scrollPercent = 0;
    window.addEventListener('scroll', () => {
        scrollPercent = window.scrollY / window.innerHeight; 
    });

    function animate() {
        requestAnimationFrame(animate);
        if (hubble) {
            hubble.rotation.y = (scrollPercent * Math.PI) + 0.5; 
            hubble.rotation.x = scrollPercent * 0.2;
            hubble.position.y = Math.sin(Date.now() * 0.001) * 0.3; 
        }
        renderer.render(scene, camera);
    }

    window.addEventListener('resize', () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    });

    animate();
}
