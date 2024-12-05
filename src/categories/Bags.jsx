import React from 'react'
import { useSelector } from 'react-redux'

const Bags = () => {
  const bagsData= useSelector(state => state.bags.bags)
  console.log(bagsData)
  return (
    <div>
      {bagsData.map(item => item.name)}
    </div>
  )
}

export default Bags