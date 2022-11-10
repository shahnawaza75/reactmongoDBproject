import React from 'react'

function Home() {
    return (
        <div className="information">
            <label>First Name:</label>
            <input type="text" />

            <label>Last Name</label>
            <input type="text" />
            <label>Email:</label>
            <input type="email"
            />
            <label>Phone:</label>
            <input type="number" />
            <label>Address:</label>
            <input type="text" />
        </div>
    )
}

export default Home