import React from 'react'

const About = () => {
  return (
    <div className='max-w-[1400px] h-[800px] bg-gray-200 mx-auto my-20 pt-16 lg:mb-[20%] md:mb-[35%] px-4 grid lg:grid-cols-3 gap-4'>
    <div className='lg:top-20 relative lg:col-span-1 col-span-2'>
      <h3 className='text-2xl font-bold'>Easy Betting System</h3>
      <p className='pt-4'>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error ipsam
        rerum iusto excepturi similique minus?
      </p>
    </div>

    <div className='grid grid-cols-2 col-span-2 gap-2'>
      <img
      className='object-cover w-full h-full'
        src='https://www.reviewjournal.com/wp-content/uploads/2018/05/10551537_web1_wildart-westgatesportsbook_031618pc_002.jpg?h=240'
        alt='/'
      />
      <img
      className='row-span-2 object-cover w-full h-full'
        src='https://images.pexels.com/photos/6759128/pexels-photo-6759128.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        alt='/'
      />
      <img
      className='object-cover w-full h-full'
        src='https://nba.nbcsports.com/wp-content/uploads/sites/12/2020/02/GettyImages-1145736399.jpg'
        alt='/'
      />
    </div>
  </div>

  )
}

export default About
