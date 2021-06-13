nose_x = 0;
nose_y = 0;
 
function preload(){
 clownose=loadImage('https://i.postimg.cc/CMGs0XWk/48-484018-clown-nose-png-clipart.jpg');
}
 
function setup(){
    canvas= createCanvas(300,300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300,300)
    video.hide(); 

    posenet = ml5.poseNet(video,model_loaded);
    posenet.on('pose',got_results);
}
 
function model_loaded(){
    console.log("model loaded");
}
function got_results(results){
    if(results.length > 0 ){
        console.log(results);
       nose_x = results[0].pose.nose.x ;
       nose_y = results[0].pose.nose.y ;
       console.log(nose_x);
        console.log(nose_y);
        
    }
}


function draw(){
  image(video,0,0,300,300 );
  image(clownose,nose_x,nose_y,40,40);
}

function take_snapshot(){
    save('realtime_filter.png')
}
