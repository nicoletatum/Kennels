import React, { useContext, useEffect, useState } from "react"
import { LocationContext } from "./LocationProvider"
import "./Location.css"
import { useParams, useHistory } from "react-router-dom"

export const LocationDetail = () => {
    const { getLocationById } = useContext(LocationContext)
    const [location, setLocation] = useState({})
    //this hook gives us object 
    const { locationId } = useParams();
    const history = useHistory();

    useEffect(() => {
        getLocationById(locationId)
            .then((response) => {
                setLocation(response)
            })
    }, [])

    return (
        <section className="location">
            <h3 className="location__name">{location.name}</h3>
            {/* What's up with the question mark???? : optional Chanining*/}
            <div className="location__address">{location.address?.name}</div>
        </section>
    )
}