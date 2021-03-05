import React, { useContext, useEffect } from "react"
import { EmployeeContext } from "./EmployeeProvider"
import { useHistory } from "react-router-dom" // import from libraries before your local modules
import { EmployeeCard } from "./EmployeeCard"
import "./Employee.css"

export const EmployeeList = () => {
  // This state changes when `getEmployees()` is invoked below
    const { employee, getEmployees } = useContext(EmployeeContext)

    const history = useHistory()

  //useEffect - reach out to the world for something
    useEffect(() => {
    console.log("EmployeeLIst: useEffect - getEmployees")
    getEmployees()

    }, [])

    //.map iterates the array of animals -> html by invoking animalCard function
    return (
    <div className="employees">
        <button onClick={() => {history.push("/employees/create")}}>
            Add Hired Employee
          </button>
        {employee.map(employee => {
            return <EmployeeCard key={employee.id} employee={employee} />
        })
        }
    </div>
    )
}