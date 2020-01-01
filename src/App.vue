<template>
  <div>
    
    <Navbar />
    <router-view></router-view>
  </div>
</template>

<script>
import Navbar from './components/Navbar'
// import Landing from './components/Landing'
// import Portfolio from './components/Portfolio'
// import Stocks from './components/Stocks'

export default {
  components: {
    Navbar
  }
}
</script>

<style>

</style>
