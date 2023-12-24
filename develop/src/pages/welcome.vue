<template>
  <div class="h-screen flex flex-col justify-around items-center bg-gradient-to-br from-gray-600 to-gray-800">
    

    <div class='flex flex-col m-4 '>
      <Button @click="setupStoragePath" text='Setup Storage Path' class='text-gray-300 m-2'/>
      <Button @click="exit" text='Load Files From Previous Installation' class='text-gray-300 m-2' />
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
        async setupStoragePath(){
            const dirHandle = await window.showDirectoryPicker().catch(err=>console.log(err))
            console.log(dirHandle)
            const dir = await dirHandle.resolve()
            console.log(dir)
            const exists = await dir.queryEntryHandle('NeoAuth');
            if (!exists) 
                await dir.getDirectoryHandle('NeoAuth', {create: true}).catch(err=>console.log(err)) 
            const file = await dir.getFileHandle('data.json').catch(err=>console.log(err))
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
