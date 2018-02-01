<template>
  <div><p v-if="isVisible">{{ message }}</p>
  <router-link to="/video/111">C言語</router-link>
    <router-link to="/video/222">R言語</router-link>
    
  </div>
</template>

<script>
  export default {
    data: function() {
      return {
        message: 'hello'
      }
    },
    computed: {
      isVisible: function() {
        if (this.message) {
          return true;
        } else {
          return false;
        }
      }
    }
  }

</script>

<style>


</style>
