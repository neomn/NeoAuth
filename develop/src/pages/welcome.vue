<template>
  <div class="h-screen flex flex-col justify-around items-center bg-gradient-to-br from-gray-600 to-gray-800">
    

    <div class='flex border m-4 '>
    </div>
  </div>
</template>



<script>
  
  import {welcomeOperations} from '../operations/welcome.js'
  import permissions from '../helpers/Permissions.js'
  
  export default { 
    
       methods: {
      grantPermissions(){
        this.first_atempt = false
        allPermissionsGranted = permissions.grantRequiredPermissions() 
        while (!allPermissionsGranted){
          allPermissionsGranted = permissions.grantRequiredPermissions() 
          if (allPermissionsGranted){
            console.log('all permissions granted successfully')
            break
          }
          // show retry or exit 
        }

        return allPermissionsGranted
      },
      allPermissionsGranted(){
        
      },
      foundPreviousInstallation(){
        
      },
      readDataFromPreviousInstallation(){
        
      },
      runInitialSetupOperations(){
        
      },
      exit(){
        
      },
    },
  }
</script>
