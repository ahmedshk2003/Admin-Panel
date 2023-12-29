import React from 'react'
import { useSelector } from 'react-redux'


const ShowInventory = () => {

  const data= useSelector((state)=>{
    return state.INVENTORY_ITEMS;
})

  return (
    <div>
      {
        data.map((elem, id)=>{
          return(<div key={id} >
            <h2>{elem.category}</h2>
            <h3>{elem.name}</h3>
            <h4>{elem.key}</h4>
            </div>)
        })
      }
    </div>
  )
}

export default ShowInventory
