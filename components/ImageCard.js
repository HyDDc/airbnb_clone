import React from 'react'
import Image from 'next/image'

function ImageCard({ img, title, description }) {
  return (
    <div className="flex">
      <div className="relative h-24 w-40 flex-shrink-0">
        <Image src={img} layout="fill" objectFit="cover" />
      </div>
      <h1>{title}</h1>
      <h1>{description}</h1>
    </div>
  )
  ;<h1></h1>
}

export default ImageCard
