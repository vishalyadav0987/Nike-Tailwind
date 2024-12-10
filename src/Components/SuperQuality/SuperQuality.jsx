import React from 'react'
import Button from '../Button/Button'
import { shoe8 } from '../../assets/images'

const SuperQuality = () => {
  return (
    <section 
    id='about-us'
    className='flex justify-center items-center max-lg:flex-col gap-10 w-full max-container'
    >
      <div className='flex flex-1 flex-col'>
      <h2 className='font-palanquin text-4xl capitalize font-bold lg:max-w-lg'>
        We Provide You {" "}
            <span className='text-coral-red'>
              Super
            </span>{" "}
            <span className='text-coral-red'>
              Quality
            </span>
            {" "} Shoes
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

         <div className='mt-11'>
         <Button label='View details' />
         </div>
      </div>
         <div className= 'flex flex-1 justify-center items-center'>
          <img src={shoe8} 
          alt="shoe8" 
          className='object-contain'
          width={570}
          height={522} 
          />
         </div>
    </section>
  )
}

export default SuperQuality
