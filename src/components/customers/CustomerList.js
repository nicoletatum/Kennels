import React, { useContext, useEffect } from "react"
import { CustomerContext } from "./CustomerProvider"
import { CustomerCard } from "./CustomerCard"
import "./Customer.css"

export const CustomerList = () => {
  // This state changes when `getAnimals()` is invoked below
    const { customers, getCustomers } = useContext(CustomerContext)

  //useEffect - reach out to the world for something
    useEffect(() => {
    console.log("CustomersList: useEffect - getCustomers")
    getCustomers()

    }, [])

    //.map iterates the array of animals -> html by invoking animalCard function
    return (
    <div className="customers">
        {console.log("CustomerList: Render", customers)}
        {
        customers.map(customer => {
            return <CustomerCard key={customer.id} customer={customer} />
        })
        }
    </div>
    )
}