import React, { useContext, useEffect, useState } from "react"
import { EmployeeContext } from "./EmployeeProvider"
import "./Employee.css"
import { useParams, useHistory } from "react-router-dom"

export const EmployeeDetail = () => {
    const { getEmployeeById } = useContext(EmployeeContext)

    const [employee, setEmployee] = useState({})

    //this hook gives us object 
    const { employeeId } = useParams();
    const history = useHistory();

    useEffect(() => {
        console.log("useEffect", employeeId)
        getEmployeeById(employeeId)
            .then((response) => {
                setEmployee(response)
            })
    }, [])

    // const handleRelease = () => {
    //     releaseAnimal(animal.id)
    //         .then(() => {
    //             history.push("/animals")
    //         }

    //         )
    // }

    return (
        <section className="employee">
            <h3 className="employee__name">{employee.name}</h3>
            {/* What's up with the question mark???? : optional Chanining*/}
            <div className="employee__location">Location: {employee.location?.name}</div>
        </section>
    )
}