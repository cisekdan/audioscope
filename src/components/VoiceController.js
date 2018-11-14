import React, { PureComponent } from 'react';
import annyang from 'annyang';

export default class VoiceController extends PureComponent {
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

  componentDidMount() {
    if (!annyang) {
      return;
    }
    annyang.addCommands({
      left: () => this.keyPress(VoiceController.KEY_LEFT),
      right: () => this.keyPress(VoiceController.KEY_RIGHT),
      up: () => this.keyPress(VoiceController.KEY_UP),
      down: () => this.keyPress(VoiceController.KEY_DOWN),
      select: () => this.keyPress(VoiceController.KEY_SELECT),
      start: () => this.keyPress(VoiceController.KEY_START),
      a: () => this.keyPress(VoiceController.KEY_A),
      b: () => this.keyPress(VoiceController.KEY_B),
    });

    annyang.start({
      autoRestart: true,
      paused: false,
      continuous: false,
    });

    annyang.debug();
  }

  keyPress(key, timeout = 50) {
    document.dispatchEvent(new KeyboardEvent('keydown', key));
    window.setTimeout(() => {
      document.dispatchEvent(new KeyboardEvent('keyup', key));
    }, timeout);
  }

  render() {
    return (<span></span>);
  }
}