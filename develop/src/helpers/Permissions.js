function deviceHasCamera() {
  return !!(navigator.mediaDevices && navigator.mediaDevices.getUserMedia);
}

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
    if (deviceHasCamera()){
      await navigator.permissions.query({name:'camera'}).then(result => {
        if (result.state === 'granted') 
          camera = true
        else  navigator.mediaDevices.getUserMedia({video: true}).then(result=>{
          if (result.state === 'granted')
            camera = true
        }).catch(err=>{console.log(err)})
      }).catch(err=>{console.log(err)})
    }
    
    console.log('device has camera:',deviceHasCamera())
    console.log('camera:',camera)
    console.log('clipboard:', clipboard)
    console.log('file:', file)
    
    return ((deviceHasCamera && camera && file && clipboard) || (!deviceHasCamera && file && clipboard))

  }
}
