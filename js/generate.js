
var distance = 10;
function createCollectablesArray(){
    var collect = [];
    collect.push(createCollectible(30, 0));
    collect.push(createCollectible(40, 0));
    collect.push(createCollectible(50, 0));
    collect.push(createCollectible(60, 0));
    collect.push(createCollectible(70, 0));
    collect.push(createCollectible(80, 0));
    collect.push(createCollectible(30, 10));
    collect.push(createCollectible(30, 20));
    collect.push(createCollectible(55, 10));
    collect.push(createCollectible(55, 20));
    collect.push(createCollectible(55, 30));
    collect.push(createCollectible(55, 40));
    collect.push(createCollectible(65, 40));
    collect.push(createCollectible(75, 40));
    collect.push(createCollectible(85, 40));
    collect.push(createCollectible(90, 50));
    collect.push(createCollectible(90, 60));
    collect.push(createCollectible(90, 70));
    collect.push(createCollectible(90, 80));
    collect.push(createCollectible(90, 90));
    collect.push(createCollectible(80, 90));
    collect.push(createCollectible(70, 90));
    collect.push(createCollectible(60, 90));
    collect.push(createCollectible(50, 90));
    collect.push(createCollectible(40, 90));
    collect.push(createCollectible(30, 90));
    collect.push(createCollectible(20, 90));
    collect.push(createCollectible(10, 90));
    collect.push(createCollectible(10, 80));
    collect.push(createCollectible(10, 70));
    collect.push(createCollectible(10, 60));
    collect.push(createCollectible(20, 60));
    collect.push(createCollectible(30, 60));
    collect.push(createCollectible(30, 50));
    collect.push(createCollectible(30, 40));
    collect.push(createCollectible(20, 40));
    collect.push(createCollectible(10, 40));
    collect.push(createCollectible(10, 30));
    collect.push(createCollectible(10, 20));
    collect.push(createCollectible(20, 20));
    collect.push(createCollectible(0, 20));
    collect.push(createCollectible(40, 60));
    collect.push(createCollectible(50, 60));
    collect.push(createCollectible(60, 60));
    collect.push(createCollectible(70, 60));
    collect.push(createCollectible(80, 60));
    collect.push(createCollectible(50, 70));
    collect.push(createCollectible(50, 80));
    collect.push(createCollectible(55, 50));

    collect.push(createCollectible(-30, 0));
    collect.push(createCollectible(-40, 0));
    collect.push(createCollectible(-50, 0));
    collect.push(createCollectible(-60, 0));
    collect.push(createCollectible(-70, 0));
    collect.push(createCollectible(-80, 0));
    collect.push(createCollectible(-30, 10));
    collect.push(createCollectible(-30, 20));
    collect.push(createCollectible(-55, 10));
    collect.push(createCollectible(-55, 20));
    collect.push(createCollectible(-55, 30));
    collect.push(createCollectible(-55, 40));
    collect.push(createCollectible(-65, 40));
    collect.push(createCollectible(-75, 40));
    collect.push(createCollectible(-85, 40));
    collect.push(createCollectible(-90, 50));
    collect.push(createCollectible(-90, 60));
    collect.push(createCollectible(-90, 70));
    collect.push(createCollectible(-90, 80));
    collect.push(createCollectible(-90, 90));
    collect.push(createCollectible(-80, 90));
    collect.push(createCollectible(-70, 90));
    collect.push(createCollectible(-60, 90));
    collect.push(createCollectible(-50, 90));
    collect.push(createCollectible(-40, 90));
    collect.push(createCollectible(-30, 90));
    collect.push(createCollectible(-20, 90));
    collect.push(createCollectible(-10, 90));
    collect.push(createCollectible(-10, 80));
    collect.push(createCollectible(-10, 70));
    collect.push(createCollectible(-10, 60));
    collect.push(createCollectible(-20, 60));
    collect.push(createCollectible(-30, 60));
    collect.push(createCollectible(-30, 50));
    collect.push(createCollectible(-30, 40));
    collect.push(createCollectible(-20, 40));
    collect.push(createCollectible(-10, 40));
    collect.push(createCollectible(-10, 30));
    collect.push(createCollectible(-10, 20));
    collect.push(createCollectible(-20, 20));
    collect.push(createCollectible(-40, 60));
    collect.push(createCollectible(-50, 60));
    collect.push(createCollectible(-60, 60));
    collect.push(createCollectible(-70, 60));
    collect.push(createCollectible(-80, 60));
    collect.push(createCollectible(-50, 70));
    collect.push(createCollectible(-50, 80));
    collect.push(createCollectible(-55, 50));


    collect.push(createCollectible(30, -10));
    collect.push(createCollectible(30, -20));
    collect.push(createCollectible(30, -30));
    collect.push(createCollectible(20, -35));
    collect.push(createCollectible(10, -35));
    collect.push(createCollectible(40, -35));
    collect.push(createCollectible(50, -35));
    collect.push(createCollectible(60, -35));
    collect.push(createCollectible(70, -35));
    collect.push(createCollectible(80, -35));
    collect.push(createCollectible(90, -35));
    collect.push(createCollectible(55, -40));
    collect.push(createCollectible(55, -30));
    collect.push(createCollectible(55, -20));
    collect.push(createCollectible(55, -10));
    collect.push(createCollectible(55, -50));
    collect.push(createCollectible(55, -60));
    collect.push(createCollectible(55, -70));
    collect.push(createCollectible(65, -70));
    collect.push(createCollectible(75, -70));
    collect.push(createCollectible(90, -70));
    collect.push(createCollectible(90, -80));
    collect.push(createCollectible(90, -90));
    collect.push(createCollectible(80, -90));
    collect.push(createCollectible(70, -90));
    collect.push(createCollectible(60, -90));
    collect.push(createCollectible(50, -90));
    collect.push(createCollectible(40, -90));
    collect.push(createCollectible(30, -90));
    collect.push(createCollectible(20, -90));
    collect.push(createCollectible(10, -90));
    collect.push(createCollectible(10, -80));
    collect.push(createCollectible(10, -70));
    collect.push(createCollectible(20, -70));
    collect.push(createCollectible(30, -70));
    collect.push(createCollectible(30, -60));
    collect.push(createCollectible(30, -50));
    collect.push(createCollectible(40, -50));
    collect.push(createCollectible(20, -50));
    collect.push(createCollectible(10, -50));
    collect.push(createCollectible(0, -90));
    collect.push(createCollectible(75, -60));
    collect.push(createCollectible(75, -50));
    collect.push(createCollectible(90, -50));

    collect.push(createCollectible(-30, -10));
    collect.push(createCollectible(-30, -20));
    collect.push(createCollectible(-30, -30));
    collect.push(createCollectible(-20, -35));
    collect.push(createCollectible(-10, -35));
    collect.push(createCollectible(-40, -35));
    collect.push(createCollectible(-50, -35));
    collect.push(createCollectible(-60, -35));
    collect.push(createCollectible(-70, -35));
    collect.push(createCollectible(-80, -35));
    collect.push(createCollectible(-90, -35));
    collect.push(createCollectible(-55, -40));
    collect.push(createCollectible(-55, -30));
    collect.push(createCollectible(-55, -20));
    collect.push(createCollectible(-55, -10));
    collect.push(createCollectible(-55, -50));
    collect.push(createCollectible(-55, -60));
    collect.push(createCollectible(-55, -70));
    collect.push(createCollectible(-65, -70));
    collect.push(createCollectible(-75, -70));
    collect.push(createCollectible(-90, -70));
    collect.push(createCollectible(-90, -80));
    collect.push(createCollectible(-90, -90));
    collect.push(createCollectible(-80, -90));
    collect.push(createCollectible(-70, -90));
    collect.push(createCollectible(-60, -90));
    collect.push(createCollectible(-50, -90));
    collect.push(createCollectible(-40, -90));
    collect.push(createCollectible(-30, -90));
    collect.push(createCollectible(-20, -90));
    collect.push(createCollectible(-10, -90));
    collect.push(createCollectible(-10, -80));
    collect.push(createCollectible(-10, -70));
    collect.push(createCollectible(-20, -70));
    collect.push(createCollectible(-30, -70));
    collect.push(createCollectible(-30, -60));
    collect.push(createCollectible(-30, -50));
    collect.push(createCollectible(-40, -50));
    collect.push(createCollectible(-20, -50));
    collect.push(createCollectible(-10, -50));
    collect.push(createCollectible(-75, -60));
    collect.push(createCollectible(-75, -50));
    collect.push(createCollectible(-90, -50));


    return collect;
}

function generateCollectables(){
    var geo = new THREE.SphereGeometry(1);
    var mat = Physijs.createMaterial(new THREE.MeshLambertMaterial({color: '#ffffff'}));
    var collect = new Physijs.SphereMesh(geo, mat, 0);

    collect.name = 'collect';
    return collect;
}

function generateGhost(color, name){
    var geo = new THREE.BoxGeometry(5,5,5);
    var material = new Physijs.createMaterial(new THREE.MeshLambertMaterial({color: color}), .95, .95);
    var ghost = new Physijs.BoxMesh(geo, material, 1);

    ghost.name = name;
    return ghost;
}


function generateWall(length, width, depth){

    var wall = new THREE.BoxGeometry(length, width, depth);
    var material = Physijs.createMaterial(new THREE.MeshLambertMaterial({color: '#ffffff'}), .95, .95);
    return new Physijs.BoxMesh(wall, material, 0);

}