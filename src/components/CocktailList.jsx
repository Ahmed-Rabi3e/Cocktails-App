import React from 'react'
import Cocktail from './Cocktail'
import Loading from './Loading'
import { useGlobalContext } from '../context'

const CocktailList = () => {
  const { cocktails, loading } = useGlobalContext()
  if (loading) {
    return <Loading />
  }
  if (cocktails.length < 1) {
    return (
      <h2 className='h-screen text-3xl capitalize tracking-widest text-center mb-8 mt-6 font-bold'>
        no cocktails matched your search criteria
      </h2>
    )
  }
  return (
    <section className='section'>
      <h2 className='text-3xl capitalize tracking-widest text-center mb-8 mt-6 font-bold'>cocktails</h2>
      <div className='cocktails-center'>
        {cocktails.map((item) => {
          return <Cocktail key={item.id} {...item} />
        })}
      </div>
    </section>
  )
}

export default CocktailList