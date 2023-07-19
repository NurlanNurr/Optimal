import React, { Children } from 'react'

const Pagecontainer = ({children}) => {
  return (
    <div className=' lg:w-9/12 m-auto w-full'>{children}</div>
  )
}

export default Pagecontainer