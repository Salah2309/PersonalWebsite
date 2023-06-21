import './style.css'
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import dat from 'dat.gui';

// SCENE:
const scene = new THREE.Scene();
scene.background = new THREE.Color(0xa8def0)

// CAMERA:
const camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 0.1, 1000 );
camera.position.y = 15;
camera.position.z = 15;
camera.position.x = 0;

// RENDERER:
const renderer = new THREE.WebGLRenderer({canvas: document.querySelector('#bg')});
renderer.setSize( window.innerWidth, window.innerHeight);
renderer.setPixelRatio( window.devicePixelRatio );
renderer.shadowMap.enabled = true;

// CONTROLS:
const orbitControls = new OrbitControls(camera,renderer.domElement);
orbitControls.enableDamping = true;
orbitControls.minDistance = 5;
orbitControls.maxDistance = 100;
orbitControls.enablePan = false;
orbitControls.maxPolarAngle = Math.PI / 2 - 0.05;
orbitControls.update();

// LIGHTS:
scene.add(new THREE.AmbientLight(0xffffff));

// FLOOR:
const floor = new THREE.Mesh(new THREE.BoxGeometry(50,0.1,50), new THREE.MeshBasicMaterial ({ color: 0x900ff0 }));
scene.add(floor)

// GUI
const gui = new dat.GUI()
const world = {
    floor: {
        floorX: 50,
        floorY: 0.1,
        floorZ: 50
    }
}
gui.add(world.floor, 'floorX', 1, 50).onChange(guiChange)
gui.add(world.floor, 'floorY', 0.01, 5).onChange(guiChange)
gui.add(world.floor, 'floorZ', 1, 50).onChange(guiChange)

function guiChange(){
    floor.geometry.dispose();
    floor.geometry = new THREE.BoxGeometry(world.floor.floorX,world.floor.floorY,world.floor.floorZ);
    const { array } = floor.geometry.attributes.position
    for (let i =0; i< array.length; i+= 3){
        const x = array[i]
        const y = array[i+1]
        const z = array[i+2]
    }
}


// ANIMATE:
const clock  = new THREE.Clock();
function animate(){
    let mixerUpdateDelta = clock.getDelta();

    orbitControls.update();
    renderer.render( scene, camera );
    requestAnimationFrame( animate );
}
animate();
