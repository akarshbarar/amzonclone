<template>
  <div class="cancel">
      <Header/>
      <HeaderTwo/>
      <h1>Order cancelled</h1>
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
.cancel{
background-color:#fff;
}
</style>
