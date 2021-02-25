import React from "react"
import { AnimalCard } from "./animal/AnimalCard.js"
import "./Kennel.css"

export const Kennel = () => {
    const kennel = {
        name:"Nashville Dodge",
        locations: [
            {
            name: "Batman tower",
            address: "123"
            }
        ]
    }
    const animals = [
        {
            name: "firstdog",
            breed: "firsty",
            id: 1
        },
        {
            name: "secodog",
            breed: "twoey",
            id: 2
        },
        {
            name: "thirdog",
            breed: "thrie",
            id: 3
        },
        {
            name: "fourthdog",
            breed: "fouerdy",
            id: 4
        }
    ]
    const locations = [
        {
            name: "firstdog",
            address: "12342 sfskl street",
            id: 1
        },
        {
            name: "secodog",
            address: "234 sfas street",
            id: 2
        }
    ]
    const customers = [
        {
            name: "Sean Cools",
            locationId: "",
            id: 1
        },
        {
            name: "Leroy Jenkins",
            locationId: "",
            id: 2
        },
        {
            name: "Kylie Doe",
            locationId: "",
            id: 3
        },
        {
            name: "John Seel",
            locationId: "",
            id: 4
        }
    ]
    const employees = [
        {
            name: "Jenny Lee",
            locationId: "firsty",
            id: 1
        },
        {
            name: "Hasan Ali",
            locationId: "twoey",
            id: 2
        },
        {
            name: "Joe Smith",
            locationId: "thrie",
            id: 3
        },
        {
            name: "Gray Welsh",
            locationId: "fouerdy",
            id: 4
        }
    ]
   

return (
    <>
    {console.log("animals", animals[0])}
        <h2>{kennel.name}</h2>
        <small>Loving care when you're not there.</small>
        <address>
            <div>Visit Us at the {kennel.locations[0].name} Location</div>
            <div>{kennel.locations[0].address}</div>
        </address>
        <article className="animals">
            {
                animals.map(animal => {
                    return <AnimalCard key={animal.id} animal={animal}/>
                })
            }
        </article>
    </>
)
}
