import React from 'react'

function CatEdit(props) {
    let currentCat = props.currentCat
    return (
        <div className='mainWrapper'>
        <link rel="stylesheet" type="text/css" href="/style.css" />
        <div className="navWrapper">
            <nav className='nav'>
                <div className="pageTitle">Animal Adoption</div>
                <div className="navBottom"> 
                    <a className='addAnimalLink' href="/">Home</a>
                    <a className='addAnimalLink' href="/dogadd">Add a Dog</a>
                    <a className='addAnimalLink' href="/catadd">Add a Cat</a>
                </div>
            </nav>
        </div>         
        <div className="animalDisplayWrapper">
            <div className="animalDisplay">
                <div className='form'>
                    <form action={`/cateditsubmit/${currentCat.id}?_method=PUT`} method="POST">
                        <div className="inputWrapper">
                            <div className="inputTitle">Name: </div>
                            <div className="inputTag"><input className='input' type="text" name="name" value={currentCat.name} /></div>
                        </div>
                        <div className="inputWrapper">
                            <div className="inputTitle">Age: </div>
                            <div className="inputTag"><input className='input' type="number" name="age" value={currentCat.age}/></div>
                        </div>
                        <div className="inputWrapper">
                            <div className="inputTitle">Has had first checkup:</div>
                            <div className="inputTag">
                                {currentCat. hadFirstCheckUp ? (
                                <input className='inputCheck' type="checkbox" name="hadCheckup" defaultChecked />
                                ) : (
                                    <input type="checkbox" name="hadCheckupt" />
                                )}
                            </div>
                        </div>
                        <div className="inputWrapper">
                            <div className="inputTitle">Description: </div>
                            <div className="inputTag"><input className='input' type="text" name="desc" value={currentCat.desc}/></div>
                        </div>
                        <div className="inputWrapper">
                            <input className='inputSubmit' type="submit" name="" value="Edit Cat" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
    )
}

export default CatEdit