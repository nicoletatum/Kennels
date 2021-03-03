import React from "react"
import { NavBar } from "../nav/NavBar.js"
import { Route, Redirect } from "react-router-dom"
import { ApplicationViews } from "../ApplicationViews.js"
import { Login } from "../auth/Login";
import { Register } from "../auth/Register";
import "./KennelProvider.js"
import "./Kennel.css"

export const Kennel = () => (
    <>
        <Route
            render={() => {
                if (localStorage.getItem("kennel_customer")) {
                    return (
                        <>
                            <NavBar />
                            <ApplicationViews />
                        </>
                    );
                } else {
                    return <Redirect to="/login" />;
                }
            }}
        />

        <Route path="/login">
            <Login />
        </Route>
        <Route path="/register">
            <Register />
        </Route>
    </>
)
