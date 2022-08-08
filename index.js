 import * as THREE from './node_modules/three/build/three.module.js'



import { GLTFLoader} from './node_modules/three/examples/jsm/loaders/GLTFLoader.js'

const canvas = document.querySelector('.webgl')
const scene = new THREE.Scene()



const loader = new GLTFLoader()

loader.load('assets/airplane.glb', function (glb){
    console.log (glb)
    const root = glb.scene; 
    scene.add(root)

}, 
function (xhr){
    console.log ((xhr.loaded/xhr.total* 100) + "% loaded")
}, function (){
    console.log('an error occured')
})



const light = new THREE.DirectionalLight(0xffffff, 1)
light.position.set(2,2,5)
scene.add(light)


const sizes = {
    width : window.innerWidth,
    height : window.innerHeight

}

const camera = new THREE.PerspectiveCamera(75, sizes.width/ sizes.height, 0.1, 100)
camera.position.set(0,1,2)
scene.add(camera)


const renderer = new THREE.WebGL1Renderer({
    canvas: canvas
})

renderer.setSize(sizes.width, sizes.height)
renderer.setPixelRatio(Math.min(window.devicePixelRatio,2))
renderer.shadowMap.enabled= true
renderer.gammaoutput = true



function animate(){
    requestAnimationFrame(animate)
    renderer.render(scene, camera)
}
animate()




			