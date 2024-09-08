import React, { useContext } from 'react'
import { Shopcontext } from '../Context/Shopcontext'
import { useParams } from 'react-router-dom'
import Breadcrums from '../Components/breadcrums/Breadcrums'
import Productdisplay from '../Components/Productdisplay/Productdisplay'
import DescriptionBox from '../Components/descriptionbox/DescriptionBox'
import RelatedProduct from '../Components/relatedproduct/RelatedProduct'

const Product = () => {
  const {all_product}=useContext(Shopcontext)
  const {productId}=useParams();
  const product = all_product.find((e)=> e.id === Number(productId))
  return (
    <div>
      <Breadcrums product={product}/>
      <Productdisplay product={product}/>
      <DescriptionBox/>
      <RelatedProduct/>
    </div>
  )
}

export default Product
