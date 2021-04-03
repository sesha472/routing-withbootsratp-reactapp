import React from 'react'
import { Redirect } from 'react-router'

export default function Dashboard() {
    return (
        <div>

            <h1>welcome to dashboard</h1>
            <Redirect to="loginform" />

        </div>
    )
}
