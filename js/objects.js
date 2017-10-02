function createGroundPlane()
{

    var texture = THREE.ImageUtils.loadTexture('assets/images/Originalpacmaze.png');

    var planeMaterial = new Physijs.createMaterial(new THREE.MeshLambertMaterial({map:texture}), .4, .8 );
    var planeGeometry = new THREE.PlaneGeometry( 200, 200, 6 );
    var groundPlane = new Physijs.BoxMesh(planeGeometry, planeMaterial, 0);
    groundPlane.name = "GroundPlane";

    //rotateObject(groundPlane, -80,0,0);
    //groundPlane.position.x = -10;

    scene.add( groundPlane );
}

function createBall(){
    var geometry = new THREE.SphereGeometry( 5 );
    var material = Physijs.createMaterial(new THREE.MeshLambertMaterial({color: '#ffff00'}));
    var sphere = new Physijs.SphereMesh( geometry, material );

    ball = new THREE.Object3D();
    ball.add(sphere);

    ball.position.z = 6;

    //sphere.position.y += 10;

    sphere.addEventListener( 'collision', function( other_object, linear_velocity, angular_velocity )
    {
        if( other_object.name !== "GroundPlane" )
        {

            //document.getElementById('score').innerHTML = 'Score: ' + getScore();
            //console.log('hit');
        }
    });

     scene.add(ball);
     //todo make balls interact with things "roll"
}

var wallList;
function createWalls(){

    wallList = [];

    // var wall = new THREE.BoxGeometry(6,22,12);
    // var material = Physijs.createMaterial(new THREE.MeshLambertMaterial({color: 'light grey'}), .95, .95);
    // var msh = new Physijs.BoxMesh(wall, material);

    for(var i = 0; i<2; i++) {
        var smallWallVertical = generateWall(6,22,6);
        switch(i){
            case 0: smallWallVertical.position.x = 43; smallWallVertical.position.y = -17; break;
            case 1: smallWallVertical.position.x = -43; smallWallVertical.position.y = -17; break;
        }
        smallWallVertical.position.z = 3; //all walls

        scene.add(smallWallVertical);
    }

    for(i = 0; i < 4; i++){
        var smallWallHorizontal = generateWall(20,6,6);
        switch(i){
            case 0: smallWallHorizontal.position.x = 71; smallWallHorizontal.position.y = 50; break;
            case 1: smallWallHorizontal.position.x = -71; smallWallHorizontal.position.y = 50; break;
            case 2: smallWallHorizontal.position.x = 71; smallWallHorizontal.position.y = -45; break;
            case 3: smallWallHorizontal.position.x = -71; smallWallHorizontal.position.y = -45; break;
        }
        smallWallHorizontal.position.z = 3;
        scene.add(smallWallHorizontal);
    }

    for(i = 0; i<2; i++){
        var smallWallHorizontal2 = generateWall(27, 6, 6);
        switch(i){
            case 0: smallWallHorizontal2.position.x = -31; smallWallHorizontal2.position.y = -45; break;
            case 1: smallWallHorizontal2.position.x = 31; smallWallHorizontal2.position.y = -45; break;
        }
        smallWallHorizontal2.position.z = 3;
        scene.add(smallWallHorizontal2);
    }

    for(i = 0; i < 3; i++) {
        var tTopWall = generateWall(47, 6, 6);
        switch(i){
            case 0: tTopWall.position.y = -25; break;
            case 1: tTopWall.position.y = 50; break;
            case 2: tTopWall.position.y = -62; break;

        }
        tTopWall.position.z = 3;
        scene.add(tTopWall);
    }

    for(i = 0; i < 4; i++) {
        var tBottom = generateWall(6, 22, 6);
        switch(i){
            case 0: tBottom.position.y = -39; break;
            case 1: tBottom.position.y = 36; break;
            case 2: tBottom.position.y = -76; break;
            case 3: tBottom.position.y = 80; break;

        }
        tBottom.position.z = 3;
        scene.add(tBottom);
    }

    //todo finishwalls

    // boxWall.position.x = 71;
    // boxWall.position.y = 50;
    //scene.add(boxWall);
    // smallWall.position.x = 43; //position
    // smallWall.position.y = -17;

}

//todo create ghosts
//todo create collecting balls


