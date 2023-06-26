import * as THREE from 'three';
import Runner from "./Runner";

export default class Renderer{
    constructor(){
        this.runner = new Runner()
        this.setRenderer();
    }
    
    setRenderer(){
        this.renderer = new THREE.WebGLRenderer({
            canvas: this.runner.canvas,
            antialias: true,
        })
        this.renderer.useLegacyLights = true
        this.renderer.outputColorSpace  = THREE.SRGBColorSpace
        this.renderer.toneMapping = THREE.CineonToneMapping
        this.renderer.toneMappingExposure = 1.75
        this.renderer.shadowMap.enabled = true
        this.renderer.shadowMap.type = THREE.PCFShadowMap
        this.renderer.setSize(this.runner.sizes.width, this.runner.sizes.height)
        this.renderer.setPixelRatio(this.runner.sizes.pixelRation)
    }

    resize(){
        this.renderer.setSize(this.runner.sizes.width, this.runner.sizes.height)
        this.renderer.setPixelRatio(this.runner.sizes.pixelRation)
    }

    update(){
        this.renderer.render(this.runner.scene, this.runner.camera.perspectiveCamera)
    }
}