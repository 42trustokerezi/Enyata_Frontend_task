import React from 'react'

const Details = ({cover, title, director, producer, release_date}) => {
  return (
    <div className="flex mt-6 ml-6">
            <div className="w-[40%] h-[70%]"><img src={cover} alt="cover" className="w-[90%]"/></div>
            <div className="mt-14">
                <h1 className="text-4xl font-bold">COVER</h1>
                <p className="pt-3">Director: Kingsley Omin</p>
                <p className="pt-3">Producer: Kingsley Omin</p>
                <p className="pt-3">Release Date: January 24, 2022.</p>
            </div>
        </div>
  )
}

export default Details