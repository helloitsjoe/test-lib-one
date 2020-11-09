import React from 'react';
import styled from 'styled-components';
console.log(`test-one styled:`, styled);

const Button = styled.button`
  background: none;
  border: none;
  border-radius: 4px;
  padding: 10px;
  background-color: cornflowerblue;
  color: white;
`;

console.log(`test-one Button:`, Button);

export const HomebaseButton = ({ children }) => <Button>{children}</Button>;
console.log(`test-one HomebaseButton:`, HomebaseButton);
// export const HomebaseButton = () => <button>HOMEBASE</button>;
