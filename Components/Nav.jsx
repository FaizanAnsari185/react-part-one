import React, { useState } from 'react'

const Nav = ({num}) => {
    console.log(num);
    

  return (
    <div className='bg-red-200'>Navigation Bar {num}</div>
  )
}

export default Nav