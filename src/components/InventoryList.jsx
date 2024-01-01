import React from 'react'
import Button from '../common/Button'
import { useDispatch} from 'react-redux'
import { DeleteInventory } from '../redux/slices/Inventory'


const InventoryList = ({key, date, product_key,Categorys,product_name, Cost,status,manufacturer,address,quantity}) => {
    
    const dispatch=useDispatch()
    const DeleteItem= (key) =>{
      return dispatch(DeleteInventory(key))
    }
    
    
    return (

        
            <tbody className='inventory-items' key={key} cellpadding="10">
                <tr style={{border:"1px solid white"}}>
                    <td>{date}</td>
                    <td>{product_key}</td>
                    <td style={{fontSize:"0.8rem", color:"green" ,fontWeight:"600", textTransform:"uppercase"}}>
                        <p style={{margin:"0"}}>Category: {Categorys}</p>
                        <p style={{margin:"0"}}>Name: {product_name}</p>
                        <p style={{margin:"0"}}>Cost: Rs.{Cost}</p>
                        <p style={{margin:"0"}}>{quantity}qty.</p>
                    </td>
                    <td>{status} </td>
                    <td style={{fontSize:"0.8rem", color:"greenyellow" ,fontWeight:"600", textTransform:"uppercase",}}>
                        <p style={{margin:"0",}}>Manufacturer: {manufacturer}</p>
                        <p style={{margin:"0",}}>Address: {address}</p>
                    </td>
                    <td>
                        <Button button={"DELETE"} onclick={()=> DeleteItem(key)} />
                    </td>

                </tr>
            </tbody>
        
    )
}

export default InventoryList
