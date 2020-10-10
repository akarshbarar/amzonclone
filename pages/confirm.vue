<template>
  <div class="confirm">
      <Header/>
      <HeaderTwo/>
      <h1>Order confirmed. You are Logged Out Automatically.</h1>
  </div>
</template>

<script>

import Header from '../layouts/partials/Navbar'
import HeaderTwo from '../layouts/partials/HeaderTwo'
export default {
components:{
    Header,
    HeaderTwo

  },
}
</script>

<style>
.confirm{

background-color:#fff;
}
</style>
