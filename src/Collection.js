
function Collection({ collection }) {

    return(
    <div className="partition">
        {collection.map((item => {
            const{ id, image, placeTitle, describe, link } = item;
            return (
                <div  key={ id }>
                    <div className="collectionContainer" key={ id }>
                        <div className="imageContainer">
                            <img className="collectionImage" src={ image } alt='actives'/>
                        </div>
                        <div className="describeContainer">
                            <h2 className="placeTitle">{ placeTitle }</h2>
                            <h3 className="describe">{ describe }</h3>
                            {/* eslint-disable-next-line */}
                            <button className="btnCollection"><a  href={ link }/>SEE MORE</button>
                        </div>
                    </div>
                </div>
            )
        }))}
    </div>
    )
}

export default Collection;