import React from 'react'
import "./main2.css"
export default function Main2(props) {
    return (
        <div className="main2">
            <div className="boxes">
                <div className="box">
                    <h1>{props.title}</h1>
                    <p>{props.a}</p>
                    <button>Learn More</button>
                </div>
            </div>
        </div>
    )
}
