<template>
  <div class="h-screen flex flex-col justify-around items-center bg-gradient-to-br from-gray-600 to-gray-800">
    

    <div class='flex flex-col m-4 '>
      <Button  @click="setupStoragePath" text='Setup Storage Path' class='text-gray-300 m-2'/>
      <Button v-if="!first_atempt" @click="exit" text='Load Files From Previous Installation' class='text-gray-300 m-2' />
    </div>
  </div>
</template>



<script>
  
  import {welcomeOperations} from '../operations/welcome.js'
  import permissions from '../helpers/Permissions.js'
  
  export default { 
    data() {
        return {
            first_atempt: true
        }
    },
    mounted() {
        useState('permissionsGranted', ()=>false)
    },
    methods: {
        setupStoragePath(){
            showDirectoryPicker().then(res=>{
                console.log(res)
            }) 
        },
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
