import * as React from 'react'
import { Carousel } from './Carousel'
export function App() {
  // <img src="https://v3.wttr.in/saint-tropez.png" alt="" />
  // <img src="https://wttr.in/sainte-maxime_tpq0.png" alt="" />
  return (
    <div
      id="content"
      className="relative sm:w-screen md:p-20 lg:px-10 2xl:flex align-center space-between"
    >
      <div className="bg-white shadow-lg rounded p-4 flex-grow height-max-content">
        <h4 className="text-3xl underline pb-5">
          About the property
        </h4>
        <p className="text-xl pb-5">
          In the heights of Semaphore and the residential area of
          Sainte-Maxime, this modern Provencal house built in 1982 is
          located in a Mediterranean landscape with a 180° view of the
          St. Tropez bay. Yachts and sailboats pass by all day long
          like a real-live painting.
        </p>
        <p className="text-xl pb-5">
          The modern villa comfortably accommodates 6 people. Large
          master bedroom on ground floor with private bathroom.There
          is two other bedrooms upstairs and one bathroom. Every room
          faces the seaside ensuring a refreshing breeze.
        </p>
        <p className="text-xl  pb-5 ">
          Huge bay windows separate the kitchen, living room, and
          dining room from the deck and infinity pool. You can eat on
          the small deck under the shade of the olive trees or on the
          large deck near the pool.
        </p>
        <p className="text-xl pb-5">
          The house is located in a very quiet area, nestled within
          the hundred-year-old stone pines but is still close to
          town—the perfect spot for a relaxing vacation.
        </p>
        <p className="text-xl pb-5">
          Sainte-Maxime, on the Gulf of St. Tropez, is a popular
          vacation spot that manages to be stylish and have a family
          atmosphere. This hotspot is sunny almost 300 days out of the
          year making it a prime location for sports, cultural
          activities, entertainment, and tourist spots for any age.
        </p>
      </div>
      <div
        id="carousel"
        className="flex flex-wrap rounded p-4 m-6 height-max-content justify-center lg:bg-white l:m-20 lg:shadow-lg xl:my-0"
      >
        <Carousel />
      </div>
    </div>
  )
}
