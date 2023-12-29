import React, { useState } from 'react'
import ProductsCategory from '../database/Products';
import { useDispatch } from 'react-redux';
import { addinventory } from '../redux/slices/Inventory';
import { Input } from '../common/Input';


const AddInventory = () => {

  const [productDetails, setDetails] = useState({
    Category: "",
    name:"",
    pro_code:"",

  });
  

  const handleChange= (e, key) =>{
    setDetails({
      ...productDetails,
      [key]: e.target.value,
    })
  }

  const dispatch = useDispatch()
  const handleSubmit = () => {
    
    dispatch(addinventory({
      category: productDetails.Category,
      name: productDetails.name,
      key: productDetails.pro_code,
    }));

    // console.log(productDetails)
    
  }

  return (
    <div>
      <select value={productDetails.Category} onChange={(e)=>handleChange(e, "Category")} >
        {ProductsCategory.map((elem, index) => {
          return (<option key={index}>{elem}</option>)
        })}
      </select>

      {/* <input type="text" value={productName} onChange={(e) => setproductName(e.target.value)} /> */}
      <Input value={productDetails.pro_code} placeholder={"Enter product code"} change={(e)=>handleChange(e, "pro_code")} />

      <Input value={productDetails.name} placeholder={"Enter product Name"} change={(e)=>handleChange(e, "name")} />
      

      <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default AddInventory
