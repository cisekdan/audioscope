import VoiceController from '../components/VoiceController';

export default {
  pacman: {
    name: 'PacMan',
    file: 'pacman.nes',
    commands: {
      left: [['keyPress', VoiceController.KEY_LEFT]],
      right: [['keyPress', VoiceController.KEY_RIGHT]],
      up: [['keyPress', VoiceController.KEY_UP]],
      down: [['keyPress', VoiceController.KEY_DOWN]],
      select: [['keyPress', VoiceController.KEY_SELECT]],
      start: [['keyPress', VoiceController.KEY_START]],
      a: [['keyPress', VoiceController.KEY_A]],
      b: [['keyPress', VoiceController.KEY_B]],
    },
    commandsLanguage: 'pl',
  }
};