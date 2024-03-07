export default function Button({children , onCliking , width}){
    return(        
        <button 
            className={`btn btn-warning w-${width}`}
            onClick={onCliking}
        >
            {children}
        </button>
    )
}