import React, { useState } from "react";
import Bidfetch from "./bidFetch";

const Bidsbyuser = () => {
  const [formdata, setFormdata] = useState({
    companyname: "",
    bidcost: "",
    bidtime: "",
  });

  const registerHandler = (e) => {
    setFormdata({ ...formdata, [e.target.name]: e.target.value });
  };

  const submitTender = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/postbid", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formdata),
      });

      const data = await response.json();
      console.log(data.message);
    } catch (error) {
      console.log("Error message", error);
    }
  };

  return (
    <div>
      <form onSubmit={submitTender} className="flex_input">

        <div>
          <h3>Company name</h3>
        <input
          type="text"
          placeholder="Company name"
          name="companyname"
          value={formdata.companyname}
          onChange={registerHandler}
        />
        </div>
        <div>
        <h3>Bid Cost</h3>
        <input
          type="text"
          placeholder="Bid Cost"
          name="bidcost"
          value={formdata.bidcost} 
          onChange={registerHandler}
        />
        </div>
        <div>
        <h3>Date</h3>
        <input
          type="datetime-local"
          placeholder="Bid Time"
          name="bidtime"
          value={formdata.bidtime} 
          onChange={registerHandler}
        />
        </div>
        <button onClick={() => window.location.reload()} type="submit">Submit Bid</button>
      </form>

    </div>
  );
};

export default Bidsbyuser;
