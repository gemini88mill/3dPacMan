//ball.__dirtyPosition = true;
//ball.__dirtyRotation = true;

function cameraMovement(){

    //collisionListener(ball);

    //ball.__dirtyPosition = true;
    //ball.__dirtyRotation = true;
    //var currentBallVector = ball.position;

    if( Key.isDown( Key.A )) {
        ball.applyCentralImpulse(new THREE.Vector3(-2,0,0));
        camera.position.x = ball.position.x;
        camera.position.y = ball.position.y - 150;
        //ball.position.x += -.5;
        //console.log(currentBallVector);
    }
    if( Key.isDown( Key.D ) ) {
        ball.applyCentralImpulse(new THREE.Vector3(2,0,0));
        camera.position.x = ball.position.x;
        camera.position.y = ball.position.y - 150;
        //ball.position.x += .5;
        //console.log(currentBallVector);
    }

    if( Key.isDown( Key.W ) ) {
        ball.applyCentralImpulse(new THREE.Vector3(0,2,0));
        camera.position.y = ball.position.y - 150;
        camera.position.x = ball.position.x;
        //ball.position.y += .5;
        //console.log(currentBallVector);
    }
    if( Key.isDown( Key.S ) ) {
        ball.applyCentralImpulse(new THREE.Vector3(0,-2,0));
        camera.position.y = ball.position.y - 150;
        camera.position.x = ball.position.x;
        //ball.position.y += -.5;
        //console.log(currentBallVector);
    }
    if(Key.isDown(Key.SPACE)){
        ball.applyCentralImpulse(new THREE.Vector3(0,0,10));
    }



    //checkHit();
}

function setDirtyPosition(){
    ghosts[0].__dirtyPosition = true;
    ghosts[0].__dirtyRotation = true;
}

function ghostMovement(){

    for(var i = 0; i < ghosts.length; i++){
        ghosts[i].__dirtyRotation = true;
        ghosts[i].__dirtyRotation = true;

        ghosts[i].position.x += speedX;
        ghosts[i].position.y += speedY;

    }


    // ghosts[0].__dirtyPosition = true;
    // ghosts[0].__dirtyRotation = true;
    // ghosts[0].position.y += speedY;
    // ghosts[0].position.x += speedX;




    // console.log(ghost);

}

