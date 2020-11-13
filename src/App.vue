<template>
<div>
    <navBar/>
      <transition name="vista">
      <router-view></router-view>
      </transition>

 </div>
</template>

<script>
import navBar from './components/NavBar.vue'
export default {
  name: 'App',
  components: {navBar }
}
</script>

<style scoped>
  .vista-enter-active, .vista-leave-active {
      transition: opacity .1s;
  }
  .vista-enter, .vista-leave-to{
      opacity: 0;
  }
  li{
    list-style: none;
  }
</style>
