import React from 'react';
function Main(props) {
    const isDarkMode=props.isdark;
    return ( 
       <div className={`container p-3 ${isDarkMode ? 'bg-secondary' :'bg-white'}`}>
            <h3 className={`${isDarkMode ? 'text-white' :'text-secondary'}`}>Nice Facts About React</h3>
            <ul className="list-group">
                <li className={`list-group-item ${isDarkMode ? 'bg-dark text-white' :'bg-white text-black'}`}>react is have reasubal components</li>
                <li className={`list-group-item ${isDarkMode ? 'bg-dark text-white' :'bg-white text-black'}`}>recat is a diclarative programming </li>
                <li className={`list-group-item ${isDarkMode ? 'bg-dark text-white' :'bg-white text-black'}`}>recat have a props context for dinamic data</li>
                <li className={`list-group-item ${isDarkMode ? 'bg-dark text-white' :'bg-white text-black'}`}>react use state to handel changing</li>
                <li className={`list-group-item ${isDarkMode ? 'bg-dark text-white' :'bg-white text-black'}`}>react have use effect to handel asnc functions</li>
                <li className={`list-group-item ${isDarkMode ? 'bg-dark text-white' :'bg-white text-black'}`}>recat have 100k star in github</li>
            </ul>
       </div>
     );
}
export default Main;