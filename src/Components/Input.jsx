import React, { useEffect, useState } from 'react'
import  styles from  "./Input.module.css"


const url="https://api.spoonacular.com/recipes/complexSearch"
const APIKEY='74b1cc6d77d54706bfe0774744325e38'
const Input = ({fooddata,setfooddata}) => {

    const [query,setquery]=useState("pizza")


    useEffect(()=>{
        async function  fetchFood(){
             const res= await fetch(`${url}?query=${query}&apiKey=${APIKEY}`)
             const data=await res.json()
             setfooddata(data.results)
            //  console.log(data)

            // console.log("demo function execuated")
        }
        fetchFood()
    },[query])

  return (
    <div className={styles.search_container}>
    {/* <label> Search Items</label> */}
        <input className={styles.input_field} value={query} onChange={(e)=>{e.target.value}} type='text'/>
    </div>
  )
}

export default Input