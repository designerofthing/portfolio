import React from "react";

const CvCard = ({ cvItem }) => {
    return(
      <>
        <div class="ui card">
            <div class="image">
                <img src={cv.image} />
            </div>
            <div class="content">
                <h3 class="ui header">{cv.name}</h3>

                
            </div>
        </div>
    </>
    );
};

export default CvCard;