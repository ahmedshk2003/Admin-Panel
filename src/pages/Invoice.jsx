import React, { useState } from 'react';
import Radio from '../common/Radio';
import { Checkbox } from '../common/Checkbox';
import "./App.css"



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



    // const generatedInvoice = `
    //   Invoice No.: ${invoiceData.invoiceNo}
    //   Service Provider: ${invoiceData.serviceProvider}
    //   GSTIN: ${invoiceData.GSTIN}
    //   Customer Name: ${invoiceData.customerName}
    //   Product Purchased: ${invoiceData.productPurchased}
    //   State: ${invoiceData.state}
    //   Location: ${invoiceData.location}
    //   Total Amount: ${invoiceData.totalAmount}
    //   Address: ${invoiceData.address}
    // `;

    // alert(generatedInvoice);
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
          <div>
            <h2>Invoice Details</h2>
            <pre>
              Invoice No.: {invoiceData.invoiceNo}
            </pre>
            <pre>
              Service Provider: {invoiceData.serviceProvider}
            </pre>
            <pre>
              GSTIN: {invoiceData.GSTIN}
            </pre>
            <pre>

              Customer Name: {invoiceData.customerName}
            </pre>
            <pre>
              State: {invoiceData.state}
            </pre>
            <pre>
              Location: {invoiceData.location}
            </pre>
            <pre>
              Total Amount: {invoiceData.totalAmount}
            </pre>
            <pre>
              Address: {invoiceData.address}
            </pre>

            <button onClick={goBackToForm}>Go Back</button>


          </div>


        )}
    </div>


  );
};


export default Invoice;
