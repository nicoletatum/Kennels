import React, { useState, createContext } from "react"

// The context is imported and used by individual components that need data
export const EmployeeContext = createContext()

// This component establishes what data can be used.
export const EmployeeProvider = (props) => {
    const [employees, setEmployees] = useState([])

    const getEmployees = () => {
        return fetch("http://localhost:8088/Employees?_expand=location")
        .then(res => res.json())
        .then(setEmployees)
    }

    const addEmployees = employeeObj => {
        return fetch("http://localhost:8088/employee", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(employeeObj)
        })
        .then(getEmployees)
    }

    /*
        You return a context provider which has the
        `EmplgetEmployees` state, `getEmployees` function,
        and the `addAnimal` function as keys. This
        allows any child elements to access them.
    */
    return (
        <EmployeeContext.Provider value={{
            employees, getEmployees, addEmployees
        }}>
            {props.children}
        </EmployeeContext.Provider>
    )
}