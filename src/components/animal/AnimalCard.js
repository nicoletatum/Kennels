import React from "react"
import "./Animal.css"
import "./AnimalProvider.js"

export const AnimalCard = ({animalObj}) => (
    
    <section className="animal">
        <h3 className="animal__name">{animalObj}</h3>
        <div className="animal__breed">{animalObj}</div>
    </section>
)