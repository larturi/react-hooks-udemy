import React from 'react';
import { useCounter } from '../../hooks/useCounter';

export const CounterWithCustomHook = () => {

    const {state, increment, decrement, reset} = useCounter();
    const factor = 2;

    return (
        <>
            <h1>Counter With Hook: { state }</h1>
            <hr/>

            <button onClick={ () => decrement(factor)} className="btn btn-primary m-1">-{factor}</button>
            <button onClick={ reset } className="btn btn-primary m-1">Reset</button>
            <button onClick={ () => increment(factor)} className="btn btn-primary m-1">+{factor}</button>
        </>
    )
}
