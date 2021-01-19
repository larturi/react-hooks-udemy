import React from 'react';

import { useForm } from '../../hooks/useForm';

export const TodoAdd = ({ handleAddTodo }) => {

    const [ { description }, handleInputChange, reset] = useForm({
        description: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        
        const newTodo = { 
            id: new Date().getTime(),
            desc: description,
            done: false
        }

        handleAddTodo(newTodo);
        reset();

    };

    return (
        <>
            <h4>Agregar Tarea</h4>
            <hr/>

            <form onSubmit={ handleSubmit }>

                <input 
                    type="text"
                    name="description"
                    className="form-control"
                    placeholder="Descripcion de la tarea..."
                    onChange={ handleInputChange }
                    value={ description }
                    autoComplete="off"
                />

                <div className="d-grid gap-2">
                    <button className="btn btn-primary mt-3" type="submit">Agregar</button>
                </div>

            </form>
        </>
    )
}
