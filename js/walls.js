

function tWallEqual(){

}

function tWallElong(){

}

function lWall(){

}


function generateWall(length, width, depth){

    var wall = new THREE.BoxGeometry(length, width, depth);
    var material = Physijs.createMaterial(new THREE.MeshLambertMaterial({color: '#ffffff'}), .95, .95);
    return new Physijs.BoxMesh(wall, material);

}