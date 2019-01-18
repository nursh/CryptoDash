import React, { Component, createContext } from 'react';
import cc from 'cryptocompare';

export const AppContext = createContext();

export default class AppProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 'dashboard',
      ...this.savedSettings(),
      setPage: this.setPage,
      confirmFavorites: this.confirmFavorites
    };
  }

  componentDidMount() {
    this.fetchCoins();
  }

  fetchCoins = async () => {
    let coinList = (await cc.coinList()).Data;
    this.setState({ coinList });
  }

  savedSettings() {
    let cryptoDashData = JSON.parse(localStorage.getItem('cryptoDash'));
    if (!cryptoDashData) {
      return { page: 'settings', firstVisit: true };
    }

    return {};
  }

  confirmFavorites = () => {
    this.setState({
      firstVisit: false,
      page: 'dashboard'
    });
    localStorage.setItem('cryptoDash', JSON.stringify({
      test: 'hello'
    }))
  }

  setPage = page => this.setState({ page })

  render() {
    return (
      <AppContext.Provider value={this.state}>
        {this.props.children}
      </AppContext.Provider>
    );
  }
}