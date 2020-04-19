import React from "react";

const CvCard = ({ cvItem }) => {
    return(
            <>
                <div id="cvItem"className="ui link card" to="/{cvItem.name}">
                    <div className="image">
                        <img src={cvItem.image} />
                    </div>
                    <div className="content">
                        <h3 className="ui header">{cvItem.name}</h3>
                    </div>
                </div>
            </>
    )
};

export default CvCard;