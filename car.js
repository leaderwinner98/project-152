AFRAME.registerComponent('car', {
    schema: {
        color: { type: 'string', default: 'red' },
        position: { type: 'vec3', default: { x: 0, y: 1, z: -5 } }
    },
    init: function () {
        const car = this.el;
        let counter = 0;

        // Event listener for click events
        car.addEventListener('click', function () {
            counter++;

            // Define positions for each click count
            const positions = [
                { x: 0, y: 1, z: -5 },
                { x: 5, y: 1, z: -5 },
                { x: 0, y: 1, z: 0 },
                { x: -5, y: 1, z: -5 }
            ];

            // Reset counter and position after four clicks
            if (counter >= positions.length) {
                counter = 0;
            }

            // Update car position
            car.setAttribute('position', positions[counter]);
        });
        
        // Car geometry and material
        const carGeometry = new THREE.BoxBufferGeometry(2, 0.5, 1);
        const carMaterial = new THREE.MeshStandardMaterial({ color: this.data.color });
        const carMesh = new THREE.Mesh(carGeometry, carMaterial);
        
        // Set shadows
        carMesh.castShadow = true;
        car.setObject3D('car', carMesh);
    }
});
