export const setItemInStorage = (key, value)=>{
    try{
        localStorage.setItem(key,value);
    }
    catch(e){
            console.log(e);
    }
    
}

export const getItemFromStorage = (key)=>{
    try{
        return localStorage.getItem(key);
    }
    catch(e){
        console.log(e);
    }
}

export const isStorageValueChange = (key, incomingVal)=>{
    try{
        let val = getItemFromStorage(key);
        if(val !==null && val !== incomingVal) return true;
        return false;
    }
    catch(e){
        console.log(e);
    }
}


