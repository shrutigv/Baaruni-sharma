<template>
  <div class="hello">
    <h1>Making Memories Last A Lifetime</h1>
    <div class="main"><img src="" alt="My page"/></div>
    <div>
      <h1>Yearly updates</h1>
      <div class="list">
        <ul>
          <li><img src="" alt=""/>image 1</li>
          <li><img src="" alt=""/>image 2</li>
          <li><img src="" alt=""/>image 3</li>
          <li><img src="" alt=""/>image 4</li>
          <li><img src="" alt=""/>image 5</li>
          <li><img src="" alt=""/>image 6</li>
          <li><img src="" alt=""/>image 7</li>
          <li><img src="" alt=""/>image 8</li>
        </ul>
      </div>
    </div>
    <section id="about">
      <div class="aboutinner">
      <h2 id="about">About Me</h2>
      <div class="circ-right"></div><p>I love to dance and socialise with people. I spend most of my time playing as am a budding baby.I need all you love and support</p> </div>
    </section>
    <div class="contactme">Contact me</div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  props: {
    name: String
  },
  data () {
    return {
      msg: 'Home'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>


.main{
    width: 800px;
    font-family: 'Covered By Your Grace',handwriting;
    background-color: white;
    padding: 20px;
    border-radius: 4px;
    border: 4px solid #ffffff;
    margin: 0 auto;
    height: 400px;
}
@media only screen 
  and (min-device-width: 375px) 
  and (max-device-width: 812px) 
  and (-webkit-min-device-pixel-ratio: 3)
  and (orientation: landscape) { 
    .main{
      width:400px;
    }
}

@media only screen 
  and (min-device-width: 320px) 
  and (max-device-width: 480px)
  and (-webkit-min-device-pixel-ratio: 2)
  and (orientation: portrait) {
    .main{
      width:200px;
      height: 350px;
    }
    
}
.list li{
  width: 200px;
  height: 200px;
  border: 3px solid #ffffff;
}
.contactme{
  text-align: right;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}


</style>
