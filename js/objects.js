function createGroundPlane()
{

    var texture = THREE.ImageUtils.loadTexture('assets/images/Originalpacmaze.png');

    var planeMaterial = new Physijs.createMaterial(new THREE.MeshLambertMaterial({map:texture}), .4, .8 );
    var planeGeometry = new THREE.PlaneGeometry( 200, 200, 6 );
    var groundPlane = new Physijs.BoxMesh(planeGeometry, planeMaterial, 0);
    groundPlane.name = "groundPlane";

    //rotateObject(groundPlane, -80,0,0);
    //groundPlane.position.x = -10;

    scene.add( groundPlane );
}



function createGhosts(){

    ghostPosition = [];
    ghosts = [];

    ghosts.push(generateGhost('#00FF00', 'inky'));
    ghosts.push(generateGhost('#FF0000', 'binky'));
    ghosts.push(generateGhost('#0000FF', 'blinky'));
    ghosts.push(generateGhost('#FF00FF', 'bob'));

    ghosts[0].position.x = 0;
    ghosts[1].position.x = -10;
    ghosts[2].position.x = 10;
    ghosts[3].position.x = 20;



    for(var i = 0; i < ghosts.length; i++){
        // ghosts[i].__dirtyPosition = true;
        // ghosts[i].__dirtyRotation = true;
        ghosts[i].position.z = 2.5;
        scene.add(ghosts[i]);



        ghosts[i].addEventListener('collision', function (otherObject, linearVelocity, angularVelocity) {
            if(otherObject.name === 'player'){
                //console.log('oops');
            }
        });

    }

    //console.log(ghostPosition);

    //ghost.position.z = 4;
    //scene.add(ghosts);

    //ghost with physics
    // var blueGhost = generateWall(5,5,5);
    // blueGhost.position.z = 10;
    // scene.add(blueGhost);

}

function createBall(){
    var geometry = new THREE.SphereGeometry( 5 );
    var material = Physijs.createMaterial(new THREE.MeshLambertMaterial({color: '#ffff00'}));
    ball = new Physijs.SphereMesh( geometry, material, 1 );

    ball.name = 'player';
    ball.position.z = 6;
    ball.position.y = -15;

    //console.log(ball);
    scene.add(ball);
    
    // ball.addEventListener('collision', function (otherObject, linearVelocity, angularVelocity, contact_normal) {
    //     if(otherObject.name !== 'groundPlane') {
    //         console.log(otherObject.name);
    //     }
    //     if(otherObject.name === 'wall'){
    //         wallHit = true;
    //
    //     }
    //
    // })

}

function createCollectible(posX, posY){
    // var geo = new THREE.SphereGeometry(2);
    // var mat = Physijs.createMaterial(new THREE.MeshLambertMaterial({color: '#ffffff'}));
    // var collect = new Physijs.SphereMesh(geo, mat);

    var collect = generateCollectables();

    //collect = new THREE.Object3D();
    //collect.add(collect);
    //collect.name = 'collect';
    collect.position.z = 1;
    collect.position.x = posX;
    collect.position.y = posY;

    scene.add(collect);

    collect.addEventListener('collision', function (otherObject, linearVelocity, angularVelocity) {
        if(otherObject.name === 'player'){
            console.log('collected');
            scene.remove(this);
        }
    })
}


var wallName = 'wall';

function createWalls(){

    walls = [];
    wallBorder = [];

    // var wall = new THREE.BoxGeometry(6,22,12);
    // var material = Physijs.createMaterial(new THREE.MeshLambertMaterial({color: 'light grey'}), .95, .95);
    // var msh = new Physijs.BoxMesh(wall, material);

    for(var i = 0; i<2; i++) {
        var smallWallVertical = generateWall(6,22,6);
        switch(i){
            case 0: smallWallVertical.position.x = 43; smallWallVertical.position.y = -17; break;
            case 1: smallWallVertical.position.x = -43; smallWallVertical.position.y = -17; break;
        }
        smallWallVertical.name = wallName;
        smallWallVertical.position.z = 3; //all walls

        wallBorder.push(smallWallVertical.position);

        walls.push(smallWallVertical);

        // scene.add(smallWallVertical);
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
        smallWallHorizontal.name = wallName;

        wallBorder.push(smallWallHorizontal.position);
        walls.push(smallWallHorizontal);

        // scene.add(smallWallHorizontal);
    }

    for(i = 0; i<2; i++){
        var smallWallHorizontal2 = generateWall(27, 6, 6);
        switch(i){
            case 0: smallWallHorizontal2.position.x = -31; smallWallHorizontal2.position.y = -45; break;
            case 1: smallWallHorizontal2.position.x = 31; smallWallHorizontal2.position.y = -45; break;
        }
        smallWallHorizontal2.position.z = 3;
        smallWallHorizontal2.name = wallName;

        wallBorder.push(smallWallHorizontal2.position);
        walls.push(smallWallHorizontal2);

        // scene.add(smallWallHorizontal2);
    }

    for(i = 0; i < 3; i++) {
        var tTopWall = generateWall(47, 6, 6);
        switch(i){
            case 0: tTopWall.position.y = -25; break;
            case 1: tTopWall.position.y = 50; break;
            case 2: tTopWall.position.y = -62; break;

        }
        tTopWall.position.z = 3;
        tTopWall.name = wallName;

        wallBorder.push(tTopWall.position);
        walls.push(tTopWall);

        // scene.add(tTopWall);
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
        tBottom.name = wallName;

        wallBorder.push(tBottom.position);
        walls.push(tBottom);
        // scene.add(tBottom);
    }

    for(i = 0; i < 2; i++){
        var tTopSide = generateWall(6,40,6);
        switch(i){
            case 0: tTopSide.position.x = 43; tTopSide.position.y = 30; break;
            case 1: tTopSide.position.x = -43; tTopSide.position.y = 30; break;
        }
        tTopSide.position.z = 3;
        tTopSide.name = wallName;

        wallBorder.push(tTopSide.position);
        walls.push(tTopSide);

        // scene.add(tTopSide);
    }

    for(i = 0; i < 2; i++){
        var tBottomSide = generateWall(21,6,6);
        switch(i){
            case 0: tBottomSide.position.y = 31; tBottomSide.position.x = 29; break;
            case 1: tBottomSide.position.y = 31; tBottomSide.position.x = -29; break;
        }
        tBottomSide.position.z = 3;
        tBottomSide.name = wallName;

        wallBorder.push(tBottomSide.position);
        walls.push(tBottomSide);

        //scene.add(tBottomSide);
    }

    for(i = 0; i < 4; i++){
        var boxTop = generateWall(27,12,6);
        switch(i){
            case 0: boxTop.position.y = 73; boxTop.position.x = 32; break;
            case 1: boxTop.position.y = 73; boxTop.position.x = -32; break;
            case 2: boxTop.position.y = 73; boxTop.position.x = 70; break;
            case 3: boxTop.position.y = 73; boxTop.position.x = -70; break;
        }
        boxTop.position.z = 3;
        boxTop.name = wallName;

        wallBorder.push(boxTop.position);
        walls.push(boxTop);

        //scene.add(boxTop);
    }

    for(i = 0; i < 2; i++){
        var tInvertedTop = generateWall(60, 6,6);
        switch(i){
            case 0: tInvertedTop.position.y = -81; tInvertedTop.position.x = 50; break;
            case 1: tInvertedTop.position.y = -81; tInvertedTop.position.x = -50; break;
        }
        tInvertedTop.position.z = 3;
        tInvertedTop.name = wallName;

        wallBorder.push(tInvertedTop.position);
        walls.push(tInvertedTop);

        //scene.add(tInvertedTop);
    }

    for(i = 0; i < 4; i++){
        var landTBottom = generateWall(6,15,6);
        switch (i){
            case 0: landTBottom.position.y = -70; landTBottom.position.x = 43; break;
            case 1: landTBottom.position.y = -70; landTBottom.position.x = -43; break;
            case 2: landTBottom.position.y = -56; landTBottom.position.x = 65; break;
            case 3: landTBottom.position.y = -56; landTBottom.position.x = -65; break;
        }
        landTBottom.position.z = 3;
        landTBottom.name = wallName;

        wallBorder.push(landTBottom.position);
        walls.push(landTBottom);

        //scene.add(landTBottom);
    }

    for(i = 0; i < walls.length; i++) walls[i].position.z = 3;
    for(i = 0; i < walls.length; i++) scene.add(walls[i]);




    // boxWall.position.x = 71;
    // boxWall.position.y = 50;
    //scene.add(boxWall);
    // smallWall.position.x = 43; //position
    // smallWall.position.y = -17;

}


//todo create collecting balls


