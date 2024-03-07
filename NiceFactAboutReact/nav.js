import React from 'react';
function NavBar(props){
    return ( 
        <nav className={`navbar navbar-expand navbar-light  ${props.isDark ? 'bg-dark' : 'bg-light'}`}>
           <div className={`container d-flex align-items-center ${props.isDark ? 'text-white' : 'text-dark' }`}>
                <div className='d-flex align-items-center'>
                    <img src='img/favicon.ico' alt='react Logo' style={{width:'20px' , height:'20px'}}/>
                    <h5 className='mx-2'>reactFacts</h5>
                </div>
                <div className='d-flex align-items-center'>
                    <label htmlFor='mySwitch' className='mx-2 h5' >Dark Mode</label>
                    <div className="form-check form-switch">
                        <input 
                            className="form-check-input" 
                            type="checkbox" id="mySwitch" 
                            name="darkmode" 
                            checked={props.isDark}
                            // onChange={props.fnhandeldark} // can use onchange functio by using chekced
                            onClick={props.toggleFunction} // can use on click to toggle dark and ligth mode
                        />
                    </div>
                </div>
           </div>
        </nav>
     );
}
export default NavBar;