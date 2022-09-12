import React from 'react';
import ReactDOM from 'react-dom';
import './Styles.css'

const Root = () =>{
    return(
        
        <div className='container'>
        <div className="images-container">
            <div className='top-section'>
                <div className="logo-sec">
                    <img  src={require('../../Images/logo.png')} className='logo' />
                    </div>
        <div className="soon-sec">
            <img  src={require('../../Images/soon.png')} className='soon' />
            </div>
            </div>
            <img src={require('../../Images/glasses.png')} className='glasses'/>
        </div>
            
        </div>
    )
}


export default Root;

if (document.getElementById('root')) {
    ReactDOM.render(<Root />, document.getElementById('root'));
}