
export default {
  
    async grantRequiredPermissions(){
        let camera = false, clipboard = false, file = false

        // grant clipboard permission if already not granted
        await navigator.permissions.query({name: 'clipboard-read'}).then(result => {  
            if (result.state == 'granted')
                clipboard = true
            else navigator.clipboard.readText().then(() => { clipboard = true}).catch(err=>{console.log(err)})
                }).catch(error=>{console.log(error)})


        // grant file access permission if already not granted
        if ('showOpenFilePicker' in window) 
            file = true
        else {
            await window.showOpenFilePicker()
            if ('showOpenFilePicker' in window) 
                file = true
        }
        console.log('file:', file)


        // grant camera permission if device has camera and already not granted
        if (true){
            await navigator.mediaDevices.getUserMedia({video: true}).then(result=>{
                console.log('get camera permission: ', result)
            })
        }
        
        console.log('camera:',camera)
        console.log('clipboard:', clipboard)
        console.log('file:', file)
  }
}
