import React, { Component } from 'react';
import axios from "axios";
import CvCard from "./CvCard";
import { UndrawResumeFolder } from 'react-undraw-illustrations';

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
                <div className="ui stackable two column grid">
                    <div class="column">
                        <UndrawResumeFolder primaryColor='#5b97ac' height='200px' />
                    </div>
                    <div class="column">
                        <h1 id='cv-header' className='ui header'>CV</h1>
                        <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras fermentum, nulla nec faucibus lobortis, sapien leo viverra dui, ac imperdiet justo tellus nec odio. In at porta mauris. Phasellus ac posuere lectus. Phasellus commodo dui vel gravida tristique. Ut eleifend mauris odio, at scelerisque arcu hendrerit non. Morbi nec eros sed urna iaculis aliquam a maximus turpis. Nunc consequat, sem eu convallis varius, felis eros ultricies elit, non pulvinar enim quam nec nisl. Curabitur id egestas risus. Aliquam erat volutpat.
                        </p>
                    </div>
                </div>            
                <div className="ui stackable three column grid">{cvList}</div>
            </div>
        );
    }
}

export default CV;
