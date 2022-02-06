import React from 'react'
import Image from 'next/image'

function LargeCard({ img, title, description, buttonText }) {
  return (
    <section className="relative cursor-pointer py-16">
      <div className="relative h-96 min-w-[300px]">
        <Image
          src={img}
          layout="fill"
          objectFit="cover"
          className="rounded-xl"
        />
      </div>
      <div className="absolute top-32 left-12">
        <h3 className="text-4xl">{title}</h3>
        <p>{description}</p>
        <button className="mt-5 rounded-xl bg-gray-900 py-4 px-10 text-sm text-white">
          {buttonText}
        </button>
      </div>
    </section>
  )
}

export default LargeCard
