import { useRef, useEffect } from 'react'
import { useGlobalContext } from '../context'

const SearchForm = () => {
  const { setSearchTerm } = useGlobalContext()
  const searchValue = useRef('')

  useEffect(() => {
    searchValue.current.focus()
  }, [])

  function searchCocktail() {
    setSearchTerm(searchValue.current.value)
  }
  function handleSubmit(e) {
    e.preventDefault()
  }
  return (
    <section className='pt-28 pb-0'>
      <form className='w-[80vw] m-0 max-w-[500px] bg-white p-9 capitalize rounded-md shadow-md mx-auto' onSubmit={handleSubmit}>
        <div >
          <label
            className='block mb-6 font-bold tracking-widest text-red-500'
            htmlFor='name'
          >search your favorite cocktail</label>
          <input
            type='text'
            name='name'
            id='name'
            ref={searchValue}
            onChange={searchCocktail}
            className='w-full rounded-md border-none border-transparent bg-slate-200 p-2 text-xl focus:outline-none'
          />
        </div>
      </form>
    </section>
  )
}

export default SearchForm