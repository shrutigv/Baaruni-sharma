<template>
    <div>
    <div class="content">
       

         <h1 @click.prevent="playSound()">𝙈𝙮 1𝙨𝙩 𝙗𝙞𝙧𝙩𝙝𝙙𝙖𝙮 </h1>
         <div><img src="./../assets/bdayCake.png" style="width: 100px;position: relative;bottom: 85px;left: 285px;" /></div>
         <div class="babyImg"><img src="./../assets/11.jpeg" alt="Baby photo"/></div>
         <p>𝘼 𝙮𝙚𝙖𝙧 𝙥𝙖𝙨𝙨𝙚𝙙 𝙖𝙣𝙙 𝙄'𝙢 𝙩𝙪𝙧𝙣𝙞𝙣𝙜 one</p>
         <p>𝙋𝙡𝙚𝙖𝙨𝙚 𝙘𝙤𝙢𝙚 𝙩𝙤 𝙩𝙝𝙚 𝙥𝙖𝙧𝙩𝙮 𝙖𝙣𝙙 𝙝𝙖𝙫𝙚 𝙛𝙪𝙣!</p>
         <h4>𝙋𝙡𝙚𝙖𝙨𝙚 join us on Feb 13 2019 at 6:00 PM</h4>
         <h4>Venue </h4>
    </div>
     <canvas id="background" width=1800px height=400px></canvas>
     <audio autoplay>
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
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1{
      font-size: 35px;
}
h1{
      font-size: 30px;
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
.babyImg img{
  border: 7px solid #FFF; 
  width:150px; 
  border-radius: 60px;
}
.content{
    width:400px;
    padding: 10px;
    color:rgb(245, 245, 245); 
    background-color: rgb(238, 134, 193);
    margin: 0 auto;
    text-align: left;
    vertical-align: center;
    z-index: 20;
    border-radius: 6px;
    box-shadow: 5px 5px 10px rgb(172, 121, 150);
   
    position:fixed;
    top:20%;
    left:40%;
}
#background {
  position: fixed;
  top: 0;
  left: 0;
  z-index: -100;
  
}
@media only screen 
  and (min-device-width: 375px) 
  and (max-device-width: 812px) 
  and (-webkit-min-device-pixel-ratio: 3)
  and (orientation: landscape) { 
    .content{
      top:3%;
      left:10%;
    }
}

@media only screen 
  and (min-device-width: 300px) 
  and (max-device-width: 480px)
  and (-webkit-min-device-pixel-ratio: 2)
  and (orientation: portrait) {
    .content{
      top:3%;
      left:4%;
    }
    
}



</style>
