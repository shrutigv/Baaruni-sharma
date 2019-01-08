<template>
	<div id="app" class="background-change">
		<div class="navigation" v-if="isHome">
			<ul>
				<li><router-link to="/">Home</router-link></li>
				<li><router-link to="/lastestUpdate">Latest update</router-link></li>
				<li><router-link to="/instagram">Instagram</router-link></li>
				<li><router-link to="/youtube">Youtube</router-link></li>
				<li><router-link to="/about">About</router-link></li>
				<li><router-link to="/invitation">Invite</router-link></li>
			</ul>
		</div>
		<router-view></router-view>
  </div>
</template>

<script>
import Home from './components/Home.vue'
import Youtube from './components/Youtube.vue'
import Instagram from './components/Instagram.vue'
import About from './components/About.vue'

export default {
  name: 'App',
  data(){
	return{
		isHome:(window.location.pathname=="/") ? true : false
	}
  },
  components: {
    Home,
	Instagram,
	Youtube,
	About
  }
}
</script>

<style>

.navigation ul{
margin: 0px;
}
.navigation{
  text-align: right;
  height: 60px;
  line-height: 60px;
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


</style>
