import * as React from 'react'
import { Carousel } from './Carousel'
export function App() {
  return (
    <div>
      <video autoPlay muted loop id="background">
        <source src="/public/output.mp4" type="video/mp4" />
      </video>
      <div id="content">
        <div className="section">
          <h1>hi</h1>
          <h4>About the property</h4>
          <p>
            In the heights of Semaphore and the residential area of
            Sainte-Maxime, this modern Provencal house built in 1982
            is located in a Mediterranean landscape with a 180° view
            of the St. Tropez bay. Yachts and sailboats pass by all
            day long like a real-live painting.
          </p>
          <p>
            The modern villa comfortably accommodates 6 people. Large
            master bedroom on ground floor with private bathroom.There
            is two other bedrooms upstairs and one bathroom. Every
            room faces the seaside ensuring a refreshing breeze.
          </p>
          <p>
            Huge bay windows separate the kitchen, living room, and
            dining room from the deck and infinity pool. You can eat
            on the small deck under the shade of the olive trees or on
            the large deck near the pool.
          </p>
          <p>
            The house is located in a very quiet area, nestled within
            the hundred-year-old stone pines but is still close to
            town—the perfect spot for a relaxing vacation.
          </p>
          <p>
            Sainte-Maxime, on the Gulf of St. Tropez, is a popular
            vacation spot that manages to be stylish and have a family
            atmosphere. This hotspot is sunny almost 300 days out of
            the year making it a prime location for sports, cultural
            activities, entertainment, and tourist spots for any age.
          </p>
        </div>
    <div className="section">
    <Carousel />
    </div>
      </div>
    </div>
  )
}
