import { useEffect, useState } from "react"
import axios from "axios"
import Navbar from "../Components/Navbar"
import "../Style/Cards.css"
import { Link } from "react-router-dom"
const Product = () => {
  const [product, setProduct]=useState([])
  const getdata = async()=>{
   axios.get('http://localhost:1946/products').then((data)=>setProduct(data.data.products))
  }
  useEffect(()=>{
      getdata();
  })
  return (
  <div>
<Navbar/>
    <div className="container">
 <div className="row">
    {
      product.map((x)=>{
        return(
          <div key={x.id} className="col-sm-6 col-md-4 col-lg-3 col-12 mb-4">

<div className="flip-card ">
  <div className="flip-card-inner">
   <Link to={`/product/${x._id}`}>
   <div className="flip-card-front">
    <img src={x.thumbnail} alt="" style={{width:"100%" , height:"100%"}} />
    </div>
    <div className="flip-card-back">
      <img src={x.img} alt=""  style={{width:"100%" , height:"100%"}} />
    </div></Link>

<button className="btn">
  <svg className="icon" xmlns="http://www.w3.org/2000/svg" width="20.503" height="20.625" viewBox="0 0 17.503 15.625">
    <path id="Fill" d="M8.752,15.625h0L1.383,8.162a4.824,4.824,0,0,1,0-6.762,4.679,4.679,0,0,1,6.674,0l.694.7.694-.7a4.678,4.678,0,0,1,6.675,0,4.825,4.825,0,0,1,0,6.762L8.752,15.624ZM4.72,1.25A3.442,3.442,0,0,0,2.277,2.275a3.562,3.562,0,0,0,0,5l6.475,6.556,6.475-6.556a3.563,3.563,0,0,0,0-5A3.443,3.443,0,0,0,12.786,1.25h-.01a3.415,3.415,0,0,0-2.443,1.038L8.752,3.9,7.164,2.275A3.442,3.442,0,0,0,4.72,1.25Z" transform="translate(0 0)" />
  </svg>
</button>



  </div>
  


  
</div>







</div>

        )
      })
    }
</div>
    </div>
    </div>
  )
}
export default Product


