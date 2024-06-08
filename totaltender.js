import React, { useState, useEffect } from "react";
import './total.css';

const Totaltender = () => {


  const [totalTender, setTotalTender] = useState(0);

  useEffect(() => {
    const fetchBid = async () => {
      try {
        const response = await fetch('http://localhost:5000/totaltender');
        const data = await response.json();
        setTotalTender(data.totaltender);
      } catch (error) {
        console.log('Error', error);
      }
    };

    fetchBid();
  }, []);

  return (
    <div>
      <div className="total_tender">
        <p>Total no.of <br /> Tenders By Companies:</p>
        <img src="https://cdn-icons-png.freepik.com/256/12230/12230498.png?ga=GA1.1.601567633.1704820745&semt=ais_hybrid" style={{width : '50px', height : '50px'}}></img>
        <h1>{totalTender}</h1>
      </div>
    </div>
  );
};

export default Totaltender;
