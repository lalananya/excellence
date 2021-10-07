import React, {useState, useEffect} from 'react';

export const Names = ({names})=>{
    const [displayName, setDisplayName] = useState([]);
    useEffect(()=>{
        let  arr = [];
        for(let i=0;i<names.length;i++){
            arr.push(<li key={i}>{names[i].first_name}</li>)
        }
        setDisplayName(arr);
    },[names]);

    return(
        <div>
                <ul>
                {displayName}
                </ul>  
        </div>    
    )
}