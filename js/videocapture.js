let capture;

function setup( ) {
    createCanvas(600,600);
    capture= createCapture(video);
    capture.size(320,240);

    background(0);

}
function draw( ){
    image(captue,0,0);
}
