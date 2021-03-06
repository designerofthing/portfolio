import React, { Component } from 'react';
import axios from "axios";
import CvCard from "./CvCard";
import Education from "./Education";
import WorkHistory from "./WorkHistory";
import Skills from "./Skills";
import { UndrawResumeFolder } from 'react-undraw-illustrations';
import { Link } from "react-router-dom";


class CV extends Component {
    state = {
        cv: []
    };

    componentDidMount() {
        axios.get('./src/data/cv.json')
        .then(response => {
            this.setState({
                    cv: response.data
            })
        })
    }
    render() {
        const cv = this.state.cv;
        let cvList;

        if (cv.length > 0) {
            cvList = cv.map(cvItem => {
                return (
                    <div id={'cvItem-' + cvItem.id} key={cvItem.id}>
                        <CvCard cvItem={cvItem} />
                    </div>
                );
            });
        }
    
        return(
            <div className='ui main container'>
                 <h1 id='cv-header' className='ui header'>Curriculum Vitae</h1>
                
                <div className="ui stackable three column grid" >{cvList}</div>
            </div>
        );
    }
}

export default CV;
