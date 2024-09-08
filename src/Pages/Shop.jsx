import React from 'react'
import Hero from '../Components/hero/Hero'
import Popular from '../Components/popular/Popular'
import Offers from '../Components/offers/Offers'
import Newcollection from '../Components/newcollection/Newcollection'
import Newsletter from '../Components/newsletter/Newsletter'

const Shop = () => {
  return (
    <div>
      <Hero/>
      <Popular/>
      <Offers/>
      <Newcollection/>
      <Newsletter/>
    </div>
  )
}

export default Shop
