import './style.css'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

// HTML:
document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <canvas id="bg"></canvas>
  </div>
  <main>
    <h1>
      abcabcabc<br>abcabcabc<br>abcabcabc<br>abcabcabc<br>abcabcabc<br>abcabcabc<br>abcabcabc<br>abcabcabc<br>abcabcabc<br>abcabcabc<br>abcabcabc<br>abcabcabc<br>abcabcabc<br>abcabcabc<br>abcabcabc<br>abcabcabc<br>abcabcabc<br>abcabcabc<br>abcabcabc<br>abcabcabc<br>abcabcabc<br>abcabcabc<br>abcabcabc<br>abcabcabc<br>abcabcabc<br>abcabcabc<br>abcabcabc<br>abcabcabc<br>abcabcabc<br>abcabcabc<br>abcabcabc<br>abcabcabc<br>abcabcabc<br>abcabcabc<br>abcabcabc<br>abcabcabc<br>abcabcabc<br>abcabcabc<br>abcabcabc<br>abcabcabc<br>abcabcabc<br>abcabcabc<br>abcabcabc<br>abcabcabc<br>abcabcabc<br>abcabcabc<br>abcabcabc<br>abcabcabc<br>abcabcabc<br>abcabcabc<br>abcabcabc<br>abcabcabc<br>abcabcabc<br>abcabcabc<br>abcabcabc<br>abcabcabc<br>abcabcabc<br>abcabcabc<br>abcabcabc<br>abcabcabc<br>abcabcabc<br>abcabcabc<br>abcabcabc<br>abcabcabc<br>abcabcabc<br>abcabcabc<br>abcabcabc<br>abcabcabc<br>abcabcabc<br>abcabcabc<br>abcabcabc<br>abcabcabc<br>abcabcabc<br>abcabcabc<br>abcabcabc<br>abcabcabc<br>abcabcabc<br>abcabcabc<br>abcabcabc<br>abcabcabc<br>abcabcabc<br>abcabcabc<br>abcabcabc<br>abcabcabc<br>abcabcabc<br>abcabcabc<br>abcabcabc<br>abcabcabc<br>abcabcabc<br>abcabcabc<br>abcabcabc<br>abcabcabc<br>abcabcabc<br>abcabcabc<br>abcabcabc<br>abcabcabc<br>abcabcabc<br>abcabcabc<br>abcabcabc<br>abcabcabc<br>abcabcabc<br>abcabcabc<br>abcabcabc<br>abcabcabc<br>abcabcabc<br>abcabcabc<br>abcabcabc<br>abcabcabc<br>abcabcabc<br>abcabcabc<br>abcabcabc<br>abcabcabc<br>abcabcabc<br>abcabcabc<br>abcabcabc<br>abcabcabc<br>abcabcabc<br>abcabcabc<br>abcabcabc<br>abcabcabc<br>abcabcabc<br>abcabcabc<br>abcabcabc<br>abcabcabc<br>abcabcabc<br>abcabcabc<br>abcabcabc<br>abcabcabc<br>abcabcabc<br>abcabcabc<br>abcabcabc<br>abcabcabc<br>abcabcabc<br>abcabcabc<br>abcabcabc<br>abcabcabc<br>abcabcabc<br>abcabcabc<br>abcabcabc<br>abcabcabc<br>abcabcabc<br>abcabcabc<br>abcabcabc<br>abcabcabc<br>abcabcabc<br>abcabcabc<br>abcabcabc<br>abcabcabc<br>abcabcabc<br>abcabcabc<br>abcabcabc<br>abcabcabc<br>abcabcabc<br>abcabcabc<br>abcabcabc<br>abcabcabc<br>abcabcabc<br>abcabcabc<br>abcabcabc<br>abcabcabc<br>abcabcabc<br>abcabcabc<br>abcabcabc<br>abcabcabc<br>abcabcabc<br>abcabcabc<br>abcabcabc<br>abcabcabc<br>abcabcabc<br>abcabcabc<br>abcabcabc<br>abcabcabc<br>abcabcabc<br>abcabcabc<br>abcabcabc<br>abcabcabc<br>abcabcabc<br>abcabcabc<br>abcabcabc<br>abcabcabc<br>abcabcabc<br>abcabcabc<br>abcabcabc<br>abcabcabc<br>abcabcabc<br>abcabcabc<br>abcabcabc<br>abcabcabc<br>abcabcabc<br>abcabcabc<br>abcabcabc<br>abcabcabc<br>abcabcabc<br>abcabcabc<br>abcabcabc<br>abcabcabc<br>abcabcabc<br>abcabcabc<br>abcabcabc<br>abcabcabc<br>abcabcabc<br>abcabcabc<br>abcabcabc<br>abcabcabc<br>abcabcabc<br>abcabcabc<br>abcabcabc<br>abcabcabc<br>abcabcabc<br>abcabcabc<br>abcabcabc<br>abcabcabc<br>abcabcabc<br>abcabcabc<br>abcabcabc<br>abcabcabc<br>abcabcabc<br>abcabcabc<br>abcabcabc<br>abcabcabc<br>abcabcabc<br>abcabcabc<br>abcabcabc<br>abcabcabc<br>
    </h1>
  </main>
`;

// CANVAS:

//globals:
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector<HTMLCanvasElement>('#bg')!,
});

renderer.setPixelRatio( window.devicePixelRatio );
renderer.setSize( window.innerWidth, window.innerHeight );



const torus = new THREE.Mesh( 
new THREE.TorusGeometry(10, 3, 16, 100),
new THREE.MeshStandardMaterial( { color: 0xFF6347 })
);
const boxx = new THREE.Mesh(
new THREE.BoxGeometry(3,3,3),
new THREE.MeshBasicMaterial ({ color: 0x1f3fd7 }),
);
const ambientLight = new THREE.AmbientLight(0xffffff);




function addStar(){
  const star = new THREE.Mesh( new THREE.SphereGeometry(0.25, 24, 24), new THREE.MeshStandardMaterial( { color: 0xffffff } ) );
  const [x, y, z] = Array(3).fill(0).map(() => THREE.MathUtils.randFloatSpread( 100 ) );
  star.position.set(x, y, z);
  scene.add(star);
} 

Array(200).fill(0).forEach(addStar);



scene.add(ambientLight, new THREE.GridHelper(200,50), torus, boxx);

const controls = new OrbitControls( camera, renderer.domElement);

function moveCamera(){
  let t = document.body.getBoundingClientRect().top;
  if(t>0){
    t=0;
  }
  console.log(t);
  boxx.rotation.x += 0.05;
  boxx.rotation.y += 0.075;
  boxx.rotation.z += 0.05;

  camera.position.z = t* -0.01;
  camera.position.x = t*-0.0002;
  camera.position.y = t*-0.0002;

}
document.body.onscroll = moveCamera;

function animate(){
  requestAnimationFrame( animate );
  
  torus.rotation.x += 0.0025;
  torus.rotation.y += 0.001;
  torus.rotation.z += 0.0025;
  controls.update();
  renderer.render( scene, camera );
}
animate();



