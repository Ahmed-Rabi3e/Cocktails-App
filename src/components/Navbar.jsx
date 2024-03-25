import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <nav
        className="fixed top-0 flex w-full flex-wrap items-center shadow-xl justify-between bg-zinc-50 py-2 shadow-dark-mild dark:bg-neutral-700 lg:py-4">
        <div className="flex w-full flex-wrap items-center justify-between px-3">
          <div className="ms-2">
            <Link className="text-xl text-black font-bold" to="/">
              Cocktail App
            </Link>
          </div>
          <div className='flex gap-5 mr-6 font-mono text-xl'>
            <NavLink to='/'
              className={({ isActive }) =>
                isActive ? "text-red-500 font-bold" : ""
              }
            >
              Home
            </NavLink>
            <NavLink to='/about'
              className={({ isActive }) =>
                isActive ? "text-red-500 font-bold" : ""
              }
            >
              About
            </NavLink>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar