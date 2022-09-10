import React from 'react';
import ReactDOM from 'react-dom';
import './Root.css'

const Root = () =>{
    return(
        
        <div className='container'>
        <div className="images-container">
            <div className='top-section'>
        <img  src={require('../../Images/logo.png')} className='logo' />
            <img  src={require('../../Images/soon.png')} className='soon' />
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