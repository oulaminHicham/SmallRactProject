import React from 'react';

export default function NumOfStep({stepNum , bgColor , textColor}){
    return(
        <div className={`numstep-box text-black bg-${bgColor} text-${textColor}`}>
            {stepNum}
        </div>
    )
}