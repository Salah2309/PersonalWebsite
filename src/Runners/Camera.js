import * as THREE from 'three';
import Runner from "./Runner";

export default class Camera{
    constructor(){
        this.runner = new Runner()
        this.createPerspectiveCamera()
        this.createOrthographicCamera()
    }

    createPerspectiveCamera(){
        this.perspectiveCamera = new THREE.PerspectiveCamera(45, this.runner.sizes.aspect, 0.1, 1000)
        this.runner.scene.add(this.perspectiveCamera)
    }

    createOrthographicCamera(){
        this.frustrum = 5
        
        this.orthographicCamera = new THREE.OrthographicCamera(
            (-this.runner.sizes.aspect * this.runner.sizes.frustrum)/2,
            (this.runner.sizes.aspect * this.runner.sizes.frustrum)/2,
            this.runner.sizes.frustrum/2,
            -this.runner.sizes.frustrum/2,
            -10,
            100
        )
        this.runner.scene.add(this.orthographicCamera)
    }

    resize(){
        this.perspectiveCamera.aspect = this.runner.sizes.aspect
        this.perspectiveCamera.updateProjectionMatrix()

        this.orthographicCamera.left = (-this.runner.sizes.aspect * this.runner.sizes.frustrum)/2,
        this.orthographicCamera.right =  (this.runner.sizes.aspect * this.runner.sizes.frustrum)/2,
        this.orthographicCamera.top =  this.runner.sizes.frustrum/2,
        this.orthographicCamera.bottom = -this.runner.sizes.frustrum/2,
        this.orthographicCamera.updateProjectionMatrix()
    }

    update(){

    }
}