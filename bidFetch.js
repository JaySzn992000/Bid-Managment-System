import React from "react";
import { useEffect,useState } from "react";
import './bidapp.css'


const Bidfetch = () => {


  const [biddata, setbiddata] = useState([]);
  useEffect(() => {
    const fetchBid = async () => {
      try {
        const response = await fetch('http://localhost:5000/getBid');
        const data = await response.json();
        setbiddata(data);
      } catch (error) {
        console.log('Error', error);
      }
    };

    fetchBid();
  }, []);



return (


<div>


{biddata.map((item,index)=>(

<li key={index} className="flex_input" style={{lineHeight : '3em'}}>
<li>{item.companyname}</li>
<li>{item.bidtime}</li>
<li>{item.bidcost}</li>
</li>

)
)
}


</div>


)

}

export default Bidfetch;