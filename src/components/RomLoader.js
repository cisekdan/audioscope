import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import roms from '../config/roms';

export default class RomLoader extends PureComponent {
  static propTypes = {
    onRomSelect: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);
    this.state = { rom: null };
    this.onRomChange = this.onRomChange.bind(this);
  }

  onRomChange(e) {
    const { target: { value: identifier } } = e;
    const { [identifier]: rom } = roms;

    if (!rom) {
      return;
    }
    this.props.onRomSelect(rom);
  }

  render() {
    return (
      <div className="rom-loader">
        <select onChange={this.onRomChange}>
          <option key="select" defaultValue value={null}>Please select rom</option>
          {Object.entries(roms).map(([key, rom]) => (<option key={key} value={key}>{rom.name}</option>))}
        </select>
      </div>
    );
  }
}