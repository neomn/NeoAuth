//operations which runs every time that app runs

export function startup_ops(router){
  if (is_initial_run())
    router.push('welcome')
}

var is_initial_run = ()=> localStorage.getItem('storage_path') === null


