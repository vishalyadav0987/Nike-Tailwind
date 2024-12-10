import React from 'react'
import { reviews } from '../../constants'
import ReviewCard from '../ReviewCard/ReviewCard'

const CustomerReviews = () => {
  return (
    <section className='max-container'>
      <h3 className='text-4xl capitalize font-bold font-palanquin text-center'>
        What Our{" "}
        <span className='text-coral-red'>Customers</span>{" "}
        say?
      </h3>
      <p className='info-text max-w-lg m-auto mt-4 text-center'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
         Nulla molestias, sint facere facilis enim modi.
      </p>
      <div className='mt-24 flex flex-1 justify-evenly items-center max-lg:flex-col gap-14'>
        {
          reviews.map((review)=>(
            <ReviewCard key={review.customerName} {...review}/>
          ))
        }
      </div>
    </section>
  )
}

export default CustomerReviews
