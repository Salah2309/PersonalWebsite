import './style.css'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js'
import dat from 'dat.gui'
import Runner from './Runners/Runner'


const runner = new Runner(document.querySelector(".bg"))

//Camera
runner.camera.perspectiveCamera.position.x=0
runner.camera.perspectiveCamera.position.y=15
runner.camera.perspectiveCamera.position.z=150

runner.scene.add(new THREE.GridHelper(250,50))

// CONTROLS:
const orbitControls = new OrbitControls(runner.camera.perspectiveCamera, runner.renderer.domElement)
// orbitControls.enableDamping = true
// orbitControls.minDistance = 5
// orbitControls.maxDistance = 100
// orbitControls.enablePan = false
// orbitControls.maxPolarAngle = Math.PI / 2 - 0.05
// orbitControls.update()

runner.scene.background = new THREE.Color(0xa8def0)

// LIGHTS:
runner.scene.add(new THREE.AmbientLight(0xffffff))

// FLOOR:
const floor = new THREE.Mesh(new THREE.BoxGeometry(50,0.1,50), new THREE.MeshBasicMaterial ({ color: 0x900ff0 }))
runner.scene.add(floor)

// GUI
// const gui = new dat.GUI()
// const world = {
//     floor: {
//         floorX: 50,
//         floorY: 0.1,
//         floorZ: 50,
//     }
// }
// gui.add(world.floor, 'floorX', 1, 50).onChange(guiChange)
// gui.add(world.floor, 'floorY', 0.01, 5).onChange(guiChange)
// gui.add(world.floor, 'floorZ', 1, 50).onChange(guiChange)

// function guiChange(){
//     floor.geometry.dispose();
//     floor.geometry = new THREE.BoxGeometry(world.floor.floorX,world.floor.floorY,world.floor.floorZ);
//     const { array } = floor.geometry.attributes.position
//     for (let i =0; i< array.length; i+= 3){
//         const x = array[i]
//         const y = array[i+1]
//         const z = array[i+2]
//     }
// }


// function animate(){

//     orbitControls.update();
// }
 