import React, { useEffect, useState } from 'react'
import styles from "./Fooddetails.module.css"
import IngredientList from './IngredientList'


const Fooddetails = ({ foodid }) => {


  const [food, setFood] = useState({})
  const [isloading, setisloading] = useState(true)

  const url = `https://api.spoonacular.com/recipes/${foodid}/information`
  const APIKEY = '74b1cc6d77d54706bfe0774744325e38'
  // const [foodd,set]


  useEffect(() => {

    async function fetchfood() {
      const res = await fetch(`${url}?apiKey=${APIKEY}`)
      const data = await res.json()

      //  console.log("EEEE",data)
      //  console.log("food",food)
      setFood(data)
      setisloading(false)
    }
    fetchfood()

  }, [foodid])
  // console.log(food,'checking')

  return (
    <>

      <div className={styles.main}>
        <div className={styles.recipeCard}>

          <h1 className={styles.recipeName}>   {food.title}</h1>
          <img  className={styles.recipeImage} src={food.image} alt='' />
          <div className={styles.recipedetails}>
            <span><strong>
              ⌛ {food.readyInMinutes} minutes
            </strong></span>

            <span><strong> 👨‍👩‍👧‍👦serve  {food.servings}</strong></span>

            <span> <strong>{food.vegetarian ? " 🥕 vegetarian" : ' 🐔non-vegiterian'} </strong></span>
            <span> <strong>{food.vegan ? "🫛vegen" : " "} </strong></span>
          </div>

      <div>💲 <span> <strong>{food.pricePerServing / 100} per servings </strong> </span></div>
      
       <h2> Ingredients</h2>
      
      <IngredientList food={food} isloading={isloading}></IngredientList>

          <h2 >Instructions</h2>
          <div className={styles.instruction}>
            <ul >

              {isloading ? (<p>Loading...</p>) : food.analyzedInstructions[0].steps.map((e) => (<li key={e.id}>{e.step}</li>))}
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default Fooddetails