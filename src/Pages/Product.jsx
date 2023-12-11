import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'
import {useParams} from 'react-router-dom'
import all_product from '../Components/Assets/all_product';


const Product = () => {

  const {all_products}= useContext(ShopContext);
  const {productId}= useParams();
  const product = all_product.find((e)=> e.id === productId)


  return (
    <div>
      
    </div>
  )
}

export default Product
