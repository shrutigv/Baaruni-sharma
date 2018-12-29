<template>
  <div class="hello">
    <div class="navigation">
     	 	<ul>
				<li><router-link to="/">Home</router-link></li>
				<li><router-link to="/lastestUpdate">Latest update</router-link></li>
				<li><router-link to="/instagram">Instagram</router-link></li>
				<li><router-link to="/youtube">Youtube</router-link></li>
				<li><router-link to="/about">About</router-link></li>
			</ul>
    </div>
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
body { margin:0px; background:hsl(70, 31%, 85%); text-align:center; }
.navigation{
  text-align: right;
  height:80px;
  line-height:80px;
  background-color: #ffffff;
}
.navigation a {
    text-decoration: none;
    font-size: 20px;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
/* background color change */

body {
	width: 100wh;
	height: 90vh;
	color: #2c3e50;
	background: linear-gradient(-45deg, rgb(82, 168, 238),#ebcede, rgb(252, 245, 155), rgb(160, 253, 231));
	background-size: 400% 400%;
	-webkit-animation: Gradient 15s ease infinite;
	-moz-animation: Gradient 15s ease infinite;
	animation: Gradient 15s ease infinite;
}

@-webkit-keyframes Gradient {
	0% {
		background-position: 0% 50%
	}
	50% {
		background-position: 100% 50%
	}
	100% {
		background-position: 0% 50%
	}
}

@-moz-keyframes Gradient {
	0% {
		background-position: 0% 50%
	}
	50% {
		background-position: 100% 50%
	}
	100% {
		background-position: 0% 50%
	}
}

@keyframes Gradient {
	0% {
		background-position: 0% 50%
	}
	50% {
		background-position: 100% 50%
	}
	100% {
		background-position: 0% 50%
	}
}

.background-change {
	font-family: 'Open Sans';
	font-weight: 300;
	text-align: center;
	position: absolute;
	right: 0;
	left: 0;
}

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
