import React from 'react'

const Hero = () => {
  return (
    <div className='w-full h-screen '>
     <img className='top-0 left-0 w-full h-screen object-cover' src='https://images.unsplash.com/photo-1504450758481-7338eba7524a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80' alt='Court'/>
      <div className='bg-black/30 absolute top-0 left-0 w-full h-screen' /> 
      <div className='absolute top-0 w-full h-full flex flex-col justify-center text-white'>
        <div className='md:left-[10%] max-w-[1100px] m-auto absolute p-4 md:p-2'>
          <p>Only in the U.S.</p>
          <h1 className='font-bold text-5xl md:text-7xl drop-shadow-2xl'>Sports Betting & Parlays</h1>
          <p className='max-2-[600px] drop-shadow-2xl py-2 text-xl'>
          Ready to take your game to the next level? Introducing the ultimate sports betting app that puts the odds in your favor!
          </p>
            <button className='bg-white text-black '>Play Now</button>
        </div>
      </div>

    </div>

  )
}

export default Hero
