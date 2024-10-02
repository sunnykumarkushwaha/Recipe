import React from 'react'

import styles from "./Fooditems.module.css"

const Fooditems = ({food,setfoodid}) => {
  return (
    <>
    <div className={styles.item_container}>
        <img className={styles.item_image} src={food.image} alt=""/>
        

        <div className={styles.item_content}>
          <p className={styles.item_name}>{food.title}</p>
        </div>
        <div className={styles.button_container}>
        <button className={styles.item_button} onClick={()=>{
          setfoodid(food.id)
        }}> view recipe </button>

        </div>
         
      
    
    </div>
    </>
    
  )
}

export default Fooditems