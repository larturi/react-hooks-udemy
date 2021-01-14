import React from 'react';
import { useForm } from '../../hooks/useForm';


export const FormWithCustomHook = () => {

    const [formValues, handleInputChange] = useForm({
        name: '',
        email: '',
        password: '',
    });

    const { name, email, password } = formValues;

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formValues); 
    };

    return (
        <form onSubmit={handleSubmit}>
           <h1>FormWithCustomHook</h1>
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

              <div className="col">
                    <div className="form-group">
                            <input 
                            type="password"
                            name="password"
                            className="form-control"
                            value={ password }
                            onChange={ handleInputChange }/>
                    </div>
              </div>

              <div className="col">
                    <button type="submit" className="btn btn-success">Guardar</button>
              </div>

           </div>

        </form>
    )
}
