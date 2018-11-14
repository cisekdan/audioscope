import VoiceController from '../components/VoiceController';

export default {
  'memory': {
    name: 'memory',
    file: 'memory.nes',
    commands: {
      '9': [
        ['keyPress', VoiceController.KEY_UP],
        ['keyPress', VoiceController.KEY_RIGHT],
      ],
      '7': [
        ['keyPress', VoiceController.KEY_UP],
        ['keyPress', VoiceController.KEY_LEFT],
      ],
      '1': [
        ['keyPress', VoiceController.KEY_DOWN],
        ['keyPress', VoiceController.KEY_LEFT],
      ],
      '3': [
        ['keyPress', VoiceController.KEY_DOWN],
        ['keyPress', VoiceController.KEY_RIGHT],
      ],
      left: [['keyPress', VoiceController.KEY_LEFT]],
      right: [['keyPress', VoiceController.KEY_RIGHT]],
      up: [['keyPress', VoiceController.KEY_UP]],
      down: [['keyPress', VoiceController.KEY_DOWN]],
      start: [['keyPress', VoiceController.KEY_START]],
      see: [['keyPress', VoiceController.KEY_A]],
    },
  },
  '2048': {
    name: '2048',
    file: '2048.nes',
    commands: {
      left: [['keyPress', VoiceController.KEY_LEFT]],
      right: [['keyPress', VoiceController.KEY_RIGHT]],
      up: [['keyPress', VoiceController.KEY_UP]],
      down: [['keyPress', VoiceController.KEY_DOWN]],
      select: [['keyPress', VoiceController.KEY_SELECT]],
      start: [['keyPress', VoiceController.KEY_START]],
      'konami code': [
        [() => alert('↑↑↓↓←→←→ⒷⒶ')]
      ],
    },
    commandsLanguage: 'en',
  },
  '2048pl': {
    name: '2048 - PL',
    file: '2048.nes',
    commands: {
      lewo: [['keyPress', VoiceController.KEY_LEFT]],
      prawo: [['keyPress', VoiceController.KEY_RIGHT]],
      'góra': [['keyPress', VoiceController.KEY_UP]],
      'dół': [['keyPress', VoiceController.KEY_DOWN]],
      start: [['keyPress', VoiceController.KEY_START]],
    },
    commandsLanguage: 'pl',
  },
};