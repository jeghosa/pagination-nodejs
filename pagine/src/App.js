import React,{useState, useEffect} from "react";
import Pages from "./Pages";
import Products from "./Products";
import "./index.css"
import axios from "axios";


function App() {

  const [products,setProducts]= useState([])
  const[axv, setAxv]= useState(0)

  const butf= (butv)=>{
    setAxv(butv+1)}
  
  const getdata= async()=>{
        const {data}= await axios.get(`http://localhost:4000/products?page=${axv}&limit=2`)
        console.log(data)
        setProducts(data)
    }
    useEffect(()=>{
      if (axv !==0) {
        getdata()
        
       }
    },[axv])

  return (
    <div className="App">
      {products?.map((product)=>{
        return<Products {...product}/>
      })}
      <Pages butf={butf}/>
    </div>
  );
}

export default App;
