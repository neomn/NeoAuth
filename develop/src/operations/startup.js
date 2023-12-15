//operations which runs every time that app runs

export function startup_ops(router){
  if (is_initial_run){
    console.log('this is initial run ')
    router.push('welcome')
  } else {
     
  }
}

var is_initial_run = ()=>{return true}


