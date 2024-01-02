import React, { useState } from 'react';
import Radio from '../common/Radio';
import { Checkbox } from '../common/Checkbox';
import "./App.css"
import { Input } from "../common/Input"



const Invoice = () => {
  const [showForm, setShowForm] = useState(true);
  const [invoiceData, setInvoiceData] = useState({
    invoiceNo: '',
    serviceProvider: '',
    GSTIN: '',
    customerName: '',
    productPurchased: '',
    state: '',
    location: '',
    totalAmount: '',
    address: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInvoiceData({ ...invoiceData, [name]: value });
  };

  const generateInvoice = (e) => {
    e.preventDefault();
    setShowForm(false);

  };

  const goBackToForm = () => {
    setShowForm(true);
  };

  return (
    <div>
      {
        showForm ? (

          <form>
            <h2>Create Invoice</h2>
            <div className='invoiceInputs'>
              <input
                type="text"
                placeholder='Invoice No.'
                name="invoiceNo"
                value={invoiceData.invoiceNo}
                onChange={handleInputChange}
  
              />

             
  
              <input
                type="text"
                placeholder='Service provider'
                name="serviceProvider"
                value={invoiceData.serviceProvider}
                onChange={handleInputChange}
              />
            </div>

            <div className='invoiceInputs'>
              <input
                type="text"
                placeholder='GSTIN'
                name="GSTIN"
                value={invoiceData.GSTIN}
                onChange={handleInputChange}
              />
              <input
                type="text"
                placeholder='Customer name'
                name="customerName"
                value={invoiceData.customerName}
                onChange={handleInputChange}
              />
            </div>

            <div className='invoiceInputs'>
              <input
                type="text"
                placeholder='Product purchased'
                name="productPurchased"
                value={invoiceData.productPurchased}
                onChange={handleInputChange}
              />
              <input
                type="text"
                placeholder='State'
                name="state"
                value={invoiceData.state}
                onChange={handleInputChange}
              />
            </div>

            <div className='invoiceInputs'>
              <input
                type="text"
                placeholder='Location'
                name="location"
                value={invoiceData.location}
                onChange={handleInputChange}
              />
              <input
                type="text"
                placeholder='Total amount '
                name="totalAmount"
                value={invoiceData.totalAmount}
                onChange={handleInputChange}
              />
            </div>

            <textarea
              name="address"
              id=""
              cols="67"
              rows="5"
              placeholder='Address'
              value={invoiceData.address}
              onChange={handleInputChange}
            ></textarea>

            <button className='giBtn' onClick={generateInvoice}>
              Generate Invoice
            </button>



          </form >

        ) : (
          <div className='parentInvoice'>

            <div className='invoicePage'>

              <p>
                Invoice No. : {invoiceData.invoiceNo}

              </p>

              <hr />


              <p>
                Service Provider: {invoiceData.serviceProvider}
              </p>
              <hr />

              <p>
                GSTIN: {invoiceData.GSTIN}
              </p>
              <hr />


              <p>
                Customer Name: {invoiceData.customerName}
              </p>
              <hr />

              <p>
                State: {invoiceData.state}
              </p>
              <hr />

              <p>
                Location: {invoiceData.location}
              </p>
              <hr />

              <p>
                Total Amount: {invoiceData.totalAmount}
              </p>
              <hr />

              <p>
                Address: {invoiceData.address}
              </p>
              <hr />


              <button onClick={goBackToForm}>Go Back</button>


            </div>
          </div>


        )}
    </div>


  );
};


export default Invoice;
