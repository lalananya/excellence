import React, {useState} from 'react';
import {styled, setup} from 'goober';
setup(React.createElement);

const Container = styled('div')`
    display: flex;
    width:fit-content;
    flex-wrap: wrap;
    align-items: center;
`;

const Input = styled('input')`
    font-size: 14px;
    border: 2px solid;
    margin-left: 10px;
`;

const Delete = styled('div')`
    display:flex;
    flex-direction: column;
    width: 15px;
    height: 15px;
    border-radius: 15px;
    font-size: 10px;
    border: 2px solid;
    align-items: center;
    margin-left: 10px;
    cursor: pointer;
    width: 35px;
    height: 15px;    
`;

export const Items = (props)=>{
    const {id, savedValue, handleEnter, handleDeletion, focus} = props;
    const [value, setValue] = useState(savedValue || '');

    const handleChange = (e) => { // edit
        setValue(e.target.value);
    };
    const handleDelete = (e)=>{ // delete
        handleDeletion(e.target.id);
    }
    const handleKeyPress = (e)=>{ // add or update
            let name = (e.key === "Enter") ? e.target.name : ((e.type === "click")? e.target.id : "");
            name !=="" && value !=="" && handleEnter(name,value)
    };

    return(
        <Container>
             <Input type="text" autoFocus={focus} name={id} value={value} onChange={handleChange} onKeyPress={handleKeyPress}></Input>
             <Delete id={id} onClick={handleDelete}>Delete</Delete>
        </Container>    
    )
}