import React from 'react'

const Form = props => {

    return (
        <form onSubmit={props.submit}>
            <input 
            value={props.value} 
            placeholder="Wpisz miasto"
            onChange = {props.change}
            />

            <button>Wyszukaj miasto</button>
        </form>
    ) 
}

export default Form