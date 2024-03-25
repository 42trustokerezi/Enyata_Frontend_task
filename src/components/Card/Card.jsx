import React from 'react'
import Tiles from '../Tiles/Tiles'

const Card = ({title, tile, }) => {
  return (
    <div className='p-5 border rounded-md shadow-md'>
        <div className='flex justify-between mb-7'>
            <h2 className="font-semibold">{title}</h2>
            <Tiles tile={tile}/>
        </div>
        <div>
            <h2 className='font-semibold'>200</h2>
            <p className='text-xs text-[#00992B]'>20 More than yesterday</p>
        </div>
    </div>
  )
}

export default Card