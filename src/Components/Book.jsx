import React from 'react'

const Book = () => {
  return (
    <div className='max-w-[1440px] m-auto py-16 px-4 grid lg:grid-cols-2 gap-4'>
      {/* left side */}
      <div className='grid grid-cols-2 grid-rows-6 h-[80vh]'>
        <img className='row-span-3 object-cover w-full h-full p-2' src="https://a.espncdn.com/photo/2023/0406/r1155084_1296x729_16-9.jpg" alt="" />
        <img className='row-span-2 object-cover w-full h-full p-2' src="https://cdn.theathletic.com/cdn-cgi/image/width=770,format=auto/https://cdn.theathletic.com/app/uploads/2022/04/08014549/USATSI_17480426-1024x683.jpg" alt="" />
        <img className='row-span-2 object-cover w-full h-full p-2' src="https://library.sportingnews.com/styles/crop_style_16_9_tablet_2x_webp/s3/2021-08/bryce-harper-092619-getty-ftr_6vw0vz0qnuki13u9b5a8j4nrc.jpg.webp?itok=IyRBrwzu" alt="" />
        <img className='row-span-3 object-cover w-full h-full p-2' src="https://media.bleacherreport.com/image/upload/w_800,h_533,c_fill/v1673967698/seli70isl948fcpoyh0j.jpg" alt="" />
        <img className='row-span-2 object-cover w-full h-full p-2' src="https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/bltf83b9578c2cc8c82/6426d520c43e6b68f5bd82cc/GOAL_-_Blank_WEB_-_Facebook_-_2023-03-31T134149.308.png?auto=webp&format=pjpg&width=1080&quality=60" alt="" />
      </div>
      {/* right side */}
      <div className='flex flex-col h-full justify-center'>
        <h3 className='text-5xl md:text-6xl font-bold'>Place Your Next Bet </h3>
        <p className='text-2xl py-6'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Exercitationem aspernatur blanditiis ratione rerum ipsam debitis quas excepturi rem similique consectetur porro ipsa facilis, officiis voluptatem nobis voluptatibus voluptates nihil quam.</p>
        <p className='pb-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio esse tempore asperiores enim repellat minus in, eaque, officia a officiis dolorem. Expedita laboriosam harum excepturi, qui minima similique laudantium nisi!</p>
      <div>
      <button className='border-black mr-4 hover:shadow-xl'>Learn More</button>
      <button className='bg-black text-white border-black hover:shadow-xl'>Start Parlay</button>
      </div>
      </div>
    </div>
  )
}

export default Book