import React from 'react'

export default function Cbox(props) {
    return (
        <div>
                <div className="coursebox">
                    <div className="lcbox">
                        <img src={props.i} alt=""/>
                    </div>
                    <div className="rcbox">
                        <h1>{props.t}</h1>
                        <p>{props.p}</p>
                        <button>Go</button>
                    </div>
                </div>
                
            </div>
    )
}
