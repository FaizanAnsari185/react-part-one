"use client"
import React, { useState } from 'react'

const TwoWayBindingInReact = () => {
    const [userName, setUserName] = useState("")

    function handleChange(e) {
        setUserName(e.target.value)
        console.log(userName);
      }
  return (
    <>
    <h1 className="mb-5 text-2xl">Enter Your Name :</h1>
    <form>
     <input onChange={handleChange} type="text" value={userName} placeholder="Enter UserName" className="border-2 border-zinc-800 px-4 py-2 text-xl"/>
    </form>
    </>
  )
}

export default TwoWayBindingInReact