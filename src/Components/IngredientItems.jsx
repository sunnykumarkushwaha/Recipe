import React from 'react'
import style from "./IngredientItems.module.css"
const IngredientItems = ({ e }) => {
    return (
        <div>
            <div className={style.itemcontainer}>


                <div className={style.imageConatiner}>  <img className={style.Image} src={`https://spoonacular.com/cdn/ingredients_100x100/ ` + e.image} alt="" />
                </div>

              <div className={style.nameConatiner}>
              <div className={style.name}>{e.name}</div>
                <div className={style.amount}>{e.amount}{e.unit}</div>
              </div>
               
            </div>
        </div>
    )
}

export default IngredientItems