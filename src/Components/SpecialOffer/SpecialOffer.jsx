import React from 'react'
import { offer } from '../../assets/images'
import Button from '../Button/Button'
import { arrowRight } from '../../assets/icons'

const SpecialOffer = () => {
  return (
    <section
      className='flex justify-wrap items-center max-xl:flex-col-reverse gap-10 max-container'
    >
      <div className='flex-1'>
        <img src={offer} width={720} height={687} className='object-contain'/>
      </div>
      <div className='flex flex-col flex-1 justify-start gap-5 items-start'>
        <h2 className='font-palanquin text-4xl capitalize font-bold lg:max-w-lg'>
          <span className='text-coral-red'>
            Special
          </span>{" "}
          Offer
        </h2>
        <p className='mt-6 lg:max-w-lg info-text'>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Corporis possimus eveniet optio sint atque dolore molestias explicabo quod.
          Qui ad beatae nisi sed asperiores cupiditate similique vel rem nam itaque?
        </p>
        <p className='mt-6 lg:max-w-lg info-text'>
          Discover stylish Nike arrivals, quality comfort, and innovation for
          your active life.
        </p>

        <div className='mt-11 flex flex-wrap gap-4'>
          <Button label='Shop now' iconURL={arrowRight}/>
          <Button 
          label='Learn more' 
          backgroudColor={"bg-white"}
          borderColor={"border-slate-gray"}
          textColor={"text-slate-gray"}
          />
        </div>
      </div>
    </section>
  )
}

export default SpecialOffer
