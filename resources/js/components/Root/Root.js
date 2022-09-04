import React from 'react';
import ReactDOM from 'react-dom';
import './Root.css'

const Root = () =>{
    return(
        
        <div className='container'>
        </div>
    )
}


export default Root;

if (document.getElementById('root')) {
    ReactDOM.render(<Root />, document.getElementById('root'));
}