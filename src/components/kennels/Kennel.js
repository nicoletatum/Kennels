import React from "react"
import { AnimalCard } from "../animal/AnimalCard.js"
import { LocationCard } from "../locations/Location.js"
import { EmployeeCard } from "../employees/Employee.js"
import { CustomerCard } from "../customers/Customer.js"
import { PropsAndState } from "../PropsAndState.js"
import "./KennelProvider.js"
import "./Kennel.css"

const KennelCard = (kennels) => (
    <section className="kennel">
    <h3 className="kennel__name">{kennels.name}</h3>
    <div className="kennel__address">{kennels.address}</div>
</section>
)



export const Kennel = () => (
    <>
    {/* {console.log("animals", animals[0])} */}
    <PropsAndState yourName={"Brenda"} />
    <h2>Nashville Kennels</h2>
        <small>Loving care when you're not there.</small>

        <address>
            <div>Visit Us at the Nashville North Location</div>
            <div>500 Puppy Way</div>
        </address>
        <h2>Animals</h2>
        <article className="animals">
            <AnimalCard />
            <AnimalCard />
            <AnimalCard />
        </article>
        <h2>Customers</h2>
        <article className="customers">
            <CustomerCard />
            <CustomerCard />
            <CustomerCard />
            <CustomerCard />
        </article>
        <h2>Locations</h2>
        <article className="locations">
            <LocationCard />
            <LocationCard />
            <LocationCard />
            <LocationCard />
        </article>
        <h2>Employees</h2>
        <article className="employees">
            <EmployeeCard />
            <EmployeeCard />
            <EmployeeCard />
            <EmployeeCard />
        </article>
    </>
)
