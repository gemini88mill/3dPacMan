

function cameraMovement(){
    if( Key.isDown( Key.A ) )
    {
        camera.rotation.y += 0.05;

    }
    if( Key.isDown( Key.D ) )
    {
        camera.rotation.y -= 0.05;

    }

    if( Key.isDown( Key.W ) )
    {
        var deltaX = Math.sin(camera.rotation.y)*.8;
        var deltaZ = Math.cos(camera.rotation.y)*.8;
        camera.position.x -= deltaX;
        camera.position.z -= deltaZ;

        sphere.position.x += 20;
    }
    if( Key.isDown( Key.S ) )
    {
        var deltaX = Math.sin(camera.rotation.y)*.8;
        var deltaZ = Math.cos(camera.rotation.y)*.8;
        camera.position.x += deltaX;
        camera.position.z += deltaZ;
    }
}