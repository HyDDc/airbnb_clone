import React from 'react'
import Image from 'next/image'

function SmallCard({ img, location, distance }) {
  return (
    <div
      className="m-2 mt-5 flex transform cursor-pointer items-center 
    space-x-4 rounded-xl transition duration-200 
    ease-out hover:scale-105 hover:bg-gray-100"
    >
      <div className="relative h-16 w-16">
        <Image
          className="rounded-xl"
          src={img}
          layout="fill"
          objectFit="fill"
        />
      </div>
      <div>
        <h2>{location}</h2>
        <h3>{distance}</h3>
      </div>
    </div>
  )
}

export default SmallCard
