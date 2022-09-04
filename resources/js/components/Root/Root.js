import React from 'react';
import ReactDOM from 'react-dom';
import './Root.css'

const Root = () =>{
    return(
        
        <div className='container'>
            <h1>Coming Soon</h1>
            <p>قريبا</p>
        </div>
    )
}


export default Root;

if (document.getElementById('root')) {
    ReactDOM.render(<Root />, document.getElementById('root'));
}