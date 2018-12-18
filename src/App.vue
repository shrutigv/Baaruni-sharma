
<template>
  <div id="app" class="background-change">
	    <div class="navigation">
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
  name: 'app',
  components: {
    Home,
	Instagram,
	Youtube,
	About
  }
}
</script>

<style>
.navigation{
  text-align: right;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
body { margin:20px; background:hsl(70, 31%, 85%); text-align:center; }


</style>
