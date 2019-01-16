<template> 
<div>
    <div class="content">
      <h1 @click.prevent="playSound()" >Namakarana</h1>
      <div class="mainContent">
            <div class="babyImg"><img src="./../assets/profile.jpeg" alt="Baby photo"/></div>
            <p>Please join to celebrate the naming ceremony of our little one!!</p>
            <h4>On Feb 21 2019</h4>
            <h4>Venue: </h4>
            <p>Rajathashree Sabhangana, #1122, Service Rd, Vijayanagar 2nd stage, Hampi Nagar, RPC Layout, Vijaya Nagar, Bengaluru, Karnataka 560104</p>
            
      </div>
    </div>
     <canvas id="rectBackdrop" width=600px height=400px></canvas>
     <audio autoplay>
      <source src="./../assets/invite.mp3" type="audio/mpeg">
    </audio>
  </div>
</template>

<script>
export default {
  name: 'Invitation',
  props: {
    name: String
  },
  data () {
    return {
      msg: 'Namakarana'
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
  margin:0;
  font-size: 22px;
  font-weight: bold;
}
h4{
  margin:0;
  font-size: 18px;
  font-weight: bold;
}

.babyImg{
  text-align: center;
}
.mainContent{
  bottom: 130px;
}
.babyImg img{
  border: 7px solid #FFF; 
  width:250px; 
  border-radius: 60px;
 }
.content{
    width:300px;
    padding: 10px;
    color:rgb(245, 245, 245); 
    background-color:rgb(250, 152, 33);
    margin: 0 auto;
    text-align: left;
    vertical-align: center;
    z-index: 20;
    border-radius: 6px;
    box-shadow: 5px 5px 10px #CD853F;
}
#rectBackdrop {
  position: fixed;
  top: 0;
  left: 0;
  z-index: -100;
  background-color:#fcd573;
  
}
@media (min-width: 320px) and (max-width: 480px) {
  
 .content{
      top:3%;
      left:10%;
 }
}
</style>
