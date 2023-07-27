function preLoad()
{

}

function setup()
{
    canvas = createCanvas(550, 400);
    canvas.position(500, 240)
    video = createCapture(VIDEO);
    video.hide();
}

function draw()
{
    image(video,0,0,550,400);
    fill(0,230,250)
    stroke(250,200,0)
    strokeWeight(5)
    rect(0, 0, 550, 10);
    rect(0, 0, 10, 400);
    rect(0, 390, 550, 10);
    rect(540, 0, 10, 400);

}

function take_snapshot()
{
    save('pictureframe_shot.png');
}