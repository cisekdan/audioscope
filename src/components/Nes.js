import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import * as nesjs from 'nes-js';

import RomLoader from './RomLoader';
import VoiceController from './VoiceController';

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
    this.state = { rom: null };

    this.loadRom = this.loadRom.bind(this);
    this.onKeyDown = this.onKeyDown.bind(this);
    this.onKeyUp = this.onKeyUp.bind(this);
  }

  componentDidMount() {
    const canvas = this.canvas.current;
    this.initNes(canvas);
  }

  componentWillUnmount(){
    document.removeEventListener("keydown", this.onKeyDown, false);
    document.removeEventListener("keyup", this.onKeyUp, false);
  }

  initNes(canvas) {
    const { NesJs } = window;

    const nes = new NesJs.Nes();
    nes.setDisplay(new NesJs.Display(canvas));
    nes.setAudio(new NesJs.Audio());

    document.addEventListener('keydown', this.onKeyDown, false);
    document.addEventListener('keyup', this.onKeyUp, false);

    this.nes = nes;
  }

  onKeyDown(e) {
    this.nes.handleKeyDown(e);
  }

  onKeyUp(e) {
    this.nes.handleKeyUp(e);
  }

  async loadRom(romData) {
    this.setState(current => ({ ...current, rom: romData }));
    const { NesJs } = window;

    const url = `./roms/${romData.file}`;
    const response = await fetch(url);

    const buffer = await response.arrayBuffer();
    const rom = new NesJs.Rom(buffer);

    this.nes.setRom(rom);
    this.nes.bootup();
    this.nes.run();
  }

  render() {
    return (
      <div className="nes">
        <div className="tv" style={{
          height: this.props.height + 40,
          width: this.props.width + 250,
        }}>
          <canvas
            ref={this.canvas}
            id={this.props.displayId}
            style={{
              width: this.props.width,
              height: this.props.height,
            }}
          />
        </div>
        <RomLoader
          onRomSelect={this.loadRom}
        />
        <VoiceController
          rom={this.state.rom}
        />
      </div>
    );
  }
}