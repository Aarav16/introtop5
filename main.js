function setup() {
    canvas = createCanvas(320, 320);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(250,250);
    video.hide();
  poseNet=ml5.poseNet(video,modelLoaded);
  }
  function modelLoaded(){
    console.log('poseNet is initialized');
    poseNet.on('pose',gotPoses);
  }
  
  function draw() {
    image(video,0,0,300,300)
    circle(13,280,40)
fill("blue")  
 circle(13,20,40)
 fill("blue")
 circle(283,280,40)
 fill("blue")
 circle(283,20,40)
 fill("blue")
 
  }
    
    function take_snapshot(){    
      save('myFilterImage.png');
    }
      
  