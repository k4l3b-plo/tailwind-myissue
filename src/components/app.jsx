import React from 'react'

export default function App() {
    return(
        <div className="w-full h-full font-Montserrat">
            <h1 className="text-7xl font-bold">
                welcome { new Date().toDateString() }
            </h1>
        </div>
    )
}