import { useReducer } from "react";
import { TOTAL_IMAGES } from '../constants'

interface ApplicationState {
  imageIndex: number;
  images: string[];
}

const reducer: (
  state: ApplicationState,
  action: { type: string; value?: any }
) => ApplicationState = (state, action) => {
  switch (action.type) {
    case "incrementImageIndex":
      return {
        ...state,
        imageIndex: (state.imageIndex  + 1) % state.images.length
      };
    case "incrementBy":
      return {
        ...state,
        imageIndex: (state.imageIndex  + action.value) % state.images.length
      };
    case "decrementImageIndex":
      return {
        ...state,
        imageIndex: (state.imageIndex - 1 + state.images.length) % state.images.length
      }; 
    default:
      return state;
  }
};

const initialState: ApplicationState = {
  imageIndex: 2,
  images: [
    "/public/1.jpg",
    "/public/2.jpg",
    "/public/3.jpg",
    "/public/4.png",
    "/public/5.png",
    "/public/6.png",
    "/public/7.png"
  ]
};

export { reducer, initialState };
