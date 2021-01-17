
import React, { useRef } from 'react';

export const FocusScreen = () => {

    const inputRef = useRef();

    const handleClick = () => {
        inputRef.current.select();
    };

    return (
        <div>
            <h1>Focus Screen</h1>
            <hr/>

            <input className="form-control" 
                   placeholder="Tu nombre" 
                   ref={ inputRef }
                   />
            <button 
                className="btn btn-primary mt-3"
                onClick={ handleClick }>
                    Focus
            </button>
        </div>
    )
}
