<template>
<div class="background">
    <div class="content">content</div>
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
      msg: 'About'
    }
  },
  methods(){

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.content{
    height: 500px;
    width:400px;
    padding: 10px;
    background-color: beige;
    margin: 0 auto;
    text-align: center;
    vertical-align: center;
}
.background{
    backdrop-filter: inherit;
    background-color: rgb(253, 180, 250);
    box-shadow: 2px 3px 4px #888888;
    padding: 20px;
    border-radius: 3px;
    width: 632px;
    margin: 0 auto;
}

/*Ball css*/
body {
  display: flex;
  justify-content: center;
}

.ball {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: rgb(253, 152, 248);

  animation: bounce 0.5s;
  animation-direction: alternate;
  animation-timing-function: cubic-bezier(.5,0.05,1,.5);
  animation-iteration-count: infinite;
}

@keyframes bounce {
  from { transform: translate3d(0, 0, 0);     }
  to   { transform: translate3d(0, 200px, 0); }
}

</style>
