import React, { useState, createContext } from "react"

// The context is imported and used by individual components that need data
export const KennelContext = createContext()

// This component establishes what data can be used.
export const KennelProvider = (props) => {
    const [kennels, setKennels] = useState([])

    const getKennels = () => {
        return fetch("http://localhost:8088/kennels?_expand=address")
        .then(res => res.json())
        .then(setKennels)
    }

    const addKennel = kennelObj => {
        return fetch("http://localhost:8088/kennels", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(kennelObj)
        })
        .then(getKennels)
    }

    /*
        You return a context provider which has the
        `Customers` state, `getCustomers` function,
        and the `addAnimal` function as keys. This
        allows any child elements to access them.
    */
    return (
        <KennelContext.Provider value={{
            kennels, getKennels, addKennel
        }}>
            {props.children}
        </KennelContext.Provider>
    )
}