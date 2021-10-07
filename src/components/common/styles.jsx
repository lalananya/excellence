import React from "react";
import {styled, setup} from 'goober';
setup(React.createElement);

export const Button = styled('button')`
  width:auto;
  height:auto;
  margin-left: 5px;
  border: none;
  color: #ffgghh;
  font-size: 14px;
  cursor: pointer;
`;