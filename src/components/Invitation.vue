<template> 
  <div>
    <div id="card">
       <div class="content">
          <div class="mainContent">
            <h1>Namakarana</h1>
            <div class="babyImg"><img src="./../assets/profile.jpeg" alt="Baby photo"/></div>
            <p>𝗣𝗹𝗲𝗮𝘀𝗲 𝗷𝗼𝗶𝗻 𝘁𝗼 𝗰𝗲𝗹𝗲𝗯𝗿𝗮𝘁𝗲 𝘁𝗵𝗲 𝗻𝗮𝗺𝗶𝗻𝗴 𝗰𝗲𝗿𝗲𝗺𝗼𝗻𝘆 𝗼𝗳 𝗼𝘂𝗿 𝗹𝗶𝘁𝘁𝗹𝗲 𝗼𝗻𝗲!!</p>
            <p>𝗼𝗻 F𝗲𝗯 21 2019 @ 11:30 𝗮𝗺</p>
            <span>Venue: </span>
            <p>𝗥𝗮𝗷𝗮𝘁𝗵𝗮𝘀𝗵𝗿𝗲𝗲 𝗦𝗮𝗯𝗵𝗮𝗻𝗴𝗮𝗻𝗮, #𝟭𝟭𝟮𝟮, 𝗦𝗲𝗿𝘃𝗶𝗰𝗲 𝗥𝗱, 𝗩𝗶𝗷𝗮𝘆𝗮𝗻𝗮𝗴𝗮𝗿 𝟮𝗻𝗱 𝘀𝘁𝗮𝗴𝗲, 𝗛𝗮𝗺𝗽𝗶 𝗡𝗮𝗴𝗮𝗿, 𝗥𝗣𝗖 𝗟𝗮𝘆𝗼𝘂𝘁, 𝗩𝗶𝗷𝗮𝘆𝗮 𝗡𝗮𝗴𝗮𝗿, 𝗕𝗲𝗻𝗴𝗮𝗹𝘂𝗿𝘂, 𝗞𝗮𝗿𝗻𝗮𝘁𝗮𝗸𝗮 𝟱𝟲𝟬𝟭𝟬𝟰</p>
            <span>𝗺𝗮𝗽𝘀?</span><a href="https://www.google.com/maps/place/Rajathashree+Sabhangana/@12.9897991,77.5247191,13z/data=!4m18!1m12!4m11!1m3!2m2!1d77.5336446!2d12.9636212!1m6!1m2!1s0x3bae3e741f38dc95:0xde91456eba1c3ac1!2z8J2XpfCdl67wnZe38J2XrvCdmIHwnZe18J2XrvCdmIDwnZe18J2Xv_Cdl7LwnZeyIPCdl6bwnZeu8J2Xr_Cdl7XwnZeu8J2Xu_Cdl7TwnZeu8J2Xu_Cdl64sICPwnZ-t8J2frfCdn67wnZ-uLCDwnZem8J2XsvCdl7_wnZiD8J2XtvCdl7DwnZeyIPCdl6XwnZexLCDwnZep8J2XtvCdl7fwnZeu8J2YhvCdl67wnZe78J2XrvCdl7TwnZeu8J2XvyDwnZ-u8J2Xu_Cdl7Eg8J2YgPCdmIHwnZeu8J2XtPCdl7IsIPCdl5vwnZeu8J2XuvCdl73wnZe2IPCdl6HwnZeu8J2XtPCdl67wnZe_LCDwnZel8J2Xo_Cdl5Yg8J2Xn_Cdl67wnZiG8J2XvPCdmILwnZiBLCDwnZep8J2XtvCdl7fwnZeu8J2YhvCdl64g8J2XofCdl67wnZe08J2XrvCdl78sIPCdl5XwnZey8J2Xu_Cdl7TwnZeu8J2XufCdmILwnZe_8J2Ygiwg8J2XnvCdl67wnZe_8J2Xu_Cdl67wnZiB8J2XrvCdl7jwnZeuIPCdn7HwnZ-y8J2frPCdn63wnZ-s8J2fsA!2m2!1d77.5336125!2d12.9597754!3m4!1s0x3bae3e741f38dc95:0xde91456eba1c3ac1!8m2!3d12.9597754!4d77.5336125">C𝗹𝗶𝗰𝗸 𝗺𝗲</a>
         </div>  
        </div>
    </div>
   
    <div id="envelope">
      <img src="./../assets/invitation.gif" alt="envelope" style="width:310px;" @click.prevent="playSound()"/>
    </div>
   
     <canvas id="rectBackdrop" width=600px height=400px></canvas>
     <audio id="invite-music">
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
       document.getElementById("card").style.display = "block";
       document.getElementById("envelope").style.display = "none";
       document.getElementById("invite-music").play();
    }

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#card{
  display: none;
}
.mainContent a {
    color: white;
}
h1{
  margin:0;
  font-size: 22px;
  font-weight: bold;
  text-align: center;
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
