import React, { useState, useEffect } from "react";
import './total.css'

const Totalbids = () => {
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const fetchBid = async () => {
      try {
        const response = await fetch('http://localhost:5000/totalcompany');
        const data = await response.json();
        setTotal(data.total);
      } catch (error) {
        console.log('Error', error);
      }
    };

    fetchBid();
  }, []);

  return (
    <div>

    <div className="total_tender">
      <p>Total no.of <br></br> Bids By Companies:
      </p>
      <img src="https://cdn-icons-png.freepik.com/256/12230/12230498.png?ga=GA1.1.601567633.1704820745&semt=ais_hybrid" style={{width : '50px', height : '50px'}}></img>
      <h1>{total}</h1>
      </div>
    </div>

  );
};

export default Totalbids;
