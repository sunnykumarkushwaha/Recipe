import React from 'react'
import Fooditems from "./Fooditems"
 

const Fooflist = ({fooddata,setfoodid}) => {
  return (
    <div> 
     {fooddata.map((e)=>{
      return <Fooditems key={e.id} food={e} setfoodid={setfoodid}/>
     })}
    </div>
  )
}

export default Fooflist;