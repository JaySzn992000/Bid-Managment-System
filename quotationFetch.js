import React from "react";
import { useEffect,useState } from "react";
import './bidapp.css'


const Quotationfetch = () => {


  const [subquote, setsubquote] = useState([]);
  useEffect(() => {
    const fetchTenders = async () => {
      try {
        const response = await fetch('http://localhost:5000/getquotation');
        const data = await response.json();
        setsubquote(data);
      } catch (error) {
        console.log('Error', error);
      }
    };

    fetchTenders();
  }, []);



return (


<div>


{subquote.map((item,index)=>(

<li key={index} className="flex_input" style={{lineHeight : '3em'}}>
<li>{item.quotationno}</li>
<li>{item.company}</li>
<li>{item.amount}</li>
<li>{item.date}</li>
<li>{item.description}</li>
</li>

)
)
}


</div>


)

}

export default Quotationfetch;