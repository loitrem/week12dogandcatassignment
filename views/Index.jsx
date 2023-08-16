import React from 'react'

function Index(props) {
    const catInfo = props.cats;
    const dogInfo = props.dogs
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
                    <div className="dogWrapper">
                        <div className="dog">
                            <div className="dogTitle">Dogs</div>
                            {dogInfo!=null ?dogInfo.map((currentDog, i) => {
                                return (
                                    <div className='dogCell' key={i} onClick={()=>{
                                        window.location.href=`/viewdog/${currentDog.id}`;
                                    }}>
                                        <div className="dogName">
                                        <div className="boldText">Name: </div>
                                            {currentDog.name}
                                        </div>
                                        <div className="dogAge">
                                        <div className="boldText">Age: </div>
                                            {currentDog.age}
                                        </div>
                                        <div className="dogBreed">
                                        <div className="boldText">Breed: </div>
                                            {currentDog.breed}
                                        </div>
                                        <div className="dogDesc">
                                        <div className="boldText">Description: </div>
                                            {currentDog.desc}
                                        </div>
                                        <div className="dogModify">
                                            <div className="dogEdit">
                                                <form action={`/dogedit/${currentDog.id}`} method="POST"  >
                                                        <input className='dogEditBtn' type="submit" value="EDIT"/>
                                                </form>
                                            </div>
                                            <div className="dogDelete">
                                                <form action={`/dogdelete/${currentDog.id}?_method=DELETE`} method="POST"  >
                                                    <input className='dogDeleteBtn' type="submit" value="DELETE"/>
                                                </form>
                                            </div>
                                        </div>

                                    </div>
                                );
                            }):''}
                        </div>
                    </div>
                    <div className="catWrapper">
                        <div className="cat">
                        <div className="catTitle">Cats</div>
                            {catInfo!=null ?catInfo.map((currentCat, i) => {
                                return (
                                    <div className='catCell' key={i} onClick={()=>{
                                        navigate(`/viewcat/${currentCat.id}`)
                                    }}>
                                        <div className="catName">
                                            <div className="boldText">Name: </div>
                                            {currentCat.name}
                                        </div>
                                        <div className="catAge">
                                        <div className="boldText">Age: </div>
                                            {currentCat.age}
                                        </div>
                                        <div className="catCheckup">
                                        <div className="boldText">Checkup: </div>
                                            {currentCat.hadFirstCheckUp?'Has had their first checkup': 'Has NOT had their first checkup'}
                                        </div>
                                        <div className="catDesc">
                                        <div className="boldText">Description: </div>
                                            {currentCat.desc}
                                        </div>
                                        <div className="catModify">
                                            <div className="catEdit">
                                                <form action={`/catedit/${currentCat.id}`} method="POST"  >
                                                        <input className='catEditBtn' type="submit" value="EDIT"/>
                                                </form>
                                            </div>
                                            <div className="catDelete">
                                                <form action={`/catdelete/${currentCat.id}?_method=DELETE`} method="POST"  >
                                                    <input className='catDeleteBtn' type="submit" value="DELETE"/>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                );
                            }):''}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Index