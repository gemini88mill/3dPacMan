//ball.__dirtyPosition = true;
//ball.__dirtyRotation = true;

function cameraMovement(){

    collisionListener(ball);

    //camera.position = ball.position;
    ball.__dirtyPosition = true;
    ball.__dirtyRotation = true;

    if( Key.isDown( Key.A ) && (wallHit === false)) {
        //ball.applyCentralImpulse(new THREE.Vector3(-1,0,0));
        camera.position.x = ball.position.x;
        camera.position.y = ball.position.y - 150;
        ball.position.x += -.5;
        //ball.setLinearVelocity(new THREE.Vector3(1,0,0));



        // ball.addEventListener('collision', function (otherObject, linearVelocity, angularVelocity, contact_normal) {
        //     if(otherObject.name !== 'groundPlane') {
        //         console.log(otherObject.name);
        //     }
        //     if(otherObject.name === 'wall'){
        //         console.log(otherObject);
        //         console.log(linearVelocity);
        //         console.log(angularVelocity);
        //         console.log(contact_normal);
        //
        //         ball.__dirtyPosition = false;
        //         ball.__dirtyRotation = false;
        //         ball.position.z = 3;
        //     }
        //
        // });
    }
    if( Key.isDown( Key.D ) ) {
        //ball.applyCentralImpulse(new THREE.Vector3(1,0,0));
        camera.position.x = ball.position.x;
        camera.position.y = ball.position.y - 150;
        ball.position.x += .5;
    }

    if( Key.isDown( Key.W ) ) {
        //ball.applyCentralImpulse(new THREE.Vector3(0,1,0));
        camera.position.y = ball.position.y - 150;
        camera.position.x = ball.position.x;
        ball.position.y += .5;
    }
    if( Key.isDown( Key.S ) ) {
        //ball.applyCentralImpulse(new THREE.Vector3(0,-1,0));
        camera.position.y = ball.position.y - 150;
        camera.position.x = ball.position.x;
        ball.position.y += -.5;
    }



    //checkHit();
}

var ghostSpeedX = .2;
var ghostSpeedY = .2;

function ghostMovement(daGhost){
    daGhost.__dirtyPosition = true;
    daGhost.__dirtyRotation = true;

    daGhost.position.z = 6;
    //daGhost.position.x += ghostSpeedX;

    daGhost.addEventListener('collision', function (otherObject, linearVelocity, angularVelocity) {
        if(otherObject.name !== 'groundPlane'){
            console.log(otherObject.name);

            var currentSpeed = function (speed) {
                return speed !== 0;
            };


            var res = getRandom();
            if(res === 1 && !currentSpeed(ghostSpeedX)){
                ghostSpeedX = .2;
                ghostSpeedY = 0;
                //daGhost.position.x += ghostSpeedX;
            }
            else if(res === 2 && !currentSpeed(ghostSpeedX)){
                ghostSpeedX = -.2;
                ghostSpeedY = 0;
                //daGhost.position.x += ghostSpeedX;
            }
            else if(res === 3 && !currentSpeed(ghostSpeedY)){
                ghostSpeedY = .2;
                ghostSpeedX = 0;
                //daGhost.position.y += ghostSpeedY;
            }
            else if(res === 4 && !currentSpeed(ghostSpeedY)){
                ghostSpeedY = .2;
                ghostSpeedX = 0;
                //daGhost.position.y += ghostSpeedY;
            } else{
                ghostSpeedX = .2;
                ghostSpeedY = -.2;
                //daGhost.position.x += .2;
            }
            //todo set up direction randomizer
            //todo halt curretn direction and go to somewhere else

        }
    });

    daGhost.position.x += ghostSpeedX ;
    daGhost.position.y += ghostSpeedY ;

    if(daGhost.position.x > 90){
        daGhost.position.x = 90;
        ghostSpeedX = -.2;
    }
    if(daGhost.position.y > 90){
        daGhost.position.y = 90;
        ghostSpeedY = -.2
    }
    if(daGhost.position.x < -90){
        daGhost.position.x = -90;
        ghostSpeedX = .2;
    }
    if(daGhost.position.y < -90){
        daGhost.position.y = -90;
        ghostSpeedY = .2;
    }

}





function boundaryX(walls){
    var objects = {
        wall: walls.position.x,
        ghost: ghost.position.x
    };

    console.log(objects);
    return ghost.position.x === walls.position.x;
}

function boundaryY(walls){
    var objects = {
        name: "y",
        wall: walls.position.y,
        ghost: ghost.position.y
    };

    console.log(objects);
    return ghost.position.y === walls.position.y;
}