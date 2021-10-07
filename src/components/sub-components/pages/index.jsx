import React, {useState} from 'react';
import { Pages } from './pages';
import { Button } from '../../common/styles';
import {styled, setup} from 'goober';
setup(React.createElement);

const StaticContainer = styled('div')`
    display:flex;
    justify-content: center;
    padding: 20px;
`;
const Span = styled('span')`
    margin: 0px 4px 0px 5px;
    font-size: 14px;
`;
export const Paginate = ()=>{
    const [pages,setPages] = useState(1);
    const nextPage = ()=>{
        setPages(pages+1);
    };
    const prevPage = ()=>{
        if(pages-1 > 1) setPages(pages-1);
    };
    return(
        <div>
            <StaticContainer>
                <Button name="back" onClick={prevPage}>Back</Button>
                <Span>Page {pages}</Span>
                <Button name="next" onClick={nextPage}>Next</Button>
            </StaticContainer>
            <StaticContainer>
                <Pages pageNumber={pages} />
            </StaticContainer>
        </div>
    )

}