import React from 'react';
import styled from 'styled-components';


const Bar = styled.div`
  display: grid;
  grid-template-columns: 180px repeat(2, 100px);
`;

export default () => {
  return (
    <Bar>
      <div>CryptoDash</div>
      <div>Dashboard</div>
      <div>Settings</div>
    </Bar>
  )
}