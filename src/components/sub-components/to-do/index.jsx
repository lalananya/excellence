import React, {useState, useEffect} from 'react';
import {styled, setup} from 'goober';
import {Items} from './items';
import {setItemInStorage, getItemFromStorage, deleteItemFromStorage} from '../../common/helper';

setup(React.createElement);

const Container = styled('div')`
    display: flex;
    width: 100%;
    height: 200px; 
    flex-direction: column; 
    justify-content: center;
    padding: 20px;
    align-items: center;
`;

const returnDefValue = ()=>{
    const item = JSON.parse(getItemFromStorage('todo'));
    return (item !== null) ? Object.keys(item).length : 0;
}

export const Todo = ()=>{
    const [count, setCount] = useState(returnDefValue());
    const [items, setItem] = useState([]);
    const [enter, setEnter] = useState(false);
    const [del, setDel] = useState(false);

    const handleDeletion=(itemname)=>{
        setDel(true);
        let todo = JSON.parse(getItemFromStorage('todo'));
        if(todo[itemname] !== ""){
            delete todo[itemname];
            setItemInStorage('todo', JSON.stringify(todo));
            setCount(count-1);
        };
    }
    const handleEnter = (itemName, value) => {
        setEnter(true);
        let todo = JSON.parse(getItemFromStorage('todo'));
        if(todo !== null){
            if(todo[itemName] !== "" && todo[itemName] !== value){}
            else setCount(count + 1);
            todo[itemName] = value;
            setItemInStorage('todo', JSON.stringify(todo));  
        }
    };

    useEffect(()=>{
        if((enter &&  count > 0) || (!enter && count === 0)){
            let todo = JSON.parse(getItemFromStorage('todo'));
            todo = (todo!== null) ? todo : {};
            todo[count] = "";
            setItemInStorage('todo',JSON.stringify(todo));
        }  
    },[count]);

    useEffect(() => {
       let todo = JSON.parse(getItemFromStorage('todo'));
       let arr = [];
       if(todo !== null){
           let len = Object.keys(todo).length;
           let focus = false;
           for (let i=0; i<len; i++){
                if(i === len-1) focus = true 
                arr.push(<Items key={i} id={i} savedValue={todo[i]} handleEnter={handleEnter} handleDeletion={handleDeletion} focus={focus}></Items>)
           }
           setItem(arr);
       }
    }, [count]);
   
    return(
        <Container>
            <p>TO DO</p>
            {items}
        </Container>
    )
}