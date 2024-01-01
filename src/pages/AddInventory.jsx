import React, { useState } from 'react'
import ProductsCategory from '../database/Products';
import { useDispatch } from 'react-redux';
import { addinventory } from '../redux/slices/Inventory';
import Input from "../common/Input";
import Radio from '../common/Radio';
import { Select, Option } from "../common/Dropdown"
import Button from '../common/Button';
import Textarea from '../common/TextArea';
import Label from '../common/Label';
import SubmitPopup from '../common/SubmitPopup';


const AddInventory = () => {

  const [Succespop, setSuccespop] = useState({
    popup: 0
  })

  const [productDetails, setDetails] = useState({
    Category: "",
    name: "",
    pro_code: "",
    cost: "",
    quantity: "",
    wholsellerName: "",
    Address: "",
    ItemsStatus: "",
    Date: ""
  });


  const handleChange = (e, key) => {
    setDetails({
      ...productDetails,
      [key]: e.target.value,
    })
  }

  const dispatch = useDispatch()
  const handleSubmit = () => {
    if (validateForm()) {

      dispatch(addinventory({
        Date: productDetails.Date,
        category: productDetails.Category,
        name: productDetails.name,
        key: productDetails.pro_code,
        cost: productDetails.cost,
        quantity: productDetails.quantity,
        wholsellerName: productDetails.wholsellerName,
        Address: productDetails.Address,
        ItemsStatus: productDetails.ItemsStatus,
      }));

      // successfully submitted 
      popupFunc()

      //clearing inputs
      ClearInput()
    }

    // console.log(productDetails)

  }

  //succes popup function
  const popupFunc = () => {
    setSuccespop({ popup: 1 });

    setTimeout(() => {
      setSuccespop({ popup: 0 });
    }, 3000);
  };

   //clearing inputs
   const ClearInput= () =>{
    setDetails({
      Category: "",
      name: "",
      pro_code: "",
      cost: "",
      quantity: "",
      wholsellerName: "",
      Address: "",
      ItemsStatus: "",
      Date: ""
    })
   }

  //succes popup css
  const successpopupStyle={
    width: Succespop.popup === 1 ?  "18rem" : "0", 
    overflow: "hidden",  
    transition: "width 0.5s ease" ,
  }

  // error handling 
  const [error, setError] = useState("");

  const validateForm = () => {
    for (const key in productDetails) {
      if (!productDetails[key]) {
        setError(`Please fill in ${key}`);
        return false;
      }
    }
    setError("");
    return true;
  };

  const Errorhandler = () => {
    return (<>{error && <div style={{ color: "red", fontSize: "2rem", marginBottom: "1rem" }}>{error}</div>}</>)
  }

  //css
  const mystyle = {
    display: "flex",
    justifyContent: "flex-start",
    flexDirection: "column",
    gap: "3rem"
  }

  const outerstyle = {
    display: "flex",
    justifyContent: "space-between",

    // gap: "3rem"
  }

  function Item1() {

    return (
      <div style={mystyle}>
        <Label label={"choose category"} element={

          <select className='Global-select' value={productDetails.Category} required onChange={(e) => handleChange(e, "Category")} >
            {ProductsCategory.map((elem, index) => {
              return (<Option keys={index} children={elem} />)
            })}
          </select>
        } />


        <Label label={"cost"} element={
          <Input type={"number"} step={"0.01"} min={"0.00"} value={productDetails.cost} placeholder={"Enter Cost"} Change={(e) => handleChange(e, "cost")} />
        } />


        <Label label={"wholeseller name"} element={
          <Input value={productDetails.wholsellerName} className='Capital-style' placeholder={"Enter Wholseller Name"} Change={(e) => handleChange(e, "wholsellerName")} />
        } />

        <Button onclick={handleSubmit} button={"Submit"} />
      </div>
    )
  }

  function Item2() {
    return (
      <div style={mystyle}>

        <Label label={"product name"} element={
          <Input value={productDetails.name} className='Capital-style' placeholder={"Enter product Name"} Change={(e) => handleChange(e, "name")} />
        } />

        <Label label={"quantity"} element={
          <Input type={"number"} value={productDetails.quantity} placeholder={"Enter product Key"} Change={(e) => handleChange(e, "quantity")} />
        } />

        {Errorhandler()}

      </div>
    )
  }

  function Item3() {
    return (
      <div style={mystyle}>

        <Label label={"product code"} element={
          <Input value={productDetails.pro_code} className='Capital-style' placeholder={"Enter product Key"} Change={(e) => handleChange(e, "pro_code")} />
        } />

        <Label label={"items-status"} element={
          <>
            <Radio value={"FIRST CLASS"} onchange={(e) => handleChange(e, "ItemsStatus")} checked={productDetails.ItemsStatus === "FIRST CLASS"} LabelName={"FIRST CLASS"} name={"ItemStatus"} />
            <Radio value={"SECOND HAND"} onchange={(e) => handleChange(e, "ItemsStatus")} checked={productDetails.ItemsStatus === "SECOND HAND"} LabelName={"SECOND HAND"} name={"ItemStatus"} />
          </>
        } />
        <Label label={"wholeseller address"} element={
          <Textarea cols={"27"} row={"6"} maxLength={10} placeholder={"enter address"} value={productDetails.Address} onchange={(e) => handleChange(e, "Address")} />
        } />


      </div>
    )
  }

  return (

    <div>
      <main className='mainContainer'>
        <div className='mainTitle'>
          <h3>ADD INVENTORIES</h3>
          <SubmitPopup style={successpopupStyle} submit={"Submit Succesfully"} />
        </div>


        <div style={{ display: "flex", justifyContent: "center" }}>
          <div style={{ display: "flex", width: "90%", flexDirection: "column", gap: "2rem" }}>
            <Label label={"date"} element={
              <Input type={"date"} id={"date"} value={productDetails.Date} Change={(e) => handleChange(e, "Date")} />
            } />



            <div style={outerstyle}>

              <div>{Item1()}</div>
              <div>{Item2()}</div>
              <div>{Item3()}</div>

            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default AddInventory
