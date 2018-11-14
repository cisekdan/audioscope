import React, { PureComponent } from 'react';
import ie6Logo from '../images/ie6.png';

export default class Footer extends PureComponent {
  render() {
    return (
      <footer>
        <span>This website is best viewed in</span>
        <img src={ie6Logo} alt="ie6" />
      </footer>
    );
  }
}