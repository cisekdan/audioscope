import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import annyang from 'annyang';

export default class VoiceController extends PureComponent {
  static DEFAULT_LANGUAGE = 'en';

  static KEY_LEFT = {
    key: 'ArrowLeft',
    charCode: 0,
    code: 'ArrowLeft',
    keyCode: 37,
    which: 37,
  };

  static KEY_UP = {
    key: 'ArrowUp',
    charCode: 0,
    code: 'ArrowUp',
    keyCode: 38,
    which: 38,
  };

  static KEY_DOWN = {
    key: 'ArrowDown',
    charCode: 0,
    code: 'ArrowDown',
    keyCode: 40,
    which: 40,
  };

  static KEY_RIGHT = {
    key: 'ArrowRight',
    charCode: 0,
    code: 'ArrowRight',
    keyCode: 39,
    which: 39,
  };

  static KEY_SELECT = {
    key: ' ',
    charCode: 0,
    code: 'Space',
    keyCode: 32,
    which: 32,
  };

  static KEY_START = {
    key: 'Enter',
    charCode: 0,
    code: 'Enter',
    keyCode: 13,
    which: 13,
  };

  static KEY_A = {
    key: 'x',
    charCode: 0,
    code: 'KeyX',
    keyCode: 88,
    which: 88,
  };

  static KEY_B = {
    key: 'z',
    charCode: 0,
    code: 'KeyZ',
    keyCode: 90,
    which: 90,
  };

  static propTypes = {
    rom: PropTypes.shape({}),
  };

  componentDidMount() {
    if (!annyang) {
      return;
    }
    this.initVoiceRecognition();

    annyang.start({
      autoRestart: true,
      paused: false,
      continuous: false,
    });

    annyang.debug();
  }

  componentDidUpdate() {
    const { commands, commandsLanguage } = this.props.rom;
    this.initVoiceRecognition(commands, commandsLanguage);
  }

  initVoiceRecognition(romCommands = null, language = VoiceController.DEFAULT_LANGUAGE) {
    annyang.removeCommands();

    let commands = {};
    if (!romCommands) {
      commands = {
        left: () => this.keyPress(VoiceController.KEY_LEFT),
        right: () => this.keyPress(VoiceController.KEY_RIGHT),
        up: () => this.keyPress(VoiceController.KEY_UP),
        down: () => this.keyPress(VoiceController.KEY_DOWN),
        select: () => this.keyPress(VoiceController.KEY_SELECT),
        start: () => this.keyPress(VoiceController.KEY_START),
        a: () => this.keyPress(VoiceController.KEY_A),
        b: () => this.keyPress(VoiceController.KEY_B),
      };
    } else {
      commands = Object.entries(romCommands)
        .reduce((carry, [key, entries]) => {
          const fn = () => {
            entries.forEach(([method, ...args]) => this[method](args));
          };
          return { ...carry, [key]: fn }
        }, {});

      console.log(commands);
    }

    annyang.addCommands(commands);
    annyang.setLanguage(language);

  }

  keyPress(key, timeout = 50) {
    const keyData = Array.isArray(key) ? key[0] : key;
    document.dispatchEvent(new KeyboardEvent('keydown', keyData));
    window.setTimeout(() => {
      document.dispatchEvent(new KeyboardEvent('keyup', keyData));
    }, timeout);
  }

  render() {
    return (<span></span>);
  }
}