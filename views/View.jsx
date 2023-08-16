import React from 'react'

function View(props) {
    let currentAnimal = props.oneAnimal
    return (
        <div className="viewWrapper">
            <link rel="stylesheet" type="text/css" href="/style.css" />
        <div className="view">
            <div className='viewCell'>
                <div className="viewName">
                    {currentAnimal.name}
                </div>
                <div className="viewAge">
                    {currentAnimal.age}
                </div>
                <div className="viewBreed">
                    {currentAnimal.breed}
                </div>
                <div className="viewDesc">
                    {currentAnimal.desc}
                </div>
            </div>
        </div>
    </div>
    )
}

export default View