import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import ImageCard from '../components/ImageCard'
import MapBox from '../components/MapBox'
import { useRouter } from 'next/dist/client/router'
import { format } from 'date-fns'

function Search({ searchResults }) {
  const router = useRouter()
  const { location, startDate, endDate, noGuest } = router.query

  const formattedStartDate = format(new Date(startDate), 'dd MMMM yy')
  const formattedEndDate = format(new Date(endDate), 'dd MMMM yy')

  const range = `${formattedEndDate}-${formattedStartDate}`

  return (
    <div className="">
      <Header placeholder={`${location}|${range}|${noGuest}`} />
      <main className="flex">
        <section className="flex-grow px-6 pt-14">
          <p className="text-xs">
            {range} stays for {noGuest} guests!
          </p>
          <h1 className="mt-2 mb-6 text-3xl font-semibold">
            stay in {location}{' '}
          </h1>
          <div className="mb-5 hidden space-x-3 text-gray-800 lg:inline-flex ">
            <p className="button">Connectivity</p>
            <p className="button">Action</p>
            <p className="button">Connectivity</p>
            <p className="button">Action</p>
            <p className="button">Connectivity</p>
            <p className="button">Action</p>
          </div>

          <div className="flex flex-col">
            {searchResults.map((item) => (
              <ImageCard
                key={item.img}
                img={item.img}
                location={item.location}
                title={item.title}
                description={item.description}
                star={item.star}
                price={item.price}
                total={item.total}
              />
            ))}
          </div>
        </section>
        <section className="hidden xl:inline-flex xl:min-w-[400px]">
          <MapBox searchResults={searchResults} />
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default Search

export async function getServerSideProps() {
  const searchResults = await fetch('https://links.papareact.com/isz').then(
    (res) => res.json()
  )

  return {
    props: {
      searchResults,
    },
  }
}

// {"img":"https://links.papareact.com/xqj","location":"Private room in center of London",
// "title":"Stay at this spacious Edwardian House",
// "description":"1 guest Â· 1 bedroom Â· 1 bed Â· 1.5 shared bthrooms Â· Wifi Â· Kitchen Â· Free parking Â· Washing Machine",
// "star":4.73,
// "price":"Â£30 / night",
// "total":"Â£117 total",
// "long":-0.0022275,
// "lat":51.5421655}
