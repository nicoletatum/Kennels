import React, { useContext, useEffect } from "react"
import { EmployeeContext } from "./EmployeeProvider"
import { EmployeeCard } from "./EmployeeCard"
import "./Employee.css"

export const EmployeeList = () => {
  // This state changes when `getEmployees()` is invoked below
    const { employee, getEmployees } = useContext(EmployeeContext)

  //useEffect - reach out to the world for something
    useEffect(() => {
    console.log("EmployeeLIst: useEffect - getEmployees")
    getEmployees()

    }, [])

    //.map iterates the array of animals -> html by invoking animalCard function
    return (
    <div className="employees">
        {
        employee.map(employee => {
            return <EmployeeCard key={employee.id} employee={employee} />
        })
        }
    </div>
    )
}