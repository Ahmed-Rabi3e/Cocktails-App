import CocktailList from '../components/CocktailList'
import SearchForm from '../components/SearchForm'

const Home = () => {
  return (
    <main className='bg-slate-200'>
      <SearchForm />
      <CocktailList />
    </main>

  )
}

export default Home