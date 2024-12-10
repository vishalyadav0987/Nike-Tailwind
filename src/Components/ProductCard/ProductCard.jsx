import React from 'react'
import { star } from '../../assets/icons';

const ProductCard = ({product}) => {
    const {imgURL,name,price} = product;
  return (
    <div className='flex flex-col w-full max-sm:w-full'>
      <img src={imgURL}
      className='w-[280px] h-[280px]'
       alt="" />
       <div className='mt-8 flex justify-start gap-2.5'>
        <img src={star} alt="rating" 
        width={24}
        height={24}
        />
        <p className='text-xl font-montserrat leading-normal text-slate-gray'>
         (4.6)
        </p>
       </div>
       <h3 className='font-montserrat font-semibold text-xl mt-2 leading-normal'>{name}</h3>
       <p className='font-semibold text-coral-red leading-normal'>&#x20B9;{price}</p>
    </div>
  )
}

export default ProductCard
