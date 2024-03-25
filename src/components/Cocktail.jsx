import React from 'react'
import { Link } from 'react-router-dom'

const Cocktail = ({ image, name, id, info, glass }) => {
  return (
    <article className='bg-white h-fit mb-8 shadow-xl rounded-xl hover:-translate-y-3 transition-transform duration-300'>
      <div className=' object-cover mb-8'>
        <img className='rounded-tr-xl max-h-[500px]' src={image} alt={name} />
      </div>
      <div className='p-6 flex flex-col'>
        <h3 className='mb-2 text-3xl font-semibold'>{name}</h3>
        <h4 className='mb-2 font-mono text-black'>{glass}</h4>
        <p className='mb-4  text-gray-500'>{info}</p>
        <Link to={`/cocktail/${id}`} className='bg-red-600 text-white px-2 py-1 rounded font-bold capitalize w-full text-center'>
          details
        </Link>
      </div>
    </article>
  )
}

export default Cocktail