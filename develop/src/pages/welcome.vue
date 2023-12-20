<template>
  <div class="h-screen bg-gradient-to-br from-gray-600 to-gray-800">
    this is welcome
    <button @click="grantRequiredPermissions" class="border">grant permissions</button>
  </div>
</template>



<script>
  
  import {welcomeOperations} from '../operations/welcome.js'
  import permissions from '../helpers/Permissions.js'
  
  export default { 
    mounted() {
      // grant all permissions
        // if all permissions not granted: retry or exit
      
      
      // if previous installation: 
        // read required data
      // else : 
        // setup 
      
      // redirect to home
    },
    methods: {
      async grantRequiredPermissions(){
        console.log('granting required permissions')
        console.log( await navigator )
        //const fileSystemPermission = await navigator.storage.query({name: 'presistent-storage'})
        //console.log(fileSystemPermission)
      },
      
    },
  }
</script>
