import React from "react"
import "./Animal.css"

export const AnimalCard = ({ animal, customer, location }) => (
    <section className="animal">
        <h2 className="animal__name">{animal.name}</h2>
        <h4 className="animal__breed">Breed: {animal.breed}</h4>
        <h4 className="location__address">Location: {animal.location.name}</h4>
        <h4 className="animal__owner">Customer: {customer.name}</h4>
    </section>
)