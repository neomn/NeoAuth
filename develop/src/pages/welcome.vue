<template>
  <div class="h-screen bg-gradient-to-br from-gray-600 to-gray-800">
    this is welcome
    <button @click="grantRequiredPermissions" class="border">grant permissions</button>
  </div>
</template>



<script>
  import {welcomeOperations} from '../operations/welcome.js'
  export default { 
    mounted() {
      welcomeOperations()
    },
  }
</script>
