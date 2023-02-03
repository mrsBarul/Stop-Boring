import { useState } from "react";
import { dataCollection } from "./dataCollection";

function Collection() {

    const [collection] = useState(dataCollection);

    return(
    <div className="partition">
        {collection.map((item => {
            const{ id, image, placeTitle, describe, link } = item;
            return (
                <div className="collectionContainer" key={ id }>
                    <div className="imageContainer">
                        <img className="collectionImage" src={ image } alt='actives'/>
                    </div>
                    <div className="describeContainer">
                        <h2 className="placeTitle">{ placeTitle }</h2>
                        <h3 className="describe">{ describe }</h3>
                        <button className="btnCollection"><a key={ id }  href={ link } target="_blank" rel="noopener noreferrer">SEE MORE</a></button>
                    </div>
                </div>
            )
        }))}
    </div>
    )
}

export default Collection;