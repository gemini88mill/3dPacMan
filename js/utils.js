



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

function changeDirection(vector){
    if(vector.x !== 0){
        console.log(vector.x);
    } else{
        return .2;
    }
}

function onWallCollision(ghost, props, object, linearVelocity, angularVelocity) {
    console.log(object.name);
    var currentX = props.ghostSpeedX;
    var currentY = props.ghostSpeedY;

    props.ghostSpeedX = 0;
    props.ghostSpeedY = 0;

    props.direction = Math.floor((Math.random() * 2) + 1);

    if(props.direction === 1 && currentX >= 0){
        props.ghostSpeedX = -.2; //left
    }
    if(props.direction === 2 && currentX <= 0){
        props.ghostSpeedX = .2; //right
    }
    if(props.direction === 3 && currentY >= 0){
        props.ghostSpeedY = -.2; //down
    }
    if(props.direction === 4 && currentY <= 0){
        props.ghostSpeedY = .2; //up
    }
}

function coinFlip() {
    if(Math.floor(Math.random() * 2) === 0) {
        return 0.2;
    }

    return -.2;
}

var score = 0;

function getScore(){
    return score.toString();
}

function addScore(){

    score += 100;
}

function resetScore(){
    score = 0;
}



