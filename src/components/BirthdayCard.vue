<template>
    <div>
    <div class="content">
          
          <h1 @click.prevent="playSound()" >𝙈𝙮 1𝙨𝙩 𝙗𝙞𝙧𝙩𝙝𝙙𝙖𝙮 </h1>
          <div style="position: relative; text-align: right;bottom: 70px;"><img src="./../assets/bday-cake.png" style="width: 50px;" /></div>
            
          <div class="mainContent">
            <div class="babyImg"><img src="./../assets/11.jpeg" alt="Baby photo"/></div>
            <p>𝘼 𝙮𝙚𝙖𝙧 𝙥𝙖𝙨𝙨𝙚𝙙 𝙖𝙣𝙙 𝙄'𝙢 𝙩𝙪𝙧𝙣𝙞𝙣𝙜 one</p>
            <p>𝙋𝙡𝙚𝙖𝙨𝙚 join us 𝙩𝙤 mark the memory</p>
            <h4>Come, lets have fun on Feb 13 2019 at 6:00 PM</h4>
            <h4>Venue: </h4>
         </div>
    </div>
     <canvas id="background" width=1800px height=400px></canvas>
     <audio autoplay id="invite">
      <source src="./../assets/invite.mp3" type="audio/mpeg">
    </audio>
    </div>
</template>

<script>

export default {
  name: 'BirthdayCard',
  props: {
    name: String
  },
  data () {
    return {
      msg: 'Birthday'
    }
  },
  methods:{
    playSound:function(){
    
    }
    
  },
  mounted(){
    var audio = document.getElementById('invite');
    audio.play();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.navigation{
  display:none;
}

h1{
      font-size: 25px;
}
h4{
      font-size: 20px;
}
body, html {
			position: absolute;
			top: 0;
			bottom: 0;
			left: 0;
			right: 0;
      font-size: 20px;
			margin: 0;
			padding: 0;
		}
.babyImg{
  text-align: center;
}
.mainContent{
  position: relative;
  bottom: 80px;
}
.babyImg img{
  border: 7px solid #FFF; 
  width:150px; 
  border-radius: 60px;
 
}
.content{
    width:300px;
    padding: 10px;
    color:rgb(245, 245, 245); 
    background-color: rgb(236, 130, 190);
    margin: 0 auto;
    text-align: left;
    vertical-align: center;
    z-index: 20;
    border-radius: 6px;
    box-shadow: 5px 5px 10px rgb(172, 121, 150);
}
#background {
  position: fixed;
  top: 0;
  left: 0;
  z-index: -100;
  
}
@media (min-width: 320px) and (max-width: 480px) {
  
 .content{
      top:3%;
      left:10%;
 }
  
}
</style>
