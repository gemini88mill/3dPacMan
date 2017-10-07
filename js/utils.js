function rotateObject(object,degreeX, degreeY, degreeZ){

    degreeX = (degreeX * Math.PI)/180;
    degreeY = (degreeY * Math.PI)/180;
    degreeZ = (degreeZ * Math.PI)/180;

    object.rotateX(degreeX);
    object.rotateY(degreeY);
    object.rotateZ(degreeZ);

}

function flattenVector(vector3){
    return{
        x: Math.ceil(vector3.x),
        y: Math.ceil(vector3.y),
        z: Math.ceil(vector3.z)
    };
}

function getBoxBoundary(box){
    return{
        minX: box.position.x + box.geometry.boundingBox.min.x,
        maxX: box.position.x + box.geometry.boundingBox.max.x,
        minY: box.position.y + box.geometry.boundingBox.min.y,
        maxY: box.position.y + box.geometry.boundingBox.max.y,
        minZ: box.position.z + box.geometry.boundingBox.min.z,
        maxZ: box.position.z + box.geometry.boundingBox.max.z
    };
}



//todo get sphereBoundary

function isPointInsideAABB(point, wall) {
    return (point.x >= wall.minX && point.x <= wall.maxX) &&
        (point.y >= wall.minY && point.y <= wall.maxY) &&
        (point.z >= wall.minY && point.z <= wall.maxZ);
}

function vector3ToVector2(vector3){
    return new THREE.Vector2(vector3.x, vector3.y);
}

function getGhost(ghostName){
    ghosts.forEach(function (ghost) {
        if(ghost.name === ghostName){
            //console.log(ghost);
            return ghost;
        }
    })

}

function dir(object, direction, speed){

    switch(direction){
        case 'left': speed = -.2; break;
        case 'right': speed = .2; break;
        case 'up': speed = -.2; break;
        case 'down': speed = .2; break;
    }

}

function getRandom(){
    return Math.floor(((Math.random() * 400) + 1) % 4);
}

function collisionListener(ball){
    ball.addEventListener('collision', function (otherObject, linearVelocity, angularVelocity, contact_normal) {
        if(otherObject.name !== 'groundPlane') {
            console.log(otherObject.name);
        }
        if(otherObject.name === 'wall'){
            console.log('hit');
            //Key._pressed[Key.A] = false;
            //Key.disableKey(Key.A);




        }

    });
}



