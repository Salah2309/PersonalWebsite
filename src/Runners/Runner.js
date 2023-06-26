// A Singleton File That Runs our Runners!
import * as THREE from "three";
import Sizes from "./Utils/Size"
import Time from "./Utils/Time";
import Camera from "./Camera";
import Renderer from "./Renderer";

export default class Runner{
    static instance 
    constructor(canvas){
        if(Runner.instance){
            return Runner.instance
        }
        Runner.instance = this

        this.canvas = canvas
        this.time = new Time()
        this.sizes = new Sizes()
        this.scene = new THREE.Scene()
        this.camera = new Camera()
        this.renderer = new Renderer()

        //UpdateStates:
        this.sizes.on("resize", ()=>{
            this.resize()
        })
        this.time.on("update", ()=>{
            this.update()
        })
    }
    resize(){
        this.camera.resize()
        this.renderer.resize()
    }
    update(){
        this.camera.update()
        this.renderer.update()
    }
}