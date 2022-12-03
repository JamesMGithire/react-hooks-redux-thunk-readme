// Action Creators
export function fetchAstronauts() {
  // const astronauts = fetch("http://api.open-notify.org/astros.json").then(
  //   (response) => response.json()
  // );
  // return 
  return function(dispatch){
    dispatch({
      type: "astronauts/astronautsLoaded",
      payload: astronauts,
    });
    fetch("http://api.open-notify.org/astros.json")
    .then(r=>r.json())
    .then(astronauts=>
      dispatch({
        type: "astronauts/astronautsLoaded",
        payload: astronauts.people
      }))
  }
}

// Reducers
const initialState = {
  entities: [], //array of astronauts
  status: "idle"
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case "astronauts/astronautsLoaded":
      return {
        ...state,
        entities: action.payload,
      };
    case "astronauts/astronautsLoading":
      return{
        ...state,
        status: "Loading"
      }
    
    default:
      return state;
  }
}
