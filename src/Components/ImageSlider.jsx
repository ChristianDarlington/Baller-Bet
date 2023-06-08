import React, { useState } from 'react'
import {BsChevronCompactLeft, BsChevronCompactRight} from 'react-icons/bs'
import {RxDotFilled} from 'react-icons/rx'

const ImageSlider = () => {

  const slides = [
    {
      url: 'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/6f998234431327.56d02b9c57f25.png',
      title: 'Signup',
    },
    {
      url: 'https://images.unsplash.com/photo-1592826832050-7c586f9457ce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
      title: 'Place Bet',
    },
    {
      url: 'https://images.pexels.com/photos/3721597/pexels-photo-3721597.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      title: 'Watch Game',
    },
    {
      url: 'https://images.pexels.com/photos/4386431/pexels-photo-4386431.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      title: 'Get Paid',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0)


  const prevSlide = () => {
  const firstSlide = currentIndex === 0
  const newSlide = firstSlide ? slides.length - 1 : currentIndex - 1
  setCurrentIndex(newSlide)
  }
  const nextSlide = () => {
    const lastSlide = currentIndex === slides.length - 1
    const newSlide = lastSlide ? 0 : currentIndex + 1
   setCurrentIndex(newSlide)
  }

  const goToSlide = (slideIndex) => {
      setCurrentIndex(slideIndex)
  }

  return (
    <div className='max-w-[1000px] h-[780px] w-full m-auto py-16 px-4 relative group'>
      <div className='w-full rounded-2xl h-full bg-center bg-cover duration-500' style={{backgroundImage: `url(${slides[currentIndex].url})`}}>
      </div>
      {/* left arrow */}
      <div className='absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black text-white cursor-pointer group-hover:bg-white/20'>
      <BsChevronCompactLeft onClick={prevSlide} size={30}/>
      </div>
      {/* right arrow */}
      <div className='absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black text-white cursor-pointer group-hover:bg-white/50'>
      <BsChevronCompactRight onClick={nextSlide} size={30}/>
      </div>

    <div className='flex top-4 justify-center py-2'>
        {slides.map((slide, slideIndex) => 
          (
            <div className='text-2xl cursor-pointer' key={slideIndex} onClick={() => goToSlide(slideIndex)}>
              <RxDotFilled />
            </div>
        
        ))}
    </div>

    </div>
  )
}

export default ImageSlider