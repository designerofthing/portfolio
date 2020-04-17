import React from 'react';
import { UndrawDesignerLife } from 'react-undraw-illustrations';
import { UndrawBeerCelebration } from 'react-undraw-illustrations';
import { UndrawBeach } from 'react-undraw-illustrations';
import { UndrawChef } from 'react-undraw-illustrations';

const About = () => {
    return (
        <div className="ui main container">
            <div class="ui stackable two column grid">
                <div class="column">
                    <UndrawDesignerLife primaryColor='#a34a28' height='200px' />
                </div>
                <div class="column">
                <h1 id='about-header' className='ui header'>About Me</h1>
                <p>
                 I'm Steve, I am currently studying to be a Junior Web Developer at Craft Academy.  I hold a degree in Industrial Design and have exhibited my furniture and homeware designs all over the world including the Salone in Milan.  As well as this I have been a Les Clefs d'Or accredited Concierge.  I am Australian, so of course I like the beach, a beer and a BBQ but I am also partial to fine dining and a good Islay malt.   
                </p>
                </div> 
            </div>
            <div className="ui stackable three column grid">
            <div class="column">
                <UndrawBeerCelebration primaryColor='#a34a28' height='200px'/>
                </div>
                <div class="column">
                <UndrawBeach primaryColor='#a34a28' height='200px'/>
                </div>
                <div class="column">
                <UndrawChef primaryColor='#a34a28' height='200px'/>  
                </div>                   
            </div>
        </div>
    );
};

export default About;
