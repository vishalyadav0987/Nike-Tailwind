import React from 'react'
import {products} from '../../constants/index'
import ProductCard from '../ProductCard/ProductCard'

const PopularProducts = () => {
  return (
    <section id='products' className='max-container max-sm:mt-12'>
      <div className='flex flex-col justify-start gap-5 items-start'>
        <h1 className='text-4xl font-bold text-center mb-4 font-palanquin'>Our{" "}
          <span className='text-coral-red'>Popular</span> Products</h1>
        <p className='font-montserrat text-slate-gray lg:max-w-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Provident consectetur voluptatem dolore omnis.
        </p>
        <div className="mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-4 gap-14">
          {
            products.map((product)=>{
              return(
                <ProductCard key={product.name} product={product} />
              )
            })
          }
        </div>
      </div>
    </section>
  )
}

export default PopularProducts
