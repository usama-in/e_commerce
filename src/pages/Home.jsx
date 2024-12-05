import React from 'react'
import { useSelector } from 'react-redux'
import Loader from '../ui/Loader'

const Home = () => {
  const imagesData= useSelector(state => state.images.images)
 const bannerImage= imagesData.banner
  return (
    <div className='h-[60vh] object-cover'>
      <div className=''>
      {bannerImage ? <img  src={bannerImage} className='w-[100dvw]  h-[40vh] sm:h-[80vh]'/> : <Loader /> }

      </div>
    </div>
  )
}

export default Home