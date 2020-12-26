import * as React from 'react'
import { reducer, initialState } from '../state/reducers'
import { Button } from './Button'

export function Carousel() {
  const [state, dispatch] = React.useReducer(reducer, initialState)

  const encloseImageLength: (
    arg: number
  ) => (arg1: number, arg2: number) => number = length => (
    increment,
    currentIndex
  ) => (currentIndex + increment) % length

  const getImageIndex = encloseImageLength(state.images.length)

  return (
    <div className="carousel">
      <div className="carousel-clicker-container">
        <a
          className="carousel-clicker-left"
          onClick={() => {
            dispatch({ type: 'incrementImageIndex' })
          }}
        />
        <a
          className="carousel-clicker-right"
          onClick={() => {
            dispatch({ type: 'decrementImageIndex' })
          }}
        />
      </div>
      <img
        className="main-carousel-image"
        src={state.images[state.imageIndex]}
        alt=""
      />
      <div className="image-previews">
        <a
          onClick={() => {
            dispatch({ type: 'incrementBy', value: 1 })
          }}
        >
          <img
            src={state.images[getImageIndex(1, state.imageIndex)]}
            className="preview-image"
            alt=""
          />
        </a>
        <a
          onClick={() => {
            dispatch({ type: 'incrementBy', value: 2 })
          }}
        >
          <img
            src={state.images[getImageIndex(2, state.imageIndex)]}
            className="preview-image"
            alt=""
          />
        </a>
        <a
          onClick={() => {
            dispatch({ type: 'incrementBy', value: 3 })
          }}
        >
          <img
            src={state.images[getImageIndex(3, state.imageIndex)]}
            className="preview-image"
            alt=""
          />
        </a>
      </div>
    </div>
  )
}
