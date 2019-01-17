import React from 'react';
import styled, { css } from 'styled-components';


import { AppContext } from './AppProvider';

const Logo = styled.div`
  font-size: 1.5em;
`;

const Bar = styled.div`
  display: grid;
  grid-template-columns: 180px auto repeat(2, 100px);
  margin-bottom: 40px;
`;

const ControlButtonElem = styled.div`
  cursor: pointer;
  ${props => props.active && css`
    color: orangered;
    text-shadow: 0px 0px 60px #03FF03;
  `}
`;

const toProperCase = word => word.charAt(0).toUpperCase() + word.substr(1);

function ControlButton({ name }) {
  return (
    <AppContext.Consumer>
      {
        ({ page, setPage }) => (
          <ControlButtonElem
            active={page === name}
            onClick={() => setPage(name)}
          >
            {toProperCase(name)}
          </ControlButtonElem>
        )
      }
    </AppContext.Consumer>
  );
}

export default () => {
  return (
    <Bar>
      <Logo>CryptoDash</Logo>
      <div />
      <ControlButton active name="dashboard" />
      <ControlButton name="settings" />
    </Bar>
  )
}