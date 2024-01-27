import React from 'react'

function Winner({status}) {
  return (
    <div class="alert alert-success bg-success text-white alert-dismissible text-center  " role="alert">
    <strong className=' p-3 '>{status}</strong> 
    
    <button type="button" class="btn-close " data-bs-dismiss="alert" aria-label="Close"></button>
    </div>
  )
}

export default Winner;
