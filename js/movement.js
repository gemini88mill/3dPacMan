ball.__dirtyPosition = true;
ball.__dirtyRotation = true;

function cameraMovement(){
    if( Key.isDown( Key.A ) )
    {
        camera.position.x -= 0.5;
        //aball.__dirtyPosition = true;

        ball.position.x -= 0.5;
        //sphere.setLinearVelocity(.01);

    }
    if( Key.isDown( Key.D ) )
    {
        camera.position.x += 0.5;
        ball.position.x += 0.5;
    }

    if( Key.isDown( Key.W ) )
    {

        camera.position.y += 0.5;
        ball.position.y += 0.5;
        // var deltaX = Math.sin(camera.rotation.y)*.8;
        // var deltaZ = Math.cos(camera.rotation.y)*.8;
        // camera.position.x -= deltaX;
        // camera.position.z -= deltaZ;

        //sssphere.position.x += 20;
    }
    if( Key.isDown( Key.S ) )
    {

        camera.position.y -= 0.5;
        ball.position.y -= 0.5;
        // var deltaX = Math.sin(camera.rotation.y)*.8;
        // var deltaZ = Math.cos(camera.rotation.y)*.8;
        // camera.position.x += deltaX;
        // camera.position.z += deltaZ;
    }
}