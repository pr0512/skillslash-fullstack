/* eslint-disable jsx-a11y/alt-text */
import{ useParams } from 'react-router-dom';
import{useEffect,useState} from 'react';
const ProductDetail = () => {
const[detail,setDetails] = useState({});
const params = useParams();
useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${params.productId}`)
    .then(res=> res.json())
    .then(json=>setDetails(json));
    });
   
    return(
        <div className="prduct-wrapper">
        <div className="left-col">
        <img src={detail.image} />
        </div>
        <div className="right-col">
            <h2>{detail.title}</h2>
            <h5>Category:{detail.category}</h5>
            <p>{detail.description}</p>
            <p>Price:{detail.price}</p>
            
            <button>See Product</button>
        </div>
        </div>
    )
}
export default ProductDetail;