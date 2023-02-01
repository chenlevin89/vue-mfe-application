<template>
  <div class="container">
    <img alt="Vue logo" src="./assets/contact-us.png">
    <h2>Call: 1-800-000-00001</h2>
    <h2>Email: {{email}}</h2>
  </div>
</template>

<script>


export default {
  name: 'App',
  components: {},
  props:{
    email: {
      type: String
    }
  }
}
</script>

<style scoped>


.container{
  height:100%;
  display:flex;
  justify-content:center;
  align-items:center;
  flex-direction: column;
}

img {
  width: auto;
  height: 200px;
}

</style>
