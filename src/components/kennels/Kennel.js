import React from "react"
import { NavBar } from "../nav/NavBar.js"
import { ApplicationViews } from "../ApplicationViews.js"
import "./KennelProvider.js"
import "./Kennel.css"

// const KennelCard = (kennels) => (
//     <section className="kennel">
//     <h3 className="kennel__name">{kennels.name}</h3>
//     <div className="kennel__address">{kennels.address}</div>
// </section>
// )



export const Kennel = () => (
    <>
    <NavBar />
        <ApplicationViews />
    </>
)
