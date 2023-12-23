//operations which runs every time that app runs


var is_initial_run = ()=> localStorage.getItem('storage_path') === null

export function startup_ops(router){
  if (is_initial_run())
    router.push('welcome')
}



