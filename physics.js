export function initHeroPhysics(renderer) {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, renderer.domElement.width / renderer.domElement.height, 0.1, 1000);
    camera.position.z = 10;

    const light = new THREE.DirectionalLight(0xffffff, 1);
    light.position.set(5, 5, 5);
    scene.add(light);

    const spheres = [];
    const colors = [0xff5733, 0x33ff57, 0x3357ff, 0xf3ff33];

    for (let i = 0; i < 50; i++) {
        const geometry = new THREE.SphereGeometry(0.2, 32, 32);
        const material = new THREE.MeshStandardMaterial({ color: colors[Math.floor(Math.random() * colors.length)] });
        const sphere = new THREE.Mesh(geometry, material);

        sphere.position.set(
            Math.random() * 10 - 5,
            Math.random() * 10 - 5,
            Math.random() * 10 - 5
        );

        sphere.velocity = {
            x: (Math.random() - 0.5) * 0.1,
            y: (Math.random() - 0.5) * 0.1,
            z: (Math.random() - 0.5) * 0.1
        };

        spheres.push(sphere);
        scene.add(sphere);
    }

    function animate() {
        requestAnimationFrame(animate);

        spheres.forEach((sphere) => {
            sphere.position.x += sphere.velocity.x;
            sphere.position.y += sphere.velocity.y;
            sphere.position.z += sphere.velocity.z;

            if (Math.abs(sphere.position.x) > 5) sphere.velocity.x *= -1;
            if (Math.abs(sphere.position.y) > 5) sphere.velocity.y *= -1;
            if (Math.abs(sphere.position.z) > 5) sphere.velocity.z *= -1;
        });

        renderer.render(scene, camera);
    }

    animate();
}