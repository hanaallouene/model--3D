 import * as THREE from './node_modules/three/build/three.module.js'



import { GLTFLoader} from './node_modules/three/examples/jsm/loaders/GLTFLoader.js'

import { OrbitControls} from './node_modules/three/examples/jsm/controls/OrbitControls.js'


const canvas = document.querySelector('.webgl')
const scene = new THREE.Scene()



const loader = new GLTFLoader()

loader.load('assets/sfm.glb', function (glb){
    console.log (glb)
    const root = glb.scene; 
    scene.add(root)

}, 
function (xhr){
    console.log ((xhr.loaded/xhr.total* 100) + "% loaded")
}, function (){
    console.log('an error occured')
})



const renderer = new THREE.WebGL1Renderer({
    canvas: canvas
})

const sizes = {
    width : window.innerWidth,
    height : window.innerHeight

}


const camera = new THREE.PerspectiveCamera(75, sizes.width/ sizes.height, 0.1, 100)
camera.position.set(1,1,25)
scene.add(camera)


controls = new THREE.OrbitControls(camera, renderer.domElement);
camera.position.set( 1, 1, 25 )
controls.update()

controls.addEventListener('change',renderer); // addEvent listener to track the mouse control the model (rotation )


const light = new THREE.DirectionalLight(0xffffff, 1)
light.position.set(2,2,5)
scene.add(light)


renderer.setSize(sizes.width, sizes.height)
renderer.setPixelRatio(Math.min(window.devicePixelRatio,2))
renderer.shadowMap.enabled= true
renderer.gammaoutput = true



function animate(){
    requestAnimationFrame(animate)
    renderer.render(scene, camera)
}
animate()





			