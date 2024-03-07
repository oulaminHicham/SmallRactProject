import React from 'react';
import NavBar from './nav';
import Main from './main';

function App() {
    const [darkmode , setDarkmode]=React.useState(true)
    // checked function 
    function handelDarkMode(event){
        const {checked}=event.target
        setDarkmode(checked)
    }
    // on click functio 
    function toggleFun(){
        setDarkmode(prev => !prev)
    }
    return ( 
        <div className='container'>
            <NavBar 
                isDark={darkmode}
                // fnhandeldark={handelDarkMode} // the handel change functio if i desid to use chekced prop
                toggleFunction={toggleFun}
            />
            <Main 
                isdark={darkmode}
            />
        </div> 
    );
}

export default App;