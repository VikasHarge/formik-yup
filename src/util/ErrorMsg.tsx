import React from 'react'

const ErrorMsg = (props : any ) => {
  return (
    <div className='text-red' >
        {props.children}
    </div>
  )
}

export default ErrorMsg