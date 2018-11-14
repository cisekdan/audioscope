import React, { PureComponent } from 'react';
import ie6Logo from '../images/ie6.png';
import logo from '../images/logo.png';

export default class Footer extends PureComponent {
  render() {
    return (
      <header>
        <img src={logo} alt="logo" className="logo" />
        <span>sponsored by</span>
        <img src={ie6Logo} alt="ie6" />
      </header>
    );
  }
}