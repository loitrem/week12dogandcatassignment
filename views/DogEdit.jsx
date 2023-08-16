import React from 'react'

function DogEdit(props) {
    let currentDog = props.currentDog
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
                        <form action={`/dogeditsubmit/${currentDog.id}?_method=PUT`} method="POST">
                            <div className="inputWrapper">
                            <div className="inputTitle">Name: </div>
                            <div className="inputTag"><input className='input' type="text" name="name" value={currentDog.name} /></div>
                        </div>
                        <div className="inputWrapper">
                            <div className="inputTitle">Age: </div>
                            <div className="inputTag"><input className='input' type="number" name="age" value={currentDog.age}/></div>
                        </div>
                        <div className="inputWrapper">
                            <div className="inputTitle">Breed: </div>
                            <div className="inputTag"><input className='input' type="text" name="breed" value={currentDog.breed} /></div>
                        </div>
                        <div className="inputWrapper">
                            <div className="inputTitle">Description: </div>
                            <div className="inputTag"><input className='input' type="text" name="desc" value={currentDog.desc}/></div>
                        </div>
                        <div className="inputWrapper">
                            <input className='inputSubmit' type="submit" name="" value="Update Dog" />
                        </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DogEdit