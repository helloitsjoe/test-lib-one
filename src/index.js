import React from 'react';
import styled from 'styled-components';
console.log('test-one');

const Button = styled.button`
  background: none;
  border: none;
  border-radius: 4px;
  padding: 10px;
  background-color: cornflowerblue;
  color: white;
`;

export default function TestOne() {
  return <Button>HOMEBASE</Button>;
}
