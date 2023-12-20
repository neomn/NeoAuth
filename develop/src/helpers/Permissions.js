const REQUIRED_PERMISSIONS = [
  'camera',
  'file',
  'clipboard',
]

export default {
  
  grantAllPermissions(){
    // for p in permissions:
      // if p not granted yet:
        // if status not granted:
          // return false
    
    //return true

    // REQUIRED_PERMISSIONS.forEach(element => {
    //   console.log('granting ', element, " permission")
    // });
    // return this.getNotGrantedPermissions() ? false : true;
  },
  
  getNotGrantedPermissions(){
    return false
  },
}
