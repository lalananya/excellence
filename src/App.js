import React, {useState} from "react";
import Question1 from './components/question1/index'
import Question2 from './components/question2/index';
import { Button } from "./components/common/styles";
import {styled, setup} from 'goober';
setup(React.createElement);

const Header = styled('nav')`
  display: flex;
  width: 100%;
  height: 50px;
  border: none;
  background-color: #000000;
  justify-content: center;
`;

function App() {
  const [showQuestion, setQuestion] = useState(0);

  const handleClick=(e)=>{
      if(e.target.name === "question1") setQuestion(1);
      else if(e.target.name === "question2") setQuestion(2);
  }

  return (
    <div>
      <Header>
          <Button name="question1" onClick={handleClick}>Question1</Button>
          <Button name="question2" onClick={handleClick}>Question2</Button>
      </Header>
      {showQuestion === 1 && <Question1/> }
      {showQuestion === 2 && <Question2/> }
            
    </div>
  );
}

export default App;
