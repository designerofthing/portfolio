import React from "react";
// import Education from "./Education";
// import WorkHistory from "./WorkHistory";
// import Skills from "./Skills";
// import { Link } from "react-router-dom";

const CvCard = ({ cvItem }) => {
    return(
            <>
               <h3 className="cv header">{cvItem.title}</h3> 
               <div id="{cvItem}" className="ui card">               
                        <div id="{cvItem}" class="cv item">
                            <img class="ui centered small image" img src={cvItem.image} />
                                <div class="cv content">
                                    <p class="cv item header">{cvItem.name}</p>
                                    <p>{cvItem.description} </p>
                                </div>
                        </div>       
                    
                </div>
               
            </>
    )
};

export default CvCard;