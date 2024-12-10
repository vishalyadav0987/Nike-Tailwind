import React from 'react'

const ServiceCard = ({service}) => {
    const {imgURL,label,subtext} = service;
  return (
    <div 
    className='flex-1 sm:w-[350px] sm:min-w-[350px] w-full rounded-[20px] shadow-3xl px-10 py-16'>
      <div className='w-11 h-11 bg-coral-red flex justify-center  items-center rounded-full'>
        <img src={imgURL} width={24} height={24} />
      </div>
      <h3 className='mt-5 font-palanquin leading-normal font-bold text-3xl'>{label}</h3>
      <p className='mt-3 font-palanquin break-words text-lg leading-none text-slate-gray'>{subtext}</p>
    </div>
  )
}

export default ServiceCard
