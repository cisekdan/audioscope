import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import * as nesjs from 'nes-js';

import RomLoader from './RomLoader';

export default class Nes extends PureComponent {
  static propTypes = {
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
    displayId: PropTypes.string,
  };

  static defaultProps = {
    displayId: 'display',
  };

  constructor(props) {
    super(props);
    this.nes = null;
    this.canvas = React.createRef();
    this.loadRom = this.loadRom.bind(this);
  }

  componentDidMount() {
    const canvas = this.canvas.current;
    this.initNes(canvas);
  }

  initNes(canvas) {
    const { NesJs } = window;

    const nes = new NesJs.Nes();
    nes.setDisplay(new NesJs.Display(canvas));
    nes.setAudio(new NesJs.Audio());

    this.nes = nes;
  }

  async loadRom(romData) {
    const { NesJs } = window;

    const url = `./roms/${romData.file}`;
    const response = await fetch(url);

    const buffer = await response.arrayBuffer();
    const rom = new NesJs.Rom(buffer);

    this.nes.setRom(rom);
    this.nes.bootup();
    this.nes.run();

    // var request = new XMLHttpRequest();
    // request.responseType = 'arraybuffer';
    // request.onload = function() {
    //   var buffer = request.response;
    //   // console.log(buffer);
    //   const rom = new NesJs.Rom(buffer);
    //   //
    //   // this.nes.setRom(rom);
    // };
    // request.open('GET', url, true);
    // request.send(null);
  }

  render() {
    return (
      <div className="nes">
        <RomLoader
          onRomSelect={this.loadRom} />
        <canvas
          ref={this.canvas}
          id={this.props.displayId}
          width={this.props.width}
          height={this.props.height}
          onDragEnter={e => e.stopPropagation()}
          onDragEnter={e => e.stopPropagation()}
          onDrop={e => console.log(e)}
        />
      </div>
    );
  }
}