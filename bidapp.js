import React, { useState, useEffect } from "react";
import './bidapp.css';
import { useNavigate } from "react-router";
import Subquoation from "./subquotation";
import Quotationfetch from "./quotationFetch";
import Bidsbyuser from "./bidsuser";
import './bidapp.css'
import Bidfetch from "./bidFetch";
import './total.css'
import Totaltender from "./totaltender";
import Totalbids from "./totalbids";


const Bidapp = () => {

  const [formdata, setformdata] = useState({
    name: '',
    description: '',
    startDate: '',
    endDate: '',
  });


  const [gettender, setgettender] = useState([]);

  const registerhanlder = (e) => {
    setformdata({ ...formdata, [e.target.name]: e.target.value });
  };


  const submittender = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/posttender', {
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

  
  useEffect(() => {
    const fetchTenders = async () => {
      try {
        const response = await fetch('http://localhost:5000/gettender');
        const data = await response.json();
        setgettender(data);
        
      } catch (error) {
        console.log('Error', error);
      }
    };

    fetchTenders();
  }, []);



const naviQuot = useNavigate()
  const quotSubmit = () => {
  naviQuot('/Subquoation')
}

  return (
    
    <div>

    <div>
    
    <div className="center_form">
    <h1>Bids Management <br></br> Application:
    </h1>
      <h2>Create Tender By Form</h2>
        <button style={{marginBottom : '2.7em'}} onClick={quotSubmit}>Submit a Quation for the Tender</button> <br></br>
    </div>
    <Bidsbyuser></Bidsbyuser>

    <form onSubmit={submittender} className="flex_input">
        
        <div>
          <h3>Tender name</h3>
        <input
          type="text"
          placeholder="Tender name"
          name="name"
          value={formdata.name}
          onChange={registerhanlder}
        />
        </div>

<div>
  <h3>Tender Description</h3>
        <input
          type="text"
          placeholder="Tender Description"
          name="description"
          value={formdata.description}
          onChange={registerhanlder}
        />
</div>        

<div>
  <h3>Start Date</h3>
        <input
          type="datetime-local"
          placeholder="Start Date and Time"
          name="startDate"
          value={formdata.startDate}
          onChange={registerhanlder}
        />
</div>

<div>
  <h3>End Date</h3>
        <input
          type="datetime-local"
          placeholder="End Date and Time"
          name="endDate"
          value={formdata.endDate}
          onChange={registerhanlder}
        />
</div>
        <button type="submit" onClick={() => window.location.reload()}>Submit Tender</button>
      </form>

        <ul className="flex_tender">
          <li>Tender name</li>
          <li>Tender Description</li>
          <li>Start Date</li>
          <li>End Date</li>
        </ul>
        <ul>
            
    {gettender.map((item, index) => (
            <li key={index} className="flex_input" style={{lineHeight : '3em'}}>
              <div>{item.name}</div>
              <div>{item.description}</div>
              <div>{item.starttime}</div>
              <div>{item.endtime}</div>
              
            </li>
          ))}
        </ul>
      </div>
          
        <ul className="flex_tender">
          <li>Quotation number</li>
          <li>Company name In Ascending Order</li>
          <li>Amount</li>
          <li>Quotation Date</li>
          <li>Quotation For</li>
        </ul>
          
    <Quotationfetch></Quotationfetch>
    <ul className="flex_tender">
          <li>Company Name</li>
          <li>Bid Time</li>
          <li>Bid Cost In Ascending Order </li>
        </ul>
    <Bidfetch></Bidfetch>

    <div className="flex_container_total">
    <div>
    </div>
    <Totaltender></Totaltender>
    <Totalbids></Totalbids>
    </div>

    </div>
  );
};

export default Bidapp;
