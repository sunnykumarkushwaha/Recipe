import React from 'react'
import IngredientItems from './IngredientItems'

const IngredientList = ({ food, isloading }) => {
    return (

        <div>
        {isloading? <p>Loading...</p> :  food.extendedIngredients.map((e) => {
            return <IngredientItems e={e}></IngredientItems>
            
        })}
        
        </div>
    )
}

export default IngredientList