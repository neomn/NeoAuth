function deviceHasCamera() {
  return !!(navigator.mediaDevices && navigator.mediaDevices.getUserMedia);
}

export default {
  
  async grantRequiredPermissions(){
    let camera = false, clipboard = false, file = false
    

    // grant clipboard permission if already not granted
    navigator.permissions.query({name: 'clipboard-read'}).then(result => {  
      if (result.state == 'granted')
        clipboard = true
      else navigator.clipboard.readText().then(() => { clipboard = true})
    })
    console.log('clipboard:',clipboard)


    // grant file access permission if already not granted
    if ('showOpenFilePicker' in window) 
      file = true
    else {
      await window.showOpenFilePicker()
      if ('showOpenFilePicker' in window) 
        file = true
    }
    console.log('file:', file)


    
  }
}
