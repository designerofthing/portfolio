import React from 'react';

const currentDate = new Date();
const year = currentDate.getFullYear();

const Footer = () => {
    return (
        <footer>
            <div className="ui container">
                <p id='footer'>Made with React {React.version}<br></br>
              Copyright Steve Watson {year} </p>
            
            </div>
        </footer>
    );
};

export default Footer;