import React from "react"
import { Link } from "react-router-dom"
import "./Location.css"

export const LocationCard = ( {location} ) => (
    <section className="location">
    <h3 className="location__name">{location.name}</h3>
    <Link to={`/locations/detail/${location.id}`}>
        { location.name }
        </Link>
    <div className="location__employeeNumber">{location.employees?.length}</div> 
    <div className="location__animalNumber">{location.animals?.length}</div>
</section>
)