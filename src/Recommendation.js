import { useState, useEffect, useCallback } from "react";


function Recommendation() {

    const [activity, setActivity] = useState('');

    const getActivity = useCallback(async () => {
            const response = await fetch('https://bored-api.appbrewery.com/random', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.json();
            setActivity(data.activity);
        
    }, []);

    useEffect(() => {
        getActivity()
    }, [getActivity])

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