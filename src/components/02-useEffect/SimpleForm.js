import React, { useEffect, useState } from 'react';
import { Message } from './Message';

export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        name: '',
        email: ''
    });

    const { name, email } = formState;

    useEffect( () => {
        // console.log('Name cambió');
    }, [name]);

    useEffect( () => {
        // console.log('Email cambió');
    }, [email]);

    const handleInputChange = ({ target }) => {
        setFormState({
            ...formState,
            [target.name]: target.value
        });
    };

    return (
        <>
           <h1>UseEffect</h1>
           <hr/>
           
           <div className="row">
               <div className="col">
                    <div className="form-group">
                        <input 
                        type="text"
                        name="name"
                        className="form-control"
                        placeholder="Tu nombre"
                        autoComplete="off"
                        value={ name }
                        onChange={ handleInputChange }/>
                        </div>
               </div>

               <div className="col">

                    <div className="form-group">
                            <input 
                            type="text"
                            name="email"
                            className="form-control"
                            placeholder="Tu email"
                            autoComplete="off"
                            value={ email }
                            onChange={ handleInputChange }/>
                    </div>

              </div>
           </div>

           <div className="row mt-4">
               <div className="col">
                { (name === '123') && <Message /> }  
               </div>
           </div>

        </>
    )
}
