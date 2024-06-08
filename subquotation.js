import React, { useState, useEffect } from "react";
import './subquotation.css';

const Subquotation = () => {

  const [formdata, setFormdata] = useState({
    quotationno : '',
    company: '',
    description : '',
    amount: '',
    adddate: '',
  });

  const quothandler = (e) => {
    setFormdata({ ...formdata, [e.target.name]: e.target.value });
  };

  const submitQuote = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/quotpost', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formdata),
      });

      const data = await response.json();
      console.log(data.message);
    } catch (error) {
      console.log('Error message', error);
    }
  };

  return (
    <div>
      <form onSubmit={submitQuote} className="quotation_">
        <h1>Quotation no</h1>
        <input 
          type="text" 
          placeholder="Quotation number" 
          name="quotationno" 
          value={formdata.quotationno} 
          onChange={quothandler} 
        />
        
        <h2>Company name</h2>
        <input 
          type="text" 
          placeholder="Company name" 
          name="company" 
          value={formdata.company} 
          onChange={quothandler} 
        />
        
        <h2>Quotation for</h2>
        <input 
          type="text" 
          placeholder="Quotation Description" 
          name="description" 
          value={formdata.description} 
          onChange={quothandler} 
        />

        <div className="side_nfm">
          <h3>Q.Date</h3>
          <input 
            type="date" 
            placeholder="Quotation Date" 
            name="adddate" 
            value={formdata.adddate} 
            onChange={quothandler} 
          />
          
        <h3>Amount</h3>
        <input 
          type="text" 
          placeholder="Amount" 
          name="amount" 
          value={formdata.amount} 
          onChange={quothandler} 
        />
        </div> <br></br>
        <button type="submit" onClick={() => window.location.reload()}>Submit</button>

      </form>
    </div>
  );
};

export default Subquotation;
