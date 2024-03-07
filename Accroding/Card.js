import { useState } from "react";

export function Card(props) {
    // const [isOpen, setIsopen] = useState(false);
    const {num ,title , children , curenrOpen , onOpen } = props
    const isOpen = curenrOpen === num
    return (
        <div className={`${isOpen ? 'borderTop' : ''} w-75 mx-auto p-3 bg-white mb-3`}>
            <h3
                className={`d-flex justify-content-between px-5 text-center ${isOpen ? 'greenColor' : ''}`}
                style={{ cursor: 'pointer' }}
                onClick={() =>onOpen(isOpen ? null : num)}
            >
                <span className="text-secondary">{num}</span>
                {title}
                <span className="text-dark text-end simpol">{isOpen ? '-' : '+'}</span>

            </h3>
            <p className={`text-center ${!isOpen ? 'd-none' : ''}`}>
                {children}
            </p>
        </div>
    );
}
