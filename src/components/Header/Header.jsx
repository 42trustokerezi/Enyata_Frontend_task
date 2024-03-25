import React from 'react'
import chev from "../../assets/chevron.png"
import notification from "../../assets/notifications_none-24px.png"
import account from "../../assets/account.png"

const Header = () => {
  return (
    <div className='w-full h-[70px] border-b-2 flex justify-between px-10'>
      <div className='flex items-center'>
        <img src={chev} alt='back'  className='w-[18px] h-[18px] mr-3'/>
        <p className=''>Back</p>
      </div>
      <div className='flex items-center'>
        <div className='w-[3em] border-r-[1px]'>
          <img src={notification} />
        </div>
        <div className='flex mx-6'>
          <img src={account} alt='account' className='w-[24px] h-[24px] mr-3' />
          <p>John Doe</p>
        </div>
      </div>
    </div>
  )
}

export default Header