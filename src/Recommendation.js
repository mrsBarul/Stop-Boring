import { useState, useEffect } from "react";


function Recommendation() {

    const [activity, setActivity] = useState('');

    const getActivity = async() => {
        const response = await fetch('http://www.boredapi.com/api/activity/ ')
        const data = await response.json()
        setActivity(data.activity)
    }

    useEffect(() => {
        getActivity()
    }, [])

    const newActivity = (e) => {
        e.preventDefault()
    }

    return(
    <div className="container">
        <div className="recomContainer">
            <h3 className="recomTitle">{ activity }</h3>
        </div>
        <button className="btnRecomContainer" onSubmit={newActivity} onClick={getActivity}>
            <h3 className="btnRecom">Choose your activity</h3>
        </button>
    </div>
    )
}

export default Recommendation;