import React from 'react';
import { AppContext } from '../App/AppProvider';


export default (props) => {
  return (
    <AppContext.Consumer>
      {
        ({ coinList }) => {
          return (!coinList)
            ? <div> Loading Coins... </div>
            : <div> { props.children } </div>
        }
      }
    </AppContext.Consumer>
  )
}