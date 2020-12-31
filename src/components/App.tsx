import * as React from 'react'
import { Carousel } from './Carousel'
import { aboutTheProperty } from '../content/content'
export function App() {
  // <img src="https://v3.wttr.in/sainte-maxime.png" alt="" />
  // <img src="https://wttr.in/sainte-maxime_tpq0.png" alt="" />
  //
  let appCssClass =
    'relative sm:w-screen md:p-20 lg:px-10 2xl:flex align-center space-between'
  let contentContainerClass =
    'bg-white shadow-lg rounded p-4 flex-grow height-max-content'
  let h4Class = 'text-3xl underline pb-5'
  let pClass = 'text-xl pb-5'
  let carouselWrapperClass =
    'flex flex-wrap rounded p-4 m-6 height-max-content justify-center lg:bg-white l:m-20 lg:shadow-lg xl:my-5 2xl:my-0'

  return (
    <div id="content" className={appCssClass}>
      <div className={contentContainerClass}>
        <h4 className={h4Class}>About the property</h4>
        {Object.keys(aboutTheProperty).map(
          (x: string): React.ReactElement => (
            <p className={pClass}> {aboutTheProperty[x]} </p>
          )
        )}
      </div>
      <div id="carousel" className={carouselWrapperClass}>
        <Carousel />
      </div>
    </div>
  )
}
