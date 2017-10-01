/*
*   Created by: Raphael Miller on 09.29.2017
* */

var renderer;
var scene;
var camera;
var spotLight;

var groundplane;
var walls;
var sphere;

<!-- 3. Add the following two lines. -->
Physijs.scripts.worker = 'libs/physijs_worker.js';
Physijs.scripts.ammo = 'ammo.js';


function init()
{
    <!-- 4. Edit the scene creation -->
    scene = new Physijs.Scene();
    scene.setGravity(new THREE.Vector3( 0, -10, 0 ));


    setupCamera();
    setupRenderer();
    addSpotLight();

    //objects
    createGroundPlane();
    createBall();


    // Output to the stream
    document.body.appendChild( renderer.domElement );

    // Call render
    render();
}

function render()
{


    scene.simulate();
    cameraMovement();

    // Request animation frame
    requestAnimationFrame( render );

    // Call render()
    //renderer.render(backgroundScene , backgroundCamera );
    renderer.render( scene, camera );
}

function recreateCamera(fov, y)
{
    camera = new THREE.PerspectiveCamera(
        fov, window.innerWidth / window.innerHeight, 0.1, 1000 );

    camera.rotation.y = y;
}


function setupCamera()
{
    camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 0.1, 1000 );
    camera.position.x = 0;
    camera.position.y = 0;
    camera.position.z = 200;
    camera.lookAt( scene.position );
}

function setupRenderer()
{
    renderer = new THREE.WebGLRenderer();
    //						color     alpha
    renderer.setClearColor( 0x000000, 1.0 );
    renderer.setSize( window.innerWidth, window.innerHeight-20 );
    renderer.shadowMapEnabled = true;
}

function addSpotLight()
{
    spotLight = new THREE.SpotLight( 0xffffff );
    spotLight.position.set( 10, 100, 100 );
    spotLight.shadowCameraNear = 10;
    spotLight.shadowCameraFar = 100;
    spotLight.castShadow = true;
    spotLight.intensity = 2;
    scene.add(spotLight);
}

window.onload = init;
