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

        <span className="right">
          <a href="http://www.cutercounter.com/" target="_blank" rel="noopener noreferrer">
            <img src="http://www.cutercounter.com/hit.php?id=grmacoqo&nd=6&style=24" border="0" alt="website counter" />
          </a>
        </span>
      </header>
    );
  }
}