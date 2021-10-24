import React from 'react'

const Form = props => {

    return (
        <form// onSubmit={props.submit}
        >
            <input 
            value={props.value} 
            placeholder="Wpisz miasto"
            onChange = {props.change}
            />
        </form>
    ) 
}

export default Form