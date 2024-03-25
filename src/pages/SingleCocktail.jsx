import React from 'react'
import Loading from '../components/Loading'
import { useParams, Link } from 'react-router-dom'

export default function SingleCocktail() {
  const { id } = useParams()
  const [loading, setLoading] = React.useState(false)
  const [cocktail, setCocktail] = React.useState(null)

  React.useEffect(() => {
    setLoading(true)
    async function getCocktail() {
      try {
        const response = await fetch(
          `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`
        )
        const data = await response.json()
        if (data.drinks) {
          const {
            strDrink: name,
            strDrinkThumb: image,
            strAlcoholic: info,
            strCategory: category,
            strGlass: glass,
            strInstructions: instructions,
            strIngredient1,
            strIngredient2,
            strIngredient3,
            strIngredient4,
            strIngredient5,
          } = data.drinks[0]
          const ingredients = [
            strIngredient1,
            strIngredient2,
            strIngredient3,
            strIngredient4,
            strIngredient5,
          ]
          const newCocktail = {
            name,
            image,
            info,
            category,
            glass,
            instructions,
            ingredients,
          }
          setCocktail(newCocktail)
        } else {
          setCocktail(null)
        }
      } catch (error) {
        console.log(error)
      }
      setLoading(false)
    }
    getCocktail()
  }, [id])
  if (loading) {
    return <Loading />
  }
  if (!cocktail) {
    return <h2 className='text-3xl capitalize tracking-widest text-center mb-8 mt-6'>no cocktail to display</h2>
  } else {
    const {
      name,
      image,
      category,
      info,
      glass,
      instructions,
      ingredients,
    } = cocktail
    return (
      <section className='section bg-slate-100 h-screen'>
        <Link to='/' className='ml-4 bg-red-600 text-white px-2 py-1 rounded font-bold capitalize w-full text-center'>
          back home
        </Link>
        <h2 className='capitalize tracking-widest font-semibold text-4xl text-center mb-8 mt-6'>{name}</h2>
        <div className='drink'>
          <img className='rounded' src={image} alt={name}></img>
          <div className='pt-8 '>
            <p>
              <span className='bg-red-700 text-white px-2 py-1 rounded-lg mr-2'>name :</span> {name}
            </p>
            <p>
              <span className='bg-red-700 text-white px-2 py-1 rounded-lg mr-2'>category :</span> {category}
            </p>
            <p>
              <span className='bg-red-700 text-white px-2 py-1 rounded-lg mr-2'>info :</span> {info}
            </p>
            <p>
              <span className='bg-red-700 text-white px-2 py-1 rounded-lg mr-2'>glass :</span> {glass}
            </p>
            <p>
              <span className='bg-red-700 text-white px-2 py-1 rounded-lg mr-2'>instructons :</span> {instructions}
            </p>
            <p>
              <span className='bg-red-700 text-white px-2 py-1 rounded-lg mr-2'>ingredients :</span>
              {ingredients.map((item, index) => {
                return item ? <span key={index}> {item}</span> : null
              })}
            </p>
          </div>
        </div>
      </section>
    )
  }
}
