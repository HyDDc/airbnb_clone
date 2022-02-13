import React from 'react'
import Image from 'next/image'
import { HeartIcon } from '@heroicons/react/outline'
import { StarIcon } from '@heroicons/react/solid'

function ImageCard({ img, title, description, location, star, price, total }) {
  return (
    <div className="flex cursor-pointer border-b py-7 px-2 hover:opacity-80">
      <div className="relative h-24 w-40 flex-shrink-0 md:h-52 md:w-80 ">
        <Image src={img} layout="fill" objectFit="cover" />
      </div>
      <div className="flex flex-grow flex-col p-5">
        <div className="flex justify-between">
          <p>{location}</p>
          <HeartIcon className="h-7" />
        </div>
        <h4 className="text-xl">{title}</h4>

        <div className="w-10 border-b pt-2" />
        <p className="flex-grow pt-2 text-sm text-gray-500">{description}</p>

        <div className="flex items-end justify-between pt-5">
          <p className="flex items-center">
            <StarIcon className="h-5 text-red-400" />
            {star}
          </p>
          <div>
            <p className="pb-2 text-lg font-semibold lg:text-2xl">{price}</p>
            <p className="text-right font-extralight">{total}</p>
          </div>
        </div>
      </div>
    </div>
  )
  ;<h1></h1>
}

export default ImageCard
