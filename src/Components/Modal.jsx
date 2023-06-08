import React, {useEffect, useState} from 'react'

const Modal = ({open}) => {
  const [openModal, setOpenModal] = useState(true)
  const [showModal, setShowModal] = useState(false)

  useEffect(() => {
      setTimeout(() => {
        setShowModal(true)
      }, 1000)    
  }, [])



  if (!openModal) return null


  const onClose = () => {
    setOpenModal(false)
  }

  
 

  return (
    <div onClick={onClose} className='w-full h-full fixed bg-black/50 z-50'>
    { showModal && (
      <div className='max-w-[580px] fixed flex-col top-[40%] left-[50%] flex transform -translate-x-1/2 -translate-y-1/2 bg-white shadow-black sm:flex sm:flex-row sm:w-full'>
        <img className='w-[250px] object-cover' src="https://wpcdn.us-east-1.vip.tn-cloud.net/www.orlandomagazine.com/content/uploads/2022/06/d/p/rg34064.jpg" alt="" />
        <div className=''>
          <p onClick={onClose} className='fixed top-2 right-2 cursor-pointer'>X</p>
          <div className="flex items-center justify-center sm:flex-col p-4 md:p-8 sm:ml-5 sm:mt-12">
            <p>Do you want</p>
            <h1 className='font-bold text-2xl'>50% Off</h1>
            <p className='ml-5'> your next parlay ticket</p>
          </div>
            <div className="flex  p-4 md:p-4 items-center justify-between sm:ml-6">
              <button className='bg-blue-300 ' onClick={onClose}>
                <span className='font-bold'>OMG</span>, heck yea
              </button>
              <button className='bg-blue-300 ' onClick={onClose}>
                <span className='font-bold'>NO</span>, thanks
              </button>
            </div>
        </div>
      </div>
    )
  }
    </div>
  )
}

export default Modal