
window.addEventListener("load", function() {
        var canvas=document.getElementById("rectBackdrop");
        var ctx=canvas.getContext("2d");
        var k=1;
        var ball=[];
        var ballCount=100;
        var rectWidth=4;
        var rectHeight=50;
        var signHelper = Math.floor(Math.random() * 2);
        var color=['#e86ee8','#b0e5bf','#dec2dc','#41649d','#ee516c','ffad33'];
 
      if (signHelper == 1) {
        this.sign = -1;
      } else {
        this.sign = 1;
      }

        var dx=1;
        var dy=-1;
        for(var i=0;i<ballCount;i++){
            ball[i]={x:0,y:0,dx:1,dy:-1,color:"rgba("+Math.ceil(Math.random()*254)+","+Math.ceil(Math.random()*256)+","+Math.ceil(Math.random()*255)+","+Math.ceil(Math.random()*256)+")"}
        }
        ctx.canvas.width  = window.innerWidth;
        ctx.canvas.height = window.innerHeight;
        var x=window.innerHeight-300;
        var y=window.innerWidth/200;
        
    function draw(){
        ctx.clearRect(0,0,canvas.width,canvas.height)
        var signHelper=1;
        for(var i=0;i<ballCount;i++){
                 
            if(k==1){
                if(signHelper==1){
                    ball[i].x=Math.random()*canvas.width+rectHeight;
                    ball[i].y=Math.random()*canvas.height+rectWidth;
                    signHelper=0;
                }
                else{
                    ball[i].x=Math.random()*canvas.width+rectHeight;
                    ball[i].y=Math.random()*canvas.height+rectWidth;
                    signHelper=1;
                }
                 
                ball[i].x=Math.random()*canvas.width-rectHeight;
                ball[i].y=Math.random()*canvas.height-rectWidth;
                 
            }
            ctx.beginPath();
            ctx.rect(ball[i].x,ball[i].y,rectWidth,rectHeight);
            ctx.fillStyle=color[Math.round(i%6)];
            ctx.fill();
            ctx.closePath();
                
        }
        move();
        rebound();
    }
    function move(){
             
        for(var i=0;i<ballCount;i++){
            ball[i].x=ball[i].x+ball[i].dx;
            ball[i].y=ball[i].y+ball[i].dy;
            k=0;
        }
             
    }
    function rebound(){
        for(var i=0;i<ballCount;i++){ 
            if(ball[i].x+ball[i].dx>canvas.width-rectWidth||ball[i].x+ball[i].dx<rectWidth){
                ball[i].dx=-ball[i].dx+Math.random();
            }
            if(ball[i].y+ball[i].dy>canvas.height-rectHeight||ball[i].y+ball[i].dy<rectHeight){
                ball[i].dy=-ball[i].dy+Math.random();
            }
        }
    }
    setInterval(draw,30);
    ctx.globalCompositeOperation = "source-over";
   draw();
   ctx.globalCompositeOperation = "overlay";
});