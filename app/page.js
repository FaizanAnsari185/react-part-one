"use client"
import Header from '@/Components/header'
import TwoWayBindingInReact from '@/Components/TwoWayBindingInReact'
import axios from 'axios'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

const page = () => {


  // const [num, setNum] = useState(10)
  // const [users, setUsers] = useState([])
  // const getUser = async () => {
  //  const { data } = await axios.get("https://jsonplaceholder.typicode.com/users")
  //  setUsers(data)
  // }

  // useEffect(()=> {
  //   getUser()
  // },[])

  return (
    <>
    <TwoWayBindingInReact />
    {/* <h1 className='text-2xl font-bold'>This is Home Page</h1>
    <Link href='/Contact' className='border-2 border-slate-800'>Contact</Link> */}
    {/* <button onClick={getUser} className='border-2 border-green-500 rounded-lg font-bold p-2'>Get Data</button>
    <div className='p-8 bg-slate-100 mt-5 rounded-md'>
      <ul>
        {users.map((e, i)=>{
          return<li key={i}>{e.username}--- <a href={`/${e.id}`} className='border-2 border-orange-400'>Explore</a></li>
        })}
      </ul>
    </div> */}
    {/* <div>this is header
      <Header num={num} />
    </div> */}


    </>
  )
}

export default page