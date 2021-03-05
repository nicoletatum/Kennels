import React, { useContext, useEffect } from "react"
import { LocationCard } from "./LocationCard"
import { LocationContext } from "./LocationProvider"
import { useHistory } from "react-router-dom" // import from libraries before your local modules
import "./Location.css"

export const LocationList = () => {
  // This state changes when `getAnimals()` is invoked below
  const { locations, getLocations } = useContext(LocationContext)

  const history = useHistory()

  useEffect(() => {
    console.log("LocationsList: useEffect - getLocations")
    getLocations()
  }, [])

  //.map iterates the array of animals -> html by invoking animalCard function
  return (
    <div className="locations">
      <button onClick={() => { history.push("/locations/create") }}>
        Add Location
          </button>
      {
        locations.map(location => {
      
          return <LocationCard key={location.id} 
                                    location={location} 
                                    // employee={employee}
                                    // animal={animal}
                                    />
        })
      }
    </div>
  )
}