import React from 'react';
import styled from 'styled-components';
console.log(`styled:`, styled);

const Button = styled.button`
  background: none;
  border: none;
  border-radius: 4px;
  padding: 10px;
  background-color: cornflowerblue;
  color: white;
`;

console.log(`Button:`, Button);

export const HomebaseButton = ({ children }) => <Button>{children}</Button>;
// export const HomebaseButton = () => <button>HOMEBASE</button>;
