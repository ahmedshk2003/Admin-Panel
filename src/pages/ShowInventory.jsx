import React from 'react'
import { useSelector } from 'react-redux'
import InventoryList from '../components/InventoryList';
import utils from "../utils/index"
//    pick from these items only
//       category:
//       name: 
//       key:
//       cost: 
//       quantity: 
//       wholsellerName: 
//       Address:
//       ItemsStatus: 
//       Date:

const ShowInventory = () => {

  const InventoryDetails = JSON.parse(utils.getLocalStorage('InventoryDetails'));

  const data = useSelector((state) => {
    return state.INVENTORY_ITEMS;
  })
  console.log(data)
  return (
    <div className='show-inventory'>
      <h1>INVENTORY LIST</h1>
      <table>
        <thead className='show-inventory-head' style={{position:"relative"}}>
          <tr >
            <th>Date</th>
            <th>Product Code</th>
            <th>Product</th>
            <th>Status</th>
            <th>Manufacturer</th>
            <th>Option</th>
          </tr>
        </thead>
        {
          data.length===0 ? 
          (<p style={{position:"absolute" , left:"50%", fontSize:"1.5rem"}}>-- No Entry --</p>):
          (data.map((elem, id) => {
            return (<InventoryList 
             key={id} 
             Categorys={elem.category}
             product_name={elem.name}
            product_key={elem.key}
            status={elem.ItemsStatus} 
            date={elem.Date}
            address={elem.Address}
            manufacturer={elem.wholsellerName}
            quantity={elem.quantity}
            Cost={elem.cost}
            />)
          }))
        }
        
      </table>
      
    </div>
  )
}

export default ShowInventory
