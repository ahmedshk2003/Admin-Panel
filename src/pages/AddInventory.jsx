import React, { useState } from 'react'
import ProductsCategory from '../database/Products';
import { useDispatch } from 'react-redux';
import { addinventory } from '../redux/slices/Inventory';


const AddInventory = () => {

  const [selecteCategory, setSelectedCategory] = useState('');
  const [productName, setproductName] = useState("");
  const [prodKey, setprodKey]= useState("")

  const dispatch = useDispatch()
  const handleSubmit = () => {

    dispatch(addinventory({
      ProducCategory: selecteCategory,
      name: productName,
      key: prodKey,
    }));

    setSelectedCategory("")
    setproductName("")
  }

  return (
    <div>
      <select value={selecteCategory} onChange={(e) => setSelectedCategory(e.target.value)} >
        {ProductsCategory.map((elem, index) => {
          return (<option key={index}>{elem}</option>)
        })}
      </select>

      <input type="text" value={productName} onChange={(e) => setproductName(e.target.value)} />
      <input type="text" />


      <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default AddInventory
