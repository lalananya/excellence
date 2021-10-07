import React, {useState, useEffect} from 'react';
import {Names} from './display-names';
import {styled, setup} from 'goober';
setup(React.createElement);

const Container = styled('div')`
    display: flex;
    width:fit-content;
    flex-wrap: wrap;
    align-items: center;
`;

export const Pages = ({
    pageNumber
})=>{
    const [names, setNames] = useState([]);
    const [error, setError] = useState('');
    useEffect(() => {
        fetch(`https://reqres.in/api/users?page=${pageNumber}`).then(response => response.json()).then(json => {
                setNames(json.data);
            }).catch(e=>setError(e)); 
    }, [pageNumber]);

    return(
        <Container>
            {error !== "" && <h1>Something went wrong</h1>}
            {names.length > 0 && <Names names={names}/>}
            {names.length === 0 && <h1>No Users Found</h1>}
        </Container>    
    )
}