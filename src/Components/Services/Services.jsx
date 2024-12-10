import React from 'react'
import { services } from '../../constants'
import ServiceCard from '../ServiceCard/ServiceCard'

const Services = () => {
  return (
    <section className='max-container flex flex-wrap justify-center gap-9'>
      {
        services.map((service)=>(
          <ServiceCard service={service} key={service.label}/>
        ))
      }
    </section>
  )
}

export default Services
