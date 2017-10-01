function createGroundPlane()
{
    var planeMaterial = new Physijs.createMaterial(new THREE.MeshLambertMaterial({color: '#4f4f4f'}), .4, .8 );
    var planeGeometry = new THREE.PlaneGeometry( 200, 230, 6 );
    var groundPlane = new Physijs.BoxMesh(planeGeometry, planeMaterial, 0);
    groundPlane.name = "GroundPlane";

    rotateObject(groundPlane, -80,0,0);
    groundPlane.position.x = -10;

    scene.add( groundPlane );
}

function createBall(){
    var geometry = new THREE.SphereGeometry( 5 );
    var material = Physijs.createMaterial(new THREE.MeshLambertMaterial({color: '#ffff00'}));
    sphere = new Physijs.SphereMesh( geometry, material );


    sphere.position.y += 10;

    sphere.addEventListener( 'collision', function( other_object, linear_velocity, angular_velocity )
    {
        if( other_object.name !== "GroundPlane" )
        {

            //document.getElementById('score').innerHTML = 'Score: ' + getScore();
            //console.log('hit');
        }
    });

    scene.add(sphere);
}

