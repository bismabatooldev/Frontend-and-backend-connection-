import "../Style/Detail.css";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import Navbar from "../Components/Navbar";
import ReactImageMagnify from 'react-image-magnify';
import Loading from "../Components/Loading";

const DetailPage = () => {
    const { id } = useParams();
    const [product, setProduct] = useState({});
    const [loading, setLoading] = useState(true);

    const getdata = async () => {
        try {
            const response = await axios.get(`http://localhost:1946/products/${id}`);
            setProduct(response.data.products || {}); // Ensure product is not undefined
        } catch (error) {
            console.error("Error fetching data:", error);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        getdata();
    }, [id]); 

    if (loading) return <div><Loading/></div>;

    return (
        <div>
            <Navbar />
            <div className="container">
                <div className="card">
                    <div className="card-body">
                      

                        <div className="row">
                            <div className="col-lg-5 col-md-5 col-sm-6">
                                <div className="white-box text-center">
                                <ReactImageMagnify {...{
    smallImage: {
        alt: 'gdsg',
        isFluidWidth: true,
        src:product.img
    },
    largeImage: {
       
        src: product.img,
        width: 800,
        height: 1000,
      
    },
    enlargedImagePosition: 'over',

}}  className="rounded"/>
                                    {/* <img src={ || "placeholder-image-url"} className="img-responsive img-fluid" alt={product.name || "Product Image"} /> */}
                                </div>
                            </div>
                            <div className="col-lg-7 col-md-7 col-sm-6">
                            <p>{product.brand || "Product brand."}</p>
                              <h3 className="card-title">{product.title || "Product Name"}</h3>
                                <h4 className="box-title mt-5">{product.description || "Product description"}</h4>
                                <h4 className="box-title mt-5">PKR.{product.price || "Product Price"}</h4>
                             
                            
<button className="apple">
  Add To Cart
</button>
<div className="oppo">
  <div className="rating">
    <input defaultValue={5} name="rating" id="star5" type="radio" />
    <label htmlFor="star5" />
    <input defaultValue={4} name="rating" id="star4" type="radio" />
    <label htmlFor="star4" />
    <input defaultValue={3} name="rating" id="star3" type="radio" />
    <label htmlFor="star3" />
    <input defaultValue={2} name="rating" id="star2" type="radio" />
    <label htmlFor="star2" />
    <input defaultValue={1} name="rating" id="star1" type="radio" />
    <label htmlFor="star1" />
  </div>
</div>







                     
                            </div>
                            <div className="col-lg-12 col-md-12 col-sm-12">
                             
                                <div className="table-responsive">
                                    <table className="table table-striped table-product">
                                        <tbody>
                                            {product.generalInfo && Object.entries(product.generalInfo).map(([key, value]) => (
                                                <tr key={key}>
                                                    <td width={390}>{key}</td>
                                                    <td>{value}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    );
}

export default DetailPage;
