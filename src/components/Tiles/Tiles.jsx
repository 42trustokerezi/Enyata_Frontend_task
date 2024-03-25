import React from 'react'

const Tiles = ({tile}) => {
  return (
    <div className={` w-[12%] h-[10%] rounded-md`} style={{background: `${tile}`}}>&nbsp;</div>
  )
}

export default Tiles