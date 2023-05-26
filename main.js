function preload() {
	world_start = loadSound("world_start.wav");
	setSprites();
	MarioAnimation();
}

function setup() {
	canvas = createCanvas(1240,336);
	instializeInSetup(mario);
	canvas.parent('canvas')
	video=createCapture(VIDEO)
	video.size(800,400)
	video.parent('game_console')
	posenet=ml5.poseNet(video,modalLoaded)
	posenet.on('pose',gotposes)
}
function modalLoaded(){
	console.log('modal is loaded')
}
function gotposes(results){
	if(results.lenght>0){
		noseX=results[0].pose.nose.x
		noseY=results[0].pose.nose.y
		console.log("nosex= "+noseX+" nosey= "+noseY)
	}
}

function draw() {
	game()
}







