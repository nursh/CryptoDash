import React from 'react';
import { AppContext } from '../App/AppProvider';


export default ({ name, children }) => {
  return (
    <AppContext.Consumer>
      {
        ({ page }) => {
          return (page !== name)
            ? null
            : <div> { children } </div>
        }
      }
    </AppContext.Consumer>
  )
}