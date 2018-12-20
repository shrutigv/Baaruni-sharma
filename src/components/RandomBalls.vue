<template>
    
<canvas id="canvas" width=400px height=600px></canvas>  
</template>
  
<script>

export default {
  name: 'RandomBalls',
  props: {
    name: String
  },
  data () {
    return {
      msg: 'About'
    }
  },
  methods
}
   var k=1;
    var ball=[];
    var ballCount=20;
    var dx=2;
    var dy=-2;
    for(var i=0;i<ballCount;i++){
        ball[i]={x:0,y:0,dx:2,dy:-2,color:"rgba("+Math.ceil(Math.random()*256)+","+Math.ceil(Math.random()*256)+","+Math.ceil(Math.random()*256)+","+Math.ceil(Math.random()*256)+")"}
    }
 var ballRadius=20;
     var canvas=document.getElementById("canvas");
      
    var ctx=canvas.getContext("2d");
    
  ctx.canvas.width  = 600;
  ctx.canvas.height = 400;
    var x=canvas.height-30;
    var y=canvas.width/2;
 

    
  function draw(){
     ctx.clearRect(0,0,canvas.width,canvas.height)
      for(var i=0;i<ballCount;i++){
          
        if(k==1){
          
       ball[i].x=Math.random()*canvas.width-ballRadius;
          ball[i].y=Math.random()*canvas.height-ballRadius;
          
          }
          ctx.beginPath();
          ctx.arc(ball[i].x,ball[i].y,ballRadius,0,Math.PI*2);
         ctx.fillStyle=ball[i].color;
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
      if(ball[i].x+ball[i].dx>canvas.width-ballRadius||ball[i].x+ball[i].dx<ballRadius)
          {
             ball[i].dx=-ball[i].dx+Math.random();
          }
       if(ball[i].y+ball[i].dy>canvas.height-ballRadius||ball[i].y+ball[i].dy<ballRadius)
          {
             ball[i].dy=-ball[i].dy+Math.random()+0.08;
          }
    }
    }
    
    
    setInterval(draw,30);
  draw();
    

<style>
    * { 
        padding: 0;
        margin: 0; 
    }
    canvas { 
        background:#ddd;
        display: block; 
        margin: 0px 0px; 
    }
</style>