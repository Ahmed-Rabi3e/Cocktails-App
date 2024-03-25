import React from 'react'
import { Link } from 'react-router-dom'

const Error = () => {
  return (
    <section className="w-full h-screen bg-slate-200 pt-20 text-center">
      <h1 className='mb-10 text-3xl font-semibold'>oops! it's a dead end</h1>
      <Link to="/" className=" bg-red-600 text-white px-3 py-2 rounded font-bold capitalize w-full text-center">
        back home
      </Link>
    </section>
  )
}

export default Error